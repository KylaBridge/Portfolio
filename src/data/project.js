import ecoCollectPreview from "../assets/projectPreviews/ecoCollectPreview.png"
import quickRentPreview from "../assets/projectPreviews/quickRentPreview.png"
import articleHubPreview from "../assets/projectPreviews/articleHubPreview.png"
import ecoReadsPreview from "../assets/projectPreviews/ecoReadsPreview.png"
import linkedEscapePreview from "../assets/projectPreviews/linkedGamePreview.png"
import whackVillePreview from "../assets/projectPreviews/whackVillePreview.png"
import kkkOnlineShopPreview from "../assets/projectPreviews/KKKonlineshopPreview.png"


const projects = [
  {
    id: "eco-collect",
    title: "EcoCollect",
    shortDescription:
      "A gamified platform that motivates users to recycle e-waste through points, badges, and redeemable rewards, with progress tracking and achievements.",
    role: "Project Manager, Frontend Developer",
    techStack: ["React", "CSS", "Node", "Express", "MongoDB",],
    githubUrl: "https://github.com/KylaBridge/CAPSTONE-ECOCOLLECT",
    images: [ecoCollectPreview],
  },
  {
    id: "quickrent-ph",
    title: "QuickRent PH",
    shortDescription:
      "An online rental marketplace for item listings, transactions, and real-time activity tracking.",
    role: "Project Manager, Frontend Developer",
    techStack: ["React", "Tailwind CSS", "Node", "Express", "MongoDB"],
    githubUrl: "https://github.com/KylaBridge/QuickRentPH",
    images: [quickRentPreview],
  },
  {
    id: "article-hub",
    title: "Article Hub",
    shortDescription: "A mobile app for creating and managing articles with user authentication.",
    role: "Fullstack Developer",
    techStack: ["Flutter", "Dart","Node", "Express", "MongoDB"],
    githubUrl: "https://github.com/KylaBridge/ArticleHub",
    images: [articleHubPreview],
  },
  {
    id: "eco-reads",
    title: "EcoReads",
    shortDescription: "A blogging platform for users to post, comment, and join discussions; includes admin moderation.",
    role: "Frontend Developer",
    techStack: ["PHP", "HTML", "Bootstrap", "MySql"],
    githubUrl: "https://github.com/KylaBridge/EcoReads",
    images: [ecoReadsPreview],
  },
  {
    id: "linked-escape",
    title: "Linked Escape",
    shortDescription: "A co-op Unity game where two players linked by a chain solve challenges together.",
    role: "Frontend Developer",
    techStack: ["C#"],
    githubUrl: "https://github.com/johanan13/Linked-Game/tree/main",
    images: [linkedEscapePreview],
  },
  {
    id: "whack-ville",
    title: "Whack Ville",
    shortDescription: "Mobilen app whack-a-mole game with difficulty levels and leaderboard tracking.",
    role: "Frontend Developer",
    techStack: ["Java", "SQLite"],
    githubUrl: "https://github.com/KylaBridge/WhackVille",
    images: [whackVillePreview],
  },
  {
    id: "kkk-shop",
    title: "KKK Online Shop",
    shortDescription: "A Java Swing desktop e-commerce app with user login, catalog browsing, cart, and admin item management using text-based data storage.",
    role: "Full Stack Developer",
    techStack: ["Java"],
    githubUrl: "https://github.com/KylaBridge/KKK-Online-Shop",
    images: [kkkOnlineShopPreview],
  },
];

export default projects;
