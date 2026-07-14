
import MobileViewProejct from "./MobileViewProject";
import DesktopViewProject from "./DesktopViewProject";
import { projectList } from "@/data/projectList";

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