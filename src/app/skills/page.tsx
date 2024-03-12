import config from "@/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const skills = () => {
  const { project_folder } = config.settings;
  const skills = getTaxonomy(project_folder, "skills");
  const allskills = getAllTaxonomy(project_folder, "skills");

  return (
    <>
      <SeoMeta title={"skills"} />
      <PageHeader title={"skills"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {skills.map((tag: string) => {
              const count: number = allskills.filter(
                (c: string) => c === tag,
              ).length;
              return (
                <li className="m-3 inline-block" key={tag}>
                  <Link
                    href={`/skills/${tag}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(tag)}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default skills;
