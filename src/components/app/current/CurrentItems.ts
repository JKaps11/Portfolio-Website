export type CurrentItemType = "project" | "job" | "startup";

export interface CurrentItem {
  id: string;
  name: string;
  description: string;
  type: CurrentItemType;
  link?: string;
  experienceId?: string;
}

export const CurrentItems: CurrentItem[] = [
  {
    id: "willdo",
    name: "WillDo",
    description:
      "A website that facilitates and helps users create, track, and develop new skills.",
    type: "project",
  },
  {
    id: "syndata",
    name: "Syndata",
    description:
      "A tool for processing and analyzing data from traffic analysis systems.",
    type: "startup",
  },
  {
    id: "crum-forster",
    name: "Crum & Forster",
    description: "Associate Software Developer",
    type: "job",
    experienceId: "job-0",
  },
];
