import type { SchemaTypeDefinition } from "sanity";

import { page } from "./page";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  teamMember,
];
