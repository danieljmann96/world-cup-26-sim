import groupsJson from '@/assets/groups.json';
import z from 'zod';

const GroupsParser = z.object({
  A: z.array(z.string()).length(4),
  B: z.array(z.string()).length(4),
  C: z.array(z.string()).length(4),
  D: z.array(z.string()).length(4),
  E: z.array(z.string()).length(4),
  F: z.array(z.string()).length(4),
  G: z.array(z.string()).length(4),
  H: z.array(z.string()).length(4),
  I: z.array(z.string()).length(4),
  J: z.array(z.string()).length(4),
  K: z.array(z.string()).length(4),
  L: z.array(z.string()).length(4)
});

export function getGroups() {
  return GroupsParser.parse(groupsJson);
}
