import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  titleKo: string;
  description: string;
  descriptionKo: string;
  date: string;
  author: string;
  authorRole: string;
  authorRoleKo: string;
  tags: string[];
  featured: boolean;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "",
        titleKo: data.titleKo || data.title || "",
        description: data.description || "",
        descriptionKo: data.descriptionKo || data.description || "",
        date: data.date || "",
        author: data.author || "Persapt Team",
        authorRole: data.authorRole || "",
        authorRoleKo: data.authorRoleKo || data.authorRole || "",
        tags: data.tags || [],
        featured: data.featured || false,
        content,
      } satisfies BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "",
    titleKo: data.titleKo || data.title || "",
    description: data.description || "",
    descriptionKo: data.descriptionKo || data.description || "",
    date: data.date || "",
    author: data.author || "Persapt Team",
    authorRole: data.authorRole || "",
    authorRoleKo: data.authorRoleKo || data.authorRole || "",
    tags: data.tags || [],
    featured: data.featured || false,
    content,
  };
}
