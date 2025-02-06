import { UrlObject } from "url";

export type ProjectProps = {
  id: string;
  label: string;
  url: string | UrlObject | "";
  projectType: string;
  description: string;
  technologies: string[];
};
