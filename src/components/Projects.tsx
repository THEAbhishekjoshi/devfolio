
import MobileViewProejct from "./MobileViewProject";
import DesktopViewProject from "./DesktopViewProject";

export type projectListType = {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string[];
    keyFeatures: string[];
    techStack: { name: string; iconLink: string }[];
    links: { github: string; live: string, imageLink: string };
};

const projectList = [
    {
        id: "yu",
        name: "Yuva",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations.A comprehensive platform designed to connect young individuals with local clubs, organizations.",
        longDescription: [
            "Built an end-to-end event management system with robust authentication and secure payment gateway integration",
            "Architected scalable backend infrastructure using Node.js and managed complex database schemas with PostgreSQL",
            "Developed responsive frontend interfaces using React and integrated third-party APIs for seamless user experience",
            "Implemented real-time notification services to keep users engaged and informed about relevant activities and events",
        ],
        keyFeatures: [
            "Real-time Notification System ",
            "Secure Payment Gateway Integration",
            "Admin Dashboard",
        ],
        techStack: [{ name: "react", iconLink: "/temp_icon_1.png" },
        { name: "node", iconLink: "/temp_icon_2.png" },
        { name: "postgres", iconLink: "/temp_icon_3.png" },
        ],
        links: {
            github: "",
            live: "",
            imageLink: "/valley1.jpg"
        }

    },
    {
        id: "hui",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations.Built an end-to-end event management system with robust authentication and secure payment gateway integrationBuilt an end-to-end event management system with robust authentication and secure payment gateway integration",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        keyFeatures: [
            "3D Interactive Visualization ",
            "Automated Analytics Engine ",
            "Deep Dive Analysis Panel ",
        ],
        techStack: [{ name: "react", iconLink: "/temp_icon_1.png" },
        { name: "node", iconLink: "/temp_icon_2.png" },
        { name: "postgres", iconLink: "/temp_icon_3.png" },
        ],
        links: {
            github: "",
            live: "",
            imageLink: "/charmander1.png"
        }

    },
    {
        id: "hui3",
        name: "Finance Tracker",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        keyFeatures: [
            "3D Interactive Visualization - Implemented React + D3.js to create a 3D solar power dashboard with dynamic tooltip and static electricity generated map visualizations.",
            "Automated Analytics Engine - Built Top 5 State Insights and YoY growth analytics that automatically ranks states and highlights performance trends for faster decision-making.",
            "Deep Dive Analysis Panel - Developed a state-level deep-dive view with tabular + graphical trend analysis providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "react", iconLink: "/temp_icon_1.png" },
        { name: "node", iconLink: "/temp_icon_2.png" },
        { name: "postgres", iconLink: "/temp_icon_3.png" },
        ],
        links: {
            github: "",
            live: "",
            imageLink: ""
        }

    },
    {
        id: "huih",
        name: "ChatBot",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        keyFeatures: [
            "3D Interactive Visualization ",
            "Automated Analytics Engine ",
            "Deep Dive Analysis Panel ",
        ],
        techStack: [{ name: "react", iconLink: "/temp_icon_1.png" },
        { name: "node", iconLink: "/temp_icon_2.png" },
        { name: "postgres", iconLink: "/temp_icon_3.png" },
        ],
        links: {
            github: "",
            live: "",
            imageLink: ""
        }
    },
    {
        id: "hdddui",
        name: "Mind Reader",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        keyFeatures: [
            "3D Interactive Visualization - Implemented React + D3.js to create a 3D solar power dashboard with dynamic tooltip and static electricity generated map visualizations.",
            "Automated Analytics Engine - Built Top 5 State Insights and YoY growth analytics that automatically ranks states and highlights performance trends for faster decision-making.",
            "Deep Dive Analysis Panel - Developed a state-level deep-dive view with tabular + graphical trend analysis providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "react", iconLink: "/temp_icon_1.png" },
        { name: "node", iconLink: "/temp_icon_2.png" },
        { name: "postgres", iconLink: "/temp_icon_3.png" },
        ],
        links: {
            github: "",
            live: "",
            imageLink: ""
        }

    },
    {
        id: "huihh",
        name: "Suryamap",
        shortDescription: "A comprehensive platform designed to connect young individuals with local clubs, organizations.",
        longDescription: [
            "Developed and deployed a 3D solar power dashboard visualizing 6 years of state-wise data (2017–2023) using React,",
            "D3.js/Chart.js, and Tailwind CSS.",
            "Implemented dual visualization modes (dynamic tooltip map + static electricity generated map), enabling instant comparative analysis and improving data accessibility.",
            "Built Top 5 State Insights and YoY growth analytics, automatically ranking states and highlighting performance trends",
            "for faster decision-making.",
            "Created a state-level deep-dive panel with tabular + graphical trend view, providing granular insights on annual generation and installed capacity.",
        ],
        keyFeatures: [
            "3D Interactive Visualization - Implemented React + D3.js to create a 3D solar power dashboard with dynamic tooltip and static electricity generated map visualizations.",
            "Automated Analytics Engine - Built Top 5 State Insights and YoY growth analytics that automatically ranks states and highlights performance trends for faster decision-making.",
            "Deep Dive Analysis Panel - Developed a state-level deep-dive view with tabular + graphical trend analysis providing granular insights on annual generation and installed capacity.",
        ],
        techStack: [{ name: "react", iconLink: "/temp_icon_1.png" },
        { name: "node", iconLink: "/temp_icon_2.png" },
        { name: "postgres", iconLink: "/temp_icon_3.png" },
        ],
        links: {
            github: "",
            live: "",
            imageLink: ""
        }
    },

]

export default function Projects() {


    return (
        <div className="flex flex-col gap-7 ">
            <div className="block lg:hidden">
                <MobileViewProejct projectList={projectList} />
            </div>
            <div className="hidden lg:block">
                <DesktopViewProject projectList={projectList} />
            </div>

            {projectList.length > 5 && (
                <div className="flex justify-center mt-4">
                    <button className="w-32 sm:w-42  lg:w-48 border-white/60 border-2 p-2 md:p-3 text-center text-[0.5rem] sm:text-xs lg:text-sm rounded hover:bg-white/10 transition-colors cursor-pointer">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}