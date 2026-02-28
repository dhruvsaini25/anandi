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
    id: "aurora-branding",
    title: "Aurora Branding",
    category: "Branding",
    description:
      "A complete brand identity for Aurora, a wellness and meditation app. The design captures serenity through fluid forms and a calming color palette, creating an immersive visual experience that resonates with mindful living.",
    thumbnail: "/images/projects/aurora-thumb.jpg",
    images: [
      "/images/projects/aurora-1.jpg",
      "/images/projects/aurora-2.jpg",
      "/images/projects/aurora-3.jpg",
    ],
    role: "Lead Brand Designer",
    tools: ["Illustrator", "Photoshop", "Figma"],
    process:
      "Starting with mood boards and sketches, I explored organic shapes and gradients before refining the final mark. Typography pairing and color theory drove every decision.",
    results:
      "40% increase in brand recognition within the first quarter. The identity system was adopted across 12 digital and print touchpoints.",
    year: "2025",
  },
  {
    id: "bloom-packaging",
    title: "Bloom Packaging",
    category: "Packaging",
    description:
      "Premium packaging design for Bloom, an organic skincare line. Earthy textures meet modern minimalism, showcasing the product's natural ingredients through tactile and visual storytelling.",
    thumbnail: "/images/projects/bloom-thumb.jpg",
    images: [
      "/images/projects/bloom-1.jpg",
      "/images/projects/bloom-2.jpg",
      "/images/projects/bloom-3.jpg",
    ],
    role: "Packaging Designer",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    process:
      "Research into sustainable materials led the physical design, while hand-drawn botanical illustrations brought warmth. Multiple prototypes were tested before the final production run.",
    results:
      "Packaging won a Gold at the DIELINE Awards. Shelf appeal contributed to a 25% sales uplift in the first month.",
    year: "2025",
  },
  {
    id: "nexus-ui",
    title: "Nexus Dashboard",
    category: "UI/UX",
    description:
      "A sleek analytics dashboard for a fintech startup. Data-dense interfaces were simplified through clear hierarchy, intuitive navigation, and thoughtful data visualization.",
    thumbnail: "/images/projects/nexus-thumb.jpg",
    images: [
      "/images/projects/nexus-1.jpg",
      "/images/projects/nexus-2.jpg",
      "/images/projects/nexus-3.jpg",
    ],
    role: "UI/UX Designer",
    tools: ["Figma", "Framer", "After Effects"],
    process:
      "User research and journey mapping guided the information architecture. Interactive prototypes were tested with 30+ users to refine the final design.",
    results:
      "Task completion time reduced by 35%. User satisfaction scores improved from 3.2 to 4.7 out of 5.",
    year: "2024",
  },
  {
    id: "terra-logo",
    title: "Terra Coffee",
    category: "Logo Design",
    description:
      "A distinctive logo and visual identity for Terra Coffee, an artisan roastery. The mark combines a mountain silhouette with a coffee bean, embodying the brand's origin story and craft.",
    thumbnail: "/images/projects/terra-thumb.jpg",
    images: [
      "/images/projects/terra-1.jpg",
      "/images/projects/terra-2.jpg",
      "/images/projects/terra-3.jpg",
    ],
    role: "Brand Identity Designer",
    tools: ["Illustrator", "Photoshop"],
    process:
      "Over 50 thumbnail sketches were refined into 5 concepts. Client workshops narrowed the direction before detailed vector execution and brand guideline creation.",
    results:
      "The brand launched with 3 flagship locations and the identity system received coverage in Brand New.",
    year: "2024",
  },
  {
    id: "waves-social",
    title: "Waves Festival",
    category: "Social Media",
    description:
      "A vibrant social media campaign for Waves Music Festival. Dynamic compositions and bold typography captured the festival's energy across Instagram, TikTok, and event signage.",
    thumbnail: "/images/projects/waves-thumb.jpg",
    images: [
      "/images/projects/waves-1.jpg",
      "/images/projects/waves-2.jpg",
      "/images/projects/waves-3.jpg",
    ],
    role: "Creative Director",
    tools: ["Photoshop", "After Effects", "Premiere Pro"],
    process:
      "The visual language was built around sound waves and neon palettes. Animated templates enabled rapid content creation during the 3-day event.",
    results:
      "Campaign reached 2.4M impressions. Engagement rate tripled compared to the previous year.",
    year: "2024",
  },
  {
    id: "luna-illustration",
    title: "Luna Children's Book",
    category: "Illustration",
    description:
      "Whimsical illustrations for a children's picture book about a curious cat exploring the night sky. Soft watercolor textures meet digital precision in a dreamlike visual narrative.",
    thumbnail: "/images/projects/luna-thumb.jpg",
    images: [
      "/images/projects/luna-1.jpg",
      "/images/projects/luna-2.jpg",
      "/images/projects/luna-3.jpg",
    ],
    role: "Illustrator",
    tools: ["Procreate", "Photoshop", "InDesign"],
    process:
      "Character development began with pencil sketches, evolving through color studies. Each spread was designed to guide the reader's eye through the story.",
    results:
      "Published by Penguin Random House. Nominated for the Kate Greenaway Medal for illustration.",
    year: "2023",
  },
  {
    id: "prism-motion",
    title: "Prism Motion Reel",
    category: "Motion Design",
    description:
      "An energetic motion design reel for Prism Studios showcasing kinetic typography, logo animations, and product reveals. Every frame is designed to captivate and communicate.",
    thumbnail: "/images/projects/prism-thumb.jpg",
    images: [
      "/images/projects/prism-1.jpg",
      "/images/projects/prism-2.jpg",
      "/images/projects/prism-3.jpg",
    ],
    role: "Motion Designer",
    tools: ["After Effects", "Cinema 4D", "Illustrator"],
    process:
      "Storyboarding drove the narrative arc. Each segment was crafted with precise timing, easing curves, and sound design integration.",
    results:
      "Reel garnered 100K+ views on Vimeo and was featured on Motionographer.",
    year: "2023",
  },
  {
    id: "echo-branding",
    title: "Echo Fitness",
    category: "Branding",
    description:
      "A bold and energetic brand identity for Echo Fitness, a boutique gym chain. Sharp geometry and a high-contrast palette convey strength, discipline, and movement.",
    thumbnail: "/images/projects/echo-thumb.jpg",
    images: [
      "/images/projects/echo-1.jpg",
      "/images/projects/echo-2.jpg",
      "/images/projects/echo-3.jpg",
    ],
    role: "Brand Designer",
    tools: ["Illustrator", "Figma", "Photoshop"],
    process:
      "Competitive analysis and brand positioning workshops shaped the strategic foundation. Iterative design sprints with the founding team honed the final system.",
    results:
      "Brand launched to a waitlist of 5,000+. Merchandise line sold out within 48 hours.",
    year: "2023",
  },
  {
    id: "solstice-editorial",
    title: "Solstice Magazine",
    category: "Editorial",
    description:
      "Art direction and layout design for Solstice, a quarterly culture and design magazine. Each issue features distinctive editorial spreads that balance typography, photography, and white space.",
    thumbnail: "/images/projects/solstice-thumb.jpg",
    images: [
      "/images/projects/solstice-1.jpg",
      "/images/projects/solstice-2.jpg",
      "/images/projects/solstice-3.jpg",
    ],
    role: "Art Director",
    tools: ["InDesign", "Photoshop", "Lightroom"],
    process:
      "Each issue begins with a thematic mood board. Grid systems and typographic hierarchies are tailored per issue while maintaining brand consistency.",
    results:
      "Circulation grew 60% over 4 issues. Featured in Communication Arts Design Annual.",
    year: "2023",
  },
]
