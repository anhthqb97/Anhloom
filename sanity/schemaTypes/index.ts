import type { SchemaTypeDefinition } from "sanity";

import { caseStudy } from "./caseStudy";
import { faq } from "./faq";
import { page } from "./page";
import { project } from "./project";
import { service } from "./service";
import { solution } from "./solution";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  teamMember,
  project,
  caseStudy,
  service,
  solution,
  testimonial,
  faq,
];
