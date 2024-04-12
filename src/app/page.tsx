import ProjectCard from "@/components/ProjectCard";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

const { project_folder } = config.settings;

const Posts = () => {
  const postIndex: Post = getListPage(`${project_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(project_folder);
  const allCategories = getAllTaxonomy(project_folder, "categories");
  const categories = getTaxonomy(project_folder, "categories");
  const skills = getTaxonomy(project_folder, "skills");
  const sortedPosts = sortByDate(posts);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} />
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">
                {sortedPosts.map((post: any, index: number) => (
                  <div key={index} className="mb-10 md:col-6">
                    <ProjectCard data={post} />
                  </div>
                ))}
              </div>
            </div>

            <PostSidebar
              categories={categories}
              skills={skills}
              allCategories={allCategories}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
