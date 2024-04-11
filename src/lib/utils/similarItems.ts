import { Post } from "@/types";

// similer products
const similerItems = (
  currentItem: Post,
  allItems: Post[],
  slug: string,
): Post[] => {
  let categories: string[] = [];
  let skills: string[] = [];

  // set categories
  if (currentItem.frontmatter.categories.length > 0) {
    categories = currentItem.frontmatter.categories;
  }

  // set skills
  if (currentItem.frontmatter.skills.length > 0) {
    skills = currentItem.frontmatter.skills;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item: any) =>
    categories.find((category) =>
      item.frontmatter.categories.includes(category),
    ),
  );

  // filter by skills
  const filterBySkills = allItems.filter((item: any) =>
    skills.find((skill) => item.frontmatter.skills.includes(skill)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterBySkills])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;
