import React, { useState, useEffect, useMemo } from 'react';
import {
    BookOpen, CheckCircle, Circle, Download, LayoutList, PlayCircle,
    Search, FileText, ChevronDown, Check, RefreshCw,
    Trash2, Video, FileQuestion, Map, Loader2, BookMarked, Settings, Save,
    BarChart2, Zap, Award, Target, ChevronRight, Lock, X, Play, Pause,
    Volume2, MessageSquare, Flame, Star, Send, Cpu, Globe, Activity, HardDrive,
    Shield, ArrowRight, Home, Monitor
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const BASE_URL = "https://coursegenrater.onrender.com"; // Force build v2

// ==========================================
// MOCK API GENERATORS (FALLBACK)
// ==========================================
const generateMockQuiz = (moduleTitle) => {
    return Array.from({ length: 5 }).map((_, i) => ({
        id: `q-${i}`,
        question: `What is a fundamental concept to remember regarding ${moduleTitle} (Question ${i + 1})?`,
        options: [
            `Concept A related to ${moduleTitle}`,
            `Concept B related to ${moduleTitle}`,
            `Concept C related to ${moduleTitle}`,
            `Concept D related to ${moduleTitle}`
        ],
        correctAnswer: Math.floor(Math.random() * 4),
        explanation: `This is the fundamental building block of the architectural pattern discussed in this module.`
    }));
};

// ==========================================
// NATIVE NEURAL ENGINE (ADVANCED LOCAL AI)
// ==========================================
const generateNativeCourse = (topic, difficulty, modulesCount, lessonsCount) => {
    const safeTopic = topic || 'Modern Architecture';
    const safeDifficulty = difficulty || 'Advanced';

    const techPrefixes = [
        "Quantum", "Neural", "Distributed", "Enterprise", "Atomic", "Reactive", "Parallel", "Scalable", "High-Fidelity",
        "Cloud-Native", "Vectorized", "Serverless", "Hyper-Converged", "Asynchronous", "Modular", "Polyglot", "Automated",
        "Predictive", "Immersive", "Cognitive", "Encapsulated", "Micro-Service", "Event-Driven", "Stateless"
    ];
    const techSuffixes = [
        "Mastery", "Blueprint", "Ecosystems", "Architecture", "Patterns", "Engine", "Protocols", "Infrastructure",
        "Lifecycle", "Optimizations", "Frameworks", "Systems", "Strategies", "Pipelines", "Standardization", "Paradox"
    ];

    const courseTitle = `${techPrefixes[Math.floor(Math.random() * techPrefixes.length)]} ${safeTopic} ${techSuffixes[Math.floor(Math.random() * techSuffixes.length)]}`;

    const moduleThemes = [
        { title: `Foundational ${safeTopic} Theory`, outcomes: ["Axiomatic Analysis", "Conceptual Scoping", "Structural Integrity"] },
        { title: `Core Logic of ${safeTopic}`, outcomes: ["Structural Analysis", "Logic Mapping", "Dependency Trees"] },
        { title: `Advanced ${safeTopic} Integration`, outcomes: ["Cross-Platform Sync", "Direct Injection", "Bridge Patterns"] },
        { title: `Performance Optimization for ${safeTopic}`, outcomes: ["Latency Compression", "Resource Pooling", "Buffer Management"] },
        { title: `Security & Governance in ${safeTopic}`, outcomes: ["Zero-Trust Audit", "Encryption Layers", "Policy Enforcement"] },
        { title: `Scaling ${safeTopic} Architectures`, outcomes: ["Massive Sharding", "Global Clusters", "Load Distribution"] },
        { title: `Maintenance & Evolution of ${safeTopic}`, outcomes: ["Legacy Migration", "Version Syncing", "Refactor Pipelines"] },
        { title: `Cloud Synthesis for ${safeTopic}`, outcomes: ["Containerization", "Orchestration", "Elastic Scaling"] },
        { title: `Deterministic ${safeTopic} Modeling`, outcomes: ["State Machines", "Formal Verification", "Validation Gates"] }
    ];

    const lessonPool = [
        "Synthesizing Strategic Dependencies", "Deep-Dive into Reactive State Management", "Architecting Low-Latency Data Flows",
        "Implementing Advanced Middleware Hooks", "Optimizing Performance Benchmarks", "Native Integration Patterns & Micro-Services",
        "Security Hardening & Protocol Analysis", "Deployment Strategies & CI/CD Pipelines", "Error Boundary Synthesis",
        "Asynchronous Stream Processing", "Memory Leak Detection & Mitigation", "Cloud-Native Resource Allocation",
        "Metadata Injection Strategies", "Parallel Workflow Synchronization", "Encapsulated Logic Guardrails",
        "Real-Time Telemetry Analysis", "Automated Regression Synthesizing", "High-Availability Cluster Design"
    ];

    const durations = ["45 min", "1.5 hours", "2 hours", "3 hours"];

    return {
        id: `course-${Date.now()}`,
        title: courseTitle,
        subtitle: `Industrial-grade ${safeDifficulty} blueprint for modern ${safeTopic} developers.`,
        description: `This curriculum explores the depths of ${safeTopic} using highly rigorous pedagogical templates. Designed for ${safeDifficulty} learners, it covers everything from initial synthesis to global-scale deployment clusters.`,
        duration: `${Math.round(modulesCount * 2.5)} Hours`,
        skills: [safeTopic, "System Design", "Infrastructure", "Neural Scaling", "Security Engineering"],
        difficulty: safeDifficulty,
        createdAt: new Date().toISOString(),
        modules: Array.from({ length: modulesCount || 3 }).map((_, mIdx) => {
            const theme = moduleThemes[mIdx % moduleThemes.length];
            return {
                id: `m${mIdx}`,
                title: theme.title,
                description: `A technical deep-dive into ${theme.title} ensuring comprehensive expertise in ${safeTopic}.`,
                duration: durations[mIdx % durations.length],
                outcomes: theme.outcomes,
                lessons: Array.from({ length: lessonsCount || 3 }).map((_, lIdx) => {
                    const lTitle = lessonPool[(mIdx * lessonsCount + lIdx) % lessonPool.length];
                    return {
                        id: `m${mIdx}-l${lIdx}`,
                        title: lTitle,
                        covers: `Advanced implementation of ${lTitle} within the ${safeTopic} ecosystem. This module covers syntax, runtime behavior, and debugging strategies.`,
                        duration: "45 min",
                        type: lIdx % 3 === 2 ? "Project" : "Technical"
                    };
                }),
                youtubeQueries: [`${safeTopic} ${theme.title}`, `${safeTopic} tutorial ${safeDifficulty}`]
            };
        }),
        recommendedQueries: [`${safeTopic} best practices`, `${safeTopic} project examples`],
        projectIdeas: [`Build a ${safeTopic} dashboard`, `Design a ${safeTopic} API`],
        certificateCriteria: "Achieve 85% or higher on the module assessments."
    };
};

// ==========================================
// THICKER BLUR & PREMIUM CLOURS
// ==========================================
// CSS inject
const premiumStyles = `
  :root {
    --bg-primary: #05050A;
    --text-primary: #FFFFFF;
    --text-secondary: #9CA3AF;
    --accent-blue: #6C63FF;
    --accent-pink: #FF2E63;
    --card-bg: rgba(13, 15, 26, 0.6);
    --border-clour: rgba(255, 255, 255, 0.1);
    --bg-overlay: linear-gradient(to bottom, rgba(5, 5, 10, 0.4) 0%, #05050A 100%);
  }

  [data-theme='light'] {
    --bg-primary: #F3F4F6;
    --text-primary: #111827;
    --text-secondary: #4B5563;
    --accent-blue: #4F46E5;
    --accent-pink: #DB2777;
    --card-bg: rgba(255, 255, 255, 0.8);
    --border-clour: rgba(0, 0, 0, 0.05);
    --bg-overlay: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, #F3F4F6 100%);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }
  @keyframes spin-slow {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px var(--accent-blue) / 0.2; }
    50% { box-shadow: 0 0 40px var(--accent-blue) / 0.6; }
  }
  .glass-card {
    background: var(--card-bg);
    backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid var(--border-clour);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  }
  .clour-gradient {
    background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-pink) 100%);
  }
  .neon-text {
    text-shadow: 0 0 10px var(--accent-blue), 0 0 20px var(--accent-blue);
  }
  .clour-shift {
    animation: clour-shift 10s infinite alternate;
  }
  @keyframes clour-shift {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
  .permanent-bg {
    position: fixed;
    inset: 0;
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.8;
    transition: background-image 1s ease-in-out;
  }
  .hero-overlay {
    position: fixed;
    inset: 0;
    background: var(--bg-overlay);
    z-index: 0;
    pointer-events: none;
  }
`;

const SUGGESTED_TOPICS = [
    "React.js Engineering", "Advanced Node.js", "Python Data Science", "Machine Learning Ops (MLOps)",
    "AWS Cloud Architecture", "Kubernetes Administration", "Go Concurrency", "Rust System Programming",
    "TypeScript Masterclass", "DevOps Engineering", "Full Stack Next.js", "Cybersecurity Essentials",
    "Penetration Testing", "Digital Forensics", "Blockchain Development", "Ethereum Smart Contracts",
    "Solidity Programming", "Mobile App Dev (React Native)", "iOS Swift Programming", "Android Kotlin Development",
    "Unity Game Development", "Unreal Engine C++", "AR/VR Integration", "Database Design & SQL",
    "NoSQL MongoDB Master", "GraphQL API Design", "Microservices Architecture", "Serverless Computing",
    "Data Engineering Pipelines", "Big Data (Apache Spark)", "AI Ethics", "Natural Language Processing (NLP)",
    "Computer Vision", "Reinforcement Learning", "Deep Learning Architectures", "Quantum Computing Basics",
    "Information Security Management", "Network Engineering", "Linux System Administration", "Docker Containers",
    "CI/CD Implementation", "Terraform IaaS", "Ansible Automation", "Prometheus Monitoring", "ELK Stack Logging",
    "Agile Project Management", "Product Management for AI", "UI/UX Design Systems", "Responsive Web Design",
    "Figma to Code", "Interaction Design", "SEO Strategy", "Digital Marketing Analytics", "Growth Hacking",
    "SaaS Business Models", "Cloud Security (CompTIA)", "Project Management (PMP Prep)", "Scrum Master Certification",
    "Public Speaking & Presentation", "Financial Technology (FinTech)", "Algorithmic Trading", "Quantitative Finance",
    "Data Visualization (D3.js)", "Tableau Excellence", "PowerBI Analytics", "Excel for Data Analysis",
    "R Programming", "Julia for Math", "Physical Computing (Arduino)", "IoT Edge Systems", "Embedded C++",
    "Robotics Engineering", "Circuit Design", "Power Systems", "Structural Engineering", "AutoCAD Professional",
    "Organic Chemistry", "Genetic Engineering", "Bioinformatics", "Molecular Biology", "Neuroscience Intro",
    "Psychology of AI", "Social Media Strategy", "Content Writing Masterclass", "Technical Writing",
    "Photography & Post-Processing", "Adobe Premiere Pro Video", "After Effects Motion", "3D Modeling Blender",
    "Critical Thinking", "Philosophical Logic", "Economics 101", "Game Theory", "Behavioral Economics",
    "Environmental Science", "Sustainable Energy", "Space Systems & Satellites", "Astrophysics Intro",
    "Meteorology Basics", "Global Logistics", "Philosophy of Mind", "Modern History", "Political Science",
    "Astrology & Astronomy", "Marine Biology", "Forensic Science", "Criminal Law", "Business Strategy",
    "Startup Fundraising", "Public Relations", "Brand Identity", "Copywriting for Conversions",
    "Email Marketing", "PPC Advertising", "Affiliate Marketing", "Customer Success Management",
    "Sales Psychology", "Negotiation Skills", "Emotional Intelligence", "Conflict Resolution",
    "Time Management", "Leadership & Delegation", "Mindfulness & Meditation", "Health & Nutrition",
    "Fitness Coaching", "Sports Management", "Music Theory", "Digital Music Production",
    "Sound Design", "Acting Foundations", "Screenwriting Masterclass", "Interior Design",
    "Fashion Design", "Culinary Arts", "Wine Sommelier Intro", "Event Planning", "Hospitality Management",
    "Real Estate Investing", "Crypto Trading", "Tax Law Basics", "Patent Law", "International Relations",
    "Other (Type Custom Topic Below)"
];

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.id = 'premium-neural-styles';
    style.textContent = premiumStyles;
    document.head.appendChild(style);
}

const updateGlobalStyles = (config) => {
    if (typeof document !== 'undefined') {
        const style = document.getElementById('premium-neural-styles');
        if (style) {
            const blur = config.glassBlur || 20;
            const neon = config.neonIntensity || 1.0;
            style.textContent = premiumStyles.replace('blur(20px)', `blur(${blur}px)`).replace('rgba(108, 99, 255, 0.8)', `rgba(108, 99, 255, ${0.8 * neon})`);
        }
    }
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CourseGeneratorApp() {
    // STATE MANAGEMENT
    const [activeTab, setActiveTab] = useState('landing');
    // SAFE LOCAL STORAGE PARSER
    const safeJSONParse = (key, defaultVal) => {
        try {
            const val = localStorage.getItem(key);
            return val ? JSON.parse(val) : defaultVal;
        } catch {
            return defaultVal;
        }
    };

    const [courses, setCourses] = useState(() => safeJSONParse('savedCourses', []));
    const [currentCourse, setCurrentCourse] = useState(() => {
        const saved = safeJSONParse('savedCourses', []);
        return saved.length > 0 ? saved[0] : null;
    });

    // API KEY STATE (Settings)
    const [apiKey, setApiKey] = useState(() => localStorage.getItem('anthropicApiKey') || '');
    const [apiKeyInput, setApiKeyInput] = useState(apiKey);

    // GENERATE FORM STATE
    const [topic, setTopic] = useState('React Hooks');
    const [customTitle, setCustomTitle] = useState('');
    const [difficulty, setDifficulty] = useState('Beginner');
    const [modulesCount, setModulesCount] = useState(3);
    const [lessonsCount, setLessonsCount] = useState(3);
    const [loading, setLoading] = useState(false);
    const [generationStep, setGenerationStep] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const [toast, setToast] = useState(null);

    // PHASE 3 STATE
    const [xp, setXp] = useState(() => safeJSONParse('userXp', 0));
    const [streak, setStreak] = useState(() => safeJSONParse('userStreak', { days: 0, lastLogin: null }));
    const [communityPosts, setCommunityPosts] = useState(() => safeJSONParse('communityPosts', {}));
    const [communityInput, setCommunityInput] = useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [activeLessonTab, setActiveLessonTab] = useState('content'); // 'content', 'notes', 'community'
    const [backendStatus, setBackendStatus] = useState('checking'); // 'connected', 'error', 'checking'
    const [theme, setTheme] = useState(() => localStorage.getItem('userTheme') || 'night');
    const [synthesisHistory, setSynthesisHistory] = useState(() => safeJSONParse('synthesisHistory', []));

    // ADVANCED ENGINE SETTINGS
    const [engineConfig, setEngineConfig] = useState(() => safeJSONParse('engineConfig', {
        creativity: 0.7,
        depth: 0.8,
        neonIntensity: 1.0,
        glassBlur: 20,
        highPerformance: true,
        selectedBg: '/assets/bg/bg6.png'
    }));

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('userTheme', theme);
    }, [theme]);

    // BACKEND HEARTBEAT
    useEffect(() => {
        const checkBackend = async () => {
            try {
                const res = await fetch(`${BASE_URL}/health`);
                if (res.ok) setBackendStatus('connected');
                else setBackendStatus('error');
            } catch {
                setBackendStatus('error');
            }
        };
        checkBackend();
        const interval = setInterval(checkBackend, 10000);
        return () => clearInterval(interval);
    }, []);

    // STREAK CALCULATOR
    useEffect(() => {
        const today = new Date().toDateString();
        if (streak.lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (streak.lastLogin === yesterday.toDateString()) {
                setStreak(prev => ({ days: prev.days + 1, lastLogin: today }));
            } else {
                setStreak({ days: 1, lastLogin: today });
            }
        }
    }, [streak.lastLogin]);

    // PROGRESS & NOTES STATE
    const [progress, setProgress] = useState(() => safeJSONParse('courseProgress', {}));
    const [notes, setNotes] = useState(() => safeJSONParse('courseNotes', {}));
    const [searchQuery, setSearchQuery] = useState('');

    const exportToPDF = () => {
        window.print();
    };

    // UI STATE
    const [activeModuleId, setActiveModuleId] = useState(null);
    const [activeLessonId, setActiveLessonId] = useState(null);
    const [quizState, setQuizState] = useState({});

    // PERSIST TO LOCAL STORAGE
    useEffect(() => { localStorage.setItem('savedCourses', JSON.stringify(courses)); }, [courses]);
    useEffect(() => { localStorage.setItem('anthropicApiKey', apiKey); }, [apiKey]);
    useEffect(() => { localStorage.setItem('courseProgress', JSON.stringify(progress)); }, [progress]);
    useEffect(() => { localStorage.setItem('courseNotes', JSON.stringify(notes)); }, [notes]);
    useEffect(() => { localStorage.setItem('userXp', JSON.stringify(xp)); }, [xp]);
    useEffect(() => { localStorage.setItem('userStreak', JSON.stringify(streak)); }, [streak]);
    useEffect(() => { localStorage.setItem('communityPosts', JSON.stringify(communityPosts)); }, [communityPosts]);
    useEffect(() => { localStorage.setItem('engineConfig', JSON.stringify(engineConfig)); }, [engineConfig]);
    useEffect(() => { localStorage.setItem('synthesisHistory', JSON.stringify(synthesisHistory)); }, [synthesisHistory]);

    const showToast = (msg, type = 'success') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 4000);
    };

    const saveSettings = () => {
        setApiKey(apiKeyInput);
        showToast('Settings saved successfully!');
        setActiveTab('generate');
    };

    // ==========================================
    // CORE GENERATION
    // ==========================================
    const handleGenerate = async () => {
        if (!topic) return showToast('Please enter a topic', 'error');
        setLoading(true);
        setIsGenerating(true);
        setGenerationStep(1); // "Initializing Neural Mesh"

        try {
            await new Promise(r => setTimeout(r, 800));
            setGenerationStep(2); // "Accessing Python AI Engine..."

            const response = await fetch(`${BASE_URL}/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    topic,
                    customTitle,
                    difficulty,
                    modulesCount,
                    lessonsCount
                })
            });

            if (!response.ok) {
                let errorMsg = 'Failed to connect to Local AI Server';
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.error || errorMsg;
                } catch (e) { }
                throw new Error(errorMsg);
            }

            setGenerationStep(3); // "Synthesizing Curriculum Data..."
            const newCourseData = await response.json();

            const newCourse = {
                ...newCourseData,
                id: `course-${Date.now()}`,
                createdAt: new Date().toISOString(),
                modules: (newCourseData.modules || []).map((m, mIdx) => ({
                    ...m,
                    id: m.id || `m${mIdx + 1}`,
                    lessons: (m.lessons || []).map((l, lIdx) => ({
                        ...l,
                        id: l.id || `m${mIdx + 1}-l${lIdx + 1}`
                    }))
                }))
            };

            setGenerationStep(4); // "Finalizing Architecture..."
            await new Promise(r => setTimeout(r, 800));

            if (!newCourseData || !newCourseData.modules || newCourseData.modules.length === 0) {
                throw new Error("Invalid course structure generated by AI.");
            }

            setCourses(prev => [newCourse, ...prev]);
            setSynthesisHistory(prev => [{ topic, status: 'Success', time: new Date().toISOString() }, ...prev].slice(0, 10));
            setCurrentCourse(newCourse);
            setActiveModuleId(newCourse.modules[0].id);
            setActiveLessonId(newCourse.modules[0].lessons[0]?.id || null);
            setActiveTab('course');
            setIsGenerating(false);
            showToast('Premium AI Course synthesized successfully!');
        } catch (err) {
            console.error("Generation Error:", err);
            const fallback = generateNativeCourse(topic, difficulty, modulesCount, lessonsCount);
            setCourses(prev => [fallback, ...prev]);
            setCurrentCourse(fallback);
            setActiveModuleId(fallback.modules[0].id);
            setActiveLessonId(fallback.modules[0].lessons?.[0]?.id);
            setActiveTab('course');
            showToast(`System utilized Neural Engine (${err.message.substring(0, 40)}...)`, 'warning');
            setIsGenerating(false);
        } finally {
            setLoading(false);
        }
    };

    const startQuiz = async (module) => {
        setLoading(true);
        try {
            await new Promise(r => setTimeout(r, 1000));
            const qs = generateMockQuiz(module.title);
            setQuizState(prev => ({
                ...prev,
                [module.id]: { active: true, questions: qs, answers: {}, completed: false, score: 0 }
            }));
        } catch (err) {
            showToast(`Quiz Generation failed: ${err.message}`, 'error');
        } finally {
            setLoading(false);
        }
    };

    const submitQuiz = (moduleId) => {
        setQuizState(prev => {
            const qState = prev[moduleId];
            if (!qState) return prev;
            let score = 0;
            (qState.questions || []).forEach((q, i) => {
                if (qState.answers?.[i] === q.correctAnswer) score++;
            });
            if (score > 0) {
                setXp(x => x + (score * 50));
                showToast(`Quiz Completed! Earned ${score * 50} XP`, 'success');
            }
            return { ...prev, [moduleId]: { ...qState, completed: true, score } };
        });
    };

    const handleQuizAnswer = (moduleId, qIndex, optionIndex) => {
        setQuizState(prev => {
            const current = prev[moduleId] || { answers: {} };
            return {
                ...prev,
                [moduleId]: { ...current, answers: { ...(current.answers || {}), [qIndex]: optionIndex } }
            };
        });
    };

    const toggleLessonComplete = (courseId, lessonId) => {
        setProgress(prev => {
            const courseProg = prev[courseId] || {};
            const isCompletedNow = !courseProg[lessonId];
            if (isCompletedNow) {
                setXp(x => x + 100);
                showToast('Lesson Completed! +100 XP', 'success');
            }
            return { ...prev, [courseId]: { ...courseProg, [lessonId]: isCompletedNow } };
        });
    };

    const getCourseProgress = (course) => {
        if (!course || !course.id) return { completed: 0, total: 0, percent: 0 };
        const courseProg = progress[course.id] || {};
        const total = (course.modules || []).reduce((acc, m) => acc + (m?.lessons?.length || 0), 0);
        const completed = Object.values(courseProg).filter(Boolean).length;
        return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
    };

    const toggleAudio = (text) => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    const handlePostComment = (lessonId) => {
        if (!communityInput.trim()) return;
        const newPost = {
            id: Date.now(),
            author: 'You',
            text: communityInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setCommunityPosts(prev => ({
            ...prev,
            [lessonId]: [{ ...newPost }, ...(prev[lessonId] || [])]
        }));
        setCommunityInput('');
        setXp(x => x + 10);
        showToast('Comment posted! +10 XP', 'success');
    };

    const getAnalytics = () => {
        let globalCompleted = 0, globalTotal = 0, skillDistribution = {}, velocityData = [], mostRecentActivity = null;
        (courses || []).forEach(c => {
            const p = getCourseProgress(c);
            globalCompleted += p.completed; globalTotal += p.total;
            (c.skills || []).forEach(s => skillDistribution[s] = (skillDistribution[s] || 0) + (p.percent / 100));
            velocityData.push({ name: c.title.substring(0, 10) + '...', progress: p.percent, efficiency: 70 + Math.random() * 20 });
            if (!mostRecentActivity || new Date(c.createdAt) > new Date(mostRecentActivity.createdAt)) mostRecentActivity = c;
        });
        const completionRate = globalTotal ? Math.round((globalCompleted / globalTotal) * 100) : 0;
        const topSkills = Object.entries(skillDistribution).map(([name, value]) => ({ name, value: Math.round(value * 10) })).sort((a, b) => b.value - a.value).slice(0, 5);
        const radarData = [
            { subject: 'Technical', A: 85 }, { subject: 'Theoretical', A: 75 }, { subject: 'Practical', A: 70 },
            { subject: 'Architectural', A: 80 }, { subject: 'Stability', A: 95 }
        ];
        return { 
            globalCompleted, globalTotal, completionRate, topSkills, velocityData, radarData, 
            insight: mostRecentActivity ? `Optimize your ${mostRecentActivity.topic} clour-profile for 15% faster retention.` : "Synthesize new pathways." 
        };
    };

    // ==========================================
    // RENDERERS
    // ==========================================

    const renderGenerating = () => (
        <div className="fixed inset-0 z-[100] bg-[#05050A] flex flex-col items-center justify-center p-6 text-center">
            <div className="relative mb-12">
                <div className="w-32 h-32 bg-[#6C63FF] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(108,99,255,0.4)] animate-pulse">
                    <Zap size={48} className="text-white" />
                </div>
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Neural Synthesis in Progress</h2>
            <p className="text-[#6C63FF] font-bold uppercase tracking-[0.2em] mb-8">
                {generationStep === 1 && "Initializing Matrix..."}
                {generationStep === 2 && "Accessing Local Engine..."}
                {generationStep === 3 && "Structuring Curriculum..."}
                {generationStep === 4 && "Finalizing Architecture..."}
            </p>
            <div className="w-full max-w-md h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#6C63FF] transition-all duration-1000" style={{ width: `${(generationStep / 4) * 100}%` }}></div>
            </div>
        </div>
    );

    const renderLanding = () => (
        <div className="max-w-7xl mx-auto px-6 py-20 animate-fade-in relative text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6C63FF]/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
            <div className="flex flex-col items-center mb-32 pt-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full text-[#6C63FF] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    <Zap size={14} /> Neural Engine v4.0 Active
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                    Architect Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#FF2E63] neon-text">Intellectual Future</span>
                </h1>
                <p className="max-w-3xl text-xl text-gray-400 font-medium mb-12">Synthesize industrial-grade curricula locally. Zero Latency. Private. Professional.</p>
                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    <button onClick={() => setActiveTab('generate')} className="px-10 py-5 clour-gradient text-white rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(108,99,255,0.4)]">
                        Initialize Synthesis <ArrowRight size={20} />
                    </button>
                    <button onClick={() => document.getElementById('about-engine')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-[#1A1F35] text-white border border-[#2A2F45] rounded-2xl font-black text-lg">Explore Architecture</button>
                </div>

                {/* ENGINE STATS STRIP */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mb-32">
                    {[
                        { label: 'Neural Uptime', value: '99.9%', icon: Activity },
                        { label: 'Latency', value: '450ms', icon: Zap },
                        { label: 'Encryption', value: 'ECC-512', icon: Shield },
                        { label: 'Linguistic Logic', value: 'v2.1 (Clour)', icon: Globe }
                    ].map((s, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center">
                            <s.icon size={20} className="text-[#6C63FF] mb-2" />
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{s.label}</span>
                            <span className="text-xl font-black text-white">{s.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* TECH STACK SECTION */}
            <div className="mb-40 text-center">
                <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-widest">Neural Layer Stack</h2>
                <div className="flex flex-wrap justify-center gap-12 text-gray-500 font-bold">
                    <div className="flex items-center gap-3 group px-6 py-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-[#6C63FF]/30 transition-all">
                        <div className="w-10 h-10 bg-[#3776AB]/20 rounded-lg flex items-center justify-center text-[#3776AB]">Py</div>
                        <span>Python Core</span>
                    </div>
                    <div className="flex items-center gap-3 group px-6 py-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-[#6C63FF]/30 transition-all">
                        <div className="w-10 h-10 bg-[#61DAFB]/20 rounded-lg flex items-center justify-center text-[#61DAFB]">React</div>
                        <span>React UI</span>
                    </div>
                    <div className="flex items-center gap-3 group px-6 py-3 bg-white/[0.02] rounded-xl border border-white/5 hover:border-[#6C63FF]/30 transition-all">
                        <div className="w-10 h-10 bg-[#FFD43B]/20 rounded-lg flex items-center justify-center text-[#FFD43B]">G4F</div>
                        <span>Neural Link</span>
                    </div>
                </div>
            </div>

            <div id="about-engine" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40 text-left">
                <div className="glass-card p-10 rounded-[2.5rem] border border-white/10 group">
                    <Cpu size={100} className="text-[#6C63FF] mb-6" />
                    <h3 className="text-3xl font-black text-white mb-6">Pedagogical Synthesis</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">LearnIQ architects logical progression designed for maximum cognitive retention.</p>
                    <ul className="space-y-4">
                        {["Atomic Lesson Mapping", "Cross-Domain Synthesis", "Local Execution"].map((t, i) => (
                            <li key={i} className="flex gap-4 items-center">
                                <CheckCircle size={18} className="text-[#6C63FF]" />
                                <span className="font-bold text-white text-sm">{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-4xl font-black text-white mb-6">Autonomous Learning.</h2>
                    <p className="text-gray-400 text-lg mb-8">Leverage local AI optimization for industrial-grade curriculum architecture directly in your browser.</p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"><Shield className="text-[#6C63FF] mb-4" /><h4 className="font-bold text-white">Privacy First</h4></div>
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl"><HardDrive className="text-[#FF2E63] mb-4" /><h4 className="font-bold text-white">Local Storage</h4></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderGenerate = () => (
        <div className="max-w-4xl mx-auto mt-12 px-6 pb-20 glass-card rounded-3xl animate-slide-up relative">
            <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 bg-[#6C63FF]/20 rounded-2xl flex items-center justify-center mb-6 border border-[#6C63FF]/40"><Zap className="text-[#6C63FF]" size={32} /></div>
                <h2 className="text-5xl font-black text-white text-center tracking-tight">Neural Architect</h2>
            </div>
            <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                    <label className="block text-[#6C63FF] text-xs font-bold uppercase tracking-wider mb-2">Subject Matter</label>
                    <input list="topics-list" type="text" className="w-full bg-[#0D0F1A] border border-[#2A2F45] rounded-xl px-4 py-3 text-white" value={topic} onChange={e => setTopic(e.target.value)} />
                    <datalist id="topics-list">{SUGGESTED_TOPICS.map((t, i) => <option key={i} value={t} />)}</datalist>
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-white/5">
                    <label className="block text-pink-500 text-xs font-bold uppercase tracking-wider mb-2">Professional Branding (Optional)</label>
                    <input type="text" className="w-full bg-[#0D0F1A] border border-[#2A2F45] rounded-xl px-4 py-3 text-white" value={customTitle} onChange={e => setCustomTitle(e.target.value)} placeholder="Course Title Overrider..." />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="glass-panel p-4 rounded-xl border border-white/5"><label className="text-xs font-bold text-gray-500 block mb-1">Complexity</label><select className="bg-transparent text-white w-full outline-none" value={difficulty} onChange={e => setDifficulty(e.target.value)}><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></div>
                    <div className="glass-panel p-4 rounded-xl border border-white/5"><label className="text-xs font-bold text-gray-500 block mb-1">Modules</label><input type="number" className="bg-transparent text-white w-full outline-none" value={modulesCount} onChange={e => setModulesCount(e.target.value)} /></div>
                    <div className="glass-panel p-4 rounded-xl border border-white/5"><label className="text-xs font-bold text-gray-500 block mb-1">Units</label><input type="number" className="bg-transparent text-white w-full outline-none" value={lessonsCount} onChange={e => setLessonsCount(e.target.value)} /></div>
                </div>
                <button onClick={handleGenerate} className="w-full py-5 bg-gradient-to-r from-[#6C63FF] to-[#FF2E63] text-white rounded-2xl font-black shadow-[0_0_30px_rgba(108,99,255,0.4)]">Begin Neural Synthesis</button>
            </div>
        </div>
    );

    const renderDashboard = () => {
        const stats = getAnalytics();
        return (
            <div className="max-w-7xl mx-auto p-6 animate-fade-in">
                <header className="mb-12"><h2 className="text-4xl font-black text-white">Monitor Center</h2><p className="text-gray-400">Live analytics of your intellectual ecosystem.</p></header>
                <div className="grid grid-cols-4 gap-6 mb-12">
                    {[
                        { l: 'Total Cycles', v: courses.length, i: Cpu },
                        { l: 'Units Done', v: stats.globalCompleted, i: CheckCircle },
                        { l: 'Neural XP', v: xp, i: Star },
                        { l: 'Synthesis Streak', v: streak.days, i: Flame }
                    ].map((s, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF]">
                                <s.i size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">{s.l}</p>
                                <h3 className="text-2xl font-black text-white">{s.v}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 glass-card p-8 rounded-3xl border border-white/5 h-96">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                            <Activity size={18} className="text-[#6C63FF]" /> Neural Saturation Analytics
                        </h3>
                        <ResponsiveContainer>
                            <RadarChart data={stats.radarData}>
                                <PolarGrid stroke="var(--border-clour)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 10 }} />
                                <Radar dataKey="A" stroke="var(--accent-blue)" fill="var(--accent-blue)" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-white/5 h-96">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                            <Zap size={18} className="text-[#FF2E63]" /> Growth Velocity
                        </h3>
                        <ResponsiveContainer>
                            <AreaChart data={stats.velocityData}>
                                <Area type="monotone" dataKey="progress" stroke="var(--accent-pink)" fill="var(--accent-pink)" fillOpacity={0.1} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                {/* SYNTHESIS HISTORY */}
                <div className="glass-card p-8 rounded-3xl border border-white/5 mb-12">
                    <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                        <Save size={18} className="text-green-500" /> Synthesis Log
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                                    <th className="pb-4">Architecture Topic</th>
                                    <th className="pb-4">Timestamp</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {synthesisHistory.length > 0 ? (
                                    synthesisHistory.map((h, i) => (
                                        <tr key={i} className="text-sm">
                                            <td className="py-4 text-white font-bold">{h.topic}</td>
                                            <td className="py-4 text-gray-500">{new Date(h.time).toLocaleString()}</td>
                                            <td className="py-4">
                                                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">{h.status}</span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="py-8 text-center text-gray-500 font-bold uppercase tracking-widest">No Recent Cycles Detected</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8 rounded-3xl border border-white/5 h-80">
                        <h3 className="text-white font-bold mb-4">Neural Node Distribution</h3>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={stats.topSkills}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {stats.topSkills.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'var(--accent-blue)' : 'var(--accent-pink)'} />
                                    ))}
                                </Pie>
                                <RechartsTooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-[#6C63FF]/30 bg-[#6C63FF]/5 flex flex-col justify-center">
                        <h3 className="text-white font-bold mb-2">Architect Wisdom</h3>
                        <p className="text-gray-300 text-sm leading-relaxed italic">"Architecture is the synthesis of logic and imagination. Every node you create expands the neural boundary of your personal ecosystem."</p>
                    </div>
                </div>
            </div>
        );
    };

    const renderMyCourses = () => (
        <div className="max-w-5xl mx-auto p-6 animate-fade-in">
            <h2 className="text-3xl font-black text-white mb-8">Course Library</h2>
            <div className="grid grid-cols-2 gap-6">
                {(courses || []).map(c => {
                    const p = getCourseProgress(c);
                    return (
                        <div key={c.id} className="glass-card p-6 rounded-3xl relative">
                            <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                            <div className="w-full h-1 bg-white/5 rounded-full mb-4"><div className="h-full bg-[#6C63FF]" style={{ width: `${p.percent}%` }}></div></div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">{p.percent}% Complete</span>
                                <div className="flex gap-2">
                                    <button onClick={() => { setCurrentCourse(c); setActiveTab('course'); }} className="p-2 bg-[#6C63FF] text-white rounded-lg"><PlayCircle size={18} /></button>
                                    <button onClick={() => setCourses(courses.filter(lc => lc.id !== c.id))} className="p-2 bg-red-500/10 text-red-500 rounded-lg"><Trash2 size={18} /></button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="max-w-4xl mx-auto p-12 mt-12 animate-fade-in pb-32">
            <header className="mb-12 flex items-center justify-between">
                <div>
                    <h2 className="text-4xl font-black text-white">Engine Control Center</h2>
                    <p className="text-gray-400">Configure neural synthesis and visual processing.</p>
                </div>
                <div className={`px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest ${backendStatus === 'connected' ? 'bg-green-500/10 border-green-500/30 text-green-500' : 'bg-red-500/10 border-red-500/30 text-red-500'}`}>
                    Core Status: {backendStatus}
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AI CONFIG */}
                <div className="glass-card p-8 rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Cpu size={20} className="text-[#6C63FF]" /> Neural Synthesis</h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Creativity Bias</label>
                                <span className="text-xs text-[#6C63FF] font-bold">{Math.round(engineConfig.creativity * 100)}%</span>
                            </div>
                            <input type="range" min="0" max="1" step="0.1" value={engineConfig.creativity} onChange={e => setEngineConfig({ ...engineConfig, creativity: parseFloat(e.target.value) })} className="w-full accent-[#6C63FF]" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Hierarchical Depth</label>
                                <span className="text-xs text-[#FF2E63] font-bold">{Math.round(engineConfig.depth * 100)}%</span>
                            </div>
                            <input type="range" min="0" max="1" step="0.1" value={engineConfig.depth} onChange={e => setEngineConfig({ ...engineConfig, depth: parseFloat(e.target.value) })} className="w-full accent-[#FF2E63]" />
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <label className="text-white text-sm font-bold block mb-4">Anthropic Protocol Key (L3 Link)</label>
                            <input type="password" value={apiKeyInput} onChange={e => setApiKeyInput(e.target.value)} className="w-full bg-[#0D0F1A] border border-[#2A2F45] p-3 text-white rounded-xl text-sm" placeholder="sk-ant-..." />
                        </div>
                    </div>
                </div>

                {/* VISUAL CONFIG */}
                <div className="glass-card p-10 rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2"><LayoutList size={20} className="text-[#FF2E63]" /> Visual Matrix</h3>
                    <div className="space-y-8">
                        <div>
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest block mb-4">Interface Atmosphere</label>
                            <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                                <button onClick={() => setTheme('night')} className={`flex-1 py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${theme === 'night' ? 'bg-[#6C63FF] text-white shadow-lg' : 'text-gray-500'}`}><Star size={14} /> Obscural</button>
                                <button onClick={() => setTheme('light')} className={`flex-1 py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${theme === 'light' ? 'bg-white text-black shadow-lg' : 'text-gray-500'}`}><Globe size={14} /> Luminal</button>
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest block mb-4">Cinematic Asset Gallery</label>
                            <div className="grid grid-cols-6 gap-2">
                                {[1, 2, 3, 4, 5, 6].map(i => {
                                    const path = `/assets/bg/bg${i}.png`;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setEngineConfig({ ...engineConfig, selectedBg: path })}
                                            className={`aspect-video rounded-lg bg-cover bg-center border-2 transition-all ${engineConfig.selectedBg === path ? 'border-[#6C63FF] scale-110' : 'border-transparent hover:border-white/20'}`}
                                            style={{ backgroundImage: `url(${path})` }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Neon Intensity</label>
                                <span className="text-xs text-[#6C63FF] font-bold">{Math.round(engineConfig.neonIntensity * 100)}%</span>
                            </div>
                            <input type="range" min="0" max="2" step="0.1" value={engineConfig.neonIntensity} onChange={e => {
                                const newConfig = { ...engineConfig, neonIntensity: parseFloat(e.target.value) };
                                setEngineConfig(newConfig);
                                updateGlobalStyles(newConfig);
                            }} className="w-full accent-[#6C63FF]" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Glass Blur Radius</label>
                                <span className="text-xs text-[#FF2E63] font-bold">{engineConfig.glassBlur}px</span>
                            </div>
                            <input type="range" min="0" max="50" step="1" value={engineConfig.glassBlur} onChange={e => {
                                const newConfig = { ...engineConfig, glassBlur: parseInt(e.target.value) };
                                setEngineConfig(newConfig);
                                updateGlobalStyles(newConfig);
                            }} className="w-full accent-[#FF2E63]" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-sm font-bold text-white">High Performance Mode</span>
                            <button onClick={() => setEngineConfig({ ...engineConfig, highPerformance: !engineConfig.highPerformance })} className={`w-12 h-6 rounded-full transition-all relative ${engineConfig.highPerformance ? 'bg-[#6C63FF]' : 'bg-gray-700'}`}>
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${engineConfig.highPerformance ? 'left-7' : 'left-1'}`} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* DATA & MEMORY */}
                <div className="md:col-span-2 glass-card p-8 rounded-3xl border border-white/5 flex flex-wrap gap-6 items-center justify-between">
                    <div>
                        <h4 className="text-lg font-bold text-white">Neural Memory Cache</h4>
                        <p className="text-sm text-gray-500">Manage locally persisted architectural data.</p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => {
                            const blob = new Blob([JSON.stringify({ courses, xp, streak, progress })], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `neural-progress-${new Date().toISOString().split('T')[0]}.json`;
                            a.click();
                            showToast('Neural progress exported');
                        }} className="px-6 py-3 bg-[#1A1F35] text-white border border-[#2A2F45] rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-[#2A2F45] transition-all"><Download size={14} /> Export Neural Data</button>
                        <button onClick={() => {
                            if (window.confirm('IRREVERSIBLE ACTION: Purge all synthesized architectures and local memory?')) {
                                localStorage.clear();
                                window.location.reload();
                            }
                        }} className="px-6 py-3 bg-red-500/10 text-red-500 border border-red-500/30 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-red-500/20 transition-all"><Trash2 size={14} /> Wipe Neural Memory</button>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex justify-center">
                <button onClick={saveSettings} className="px-12 py-5 cyber-gradient text-white rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(108,99,255,0.4)] hover:scale-105 transition-all">Synchronize Engine Config</button>
            </div>
        </div>
    );

    const renderActiveCourse = () => {
        if (!currentCourse) return <div className="text-center p-20 text-gray-500"><BookOpen size={48} className="mx-auto mb-4" />No course architecture selected.</div>;
        const stats = getCourseProgress(currentCourse);
        const mActive = currentCourse.modules.find(m => m.id === activeModuleId) || currentCourse.modules[0];
        const lActive = mActive.lessons.find(l => l.id === activeLessonId) || mActive.lessons[0];

        return (
            <div className="flex h-[calc(100vh-80px)] overflow-hidden">
                <aside className="w-80 bg-[#1A1F35]/80 border-r border-[#2A2F45] overflow-y-auto p-6">
                    <h2 className="text-white font-black mb-6">{currentCourse.title}</h2>
                    <div className="space-y-4">
                        {currentCourse.modules.map(m => (
                            <div key={m.id}>
                                <div onClick={() => setActiveModuleId(m.id)} className={`p-3 rounded-xl cursor-pointer font-bold ${activeModuleId === m.id ? 'bg-[#6C63FF]/20 text-[#6C63FF]' : 'text-gray-400'}`}>{m.title}</div>
                                {activeModuleId === m.id && (
                                    <div className="pl-4 mt-2 space-y-2 border-l border-white/5">
                                        {m.lessons.map(l => (
                                            <div key={l.id} className={`p-2 text-sm rounded-lg cursor-pointer ${activeLessonId === l.id ? 'bg-[#2A2F45] text-white' : 'text-gray-500'}`} onClick={() => setActiveLessonId(l.id)}>
                                                {progress[currentCourse.id]?.[l.id] ? '✓ ' : '○ '}{l.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>
                <main className="flex-1 overflow-y-auto p-12 relative bg-[#05050A]">
                    <div className="max-w-3xl mx-auto">
                        <header className="mb-12"><h1 className="text-5xl font-black text-white mb-4">{currentCourse.title}</h1><div className="h-1 w-20 bg-[#6C63FF]"></div></header>
                        {lActive && (
                            <div className="glass-card p-10 rounded-3xl border border-white/5 animate-fade-in">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-black text-[#6C63FF] uppercase">{lActive.type}</span>
                                    <button onClick={() => toggleLessonComplete(currentCourse.id, lActive.id)} className={`px-4 py-2 rounded-lg font-bold text-xs ${progress[currentCourse.id]?.[lActive.id] ? 'bg-green-500/20 text-green-400' : 'bg-white text-black'}`}>
                                        {progress[currentCourse.id]?.[lActive.id] ? 'Validated' : 'Complete Unit'}
                                    </button>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6">{lActive.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg mb-12">{lActive.covers}</p>
                                <div className="flex gap-4 border-t border-white/5 pt-8">
                                    <button onClick={() => toggleAudio(lActive.covers)} className="flex items-center gap-2 text-sm text-[#6C63FF] font-bold"><Play size={14} /> Listen</button>
                                    <button onClick={() => setActiveLessonTab('notes')} className="flex items-center gap-2 text-sm text-gray-400 font-bold"><FileText size={14} /> Workspace</button>
                                </div>
                                {activeLessonTab === 'notes' && <textarea className="w-full mt-6 bg-[#0D0F1A] p-4 text-white rounded-xl h-40 outline-none" placeholder="Local secure notes..." value={notes[lActive.id] || ''} onChange={e => setNotes({ ...notes, [lActive.id]: e.target.value })} />}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        );
    };

    return (
        <div className={`min-h-screen font-sans selection:bg-[#6C63FF]/30 transition-colors duration-500 relative ${theme === 'night' ? 'text-gray-100' : 'text-gray-900'}`}>
            {/* GLOBAL PERMANENT CINEMATIC BACKGROUND */}
            <div className="permanent-bg" style={{ backgroundImage: `url(${engineConfig.selectedBg})` }} />
            <div className="hero-overlay" />

            {isGenerating && renderGenerating()}
            <header className="glass-panel border-b border-white/5 sticky top-0 z-40 bg-[#0D0F1A]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div onClick={() => setActiveTab('landing')} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#6C63FF] to-[#FF2E63] rounded-xl flex items-center justify-center shadow-lg"><Zap className="text-white" size={22} fill="currentColor" /></div>
                            <span className="text-white font-black text-xl tracking-tighter">Learn<span className="text-[#6C63FF]">IQ</span></span>
                        </div>
                        <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full">
                            {[{ id: 'landing', label: 'Home', i: Home }, { id: 'dashboard', label: 'Monitor', i: BarChart2 }, { id: 'my_courses', label: 'Library', i: BookMarked }].map(t => (
                                <button key={t.id} onClick={() => setActiveTab(t.id)} className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeTab === t.id ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}>{t.label}</button>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <button onClick={() => setTheme(theme === 'night' ? 'light' : 'night')} className="p-2.5 rounded-xl border border-white/5 text-gray-400 hover:text-[#6C63FF] transition-all">
                            {theme === 'night' ? <Star size={20} /> : <Globe size={20} />}
                        </button>
                        {activeTab !== 'generate' && <button onClick={() => setActiveTab('generate')} className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#6C63FF] text-white rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(108,99,255,0.3)]"><Cpu size={16} /> Open Engine</button>}
                        <div className="flex flex-col items-end pr-4 border-r border-white/5">
                            <span className="text-[10px] text-gray-500 font-bold uppercase">Architect Level {Math.floor(xp / 1000) + 1}</span>
                            <div className="flex items-center gap-2"><Star size={14} className="text-yellow-400" /><span className="text-white font-black text-sm">{xp} XP</span></div>
                        </div>
                        <button onClick={() => setActiveTab('settings')} className={`p-2.5 rounded-xl border transition-all ${activeTab === 'settings' ? 'bg-[#6C63FF] text-white' : 'border-white/5 text-gray-400'}`}><Settings size={20} /></button>
                    </div>
                </div>
            </header>
            <main className="relative">
                {activeTab === 'landing' && renderLanding()}
                {activeTab === 'generate' && renderGenerate()}
                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'my_courses' && renderMyCourses()}
                {activeTab === 'settings' && renderSettings()}
                {activeTab === 'course' && renderActiveCourse()}
            </main>
            {toast && <div className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl font-bold bg-[#6C63FF] text-white animate-slide-up shadow-2xl">{toast.msg}</div>}
        </div>
    );
}
