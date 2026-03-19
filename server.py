from flask import Flask, request, jsonify
from flask_cors import CORS
import g4f
import json
import time
import os
import requests
from dotenv import load_dotenv
from concurrent.futures import ThreadPoolExecutor

load_dotenv()
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

app = Flask(__name__)
CORS(app)

def get_youtube_videos(query, max_results=3):
    if not YOUTUBE_API_KEY:
        print("DEBUG: No YouTube API Key found")
        return []
    try:
        print(f"DEBUG: Searching YouTube for: {query}")
        url = "https://www.googleapis.com/youtube/v3/search"
        params = {
            'part': 'snippet',
            'q': query,
            'maxResults': max_results,
            'type': 'video',
            'key': YOUTUBE_API_KEY
        }
        response = requests.get(url, params=params)
        data = response.json()
        
        if 'error' in data:
            print(f"YouTube API Error: {data['error'].get('message')}")
            return []

        videos = []
        for item in data.get('items', []):
            videos.append({
                'id': item['id']['videoId'],
                'title': item['snippet']['title'],
                'thumbnail': item['snippet']['thumbnails']['medium']['url'],
                'link': f"https://www.youtube.com/watch?v={item['id']['videoId']}"
            })
        return videos
    except Exception as e:
        print(f"YouTube Search Exception: {e}")
        return []

def fetch_videos_for_module(module):
    """Helper to fetch videos for a single module in a thread."""
    queries = module.get('youtubeQueries', [])
    if queries:
        search_query = queries[0] if isinstance(queries, list) and queries else module.get('title', 'General Topic')
        module['videos'] = get_youtube_videos(search_query)
    else:
        module['videos'] = []
    return module


@app.route('/', methods=['GET'])
def root():
    return jsonify({"message": "AI Course Generator Backend is running!", "version": "1.0.0"}), 200

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "connected", "engine": "g4f-gpt4"}), 200

@app.route('/generate', methods=['POST'])
def generate_course():
    data = request.json
    topic = data.get('topic', 'General Knowledge')
    custom_title = data.get('customTitle', '')
    difficulty = data.get('difficulty', 'Beginner')
    modules_count = data.get('modulesCount', 3)
    lessons_count = data.get('lessonsCount', 3)

    # Clean the topic if 'Other' was selected
    display_topic = topic
    if "Other" in topic:
        display_topic = topic.split("(")[0].strip() if "(" in topic else "Specialized Topic"

    prompt = f"""
    You are an world-class Expert Curriculum Architect. 
    Generate a highly detailed, industrial-grade educational course about "{display_topic}".
    {f'The EXACT Title of this course MUST be: "{custom_title}"' if custom_title else f'Generate a professional title for this course based on the topic.'}
    Target Difficulty: {difficulty}.
    Required Structure: Exactly {modules_count} Modules, each with exactly {lessons_count} Lessons.
    
    Content Requirements:
    - Subtitle: A compelling, expert-level hook.
    - Description: 3-4 professional sentences explaining the pedagogical approach.
    - Outcomes: 5-7 Performance-based learning objectives (what they can DO).
    - Theory: EXHAUSTIVE, textbook-level conceptual breakdown (Markdown) for EACH lesson. Minimum 6-10 paragraphs including: 
        1. Fundamental Principles 
        2. Architectural Deep-Dive 
        3. Implementation Pitfalls 
        4. Modern Industry Case Studies 
        5. Future Evolution of the concept.
    - Engineering Assignment: A practical, module-wide project with specific deliverables and a 'Mastery Challenge'.
    - Quizzes: Exactly 5 high-quality, difficult psychometric questions for each module.
    - Discussion: 3-4 deep tactical debate topics for senior architects.
    - Visuals: Provide high-fidelity 4K wallpaper queries for module backgrounds.
    
    Return ONLY valid JSON in this exact format (No Markdown, No Preamble):
    {{
        "title": "String",
        "subtitle": "String",
        "description": "String",
        "duration": "String",
        "skills": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
        "difficulty": "{difficulty}",
                "modules": [
                    {{
                        "id": "m1",
                        "title": "HYPER-SPECIFIC technical sub-topic name",
                        "description": "String",
                        "duration": "String",
                        "outcomes": ["Out1", "Out2", "Out3", "Out4", "Out5"],
                        "youtubeQueries": ["query1", "query2"],
                        "lessons": [
                            {{ 
                                "id": "m1-l1", 
                                "title": "Technical Unit Name", 
                                "covers": "Short executive summary", 
                                "duration": "String", 
                                "type": "Video/Project/Reading", 
                                "theory_sections": [
                                    {{ 
                                        "title": "1. Foundation & First Principles", 
                                        "content": "300+ words of axiomatic theory.",
                                        "insight": "High-level Architect's tactical insight about this section."
                                    }},
                                    {{ 
                                        "title": "2. Architectural Deep-Dive", 
                                        "content": "300+ words of system design and data-flow analysis.",
                                        "insight": "Technical edge-case or performance hint."
                                    }},
                                    {{ "title": "3. Implementation Hardware/Software Logic", "content": "300+ words with Markdown code snippets." }},
                                    {{ "title": "4. Edge Cases & Industrial Pitfalls", "content": "200+ words of expert troubleshooting." }},
                                    {{ "title": "5. Future Trajectory & Optimization", "content": "200+ words of forecast and R&D directions." }}
                                ],
                                "did_you_know": "A fascinating academic fact or historical context related to this lesson."
                            }}
                        ],
                        "quiz": [
                            {{ "question": "String", "options": ["Opt1", "Opt2", "Opt3", "Opt4"], "correctAnswer": 0, "explanation": "Detailed professional explanation." }}
                        ],
                        "discussion": [
                            {{ "topic": "String", "prompt": "String" }}
                        ],
                        "engineering_assignment": {{
                            "title": "String",
                            "objective": "String",
                            "deliverables": ["Deliv1", "Deliv2", "Deliv3"],
                            "difficulty": "Advanced"
                        }},
                        "assignment_feedback_criteria": ["Crit1", "Crit2", "Crit3"]
                    }}
                ],
        "recommendedQueries": ["SearchA", "SearchB"],
        "projectIdeas": ["ProjA", "ProjB"],
        "certificateCriteria": "String"
    }}
    """

    try:
        response = g4f.ChatCompletion.create(
            model=g4f.models.gpt_4,
            messages=[{"role": "user", "content": prompt}],
        )
        
        # Robust JSON extraction
        content = response
        print(f"DEBUG: Raw Content Length: {len(content)}")

        # Try to find JSON block
        import re
        json_match = re.search(r'(\{.*\}|\[.*\])', content, re.DOTALL)
        if json_match:
            content = json_match.group(1)
        
        # Clean potential whitespace/newlines
        content = content.strip()
        
        # Validate JSON
        try:
            course_data = json.loads(content)
        except json.JSONDecodeError as decode_err:
            print(f"JSON Decode Error: {decode_err}")
            # Fallback check: if double quotes are escaped or some common issues
            content = content.replace("'", '"') # Primitive try
            course_data = json.loads(content)
        
        # Parallelize YouTube video fetching
        modules = course_data.get('modules', [])
        with ThreadPoolExecutor(max_workers=min(len(modules), 10) if modules else 1) as executor:
            course_data['modules'] = list(executor.map(fetch_videos_for_module, modules))

        # Ensure IDs are present
        for m_idx, module in enumerate(course_data.get('modules', [])):
            module['id'] = f"m{m_idx + 1}"
            for l_idx, lesson in enumerate(module.get('lessons', [])):
                lesson['id'] = f"m{m_idx + 1}-l{l_idx + 1}"

        return jsonify(course_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=False)
