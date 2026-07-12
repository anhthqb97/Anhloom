import type { SchemaTypeDefinition } from "sanity";

import { faq } from "./faq";
import { page } from "./page";
import { service } from "./service";
import { solution } from "./solution";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  teamMember,
  service,
  solution,
  testimonial,
  faq,
];
