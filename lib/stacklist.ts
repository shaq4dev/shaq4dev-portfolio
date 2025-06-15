import nextjs from "@/public/brands/nextjs.png";
import html5 from "@/public/brands/html5.png";
import css3 from "@/public/brands/css3.png";
import javascript from "@/public/brands/javascript.png";
import typescript from "@/public/brands/typescript.png";
import expo from "@/public/brands/expo.png";
import reactjs from "@/public/brands/react.png";
import tailwindcss from "@/public/brands/tailwind.png";
import nativewind from "@/public/brands/nativewind.png";
import reactnative from "@/public/brands/reactnative.png";
import shadcnui from "@/public/brands/shadcnui.png";
import mongodb from "@/public/brands/mongodb.png";
import mongoose from "@/public/brands/mongoose.png";
import prisma from "@/public/brands/prisma.png";
import postgresql from "@/public/brands/postgresql.png";
import firebase from "@/public/brands/firebase.png";
import squarespace from "@/public/brands/squarespace.png";
import wix from "@/public/brands/wix.png";
import wordpress from "@/public/brands/wordpress.png";
import elementorpro from "@/public/brands/elementorpro.png";
import gimp from "@/public/brands/gimp.png";
import figma from "@/public/brands/figma.png";
import photoshop from "@/public/brands/photoshop.png";
import illustrator from "@/public/brands/illustrator.png";
import nextintl from "@/public/brands/nextintl.png";
import vercel from "@/public/brands/vercel.png";
import zod from '@/public/brands/zod.png'
import nodemailer from '@/public/brands/nodemailer.jpg';
import authjs from '@/public/brands/authjs.png'

const stackList = [
    'reactjs',
    'nextjs',
    'mongodb',
    'javascript',
    'typescript',
    'figma',
    'wordpress'
]

const brandMap: Record<string, any> = {
    nextjs,
    html5,
    css3,
    javascript,
    typescript,
    expo,
    reactjs,
    tailwindcss,
    nativewind,
    reactnative,
    shadcnui,
    mongodb,
    mongoose,
    prisma,
    postgresql,
    firebase,
    squarespace,
    wix,
    wordpress,
    elementorpro,
    gimp,
    figma,
    photoshop,
    illustrator,
    nextintl,
    vercel,
    zod,
    nodemailer,
    authjs
}

const titles = ["React Js", "Next Js", "Mongo DB", "Javascript", "TypeScript", "Figma", "WordPress"]

export {stackList, brandMap, titles}