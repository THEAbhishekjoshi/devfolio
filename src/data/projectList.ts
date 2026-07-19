export type projectListType = {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string[];
    keyFeatures: string[];
    techStack: { name: string; iconLink: string }[];
    links: { github: string; live: string, imageLink: string, imageMobileLink: string, icon: string };
}

export const projectList = [
    {
        id: "chatbotGHJ",
        name: "Chat Memory",
        shortDescription: "An AI chatbot with both short-term and long-term memory that remembers conversations across different sessions.",
        longDescription: [
            "This chatbot combines short-term conversation context with long-term memory stored in PostgreSQL.",
            "Each user receives a unique session, allowing conversations to continue even after leaving and returning later.",
            "Socket.IO is used to stream AI responses in real time for a faster and smoother chat experience.",
            "The project demonstrates how conversational memory can make AI assistants feel more natural and personalized."
        ],
        keyFeatures: [
            "Short-term and long-term conversation memory",
            "Real-time response streaming",
            "Persistent chat history",
            "Unique session management"
        ],
        techStack: [{ name: "react", iconLink: "/TechIcons/react.png" },
        { name: "node", iconLink: "/TechIcons/node.png" },
        { name: "postgres", iconLink: "/TechIcons/postgres.png" },
        { name: "supabase", iconLink: "/TechIcons/supabase.png" },
        { name: "langchain", iconLink: "/TechIcons/langchain.png" },
        { name: "react", iconLink: "/TechIcons/react.png" },
        { name: "redux", iconLink: "/TechIcons/redux.png" },
        { name: "typescript", iconLink: "/TechIcons/ts.svg" },
        { name: "socket.io", iconLink: "/TechIcons/socket.svg" },
        ],
        links: {
            github: "https://github.com/THEAbhishekjoshi/chat2bot",
            live: "https://chat2bot-liard.vercel.app/",
            imageLink: "/ProjectDemoImage/chatbot.png",
            imageMobileLink: "/ProjectDemoImage/chatbot.png",
            icon: "/ProjectIcons/chatbot.svg"
        }

    },
    {
        id: "suryampaXH",
        name: "Suryamap",
        shortDescription: "An interactive dashboard that visualizes India's solar power generation data with maps, charts, and yearly performance analysis.",
        longDescription: [
            "Suryamap helps users explore more than six years of India's solar power generation data through interactive visualizations.",
            "Users can switch between different map views to compare electricity generation across states.",
            "The platform automatically calculates year-over-year growth and highlights the top-performing states.",
            "Each state includes a detailed dashboard with tables and charts showing annual power generation and installed capacity."
        ],
        keyFeatures: [
            "Interactive solar power map",
            "Year-over-year growth analysis",
            "Top performing state rankings",
            "State-wise detailed analytics"
        ],
        techStack: [{ name: "react", iconLink: "/TechIcons/react.png" },
        { name: "redux", iconLink: "/TechIcons/redux.png" },
        { name: "typescript", iconLink: "/TechIcons/ts.svg" },
        { name: "react simple maps", iconLink: "/TechIcons/reactSimpleMap2.png" },
        ],
        links: {
            github: "https://github.com/THEAbhishekjoshi/Suryamap",
            live: "https://suryamap.vercel.app/",
            imageLink: "/ProjectDemoImage/suryamap.png",
            imageMobileLink: "/ProjectDemoImage/suryamap2.png",
            icon: "/ProjectIcons/suryamap.svg"
        }

    },
    {
        id: "cubeai",
        name: "Cube",
        shortDescription: "An AI-powered interview platform where candidates can take voice-based interviews and receive questions from an AI interviewer in real time.",
        longDescription: [
            "Cube is a full-stack AI interview platform that simulates a real technical interview using voice conversations.",
            "The application streams audio in real time using WebSockets, allowing the AI interviewer to respond naturally without long delays.",
            "It automatically checks the user's microphone and camera before starting the interview and detects long periods of silence to improve the interview experience.",
            "All interview sessions and transcripts are stored securely using PostgreSQL and Prisma, making it easy to review previous interviews."
        ],
        keyFeatures: [
            "Real-time AI voice interviews with audio streaming",
            "Automatic microphone and camera readiness checks",
            "Silence detection during interviews",
            "Interview history and transcript storage"
        ],
        techStack: [{ name: "react", iconLink: "/TechIcons/react.png" },
        { name: "redux", iconLink: "/TechIcons/redux.png" },
        { name: "typescript", iconLink: "/TechIcons/ts.svg" },
        { name: "node", iconLink: "/TechIcons/node.png" },
        { name: "postgres", iconLink: "/TechIcons/Postgres.png" },
        { name: "supabase", iconLink: "/TechIcons/supabase.png" },
        { name: "langchain", iconLink: "/TechIcons/langchain.png" },
        { name: "socket.io", iconLink: "/TechIcons/socket.svg" },
        ],
        links: {
            github: "https://github.com/THEAbhishekjoshi/CubeAi-Interview",
            live: "https://cube-ai-interview.vercel.app/",
            imageLink: "/ProjectDemoImage/cubeaiinterview.png",
            imageMobileLink: "/ProjectDemoImage/cubeaiinterview_mobile.png",
            icon: "/ProjectIcons/cubeai.svg"
        }

    },

]
