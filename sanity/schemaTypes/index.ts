import type { SchemaTypeDefinition } from "sanity";

import { blogPost } from "./blogPost";
import { career } from "./career";
import { caseStudy } from "./caseStudy";
import { faq } from "./faq";
import { page } from "./page";
import { project } from "./project";
import { service } from "./service";
import { solution } from "./solution";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { technology } from "./technology";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  teamMember,
  project,
  caseStudy,
  blogPost,
  career,
  technology,
  service,
  solution,
  testimonial,
  faq,
];
