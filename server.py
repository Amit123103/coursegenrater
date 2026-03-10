from flask import Flask, request, jsonify
from flask_cors import CORS
import g4f
import json
import time

app = Flask(__name__)
CORS(app)

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
    - Outcomes: Performance-based learning objectives (what they can DO).
    - Lessons: Deep technical coverage, code snippet references, and architectural patterns.
    - Project Ideas: Real-world, portfolio-ready capstone projects.
    
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
                "title": "String",
                "description": "String",
                "duration": "String",
                "outcomes": ["Out1", "Out2", "Out3"],
                "youtubeQueries": ["query1", "query2"],
                "lessons": [
                    {{ "id": "m1-l1", "title": "String", "covers": "String", "duration": "String", "type": "Video/Project/Reading" }}
                ]
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
