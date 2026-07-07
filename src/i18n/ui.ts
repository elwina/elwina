export const ui = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Activities",
      education: "Interests",
    },
    hero: {
      greeting: "Hello!",
      im: "I'm",
      motto: "Motto",
    },
    about: {
      title: "About Me",
    },
    projects: {
      title: "Projects",
    },
    experience: {
      title: "Activities",
    },
    education: {
      title: "Interests",
    },
    footer: {
      allRightsReserved: "All rights reserved.",
      about: "About",
      projects: "Projects",
      experience: "Activities",
      education: "Interests",
    },
    lang: {
      label: "EN",
      switchTo: "中文",
    },
  },
  zh: {
    nav: {
      about: "关于",
      projects: "项目",
      experience: "活动",
      education: "兴趣",
    },
    hero: {
      greeting: "你好!",
      im: "我是",
      motto: "座右铭",
    },
    about: {
      title: "关于我",
    },
    projects: {
      title: "项目",
    },
    experience: {
      title: "活动",
    },
    education: {
      title: "兴趣",
    },
    footer: {
      allRightsReserved: "版权所有。",
      about: "关于",
      projects: "项目",
      experience: "活动",
      education: "兴趣",
    },
    lang: {
      label: "中文",
      switchTo: "EN",
    },
  },
} as const;

export type UI = typeof ui.en;
