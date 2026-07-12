import {
  getProjectBySlug as getStaticProjectBySlug,
  getAllProjectSlugs as getStaticProjectSlugs,
  type ProjectDetail,
} from "@/lib/project-details";
import {
  getCmsProjectBySlug,
  mapCmsProjectToDetail,
} from "@/lib/sanity";

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectDetail | undefined> {
  const cmsProject = await getCmsProjectBySlug(slug);
  if (cmsProject) {
    return mapCmsProjectToDetail(cmsProject);
  }
  return getStaticProjectBySlug(slug);
}

export function getAllProjectSlugs(): string[] {
  return getStaticProjectSlugs();
}
