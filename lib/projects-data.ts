export interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  images: string[]
  role: string
  tools: string[]
  process: string
  results: string
  year: string
}

export const projects: Project[] = [
  {
    id: "wanda",
    title: "Wanda",
    category: "Illustration",
    description:
      "A complete brand identity for Aurora, a wellness and meditation app. The design captures serenity through fluid forms and a calming color palette, creating an immersive visual experience that resonates with mindful living.",
    thumbnail: "/images/portfolio_imgs/wanda.jpeg",
    images: [
      "/images/portfolio_imgs/wanda.jpeg",
      // "/images/projects/aurora-2.jpg",
      // "/images/projects/aurora-3.jpg",
    ],
    role: "Illustrator",
    tools: ["Illustrator", "ProCreate", "InDesign"],
    process:
      "Starting with mood boards and sketches, I explored organic shapes and gradients before refining the final mark. Typography pairing and color theory drove every decision.",
    results:
      "40% increase in brand recognition within the first quarter. The identity system was adopted across 12 digital and print touchpoints.",
    year: "2025",
  },
  {
    id: "SaaS-dashboard-ui",
    title: "SaaS Dashboard",
    category: "UI/UX",
    description:
      "A sleek analytics dashboard for a fintech startup. Data-dense interfaces were simplified through clear hierarchy, intuitive navigation, and thoughtful data visualization.",
    thumbnail: "/images/portfolio_imgs/dashboard.png",
    images: [
      "/images/portfolio_imgs/dashboard.png",
      // "/images/portfolio_imgs/saas-dashboard-2.jpg",
      // "/images/portfolio_imgs/saas-dashboard-3.jpg",
    ],
    role: "UI/UX Designer",
    tools: ["Figma", "Framer", "After Effects"],
    process:
      "User research and journey mapping guided the information architecture. Interactive prototypes were tested with 30+ users to refine the final design.",
    results:
      "Task completion time reduced by 35%. User satisfaction scores improved from 3.2 to 4.7 out of 5.",
    year: "2026",
  },
  {
    id: "dark-spirits",
    title: "Dark Spirits",
    category: "Illustration",
    description:
      "A distinctive logo and visual identity for Terra Coffee, an artisan roastery. The mark combines a mountain silhouette with a coffee bean, embodying the brand's origin story and craft.",
    thumbnail: "/images/portfolio_imgs/dark.jpeg",
    images: [
      "/images/portfolio_imgs/dark.jpeg",
      // "/images/portfolio_imgs/dark-spirits-2.jpg",
      // "/images/portfolio_imgs/dark-spirits-3.jpg",
    ],
    role: "Illustrator",
    tools: ["Illustrator", "ProCreate", "InDesign"],
    process:
      "Over 50 thumbnail sketches were refined into 5 concepts. Client workshops narrowed the direction before detailed vector execution and brand guideline creation.",
    results:
      "The brand launched with 3 flagship locations and the identity system received coverage in Brand New.",
    year: "2025",
  },
  

  {
    id: "telephone",
    title: "Telephone",
    category: "Illustration",
    description:
      "An illustration series for a vintage telephone collection. Each piece captures the essence of classic design through clean lines and nostalgic color palettes.",
    thumbnail: "/images/portfolio_imgs/telephone.jpeg",
    images: [
      "/images/portfolio_imgs/telephone.jpeg",
      // "/images/projects/bloom-2.jpg",
      // "/images/projects/bloom-3.jpg",
    ],
    role: "Illustrator",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    process:
      "Research into sustainable materials led the physical design, while hand-drawn botanical illustrations brought warmth. Multiple prototypes were tested before the final production run.",
    results:
      "Packaging won a Gold at the DIELINE Awards. Shelf appeal contributed to a 25% sales uplift in the first month.",
    year: "2023",
  },
  
  
  {
    id: "icarus",
    title: "Icarus",
    category: "Illustration",
    description:
      "A vibrant social media campaign for Waves Music Festival. Dynamic compositions and bold typography captured the festival's energy across Instagram, TikTok, and event signage.",
    thumbnail: "/images/portfolio_imgs/icarus.jpeg",
    images: [
      "/images/portfolio_imgs/icarus.jpeg",
      // "/images/portfolio_imgs/icarus-2.jpeg",
      // "/images/portfolio_imgs/icarus-3.jpeg",
    ],
    role: "Illustrator",
    tools: ["Illustrator", "ProCreate", "InDesign"],
    process:
      "The visual language was built around sound waves and neon palettes. Animated templates enabled rapid content creation during the 3-day event.",
    results:
      "Campaign reached 2.4M impressions. Engagement rate tripled compared to the previous year.",
    year: "2024",
  },
  {
    id: "falling-cage",
    title: "Falling Cage",
    category: "Illustration",
    description:
      "Whimsical illustrations for a children's picture book about a curious cat exploring the night sky. Soft watercolor textures meet digital precision in a dreamlike visual narrative.",
    thumbnail: "/images/portfolio_imgs/jail.jpeg",
    images: [
      "/images/portfolio_imgs/jail.jpeg",
      // "/images/portfolio_imgs/falling-cage-2.jpg",
      // "/images/portfolio_imgs/falling-cage-3.jpg",
    ],
    role: "Illustrator",
    tools: ["Procreate", "Photoshop", "InDesign"],
    process:
      "Character development began with pencil sketches, evolving through color studies. Each spread was designed to guide the reader's eye through the story.",
    results:
      "Published by Penguin Random House. Nominated for the Kate Greenaway Medal for illustration.",
    year: "2024",
  },
  {
    id: "reincarnation",
    title: "Reincarnation",
    category: "Illustration",
    description:
      "An energetic motion design reel for Prism Studios showcasing kinetic typography, logo animations, and product reveals. Every frame is designed to captivate and communicate.",
    thumbnail: "/images/portfolio_imgs/reincarnation.jpeg",
    images: [
      "/images/portfolio_imgs/reincarnation.jpeg",
      // "/images/portfolio_imgs/reincarnation-2.jpeg",
      // "/images/portfolio_imgs/reincarnation-3.jpeg",
    ],
    role: "Motion Designer",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
    process:
      "Storyboarding drove the narrative arc. Each segment was crafted with precise timing, easing curves, and sound design integration.",
    results:
      "Reel garnered 100K+ views on Vimeo and was featured on Motionographer.",
    year: "2024",
  },
  {
    id: "water",
    title: "Water",
    category: "Illustration",
    description:
      "An abstract illustration series exploring the fluidity and power of water. Each piece is a unique interpretation of movement, reflection, and depth.",
    thumbnail: "/images/portfolio_imgs/water.jpeg",
    images: [
      "/images/portfolio_imgs/water.jpeg",
      // "/images/portfolio_imgs/water-2.jpg",
      // "/images/portfolio_imgs/water-3.jpg",
    ],
    role: "Illustrator",
    tools: ["Procreate", "Photoshop", "Illustrator"],
    process:
      "Each illustration was developed through iterative sketching and digital refinement. The series explores the interplay of light and shadow in water.",
    results:
      "Brand launched to a waitlist of 5,000+. Merchandise line sold out within 48 hours.",
    year: "2024",
  },
  // {
  //   id: "solstice-editorial",
  //   title: "Solstice Magazine",
  //   category: "Editorial",
  //   description:
  //     "Art direction and layout design for Solstice, a quarterly culture and design magazine. Each issue features distinctive editorial spreads that balance typography, photography, and white space.",
  //   thumbnail: "/images/projects/solstice-thumb.jpg",
  //   images: [
  //     "/images/projects/solstice-1.jpg",
  //     "/images/projects/solstice-2.jpg",
  //     "/images/projects/solstice-3.jpg",
  //   ],
  //   role: "Art Director",
  //   tools: ["InDesign", "Photoshop", "Lightroom"],
  //   process:
  //     "Each issue begins with a thematic mood board. Grid systems and typographic hierarchies are tailored per issue while maintaining brand consistency.",
  //   results:
  //     "Circulation grew 60% over 4 issues. Featured in Communication Arts Design Annual.",
  //   year: "2023",
  // },
]
