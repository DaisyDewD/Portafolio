import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa/index.js";

const ProjectCard = ({ data }: { data: Post }) => {
  const { summary_length, project_folder } = config.settings;
  const { title, image, categories, date } = data.frontmatter;
  return (
    <div className="bg-body dark:bg-darkmode-body">
      {image && (
        <Link href={`/${project_folder}/${data.slug}`}>
          <ImageFallback
            className="mb-6 w-full rounded cursor-pointer"
            src={image}
            alt={title}
            width={445}
            height={230}
          />
      </Link>
      )}
      <h4 className="mb-3">
        <Link href={`/${project_folder}/${data.slug}`}>{title}</Link>
      </h4>
      <ul className="mb-4">
        <li className="mr-4 inline-block">
          <FaRegFolder className={"-mt-1 mr-2 inline-block text-dark"} />
          {categories?.map((category: string, index: number) => (
            <Link className="text-primary hover:text-dark hover:dark:text-theme-dark dark:text-theme-light" key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== categories.length - 1 && ", "}
            </Link>
          ))}
        </li>
        {date && <li className="inline-block">{dateFormat(date)}</li>}
      </ul>
      <p className="mb-6">
        {plainify(data.content!.slice(0, Number(summary_length)))}
      </p>
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/${project_folder}/${data.slug}`}
      >
        ver más
      </Link>
    </div>
  );
};

export default ProjectCard;
