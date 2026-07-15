export type Skill = {
    name: string
    icon: string
    level: number
}

export type SkillCategory = {
    id: string
    label: string
    tag: string
    color: string
    borderColor: string
    bgGlow: string
    skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        label: "FRONTEND",
        tag: "UI Arsenal",
        color: "text-pink-400",
        borderColor: "border-pink-700",
        bgGlow: "bg-pink-500/10",
        skills: [
            { name: "React", icon: "/TechIcons/react.png", level: 4 },
            { name: "Next.js", icon: "/TechIcons/nextjs.svg", level: 4 },
            { name: "TailwindCSS", icon: "/TechIcons/tailwind.png", level: 5 },
            { name: "Framer Motion", icon: "/TechIcons/motion.svg", level: 3 },
            { name: "TypeScript", icon: "/TechIcons/ts.svg", level: 4 },
            { name: "JavaScript", icon: "/TechIcons/javascript.png", level: 5 },
            { name: "Redux", icon: "/TechIcons/redux.png", level: 5 },
        ]
    },
    {
        id: "backend",
        label: "BACKEND",
        tag: "Server Fortress",
        color: "text-yellow-300",
        borderColor: "border-yellow-600",
        bgGlow: "bg-yellow-500/10",
        skills: [
            { name: "Node.js", icon: "/TechIcons/node.png", level: 4 },
            { name: "Express", icon: "/TechIcons/express_white.png", level: 4 },
            { name: "PostgreSQL", icon: "/TechIcons/postgres.png", level: 3 },
            { name: "MongoDB", icon: "/TechIcons/mongodb.svg", level: 3 },
            { name: "Supabase", icon: "/TechIcons/supabase.png", level: 3 },
            { name: "Langchain", icon: "/TechIcons/langchain.png", level: 3 },
            { name: "Fastmcp", icon: "/TechIcons/fastmcp.jpeg", level: 3 },
            { name: "Pinecone", icon: "/TechIcons/pinecone.png", level: 3 },
            // { name: "REST APIs", icon: "/TechIcons/rest.png", level: 4 },
        ]
    },
    {
        id: "tools",
        label: "TOOLS",
        tag: "Developer Kit",
        color: "text-green-400",
        borderColor: "border-green-700",
        bgGlow: "bg-green-500/10",
        skills: [
            { name: "Git", icon: "/TechIcons/git.png", level: 4 },
            { name: "GitHub", icon: "/TechIcons/github_white.png", level: 4 },
            { name: "VS Code", icon: "/TechIcons/vscode.png", level: 5 },
            { name: "Vercel", icon: "/TechIcons/vercel.svg", level: 4 },
            { name: "Render", icon: "/TechIcons/render_white_1.png", level: 4 },
            // { name: "Figma", icon: "/TechIcons/figma.png", level: 3 },
            { name: "Docker", icon: "/TechIcons/docker.png", level: 2 },
        ]
    },
    {
        id: "languages",
        label: "LANGUAGES",
        tag: "Core Languages",
        color: "text-red-400",
        borderColor: "border-red-700",
        bgGlow: "bg-red-500/10",
        skills: [
            { name: "JavaScript", icon: "/TechIcons/javascript.png", level: 4 },
            { name: "Typescript", icon: "/TechIcons/ts.svg", level: 4 },
            { name: "Python", icon: "/TechIcons/python.png", level: 3 },
        ]
    }
]