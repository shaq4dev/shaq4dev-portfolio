import { StaticImageData } from "next/image";
import { UrlObject } from "url";

export type ProjectProps = {
  id: string;
  label: string;
  url: string | UrlObject | "";
  projectType: string;
  description: string;
  technologies: string[];
  image_url?: string;
};

export type MenuProps = {
  id: string;
  label: string;
  url: string | UrlObject | "" | object;
};

export type TypeProps = {
  id: string;
  class: string;
  technology: {
    label: string;
    tech: string;
    since: number;
    image: StaticImageData;
  }[];
};
