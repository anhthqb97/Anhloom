import type { SchemaTypeDefinition } from "sanity";

import { page } from "./page";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  teamMember,
  service,
  testimonial,
];
