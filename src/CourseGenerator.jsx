import React, { useState, useEffect, useMemo } from 'react';
import {
    BookOpen, CheckCircle, Circle, Download, LayoutList, PlayCircle,
    Search, FileText, ChevronDown, Check, RefreshCw,
    Trash2, Video, FileQuestion, Map, Loader2, BookMarked, Settings, Save,
    BarChart2, Zap, Award, Target, ChevronRight, Lock, X, Play, Pause,
    Volume2, MessageSquare, Flame, Star, Send, Cpu, Globe, Activity, HardDrive,
    Shield, ArrowRight, Home, Monitor, Layers, Clock, Share2, Maximize2,
    Sparkles, Lightbulb
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? "http://localhost:5000" 
    : "https://coursegenrater.onrender.com";

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
                lessons: Array.from({ length: 5 }).map((_, li) => ({
                    id: `m${mIdx}-l${li+1}`,
                    title: `${techPrefixes[Math.floor(Math.random() * techPrefixes.length)]} ${techSuffixes[Math.floor(Math.random() * techSuffixes.length)]}`,
                    covers: "Synthesizing localized conceptual nodes for optimized architectural throughput.",
                    type: li % 2 === 0 ? "Video" : "Reading",
                    theoretical_breakdown: `### Architectural Deep-Dive\n\nThis unit explores the high-fidelity synthesis of **${techPrefixes[Math.floor(Math.random() * techPrefixes.length)]}** systems. By leveraging recursive pedagogical loops, we can isolate core logic branches from auxiliary noise.\n\n#### Key Protocols\n- **Node Isolation**: Decoupling state from presentation logic.\n- **Vector Synthesis**: Accelerating data transformation via vectorized kernels.\n\n*Mastery of this theory is essential for the upcoming engineering assignment.*`
                })),
                discussion: [
                    { topic: "Logic Decoupling", prompt: "How does node isolation impact total system entropy?" }
                ],
                engineering_assignment: {
                    title: `${techPrefixes[Math.floor(Math.random() * techPrefixes.length)]} Protocol Implementation`,
                    objective: "Architect a proof-of-concept synthesis gateway using localized neural kernels.",
                    deliverables: ["High-fidelity schema design", "Kernel implementation", "Validation report"],
                    difficulty: "Advanced"
                },
                assignment_feedback_criteria: ["Architectural elegance", "Logic branch coverage", "Synthesis velocity"]
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
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  :root {
    --bg-primary: #05050A;
    --text-primary: #FFFFFF;
    --text-secondary: #9CA3AF;
    --accent-blue: #0EA5E9;
    --accent-pink: #F43F5E;
    --card-bg: rgba(13, 15, 26, 0.6);
    --border-clour: rgba(255, 255, 255, 0.1);
    --bg-overlay: linear-gradient(to bottom, rgba(5, 5, 10, 0.4) 0%, #05050A 100%);
    --font-serif: 'Lora', serif;
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
            style.textContent = premiumStyles.replace('blur(20px)', `blur(${blur}px)`).replace('rgba(14, 165, 233, 0.8)', `rgba(14, 165, 233, ${0.8 * neon})`);
        }
    }
};

// ==========================================
// HIGH-FIDELITY SYSTEM COMPONENTS (STABLE)
// ==========================================

const NeuralBackground = React.memo(() => {
    useEffect(() => {
        const canvas = document.getElementById('neural-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const nodes = Array.from({ length: 40 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        }));

        let mouse = { x: null, y: null };
        window.onmousemove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';
            ctx.strokeStyle = 'rgba(14, 165, 233, 0.05)';

            nodes.forEach((node, i) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Mouse interaction
                if (mouse.x) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 150) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }

                nodes.slice(i + 1).forEach(other => {
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.lineWidth = 1 - dist / 100;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="neural-canvas" className="fixed inset-0 pointer-events-none -z-10 opacity-40" />;
});

const TiltCard = ({ children, className = "" }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 20, y: -y * 20 });
    };

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    return (
        <div 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-200 ease-out ${className}`}
            style={{ 
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transformStyle: 'preserve-3d'
            }}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </div>
    );
};

const VoiceEngine = ({ text, isSpeaking, onToggle }) => {
    return (
        <button 
            onClick={onToggle}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all ${
                isSpeaking 
                    ? 'bg-[#0EA5E9] text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] animate-pulse' 
                    : 'bg-[#0EA5E9]/5 border-[#0EA5E9]/20 text-[#0EA5E9] hover:bg-[#0EA5E9]/10 hover:border-[#0EA5E9]/40'
            }`}
        >
            {isSpeaking ? <Volume2 size={20} className="animate-bounce" /> : <Play size={20} />}
            <span className="font-black text-sm uppercase tracking-widest">{isSpeaking ? 'Listening...' : 'Synthesize Audio'}</span>
            {isSpeaking && (
                <div className="flex gap-1 h-3 items-end">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-1 bg-white/40 rounded-full animate-wave" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
            )}
        </button>
    );
};

const FloatingHeader = ({ activeTab, setActiveTab, theme, setTheme, xp, onOpenEngine }) => {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
            <div className="glass-panel border border-white/10 rounded-[2rem] px-8 h-20 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl bg-[#0D0F1A]/60">
                <div className="flex items-center gap-8">
                    <div onClick={() => setActiveTab('landing')} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#F43F5E] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                            <Zap className="text-white" size={22} fill="currentColor" />
                        </div>
                        <span className="text-white font-black text-xl tracking-tighter hidden sm:block">Learn<span className="text-[#0EA5E9]">IQ</span></span>
                    </div>
                    <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
                        {[
                            { id: 'landing', label: 'Home', i: Home },
                            { id: 'dashboard', label: 'Monitor', i: BarChart2 },
                            { id: 'my_courses', label: 'Library', i: BookMarked }
                        ].map(t => (
                            <button 
                                key={t.id} 
                                onClick={() => setActiveTab(t.id)} 
                                className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                                    activeTab === t.id ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                <t.i size={16} /> {t.label}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                    <button onClick={() => setTheme(theme === 'night' ? 'light' : 'night')} className="p-2.5 rounded-xl border border-white/5 text-gray-400 hover:text-[#0EA5E9] transition-all hover:bg-white/5">
                        {theme === 'night' ? <Star size={20} /> : <Globe size={20} />}
                    </button>
                    {activeTab !== 'generate' && (
                        <button 
                            onClick={onOpenEngine} 
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#0EA5E9] text-white rounded-xl font-bold text-sm shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 transition-all animate-shimmer"
                        >
                            <Cpu size={16} /> Open Engine
                        </button>
                    )}
                    <div className="flex flex-col items-end pr-4 border-r border-white/5 hidden xs:flex">
                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">Architect Lvl {Math.floor(xp / 1000) + 1}</span>
                        <div className="flex items-center gap-2 neon-text">
                            <Star size={12} className="text-[#0EA5E9] animate-pulse" fill="currentColor" />
                            <span className="text-white font-black text-sm">{xp} XP</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setActiveTab('settings')} 
                        className={`p-2.5 rounded-xl border transition-all ${
                            activeTab === 'settings' ? 'bg-[#0EA5E9] text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]' : 'border-white/5 text-gray-400 hover:bg-white/5'
                        }`}
                    >
                        <Settings size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

const LiveKernelLog = ({ logs }) => {
    return (
        <div className="bg-black/80 rounded-2xl border border-white/10 p-4 font-mono text-[10px] text-[#0EA5E9] overflow-hidden h-32 relative">
            <div className="absolute top-2 right-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 font-bold uppercase tracking-widest">Live Kernel</span>
            </div>
            <div className="flex flex-col gap-1 overflow-y-auto h-full scrollbar-hide">
                {logs.map((log, i) => (
                    <div key={i} className="flex gap-2">
                        <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
                        <span className="text-white/80">{log}</span>
                    </div>
                ))}
                <div className="w-2 h-4 bg-[#0EA5E9]/40 animate-pulse inline-block"></div>
            </div>
        </div>
    );
};

const AICompletionForecast = ({ course, progress, xp }) => {
    const modules = course.modules;
    const completedModules = modules.filter(m => progress[course.id]?.[m.id]?.completed).length;
    const remainingModules = modules.length - completedModules;
    
    // Heuristic: Each module takes ~45 mins base, offset by XP velocity
    const velocityFactor = Math.max(0.5, 1.5 - (xp / 5000)); 
    const hoursRemaining = (remainingModules * 0.75 * velocityFactor).toFixed(1);
    const estDate = new Date();
    estDate.setHours(estDate.getHours() + parseFloat(hoursRemaining));

    return (
        <div className="flex items-center gap-4 p-4 bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center text-[#0EA5E9]">
                <Clock size={20} />
            </div>
            <div>
                <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-widest">Synthesis Forecast</p>
                <p className="text-white font-bold text-sm">Graduation: {estDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ({hoursRemaining}h remaining)</p>
            </div>
        </div>
    );
};

const CourseGraph = ({ course, activeModuleId, onModuleSelect }) => {
    return (
        <div className="w-full h-32 bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden mb-12 flex items-center justify-center gap-8">
            <div className="absolute top-2 left-4 flex items-center gap-2">
                <Share2 size={12} className="text-gray-500" />
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Neural Node Map</span>
            </div>
            {course.modules.map((m, i) => {
                const isActive = activeModuleId === m.id;
                return (
                    <React.Fragment key={m.id}>
                        <div 
                            onClick={() => onModuleSelect(m.id)}
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all relative group ${
                                isActive 
                                    ? 'bg-[#0EA5E9] border-[#0EA5E9] scale-125 shadow-[0_0_20px_rgba(14,165,233,0.5)]' 
                                    : 'bg-[#1A1F35] border-white/10 hover:border-[#0EA5E9]/50'
                            }`}
                        >
                            <span className={`text-xs font-black ${isActive ? 'text-white' : 'text-gray-500'}`}>{i + 1}</span>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                                <span className="text-[10px] font-bold text-white bg-black/80 px-2 py-1 rounded border border-white/10">{m.title}</span>
                            </div>
                        </div>
                        {i < course.modules.length - 1 && (
                            <div className={`h-0.5 w-12 transition-colors ${isActive ? 'bg-[#0EA5E9]' : 'bg-white/5'}`}></div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const TheoryReader = ({ lesson, isSpeaking, onSpeak }) => {
    const [focusMode, setFocusMode] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const content = lesson.theory_content || lesson.theoretical_breakdown || lesson.covers;

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        setScrollProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };

    return (
        <div 
            onScroll={focusMode ? handleScroll : null}
            className={`space-y-8 animate-reveal transition-all duration-500 ${focusMode ? 'fixed inset-0 z-[101] bg-[#05050A] p-12 overflow-y-auto scrollbar-hide' : ''}`}
        >
            {focusMode && (
                <div className="fixed top-0 left-0 w-full h-1 z-[110] bg-white/5">
                    <div className="h-full bg-[#0EA5E9] transition-all duration-200" style={{ width: `${scrollProgress}%` }}></div>
                </div>
            )}

            <div className={`flex items-center justify-between gap-4 ${focusMode ? 'max-w-5xl mx-auto mb-16' : ''}`}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center border border-[#0EA5E9]/30">
                        <BookMarked className="text-[#0EA5E9]" size={24} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-black text-white">Theoretical Synthesis</h4>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Academic Textbook Tier v7.3</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setFocusMode(!focusMode)} 
                        className={`p-3 rounded-xl border transition-all ${focusMode ? 'bg-[#0EA5E9] text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}
                        title="Toggle Neural Focus Mode"
                    >
                        {focusMode ? <X size={20} /> : <Maximize2 size={20} />}
                    </button>
                    <VoiceEngine text={content} isSpeaking={isSpeaking} onToggle={onSpeak} />
                </div>
            </div>

            <div className={`${focusMode ? 'max-w-5xl mx-auto' : ''}`}>
                {lesson.did_you_know && (
                    <div className="mb-12 p-6 bg-[#0EA5E9]/5 border-l-4 border-[#0EA5E9] rounded-r-2xl italic text-sm text-gray-400 flex gap-4 items-center animate-fade-in group">
                        <Sparkles size={20} className="text-[#0EA5E9] group-hover:rotate-12 transition-transform" />
                        <span><b className="text-white uppercase text-[10px] tracking-widest block mb-1">Pedagogical Context</b> {lesson.did_you_know}</span>
                    </div>
                )}

                <div className={`glass-panel p-10 md:p-16 rounded-[2.5rem] border border-white/5 bg-white/[0.02] relative overflow-hidden group transition-all duration-500 ${focusMode ? 'shadow-[0_0_100px_rgba(14,165,233,0.1)]' : ''}`}>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-[120px] -mr-48 -mt-48 group-hover:bg-[#0EA5E9]/10 transition-all"></div>
                    
                    <div className={`prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg selection:bg-[#0EA5E9]/50 ${focusMode ? 'font-serif' : 'font-medium'}`} style={focusMode ? { fontFamily: 'var(--font-serif)' } : {}}>
                        {lesson.theory_sections ? (
                            lesson.theory_sections.map((section, sIdx) => (
                                <div key={sIdx} className="mb-16 last:mb-0 relative">
                                    <h3 
                                        className="text-4xl font-black text-white mb-8 border-l-8 border-[#0EA5E9] pl-8 py-3 bg-white/5 rounded-r-2xl tracking-tighter"
                                        style={focusMode ? { fontFamily: 'inherit' } : {}}
                                    >
                                        {section.title}
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                                        <div className="lg:col-span-3">
                                            {section.content.split('\n').map((line, pIdx) => {
                                                const processLine = (txt) => {
                                                    return txt
                                                        .replace(/\*\*(.*?)\*\*/g, '<b class="text-[#0EA5E9] font-black">$1</b>')
                                                        .replace(/\*(.*?)\*/g, '<i class="text-white/60">$1</i>')
                                                        .replace(/`(.*?)`/g, '<code class="bg-white/5 px-2 py-0.5 rounded text-pink-400 font-mono text-sm">$1</code>');
                                                };

                                                if (!line.trim()) return <div key={pIdx} className="h-6" />;
                                                if (line.startsWith('-')) return (
                                                    <li key={pIdx} className="ml-6 mb-4 flex gap-4 items-start group">
                                                        <span className="mt-2.5 w-2 h-2 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_rgba(14,165,233,0.5)] group-hover:scale-125 transition-all"></span>
                                                        <span className="flex-1 text-gray-400" dangerouslySetInnerHTML={{ __html: processLine(line.replace('- ', '')) }} />
                                                    </li>
                                                );
                                                
                                                const isFirstParagraph = sIdx === 0 && pIdx === 0;
                                                return (
                                                    <p 
                                                        key={pIdx} 
                                                        className={`mb-8 ${isFirstParagraph ? 'first-letter:text-7xl first-letter:font-black first-letter:text-[#0EA5E9] first-letter:mr-4 first-letter:float-left first-letter:leading-none' : 'indent-10 text-justify'}`} 
                                                        dangerouslySetInnerHTML={{ __html: processLine(line) }} 
                                                    />
                                                );
                                            })}
                                        </div>

                                        {section.insight && (
                                            <aside className="lg:col-span-1 hidden lg:block">
                                                <div className="sticky top-24 p-6 bg-white/5 border border-white/10 rounded-3xl animate-reveal">
                                                    <div className="flex items-center gap-2 mb-4 text-[#0EA5E9]">
                                                        <Lightbulb size={16} />
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#0EA5E9]">Tactical Insight</span>
                                                    </div>
                                                    <p className="text-sm text-gray-400 italic leading-relaxed">{section.insight}</p>
                                                </div>
                                            </aside>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            content.split('\n').map((line, i) => {
                                const processLine = (txt) => {
                                    return txt
                                        .replace(/\*\*(.*?)\*\*/g, '<b class="text-[#0EA5E9] font-black">$1</b>')
                                        .replace(/\*(.*?)\*/g, '<i class="text-white/60">$1</i>')
                                        .replace(/`(.*?)`/g, '<code class="bg-white/5 px-2 py-0.5 rounded text-pink-400 font-mono text-sm">$1</code>');
                                };

                                if (!line.trim()) return <div key={i} className="h-6" />;
                                if (line.startsWith('###')) return <h3 key={i} className="text-3xl font-black text-white mt-12 mb-6 tracking-tighter border-l-4 border-[#0EA5E9] pl-6 py-2 bg-white/5 rounded-r-xl">{line.replace('### ', '')}</h3>;
                                if (line.startsWith('####')) return <h4 key={i} className="text-xl font-black text-[#0EA5E9] mt-8 mb-4 uppercase tracking-[0.2em]">{line.replace('#### ', '')}</h4>;
                                if (line.startsWith('-')) return (
                                    <li key={i} className="ml-6 mb-4 flex gap-4 items-start group">
                                        <span className="mt-2 w-2 h-2 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_rgba(14,165,233,0.5)] group-hover:scale-125 transition-all"></span>
                                        <span className="flex-1 text-gray-400" dangerouslySetInnerHTML={{ __html: processLine(line.replace('- ', '')) }} />
                                    </li>
                                );
                                
                                return (
                                    <p 
                                        key={i} 
                                        className={`mb-8 ${i === 0 ? 'first-letter:text-7xl first-letter:font-black first-letter:text-[#0EA5E9] first-letter:mr-4 first-letter:float-left first-letter:leading-none' : 'indent-10 text-justify'}`} 
                                        dangerouslySetInnerHTML={{ __html: processLine(line) }} 
                                    />
                                );
                            })
                        )}
                    </div>

                    {focusMode && (
                        <div className="mt-24 pt-12 border-t border-white/5 text-center">
                            <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em]">Synthetic Page Analysis Complete</p>
                        </div>
                    )}
                </div>
            </div>
            
            {focusMode && (
                <button 
                    onClick={() => setFocusMode(false)}
                    className="fixed bottom-12 right-12 p-5 bg-[#0EA5E9] text-white rounded-full shadow-[0_0_50px_rgba(14,165,233,0.4)] hover:scale-110 transition-all z-[120]"
                >
                    <X size={28} />
                </button>
            )}
        </div>
    );
};

const AssignmentHub = ({ module, submission, onUpdate, isSubmitting }) => {
    const assignment = module.engineering_assignment || {
        title: "Conceptual Prototype Synthesis",
        objective: "Translate high-level architectural theory into a functional logic branch.",
        deliverables: ["Documentation of core logic", "Prototype validation logs"],
        difficulty: "Intermediate"
    };

    return (
        <div className="space-y-10 animate-reveal">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center border border-pink-500/30">
                        <Cpu className="text-pink-500" size={32} />
                    </div>
                    <div>
                        <h4 className="text-3xl font-black text-white">{assignment.title}</h4>
                        <div className="flex items-center gap-3 mt-1">
                            <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">Practical Synthesis</span>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{assignment.difficulty} Complexity</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
                    <h5 className="text-white font-bold flex items-center gap-2"><Target size={18} className="text-pink-500" /> Mission Objective</h5>
                    <p className="text-gray-400 leading-relaxed">{assignment.objective}</p>
                    <div className="space-y-4">
                        <h6 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Required Deliverables</h6>
                        {assignment.deliverables.map((d, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-pink-500/30 transition-all">
                                <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 font-black text-xs">{i + 1}</div>
                                <span className="text-sm font-bold text-gray-300">{d}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-black/20 flex flex-col h-full relative overflow-hidden">
                    <div className="absolute top-2 right-4 flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${submission?.completed ? 'bg-green-500' : 'bg-[#0EA5E9]'}`}></div>
                        <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Synthesis Terminal v1.0</span>
                    </div>
                    
                    <h5 className="text-white font-bold mb-6">Execution Log & Feedback</h5>
                    
                    {!submission?.completed ? (
                        <div className="flex-1 flex flex-col">
                            <label htmlFor="assignment-terminal" className="sr-only">Practical synthesis submission</label>
                            <textarea 
                                id="assignment-terminal"
                                name="assignmentContent"
                                placeholder="Paste your architectural summary or logic branch here for validation..."
                                className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 text-sm font-mono text-[#0EA5E9] outline-none focus:border-[#0EA5E9]/50 transition-all resize-none mb-6 scrollbar-hide"
                                value={submission?.content || ''}
                                onChange={e => onUpdate({ content: e.target.value })}
                            />
                            <button 
                                onClick={() => onUpdate({ submit: true })}
                                disabled={isSubmitting || !submission?.content}
                                className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                                    isSubmitting ? 'bg-gray-700 text-gray-500' : 'bg-[#0EA5E9] text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-[1.02]'
                                }`}
                            >
                                {isSubmitting ? 'Synchronizing Kernels...' : 'Submit Architecture'}
                            </button>
                        </div>
                    ) : (
                        <div className="flex-1 space-y-6">
                            <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
                                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-3">Kernel Feedback [APPROVED]</p>
                                <p className="text-gray-300 italic text-sm leading-relaxed">"{submission.feedback}"</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Architectural Rating</p>
                                    <p className="text-2xl font-black text-white">{(submission.score || 94)}%</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">XP Synchronized</p>
                                    <p className="text-2xl font-black text-green-500">+150</p>
                                </div>
                            </div>
                            <button onClick={() => onUpdate({ reset: true })} className="w-full py-3 bg-white/5 text-gray-500 rounded-xl font-black text-[10px] uppercase tracking-widest border border-white/5 hover:bg-white/10 transition-all">Re-Open Synthesis Branch</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
const DynamicBackground = React.memo(({ selectedBg }) => {
    const [bgState, setBgState] = useState({ prev: selectedBg, curr: selectedBg, fade: false });

    useEffect(() => {
        if (selectedBg !== bgState.curr) {
            setBgState({ prev: bgState.curr, curr: selectedBg, fade: true });
            const timer = setTimeout(() => {
                setBgState(prev => ({ ...prev, fade: false, prev: selectedBg }));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [selectedBg]);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{ backgroundImage: `url(${bgState.prev})`, opacity: bgState.fade ? 0 : 0.8 }}
            />
            {bgState.fade && (
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-fade-in"
                    style={{ backgroundImage: `url(${bgState.curr})`, opacity: 0.8 }}
                />
            )}
        </div>
    );
});

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
    const [ytApiKey, setYtApiKey] = useState(() => localStorage.getItem('youtubeApiKey') || 'AIzaSyAxsKIFGF9KL7lxHWQtTqBKQbpVTljllls');
    const [apiKeyInput, setApiKeyInput] = useState(apiKey);
    const [ytApiKeyInput, setYtApiKeyInput] = useState(ytApiKey);

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

    // BACKGROUND SLIDESHOW - Linear Stable Transition
    useEffect(() => {
        const bgImages = [
            '/assets/bg/bg1.png',
            '/assets/bg/bg2.png',
            '/assets/bg/bg3.png',
            '/assets/bg/bg4.png',
            '/assets/bg/bg5.png',
            '/assets/bg/bg6.png'
        ];
        
        // Preload images to prevent blink
        bgImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        const timer = setInterval(() => {
            setEngineConfig(prev => {
                const currentIndex = bgImages.indexOf(prev.selectedBg);
                const nextIndex = (currentIndex + 1) % bgImages.length;
                if (prev.selectedBg === bgImages[nextIndex]) return prev;
                return { ...prev, selectedBg: bgImages[nextIndex] };
            });
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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

    // PHASE 5.0 STATE (CORE INTELLIGENCE)
    const [kernelLogs, setKernelLogs] = useState([]);
    const [lessonStartTime, setLessonStartTime] = useState(Date.now());
    const [engagementTime, setEngagementTime] = useState(() => safeJSONParse('userEngagement', {}));
    const [assignmentSubmissions, setAssignmentSubmissions] = useState(() => safeJSONParse('assignmentSubmissions', {}));
    const [submittingAssignment, setSubmittingAssignment] = useState(false);

    const addKernelLog = (msg) => {
        setKernelLogs(prev => [msg, ...prev].slice(0, 15));
    };

    const handleSpeak = (text) => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            addKernelLog("Audio Synthesis Terminated.");
        } else {
            const utter = (txtStack) => {
                const nextTxt = txtStack.shift();
                if (!nextTxt) {
                    setIsSpeaking(false);
                    addKernelLog("Audio Synthesis Completed Successfully.");
                    return;
                }
                const utterance = new SpeechSynthesisUtterance(nextTxt);
                utterance.rate = 1.05;
                utterance.onend = () => utter(txtStack);
                utterance.onerror = () => {
                    setIsSpeaking(false);
                    addKernelLog("CRITICAL: Audio Synthesis Error.");
                };
                window.speechSynthesis.speak(utterance);
            };

            const chunks = text.match(/[^.!?]+[.!?]+/g) || [text];
            setIsSpeaking(true);
            addKernelLog(`Initiating Synthesis for ${chunks.length} theoretical blocks...`);
            utter([...chunks]);
        }
    };

    // PROGRESS & NOTES STATE
    const [progress, setProgress] = useState(() => safeJSONParse('courseProgress', {}));

    // SCROLL REVEAL OBSERVER
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.15 });

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [activeTab]);
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
    useEffect(() => { localStorage.setItem('youtubeApiKey', ytApiKey); }, [ytApiKey]);
    useEffect(() => { localStorage.setItem('courseProgress', JSON.stringify(progress)); }, [progress]);
    useEffect(() => { localStorage.setItem('courseNotes', JSON.stringify(notes)); }, [notes]);
    useEffect(() => { localStorage.setItem('userXp', JSON.stringify(xp)); }, [xp]);
    useEffect(() => { localStorage.setItem('userStreak', JSON.stringify(streak)); }, [streak]);
    useEffect(() => { localStorage.setItem('communityPosts', JSON.stringify(communityPosts)); }, [communityPosts]);
    useEffect(() => { localStorage.setItem('engineConfig', JSON.stringify(engineConfig)); }, [engineConfig]);
    useEffect(() => { localStorage.setItem('synthesisHistory', JSON.stringify(synthesisHistory)); }, [synthesisHistory]);
    useEffect(() => { localStorage.setItem('assignmentSubmissions', JSON.stringify(assignmentSubmissions)); }, [assignmentSubmissions]);

    const showToast = (msg, type = 'success') => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 4000);
    };

    const saveSettings = () => {
        setApiKey(apiKeyInput);
        setYtApiKey(ytApiKeyInput);
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
            setGenerationStep(2); // "Accessing Python AI Engine..."
            addKernelLog("Establishing connection to Local Python Backend...");
            addKernelLog("Protocol: HTTP/1.1 Synthesis Gateway... [OK]");

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
            await new Promise(r => setTimeout(r, 500));
            // Use generating AI quiz if available, otherwise fallback to mock
            const qs = module.quiz && module.quiz.length > 0 ? module.quiz : generateMockQuiz(module.title);
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

    useEffect(() => {
        if (activeLessonId && activeModuleId && currentCourse) {
            const module = currentCourse.modules.find(m => m.id === activeModuleId);
            const lesson = module?.lessons.find(l => l.id === activeLessonId);
            if (lesson?.type?.toLowerCase() === 'reading' || lesson?.type?.toLowerCase() === 'technical') {
                setActiveLessonTab('theory');
            } else if (lesson?.type?.toLowerCase() === 'video') {
                setActiveLessonTab('videos');
            }
        }
    }, [activeLessonId, activeModuleId, currentCourse]);

    const handleAssignmentUpdate = async (moduleId, data) => {
        if (data.submit) {
            setSubmittingAssignment(true);
            addKernelLog(`Initiating Synthesis Validation for Module [${moduleId}]...`);
            
            // Simulate AI Synthesis delay
            await new Promise(r => setTimeout(r, 2500));
            
            const currentSub = assignmentSubmissions[moduleId] || {};
            const feedbackPool = [
                "Architectural integrity verified. Logic branches show optimal throughput.",
                "Conceptual alignment confirmed. Unit isolation protocols are within nominal range.",
                "Synthesis successful. Practical application of neural kernels demonstrated high fidelity."
            ];
            
            setAssignmentSubmissions(prev => ({
                ...prev,
                [moduleId]: {
                    ...currentSub,
                    completed: true,
                    feedback: feedbackPool[Math.floor(Math.random() * feedbackPool.length)],
                    score: 90 + Math.floor(Math.random() * 10),
                    timestamp: Date.now()
                }
            }));
            setXp(prev => prev + 150);
            setSubmittingAssignment(false);
            addKernelLog(`Synthesis Validated. XP +150 synchronized. [MODULE MASTERED]`);
            showToast('Practical Synthesis Successful', 'success');
        } else if (data.reset) {
            setAssignmentSubmissions(prev => ({
                ...prev,
                [moduleId]: { ...prev[moduleId], completed: false }
            }));
            addKernelLog(`Synthesis Branch [${moduleId}] Re-Opened for Refinement.`);
        } else {
            setAssignmentSubmissions(prev => ({
                ...prev,
                [moduleId]: { ...prev[moduleId], ...data }
            }));
        }
    };

    const toggleLessonComplete = (courseId, lessonId) => {
        const newProgress = { ...progress };
        if (!newProgress[courseId]) newProgress[courseId] = {};
        newProgress[courseId][lessonId] = !newProgress[courseId][lessonId];
        setProgress(newProgress);
        localStorage.setItem('courseProgress', JSON.stringify(newProgress));
        
        if (newProgress[courseId][lessonId]) {
            setXp(prev => prev + 25);
            addKernelLog(`Unit [${lessonId}] validated. XP +25 synthesized.`);
            showToast('Module expertise increased');
        }
    };

    const getCourseProgress = (course) => {
        if (!course || !course.id) return { completed: 0, total: 0, percent: 0 };
        const courseProg = progress[course.id] || {};
        const total = (course.modules || []).reduce((acc, m) => acc + (m?.lessons?.length || 0), 0);
        const completed = Object.values(courseProg).filter(Boolean).length;
        return { completed, total, percent: total ? Math.round((completed / total) * 100) : 0 };
    };

    const toggleAudio = (text) => handleSpeak(text);

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
// HIGH-FIDELITY INTERACTIVE COMPONENTS
// ==========================================


    // ==========================================
    // RENDERERS
    // ==========================================

    const renderGenerating = () => {
        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (generationStep / 4) * circumference;

        return (
            <div className="fixed inset-0 z-[100] bg-[#05050A] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* AMBIENT NEURAL PULSE */}
                <div className="absolute inset-0 bg-[#0EA5E9]/5 animate-pulse-slow -z-10"></div>
                
                <div className="relative mb-16 scale-125">
                    {/* OUTER RING */}
                    <svg className="w-48 h-48 -rotate-90 filter drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                        <circle
                            cx="96"
                            cy="96"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            className="text-white/5"
                        />
                        <circle
                            cx="96"
                            cy="96"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray={circumference}
                            style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 1s ease-in-out' }}
                            strokeLinecap="round"
                            className="text-[#0EA5E9]"
                        />
                    </svg>
                    
                    {/* CENTER CORE */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#0EA5E9] to-[#6366F1] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(14,165,233,0.5)] animate-pulse">
                        <Cpu size={32} className="text-white animate-spin-slow" />
                    </div>

                    {/* ORBITAL NODES */}
                    {[0, 90, 180, 270].map((angle, i) => (
                        <div 
                            key={i}
                            className="absolute w-2 h-2 bg-[#F43F5E] rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                            style={{ 
                                top: '50%', 
                                left: '50%', 
                                transform: `rotate(${angle + (generationStep * 90)}deg) translate(96px) rotate(-${angle + (generationStep * 90)}deg)`,
                                transition: 'transform 1s ease-in-out'
                            }}
                        />
                    ))}
                </div>

                <div className="reveal-on-scroll">
                    <h2 className="text-5xl font-black text-white mb-6 tracking-tighter">
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Reality</span>
                    </h2>
                    <div className="flex flex-col items-center gap-2 mb-12">
                        <p className="text-[#0EA5E9] font-black uppercase text-xs tracking-[0.4em] animate-pulse">
                            {generationStep === 1 && "Initializing Matrix Layers..."}
                            {generationStep === 2 && "Synchronizing Local Engine..."}
                            {generationStep === 3 && "Synthesizing Deep Curriculum..."}
                            {generationStep === 4 && "Finalizing Neural Architecture..."}
                        </p>
                        <span className="text-gray-600 font-mono text-[10px]">Step {generationStep} of 4 • Protocol v7.0</span>
                    </div>
                </div>
                
                <div className="w-full max-w-2xl bg-black/40 rounded-3xl border border-white/5 p-2 backdrop-blur-xl">
                    <LiveKernelLog logs={kernelLogs} />
                </div>
            </div>
        );
    };

    const renderLanding = () => (
        <div className="max-w-7xl mx-auto px-6 py-20 animate-fade-in relative text-center">
            {/* ADVANCED PARALLAX BACKGROUND BLOBS */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0EA5E9]/10 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6366F1]/5 blur-[120px] rounded-full -z-10 animate-float"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-gradient-to-b from-transparent via-[#0EA5E9]/5 to-transparent -z-20"></div>

            <div className="flex flex-col items-center mb-32 pt-12 reveal-on-scroll">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full text-[#0EA5E9] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    <Zap size={14} /> Neural Engine v4.0 Active
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                    Architect Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] via-[#6366F1] to-[#F43F5E] neon-text animate-pulse">Intellectual Future</span>
                </h1>
                <p className="max-w-3xl text-xl text-gray-400 font-medium mb-12">Synthesize industrial-grade curricula locally. Zero Latency. Private. Professional.</p>
                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    <button onClick={() => setActiveTab('generate')} className="px-12 py-5 bg-[#0EA5E9] text-white rounded-2xl font-black text-xl hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(14,165,233,0.4)] animate-shimmer">
                        Initialize Synthesis <ArrowRight size={24} />
                    </button>
                    <button onClick={() => document.getElementById('about-engine')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-[#0EA5E9]/5 text-white border border-[#0EA5E9]/20 rounded-2xl font-black text-lg hover:bg-[#0EA5E9]/10 transition-all">Explore Architecture</button>
                </div>

                {/* ENGINE STATS STRIP */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mb-24">
                    {[
                        { label: 'Neural Uptime', value: '99.99%', icon: Activity, color: 'text-green-400' },
                        { label: 'Latency', value: '280ms', icon: Zap, color: 'text-[#0EA5E9]' },
                        { label: 'Encryption', value: 'AES-2048', icon: Shield, color: 'text-pink-500' },
                        { label: 'Linguistic Logic', value: 'Neural v4.0', icon: Globe, color: 'text-blue-400' }
                    ].map((s, i) => (
                        <TiltCard key={i} className="group">
                            <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center hover:border-[#0EA5E9]/30 transition-all h-full">
                                <s.icon size={20} className={`${s.color} mb-2 group-hover:scale-125 transition-all`} />
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{s.label}</span>
                                <span className="text-xl font-black text-white">{s.v || s.value}</span>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                {/* LIVE NEURAL FEED (ADVANCED DETAIL) */}
                <div className="w-full max-w-5xl mb-32 glass-card p-4 rounded-2xl border border-white/5 overflow-hidden text-left relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#0EA5E9]"></div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-widest">Live Neural Feed (v4.0 Protocol)</span>
                    </div>
                    <div className="space-y-1 font-mono text-[10px] text-gray-500 overflow-hidden h-12">
                        <p className="animate-push-text">[SUCCESS] Node SYN-452 validated in 120ms</p>
                        <p className="animate-push-text" style={{ animationDelay: '1s' }}>[ASYNC] Pre-fetching YouTube resources for topic: Architectural Patterns</p>
                        <p className="animate-push-text" style={{ animationDelay: '2s' }}>[NEURAL] Optimizing pedagogical hierarchy for Cognitive Retention</p>
                    </div>
                </div>
            </div>

            {/* THROUGHPUT ANALYTICS SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40 items-center text-left reveal-on-scroll">
                <div>
                    <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">
                        Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Throughput</span> Analytics
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">Our advanced synthesis engine operates at industrial precision, utilizing localized LLM orchestration for latency-free curriculum architecture.</p>
                    <div className="space-y-6">
                        {[
                            { label: 'Synthesis Accuracy', val: '98%', icon: Target },
                            { label: 'Logical Cohesion', val: '0.94 Alpha', icon: Activity },
                            { label: 'Security Protocols', val: 'Zero-Trust', icon: Shield }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#0EA5E9]/30 transition-all">
                                    <item.icon size={20} className="text-[#0EA5E9]" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-500 uppercase">{item.label}</p>
                                    <p className="text-white font-black">{item.val}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <TiltCard className="h-[400px]">
                    <div className="glass-card p-8 rounded-[2.5rem] border border-white/10 relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-transparent rounded-[2.5rem]"></div>
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2 relative z-10"><BarChart2 size={18} className="text-[#0EA5E9]" /> System Performance Metrics</h3>
                        <div className="min-h-[250px] pb-12 relative z-10">
                            <ResponsiveContainer width="99.9%" height={250}>
                                <AreaChart data={[
                                    { t: 0, v: 40 }, { t: 10, v: 65 }, { t: 20, v: 55 }, { t: 30, v: 85 }, { t: 40, v: 75 }, { t: 50, v: 95 }
                                ]}>
                                    <defs>
                                        <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.4}/>
                                            <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="v" stroke="#0EA5E9" strokeWidth={4} fillOpacity={1} fill="url(#colorVis)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </TiltCard>
            </div>

            {/* SYSTEMS ARCHITECTURE DEEP-DIVE */}
            <div className="mb-40 text-center reveal-on-scroll">
                <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">Engine <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#6366F1]">Architecture</span></h2>
                <p className="text-gray-500 mb-16 max-w-2xl mx-auto uppercase text-[10px] font-black tracking-[0.3em]">Multi-Layered Pedagogical Synthesis Protocol</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* CONNECTOR LINE (Visual Only) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
                    
                    {[
                        { title: 'Atomic Mapping', desc: 'Deconstructs topic into granular conceptual nodes for precise navigation.', icon: Target },
                        { title: 'Contextual Memory', desc: 'Maintains logical thread across modules using recursive state management.', icon: HardDrive },
                        { title: 'Pedagogical Layout', desc: 'Synthesizes optimized hierarchy for maximum cognitive retention.', icon: Layers }
                    ].map((feature, i) => (
                        <TiltCard key={i}>
                            <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-[#0EA5E9]/40 transition-all hover:-translate-y-2 group cyber-glow text-center h-full">
                                <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#0EA5E9]/20 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 italic">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto mb-40 glass-panel p-12 rounded-[3rem] border border-[#0EA5E9]/20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-black text-white mb-6">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-pink-500">Accelerate?</span></h2>
                    <p className="text-gray-400 text-lg mb-10">Experience the future of localized educational synthesis. Privatized. Professional. Fast.</p>
                    <button onClick={() => setActiveTab('generate')} className="px-12 py-5 bg-[#0EA5E9] text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(108,99,255,0.4)]">Initialize Engine</button>
                </div>
            </div>
        </div>
    );

    const renderGenerate = () => (
        <div className="max-w-4xl mx-auto mt-24 px-6 pb-20 relative">
            <TiltCard>
                <div className="glass-card rounded-[3rem] p-12 border border-white/10 animate-slide-up relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="flex flex-col items-center mb-12">
                        <div className="w-20 h-20 bg-[#0EA5E9]/20 rounded-[2rem] flex items-center justify-center mb-6 border border-[#0EA5E9]/40 shadow-[0_0_30px_rgba(14,165,233,0.2)] animate-pulse">
                            <Cpu className="text-[#0EA5E9]" size={40} />
                        </div>
                        <h2 className="text-5xl font-black text-white text-center tracking-tight">Neural Architect</h2>
                        <p className="text-gray-500 uppercase text-[10px] font-black tracking-[0.3em] mt-4">Autonomous Curriculum Synthesis Engine</p>
                    </div>
                    <div className="space-y-8">
                        <div className="group">
                            <label htmlFor="topic-input" className="flex items-center gap-2 text-[#0EA5E9] text-xs font-black uppercase tracking-widest mb-3 cursor-pointer">
                                <Zap size={14} /> Subject Matter
                            </label>
                            <input id="topic-input" name="topic" list="topics-list" type="text" className="w-full bg-[#0D0F1A]/50 border border-[#2A2F45] rounded-2xl px-6 py-4 text-white focus:border-[#0EA5E9] transition-all outline-none text-lg font-medium" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Quantum Computing, Advanced React Patterns..." />
                            <datalist id="topics-list">{SUGGESTED_TOPICS.map((t, i) => <option key={i} value={t} />)}</datalist>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                                <label htmlFor="modules-count" className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 cursor-pointer">
                                    <Layers size={12} /> Module Count
                                </label>
                                <input id="modules-count" name="modulesCount" type="number" className="bg-transparent text-white w-full outline-none text-2xl font-black" value={modulesCount} onChange={e => setModulesCount(e.target.value)} />
                            </div>
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col gap-2">
                                <label htmlFor="lessons-count" className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2 cursor-pointer">
                                    <Monitor size={12} /> Units Per Module
                                </label>
                                <input id="lessons-count" name="lessonsCount" type="number" className="bg-transparent text-white w-full outline-none text-2xl font-black" value={lessonsCount} onChange={e => setLessonsCount(e.target.value)} />
                            </div>
                        </div>
                        <button onClick={handleGenerate} className="w-full py-6 bg-gradient-to-r from-[#0EA5E9] via-[#6366F1] to-[#F43F5E] text-white rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(14,165,233,0.3)] hover:scale-[1.02] transition-all animate-shimmer">
                            Initiate Core Synthesis
                        </button>
                    </div>
                </div>
            </TiltCard>
        </div>
    );

    const renderDashboard = () => {
        const stats = getAnalytics();
        return (
            <div className="max-w-7xl mx-auto p-6 animate-fade-in">
                <header className="mb-12"><h2 className="text-4xl font-black text-white">Monitor Center</h2><p className="text-gray-400">Live analytics of your intellectual ecosystem.</p></header>
                <div className="grid grid-cols-4 gap-6 mb-12">
                    {[
                        { l: 'Synthesized Nodes', v: courses.reduce((acc, c) => acc + c.modules.length, 0), i: Cpu },
                        { l: 'Knowledge Depth', v: `${courses.length * 12}%`, i: Target },
                        { l: 'Synthesis Streak', v: streak.days, i: Flame }
                    ].map((s, i) => (
                        <TiltCard key={i}>
                            <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4 h-full">
                                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9]">
                                    <s.i size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{s.l}</p>
                                    <p className="text-2xl font-black text-white">{s.v}</p>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <TiltCard className="lg:col-span-2">
                        <div className="glass-card p-8 rounded-3xl border border-white/5 h-96 flex flex-col">
                            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                <Activity size={18} className="text-[#0EA5E9]" /> Neural Saturation Analytics
                            </h3>
                            <div className="flex-1 min-h-[300px]">
                                <ResponsiveContainer width="99.9%" height="100%">
                                    <RadarChart data={stats.radarData}>
                                        <PolarGrid stroke="var(--border-clour)" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 10 }} />
                                        <Radar dataKey="A" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.6} />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </TiltCard>
                    <div className="flex flex-col gap-8">
                        <TiltCard>
                            <div className="glass-card p-8 rounded-3xl border border-white/5 h-44">
                                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
                                    <Zap size={16} className="text-[#F43F5E]" /> Growth Velocity
                                </h3>
                                <div className="h-24 min-h-[96px]">
                                    <ResponsiveContainer width="99.9%" height="100%">
                                        <AreaChart data={stats.velocityData}>
                                            <Area type="monotone" dataKey="progress" stroke="#F43F5E" fill="#F43F5E" fillOpacity={0.1} />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </TiltCard>
                        <LiveKernelLog logs={kernelLogs} />
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
                    <div className="glass-card p-8 rounded-3xl border border-white/5 h-80 min-h-[320px]">
                        <h3 className="text-white font-bold mb-4">Neural Node Distribution</h3>
                        <ResponsiveContainer width="99.9%" height="100%">
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
                    <div className="glass-card p-8 rounded-3xl border border-[#0EA5E9]/30 bg-[#0EA5E9]/5 flex flex-col justify-center">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(courses || []).map(c => {
                    const p = getCourseProgress(c);
                    return (
                        <TiltCard key={c.id}>
                            <div className="glass-card p-6 rounded-3xl relative h-full">
                                <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                                <div className="w-full h-1 bg-white/5 rounded-full mb-4"><div className="h-full bg-[#0EA5E9]" style={{ width: `${p.percent}%` }}></div></div>
                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-xs text-gray-500">{p.percent}% Complete</span>
                                    <div className="flex gap-2">
                                        <button onClick={() => { setCurrentCourse(c); setActiveTab('course'); }} className="p-2 bg-[#0EA5E9] text-white rounded-lg hover:scale-110 transition-all"><PlayCircle size={18} /></button>
                                        <button onClick={() => setCourses(courses.filter(lc => lc.id !== c.id))} className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all"><Trash2 size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
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
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Cpu size={20} className="text-[#0EA5E9]" /> Neural Synthesis</h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="creativity-bias" className="text-xs font-bold text-gray-500 uppercase cursor-pointer">Creativity Bias</label>
                                <span className="text-xs text-[#0EA5E9] font-bold">{Math.round(engineConfig.creativity * 100)}%</span>
                            </div>
                            <input id="creativity-bias" type="range" min="0" max="1" step="0.1" value={engineConfig.creativity} onChange={e => setEngineConfig({ ...engineConfig, creativity: parseFloat(e.target.value) })} className="w-full accent-[#0EA5E9]" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="hierarchical-depth" className="text-xs font-bold text-gray-500 uppercase cursor-pointer">Hierarchical Depth</label>
                                <span className="text-xs text-[#F43F5E] font-bold">{Math.round(engineConfig.depth * 100)}%</span>
                            </div>
                            <input id="hierarchical-depth" type="range" min="0" max="1" step="0.1" value={engineConfig.depth} onChange={e => setEngineConfig({ ...engineConfig, depth: parseFloat(e.target.value) })} className="w-full accent-[#F43F5E]" />
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <label htmlFor="anthropic-key" className="text-white text-sm font-bold block mb-2 cursor-pointer">Anthropic Protocol Key (L3 Link)</label>
                            <input id="anthropic-key" name="anthropicKey" type="password" value={apiKeyInput} onChange={e => setApiKeyInput(e.target.value)} className="w-full bg-[#0D0F1A] border border-[#2A2F45] p-3 text-white rounded-xl text-sm mb-4" placeholder="sk-ant-..." />
                            
                            <label htmlFor="youtube-key" className="text-white text-sm font-bold block mb-2 cursor-pointer">YouTube Engine Key</label>
                            <input id="youtube-key" name="youtubeKey" type="password" value={ytApiKeyInput} onChange={e => setYtApiKeyInput(e.target.value)} className="w-full bg-[#0D0F1A] border border-[#2A2F45] p-3 text-white rounded-xl text-sm" placeholder="AIza..." />
                        </div>
                    </div>
                </div>

                {/* VISUAL CONFIG */}
                <div className="glass-card p-10 rounded-3xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2"><LayoutList size={20} className="text-[#F43F5E]" /> Visual Matrix</h3>
                    <div className="space-y-8">
                        <div>
                            <label className="text-xs font-black text-gray-500 uppercase tracking-widest block mb-4">Interface Atmosphere</label>
                            <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                                <button onClick={() => setTheme('night')} className={`flex-1 py-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all ${theme === 'night' ? 'bg-[#0EA5E9] text-white shadow-lg' : 'text-gray-500'}`}><Star size={14} /> Obscural</button>
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
                                            className={`aspect-video rounded-lg bg-cover bg-center border-2 transition-all ${engineConfig.selectedBg === path ? 'border-[#0EA5E9] scale-110' : 'border-transparent hover:border-white/20'}`}
                                            style={{ backgroundImage: `url(${path})` }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="neon-intensity" className="text-xs font-bold text-gray-500 uppercase cursor-pointer">Neon Intensity</label>
                                <span className="text-xs text-[#0EA5E9] font-bold">{Math.round(engineConfig.neonIntensity * 100)}%</span>
                            </div>
                            <input id="neon-intensity" type="range" min="0" max="2" step="0.1" value={engineConfig.neonIntensity} onChange={e => {
                                const newConfig = { ...engineConfig, neonIntensity: parseFloat(e.target.value) };
                                setEngineConfig(newConfig);
                                updateGlobalStyles(newConfig);
                            }} className="w-full accent-[#0EA5E9]" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="glass-blur" className="text-xs font-bold text-gray-500 uppercase cursor-pointer">Glass Blur Radius</label>
                                <span className="text-xs text-[#F43F5E] font-bold">{engineConfig.glassBlur}px</span>
                            </div>
                            <input id="glass-blur" type="range" min="0" max="50" step="1" value={engineConfig.glassBlur} onChange={e => {
                                const newConfig = { ...engineConfig, glassBlur: parseInt(e.target.value) };
                                setEngineConfig(newConfig);
                                updateGlobalStyles(newConfig);
                            }} className="w-full accent-[#F43F5E]" />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <span className="text-sm font-bold text-white">High Performance Mode</span>
                            <button onClick={() => setEngineConfig({ ...engineConfig, highPerformance: !engineConfig.highPerformance })} className={`w-12 h-6 rounded-full transition-all relative ${engineConfig.highPerformance ? 'bg-[#0EA5E9]' : 'bg-gray-700'}`}>
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
                                <div onClick={() => setActiveModuleId(m.id)} className={`p-3 rounded-xl cursor-pointer font-bold ${activeModuleId === m.id ? 'bg-[#0EA5E9]/20 text-[#0EA5E9]' : 'text-gray-400'}`}>{m.title}</div>
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
                        <header className="mb-12 flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <h1 className="text-5xl font-black text-white mb-4">{currentCourse.title}</h1>
                                <div className="h-1 w-20 bg-[#0EA5E9]"></div>
                            </div>
                            <AICompletionForecast course={currentCourse} progress={progress} xp={xp} />
                        </header>
                        
                        <CourseGraph 
                            course={currentCourse} 
                            activeModuleId={mActive.id} 
                            onModuleSelect={(id) => { setActiveModuleId(id); setActiveLessonId(null); }} 
                        />
                        {lActive && (
                            <div className="glass-card p-10 rounded-3xl border border-white/5 animate-fade-in">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0EA5E9]/10 text-xs font-black text-[#0EA5E9] uppercase border border-[#0EA5E9]/20">
                                        {lActive.type === 'Video' ? <Video size={12} /> : lActive.type === 'Project' ? <Cpu size={12} /> : <FileText size={12} />}
                                        {lActive.type}
                                    </span>
                                    <button onClick={() => toggleLessonComplete(currentCourse.id, lActive.id)} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${progress[currentCourse.id]?.[lActive.id] ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-white text-black hover:bg-gray-200'}`}>
                                        {progress[currentCourse.id]?.[lActive.id] ? '✓ Validated' : 'Complete Unit'}
                                    </button>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6">{lActive.title}</h3>
                                
                                {lActive.type === 'Video' && mActive.videos && mActive.videos.length > 0 && (
                                    <div className="mb-8 rounded-2xl overflow-hidden glass-panel border border-[#0EA5E9]/30 shadow-[0_0_30px_rgba(108,99,255,0.2)]">
                                        <div className="aspect-video relative">
                                            <iframe 
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${mActive.videos[0].id}?autoplay=0&rel=0`}
                                                title={lActive.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                <p className="text-gray-400 leading-relaxed text-lg mb-12">{lActive.covers}</p>
                                
                                {/* REFACTORED ADAPTIVE TAB NAVIGATION */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-between gap-6 bg-white/5 p-2 rounded-2.5xl border border-white/5 backdrop-blur-md overflow-x-auto scrollbar-hide">
                                        <div className="flex items-center gap-1 min-w-max">
                                            {[
                                                { id: 'theory', label: 'Theory Mastery', i: BookOpen, color: 'text-[#0EA5E9]', bg: 'bg-[#0EA5E9]/10' },
                                                { id: 'assignment', label: 'Practical Assignment', i: Cpu, color: 'text-pink-500', bg: 'bg-pink-500/10' },
                                                { id: 'videos', label: 'Video Resources', i: Video, color: 'text-blue-400', bg: 'bg-blue-400/10', live: true },
                                                { id: 'notes', label: 'Secure Workspace', i: FileText, color: 'text-gray-400', bg: 'bg-white/5' },
                                                { id: 'community', label: 'Global Intel', i: MessageSquare, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                                                { id: 'quiz', label: 'Module Evaluation', i: Award, color: 'text-green-500', bg: 'bg-green-500/10' }
                                            ].map(t => (
                                                <button 
                                                    key={t.id}
                                                    onClick={() => { 
                                                        setActiveLessonTab(t.id); 
                                                        if (t.id === 'quiz' && !quizState[mActive.id]) startQuiz(mActive); 
                                                    }} 
                                                    className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-3 transition-all relative whitespace-nowrap group ${
                                                        activeLessonTab === t.id 
                                                            ? `${t.bg} ${t.color} shadow-lg ring-1 ring-white/10` 
                                                            : 'text-gray-500 hover:text-white hover:bg-white/5'
                                                    }`}
                                                >
                                                    <t.i size={16} className={`${activeLessonTab === t.id ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} /> 
                                                    {t.label}
                                                    {t.live && (
                                                        <span className="flex h-2 w-2 relative">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                                        </span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="hidden sm:flex items-center gap-4 px-4 border-l border-white/10">
                                            <VoiceEngine 
                                                text={lActive.covers} 
                                                isSpeaking={isSpeaking} 
                                                onToggle={() => handleSpeak(lActive.covers)} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {activeLessonTab === 'theory' && (
                                    <TheoryReader 
                                        lesson={lActive} 
                                        isSpeaking={isSpeaking} 
                                        onSpeak={() => {
                                            const speakText = lActive.theory_sections 
                                                ? lActive.theory_sections.map(s => `${s.title}. ${s.content}`).join(' ')
                                                : (lActive.theory_content || lActive.theoretical_breakdown || lActive.covers);
                                            handleSpeak(speakText);
                                        }} 
                                    />
                                )}
                                {activeLessonTab === 'assignment' && <AssignmentHub module={mActive} submission={assignmentSubmissions[mActive.id]} isSubmitting={submittingAssignment} onUpdate={(data) => handleAssignmentUpdate(mActive.id, data)} />}
                                
                                {activeLessonTab === 'notes' && (
                                    <div className="mt-6">
                                        <label htmlFor="workspace-notes" className="sr-only">Local secure notes</label>
                                        <textarea id="workspace-notes" name="workspaceNotes" className="w-full bg-[#0D0F1A] p-4 text-white rounded-xl h-40 outline-none" placeholder="Local secure notes..." value={notes[lActive.id] || ''} onChange={e => setNotes({ ...notes, [lActive.id]: e.target.value })} />
                                    </div>
                                )}
                                
                                {activeLessonTab === 'community' && (
                                    <div className="mt-8 space-y-8 animate-fade-in">
                                        {/* DISCUSSION POINTS */}
                                        {mActive.discussion && mActive.discussion.length > 0 && (
                                            <div className="space-y-4">
                                                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Flame size={20} className="text-orange-500" /> Discussion Topics</h4>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {mActive.discussion.map((d, dIdx) => (
                                                        <div key={dIdx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all">
                                                            <h5 className="text-[#0EA5E9] font-bold mb-2">{d.topic}</h5>
                                                            <p className="text-gray-400 italic text-sm">"{d.prompt}"</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* POSTS */}
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <label htmlFor="community-input" className="sr-only">Module thoughts</label>
                                                <input id="community-input" name="communityInput" value={communityInput} onChange={e => setCommunityInput(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white outline-none" placeholder="Share your thoughts on this module..." />
                                                <button onClick={() => handlePostComment(currentCourse.id + activeModuleId)} className="px-6 py-2 bg-[#0EA5E9] text-white rounded-xl font-bold"><Send size={18} /></button>
                                            </div>
                                            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                                                {(communityPosts[currentCourse.id + activeModuleId] || []).map(p => (
                                                    <div key={p.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-[#0EA5E9] font-bold text-xs">{p.author}</span>
                                                            <span className="text-[10px] text-gray-500">{p.time}</span>
                                                        </div>
                                                        <p className="text-sm text-gray-300">{p.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {activeLessonTab === 'videos' && mActive.videos && (
                                    <div className="mt-8 space-y-6 animate-fade-in">
                                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Video size={20} className="text-pink-500" /> Curated Video Resources</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {mActive.videos.map((vid, vIdx) => (
                                                <div key={vIdx} className="glass-panel rounded-2xl overflow-hidden border border-white/5 group hover:border-[#0EA5E9]/50 transition-all">
                                                    <div className="relative aspect-video">
                                                        <iframe 
                                                            className="w-full h-full"
                                                            src={`https://www.youtube.com/embed/${vid.id}`}
                                                            title={vid.title}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                    <div className="p-4">
                                                        <h5 className="text-sm font-bold text-white line-clamp-2">{vid.title}</h5>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeLessonTab === 'quiz' && quizState[mActive.id] && (
                                    <div className="mt-8 space-y-8 animate-fade-in">
                                        <div className="flex justify-between items-center mb-6">
                                            <h4 className="text-2xl font-black text-white flex items-center gap-3">
                                                <FileQuestion size={28} className="text-green-500" />
                                                Module Assessment
                                            </h4>
                                            {quizState[mActive.id].completed && (
                                                <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-xl text-green-500 font-black text-sm">
                                                    Score: {quizState[mActive.id].score} / {quizState[mActive.id].questions.length}
                                                </div>
                                            )}
                                        </div>

                                        {!quizState[mActive.id].completed ? (
                                            <div className="space-y-10">
                                                {quizState[mActive.id].questions.map((q, qIdx) => (
                                                    <TiltCard key={qIdx}>
                                                        <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden h-full">
                                                            <div className="absolute top-0 left-0 w-1 h-full bg-[#0EA5E9]/30"></div>
                                                            <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-4">Question {qIdx + 1}</p>
                                                            <h5 className="text-xl font-bold text-white mb-8">{q.question}</h5>
                                                            <div className="grid grid-cols-1 gap-4">
                                                                {q.options.map((opt, oIdx) => (
                                                                    <button
                                                                        key={oIdx}
                                                                        onClick={() => handleQuizAnswer(mActive.id, qIdx, oIdx)}
                                                                        className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 group ${
                                                                            quizState[mActive.id].answers[qIdx] === oIdx
                                                                                ? 'bg-[#0EA5E9]/20 border-[#0EA5E9] text-white'
                                                                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10'
                                                                        }`}
                                                                    >
                                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${
                                                                            quizState[mActive.id].answers[qIdx] === oIdx
                                                                                ? 'bg-[#0EA5E9] text-white'
                                                                                : 'bg-white/10 text-gray-500 group-hover:bg-white/20'
                                                                        }`}>
                                                                            {String.fromCharCode(65 + oIdx)}
                                                                        </div>
                                                                        <span className="font-medium">{opt}</span>
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </TiltCard>
                                                ))}
                                                <button 
                                                    onClick={() => submitQuiz(mActive.id)}
                                                    disabled={Object.keys(quizState[mActive.id].answers).length < quizState[mActive.id].questions.length}
                                                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-lg ${
                                                        Object.keys(quizState[mActive.id].answers).length === quizState[mActive.id].questions.length
                                                            ? 'bg-green-500 text-white shadow-green-500/20 hover:scale-[1.02]'
                                                            : 'bg-white/5 text-gray-600 cursor-not-allowed border border-white/5'
                                                    }`}
                                                >
                                                    Validate Module Expertise
                                                </button>
                                            </div>
                                        ) : (
                                            <TiltCard>
                                                <div className="glass-card p-12 rounded-[2.5rem] border border-green-500/30 bg-green-500/5 text-center cyber-glow">
                                                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.4)]">
                                                        <Award size={48} className="text-white" />
                                                    </div>
                                                    <h5 className="text-4xl font-black text-white mb-4">Certification Achieved</h5>
                                                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">You've successfully synthesized the architectural concepts for <strong>{mActive.title}</strong>.</p>
                                                    <div className="inline-flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 mb-10">
                                                        <div className="text-center">
                                                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Expertise Score</p>
                                                            <p className="text-3xl font-black text-white">{Math.round((quizState[mActive.id].score / quizState[mActive.id].questions.length) * 100)}%</p>
                                                        </div>
                                                        <div className="w-px h-10 bg-white/10"></div>
                                                        <div className="text-center">
                                                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">XP Synthesized</p>
                                                            <p className="text-3xl font-black text-green-500">+{quizState[mActive.id].score * 50}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <button onClick={() => setQuizState({ ...quizState, [mActive.id]: null })} className="w-full py-4 bg-white/5 text-white rounded-2xl font-black border border-white/10 hover:bg-white/10 transition-all">Re-Synchronize Knowledge</button>
                                                    </div>
                                                </div>
                                            </TiltCard>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        );
    };

    return (
        <div className={`min-h-screen font-sans selection:bg-[#0EA5E9]/30 transition-colors duration-500 relative ${theme === 'night' ? 'text-gray-100' : 'text-gray-900'}`}>
            <NeuralBackground />
            <DynamicBackground selectedBg={engineConfig.selectedBg} />
            <div className="hero-overlay" />

            {isGenerating && renderGenerating()}
            
            <FloatingHeader 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                theme={theme} 
                setTheme={setTheme} 
                xp={xp} 
                onOpenEngine={() => setActiveTab('generate')}
            />
            <main className="relative">
                {activeTab === 'landing' && renderLanding()}
                {activeTab === 'generate' && renderGenerate()}
                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'my_courses' && renderMyCourses()}
                {activeTab === 'settings' && renderSettings()}
                {activeTab === 'course' && renderActiveCourse()}
            </main>
            {toast && <div className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-xl font-bold bg-[#0EA5E9] text-white animate-slide-up shadow-2xl">{toast.msg}</div>}
        </div>
    );
}
