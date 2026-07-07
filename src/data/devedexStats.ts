export type Capability = Record<string, string>
export type DevdexStats = {
    label: string,
    capability: Capability
}
export const devedexStats: DevdexStats[] = [
    {
        label: "Frontend",
        capability: {
            "HTML & Semantic Markup": "Completed",
            "CSS & Responsive Design": "Completed",
            "JavaScript (ES6+)": "Completed",
            "TypeScript": "Completed",
            "React": "Completed",
            "Next.js": "Completed",
            "State Management": "Completed",
            "Animations": "In Progress",
            "Accessibility": "In Progress",
        }
    },
    {
        label: "Backend",
        capability: {
            "REST API Design": "Completed",
            "Authentication & Authorization": "Completed",
            "SQL / NoSQL Database": "Completed",
            "ORM (Prisma / Drizzle)": "Completed",
            "Caching": "In Progress",
            "Testing": "In Progress",
            "Error Handling": "Completed",
            "Deployment": "Completed",
            "Nodejs & Express": "Completed",
        }
    },
    // {
    //     label: "DSA",
    //     capability: {
    //         "Arrays": "Completed",
    //         "Strings": "Completed",
    //         "Recursion": "Completed",
    //         "Sorting": "Completed",
    //         "Binary Search": "Completed",
    //         "Linked List": "Completed",
    //         "Stack": "In Progress",
    //         "Queue": "In Progress",
    //         "Trees": "In Progress",
    //         "Graphs": "In Progress",
    //         "Heap / Priority Queue": "In Progress",
    //         "Greedy": "In Progress",
    //         "Dynamic Programming": "In Progress",
    //     }
    // },
    {
        label: "AI Integration",
        capability: {
            "Vector Database": "Completed",
            "Embedding": "Completed",
            "Prompt Engineering": "Completed",
            "RAG": "Completed",
            "Fine-Tuning": "Completed",
            "Langchain": "Completed",
            "LlamaIndex": "Completed",
            "Transformers": "Completed",
            "AI Chat Applications": "Completed",
            "AI Agents": "Completed",
            "MCP": "Completed",
        }
    },
    {
        label: "Database",
        capability: {
            "MongoDB": "Completed",
            "PostgreSQL": "Completed",
            "Firebase & Supabase": "Completed",
            "Prisma": "Completed",
            "Redis": "In Progress",
            "Indexing": "In Progress",
            "Relationships": "In Progress",
            "Aggregation": "In Progress",
        }
    },
    {
        label: "Deployment",
        capability: {
            "Git": "Completed",
            "Github": "Completed",
            "Vercel": "Completed",
            "Render & Railway": "Completed",
            "Docker": "In Progress",
            "CI/CD": "Completed",
            "AWS": "Completed",
            "SSL": "In Progress",
            "Nginx": "In Progress"
        }
    }
]