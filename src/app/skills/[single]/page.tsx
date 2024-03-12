import ProjectCard from "@/components/ProjectCard";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

const { project_folder } = config.settings;
type StaticParams = () => { single: string }[];

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: StaticParams = () => {
  const skills = getTaxonomy(project_folder, "skills");

  const paths = skills.map((tag) => ({
    single: tag,
  }));

  return paths;
};

const skillsingle = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(project_folder);
  const filterByskills = taxonomyFilter(posts, "skills", params.single);

  return (
    <>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByskills.map((post: Post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <ProjectCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default skillsingle;
