import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { plainify } from "@/lib/utils/textConverter";
import { Post } from "@/types";

import dynamic from "next/dynamic";

const NoSSRLink = dynamic(() => import("next/link"), { ssr: false });

const ProjectCard = ({ data }: { data: Post }) => {
  const { summary_length, project_folder } = config.settings;
  const { title, image } = data.frontmatter;

  return (
    <div className="relative bg-body dark:bg-darkmode-body overflow-hidden  shadow-lg">
      
      <div>
        <NoSSRLink href={`/${project_folder}/${data.slug}`} passHref>
          <div className="group transition-transform duration-300 transform hover:scale-105 block">
            <ImageFallback
              className="w-full"
              src={image}
              alt={title}
              width={445}
              height={230}
            />
            <div className="absolute inset-0 bg-border bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <div className="text-body text-center px-4">
                
               <p className="text-body-400 mb-2">
                {plainify(data.content!.slice(0, Number(summary_length)))}<i className="small-font">...[ver más]</i>
                </p>
              </div>
            </div>
          </div>
        </NoSSRLink>
      </div>
      <NoSSRLink href={`/${project_folder}/${data.slug}`} passHref>
      <div className="absolute bottom-0 left-0 right-0 bg-theme-light dark:bg-primary bg-opacity-75 dark:bg-opacity-80 py-2 px-4">
        <h4 className="text-xl font-semibold dark:text-darkmode-border text-primary">{title}</h4>
      </div>
      </NoSSRLink>
    </div>
  );
};

export default ProjectCard;
