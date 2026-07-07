export const siteConfig = {
  accentColor: "#8b0fa4",
  motto: "星月水光，紫夜心生",
  icp: "苏ICP备2022007005号-3",
  social: {
    email_outlook: "elwina_vardal@outlook.com",
    email_yeah: "elwina@yeah.net",
    github: "https://github.com/elwina",
    qq: "https://qm.qq.com/q/X5kcdAboEE",
  },
  en: {
    name: "Elwina Vardal",
    title: "Hobbyist Developer",
    description: "Portfolio website of Elwina Vardal",
    aboutMe:
      "A hobbyist developer focused on physics/geography education. Broad interests, always eager to explore. Open to collaboration.",
    skills: ["Full Stack", "Web", "AI", "React", "Go", "Python", "C"],
    projects: [
      {
        name: "MelianX - Wave Optics Demo System",
        description:
          "Interactive wave optics visualization system featuring Young's double slit, single slit diffraction, grating, Fresnel diffraction, and polarization simulations. Real-time WASM-accelerated rendering with a C computation core, running on both Web browsers and Tauri desktop app.",
        link: "https://github.com/elwina/MelianX",
        skills: ["React", "TypeScript", "WASM/C", "Tauri"],
      },
      {
        name: "Luthien - Urban Natural Disaster Coupler",
        description:
          "A Python-based modular simulation framework for coupling urban natural disasters. Features config-driven architecture with modules for rainfall generation, flood modeling, traffic simulation, landslide evaluation, and stormwater management. Integrates GDAL, SUMO, and SWMM for geospatial and hydrological computation.",
        link: "https://github.com/elwina/Luthien",
        skills: ["Python", "GIS/GDAL", "SUMO", "SWMM"],
      },
      {
        name: "VibeArk - Portable App Manager",
        description:
          "A keyboard-driven TUI tool for Windows to download, install, and update portable apps with one keystroke. Built with Go and Bubble Tea, featuring multi-source downloads, GitHub acceleration, proxy support, auto-extraction, and real-time progress display. Optimized for China's network environment with bilingual Chinese/English support.",
        link: "https://github.com/elwina/VibeArk",
        skills: ["Go", "Bubble Tea", "TUI"],
      },
      {
        name: "Vexor - EVE Online Fit Viewer",
        description:
          "An XML-driven static fit viewer website generator for EVE Online. Features bilingual Chinese/English support, equipment alternatives with one-click switching, screenshot card sharing, and EFT format import/export. Organized by collection → series → variant hierarchy. Built with React, TypeScript, and Tailwind CSS.",
        link: "https://github.com/EX-CT/Vexor",
        skills: ["React", "TypeScript", "Tailwind"],
      },
    ],
    experience: [
      { year: "2022", location: "Jiangsu", event: "National College Mathematical Contest in Modeling" },
      { year: "2023", location: "Jiangsu", event: "Department Student Union President" },
      { year: "2023", location: "Chongqing", event: "National College Physics Experiment Competition" },
      { year: "2023", location: "Jiangsu", event: "Lanqiao Cup National Finals" },
      { year: "2023", location: "Guangdong", event: "National Master Teacher Alliance Teaching Research" },
      { year: "2024", location: "Liaoning", event: "China College Computer Design Contest" },
      { year: "2024", location: "Jiangsu", event: "The 41st International Pupils' Attitudes Towards Technology Educational Research Conference" },
      { year: "2025", location: "Shaanxi", event: "Published article on MelianX in <i>Teaching Reference of Middle School Physics</i>" },
    ],
    education: [
      {
        school: "EVE Online",
        degree: "CEO of Exactitude Syndicate",
        dateRange: "Burner Mission Researcher",
        achievements: [],
      },
      {
        school: "Formula 1",
        degree: "School F1 Fan Group Owner",
        dateRange: "Leclerc Fan",
        achievements: [],
      },
    ],
  },
  zh: {
    name: "Elwina Vardal",
    title: "业余的开发者",
    description: "Elwina Vardal 的个人主页",
    aboutMe:
      "一个以物理/地理教育为主要方向的业余开发者，兴趣广泛，乐于探索。欢迎合作。",
    skills: ["全栈", "Web", "AI", "React", "Go", "Python", "C"],
    projects: [
      {
        name: "MelianX - 波动光学演示系统",
        description:
          "交互式波动光学可视化演示系统，支持杨氏双缝、单缝衍射、光栅衍射、菲涅尔圆孔衍射、偏振等经典光学实验。WASM 加速实时渲染，C 语言计算核心，Web 浏览器与 Tauri 桌面双端运行。",
        link: "https://github.com/elwina/MelianX",
        skills: ["React", "TypeScript", "WASM/C", "Tauri"],
      },
      {
        name: "Luthien - 城市自然灾害耦合器",
        description:
          "基于 Python 的模块化城市自然灾害耦合模拟框架。配置驱动架构，内置降雨生成、洪水模拟、交通仿真、滑坡评估、雨洪管理等模块。集成 GDAL、SUMO、SWMM 进行地理空间与水文计算。",
        link: "https://github.com/elwina/Luthien",
        skills: ["Python", "GIS/GDAL", "SUMO", "SWMM"],
      },
      {
        name: "VibeArk - 便携应用管理器",
        description:
          "一款键盘驱动的 Windows TUI 工具，一行命令下载、安装、更新常用便携软件。Go + Bubble Tea 构建，支持多源下载、GitHub 加速、代理配置、自动解压、实时进度。针对中国网络环境优化，中英双语一键切换。",
        link: "https://github.com/elwina/VibeArk",
        skills: ["Go", "Bubble Tea", "TUI"],
      },
      {
        name: "Vexor - EVE Online 配置站",
        description:
          "基于 XML 驱动的 EVE Online 舰船配置静态展示网站生成器。中英双语、装备替代一键切换、截图卡片分享、EFT 格式导入导出。按合集 → 系列 → 变种层级组织配置。React + TypeScript + Tailwind CSS 构建。",
        link: "https://github.com/EX-CT/Vexor",
        skills: ["React", "TypeScript", "Tailwind"],
      },
    ],
    experience: [
      { year: "2022", location: "江苏", event: "全国大学生数学建模竞赛" },
      { year: "2023", location: "江苏", event: "院系学生会主席" },
      { year: "2023", location: "重庆", event: "全国大学生物理实验竞赛" },
      { year: "2023", location: "江苏", event: "蓝桥杯全国总决赛" },
      { year: "2023", location: "广东", event: "全国名师工作室联盟教研活动" },
      { year: "2024", location: "辽宁", event: "中国大学生计算机设计大赛" },
      { year: "2024", location: "江苏", event: "PATT41 中小学生技术态度国际研讨会" },
      { year: "2025", location: "陕西", event: "《中学物理教学参考》关于 MelianX 项目发文" },
    ],
    education: [
      {
        school: "EVE Online",
        degree: "精密学派 Exactitude Syndicate 总裁",
        dateRange: "燃烧任务研究者",
        achievements: [],
      },
      {
        school: "Formula 1",
        degree: "校 F1 车迷群群主",
        dateRange: "勒克莱尔车迷",
        achievements: [],
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
