import { humanize } from "@/lib/utils/textConverter";
import Link from "next/link";

const PostSidebar = ({
  skills,
  categories,
  allCategories,
}: {
  skills: string[];
  categories: string[];
  allCategories: string[];
}) => {
  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="mb-6 hover:text-primary dark:hover:text-theme-light dark:text-darkmode-border">
          <a href="/categories">Categorias</a></h5>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light text-border dark:text-darkmode-primary ">
          <ul className="space-y-4">
            {categories.map((category: string) => {
              const count = allCategories.filter(
                (c: string) => c === category,
              ).length;
              return (
                <li key={category}>
                  <Link
                    className="flex justify-between hover:text-primary dark:hover:text-theme-light"
                    href={`/categories/${category}`}
                  >
                    {humanize(category)} <span>({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <!-- skills --> */}
      <div className="mb-8">
        <h5 className="mb-6 hover:text-primary dark:hover:text-theme-light dark:text-darkmode-border"><a href="/skills">Habilidades</a></h5>
        <div className="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light">
          <ul>
            {skills.map((skill: string) => {
              return (
                <li className="inline-block" key={skill}>
                  <Link
                    className="m-1 block rounded bg-border text-body px-3 py-1 hover:bg-primary hover:text-theme-light dark:bg-darkmode-body dark:hover:bg-darkmode-primary dark:hover:text-dark"
                    href={`/skills/${skill}`}
                  >
                    {humanize(skill)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;
