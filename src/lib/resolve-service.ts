import {
  getServiceBySlug as getStaticServiceBySlug,
  getAllServiceSlugs as getStaticServiceSlugs,
  type ServiceDetail,
} from "@/lib/service-details";
import {
  getCmsServiceBySlug,
  mapCmsServiceToDetail,
} from "@/lib/sanity";

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceDetail | undefined> {
  const cmsService = await getCmsServiceBySlug(slug);
  if (cmsService) {
    return mapCmsServiceToDetail(cmsService);
  }
  return getStaticServiceBySlug(slug);
}

export function getAllServiceSlugs(): string[] {
  return getStaticServiceSlugs();
}
