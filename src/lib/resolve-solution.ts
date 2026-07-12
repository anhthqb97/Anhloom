import {
  getSolutionBySlug as getStaticSolutionBySlug,
  getAllSolutionSlugs as getStaticSolutionSlugs,
  type SolutionDetail,
} from "@/lib/solution-details";
import {
  getCmsSolutionBySlug,
  mapCmsSolutionToDetail,
} from "@/lib/sanity";

export async function getSolutionBySlug(
  slug: string,
): Promise<SolutionDetail | undefined> {
  const cmsSolution = await getCmsSolutionBySlug(slug);
  if (cmsSolution) {
    return mapCmsSolutionToDetail(cmsSolution);
  }
  return getStaticSolutionBySlug(slug);
}

export function getAllSolutionSlugs(): string[] {
  return getStaticSolutionSlugs();
}
