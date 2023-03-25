export type Experience = {
  company: string;
  position: string;
  work: string;
  duration: string;
  projects: Project[];
};

export type Interest = {
  label: string;
  description: string;
  resources: string;
  resources_label: string;
};

export type Project = {
  slug: string;
  label: string;
  shortDescription: string;
  description: string;
  platform: string;
  tech: string;
  responsibility: string;
  group: string;
  date: string;
  link: string;
  gallery: Array<string>;
};

export type PublicSpeaking = {
  label: string;
  description: string;
  resources: string;
  resources_label: string;
  date: Date;
};

export type Skill = {
  primary: string;
  secondary: string;
};

export type Social = {
  link: string;
  label: string;
};
