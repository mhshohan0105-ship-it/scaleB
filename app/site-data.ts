export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const siteUrl = "https://scalebbd.com";

export const office = {
  name: "Banani Office",
  phone: "+8801314-779988",
  phoneHref: "tel:+8801314779988",
  address: "Huda Apartment (3rd Floor), House 59, Road 4, Block C, Banani, Dhaka, Bangladesh, 1213",
};

export const services = [
  {
    title: "Custom software",
    description: "Purpose built platforms and tools that make your business work smarter.",
    tags: ["Web platforms", "SaaS", "Integrations"],
  },
  {
    title: "Product design & strategy",
    description: "Research led product thinking that turns complex needs into clear experiences.",
    tags: ["Product strategy", "UX / UI", "Prototyping"],
  },
  {
    title: "Web & mobile apps",
    description: "Fast, intuitive digital products that feel right on every screen.",
    tags: ["Web apps", "iOS / Android", "Ecommerce"],
  },
  {
    title: "Cloud & platforms",
    description: "Resilient infrastructure and modern architecture, built for steady growth.",
    tags: ["Cloud native", "DevOps", "Modernization"],
  },
  {
    title: "AI & automation",
    description: "Practical intelligence and workflows that take friction out of real work.",
    tags: ["Applied AI", "Automation", "Data products"],
  },
  {
    title: "Quality & security",
    description: "Reliable, accessible products with the care and confidence users expect.",
    tags: ["QA engineering", "Accessibility", "Security"],
  },
  {
    title: "Digital marketing",
    description: "Campaigns that reach the right people and turn visitors into loyal customers.",
    tags: ["SEO", "Social media", "Paid ads"],
  },
  {
    title: "Content creation",
    description: "Words, visuals and videos that tell your story and keep your audience coming back.",
    tags: ["Copywriting", "Graphic design", "Video"],
  },
];

export const projects: { title: string; category: string; type: string; description: string; image?: string; accent: string; url?: string; status?: string }[] = [
  {
    title: "TripBook",
    category: "Travel",
    type: "Travel booking · Website",
    description: "An all in one travel booking site for tours, hotels, visas and experiences.",
    image: "/work/tripbook.jpg",
    accent: "amber",
    url: "https://tripbookbd.com/",
  },
  {
    title: "ScaleB Insider",
    category: "Our products",
    type: "In house app · In development",
    description: "Our own app, built in house by the ScaleB team. More details coming soon.",
    accent: "amber",
    status: "Coming soon",
  },
];

export const stats = [
  { value: "Strategy", label: "Start with the right question" },
  { value: "Design", label: "Make the experience clear" },
  { value: "Engineering", label: "Build it to work well" },
  { value: "Growth", label: "Keep making it better" },
];

export const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL", "Figma",
  "Tailwind", "React Native", "Flutter", "Docker", "Kubernetes", "GCP", "MongoDB", "Redis",
  "Laravel", "Django", "OpenAI", "Vercel",
];

// Replace these with ScaleB's real numbers before going live.
export const homeStats = [
  { value: "8", label: "Services under one roof" },
  { value: "1", label: "Team from idea to launch" },
  { value: "100%", label: "Source code you own" },
  { value: "24h", label: "Average first reply" },
];

export const engagementModels = [
  {
    label: "Project",
    title: "Fixed scope build",
    description: "A clear brief, a fixed plan and a team that ships it from discovery to launch.",
    points: ["Discovery workshop", "Fixed timeline and budget", "Launch support included"],
  },
  {
    label: "Team",
    title: "Dedicated team",
    description: "Senior engineers and designers who join your roadmap and work as part of your team.",
    points: ["Start within days", "Scale up or down monthly", "Weekly demos and reports"],
  },
  {
    label: "Growth",
    title: "Care and growth",
    description: "Ongoing improvements, marketing and support that keep your product moving forward.",
    points: ["Monitoring and fixes", "SEO and content", "Monthly improvement sprints"],
  },
];

export const processSteps = [
  { title: "Discovery", description: "Workshops to understand your goals, users and constraints." },
  { title: "Design", description: "User flows, interface design and clickable prototypes you can test." },
  { title: "Development", description: "Focused sprints with weekly demos and transparent progress." },
  { title: "Quality", description: "Manual and automated testing for a stable and secure release." },
  { title: "Launch", description: "Smooth deployment, monitoring and app store submission." },
  { title: "Growth", description: "Support, improvements and marketing as your product grows." },
];

export const values = [
  { title: "Craft", description: "Every release is held to a standard we are proud to sign." },
  { title: "Honesty", description: "Clear estimates, open progress and no surprises." },
  { title: "Curiosity", description: "We bring fresh ideas and modern tools to every problem." },
  { title: "Partnership", description: "We work as one team with our clients, not as a vendor." },
];

export const faqs = [
  { question: "How much does a custom project cost?", answer: "It depends on scope. A focused website can start small while a full platform takes more time and people. Use the estimator above for an instant range and we will follow up with a detailed fixed scope proposal after a free discovery call." },
  { question: "How long does it take to build an app?", answer: "Most websites take two to six weeks. Web and mobile apps usually take two to four months. We share a clear timeline before any work begins." },
  { question: "Do I own the source code?", answer: "Yes. Once the project is paid for, the code, designs and accounts belong to you." },
  { question: "Do you work with international clients?", answer: "Yes. We work remotely with teams in different time zones and keep communication simple with weekly calls and shared boards." },
  { question: "What happens after launch?", answer: "We monitor the release, fix anything that comes up and can stay on for ongoing improvements, marketing and support." },
  { question: "Can you join our existing team?", answer: "Yes. Our dedicated team model lets our engineers and designers work inside your process and tools." },
];

// Indicative pricing for the estimator. Adjust to match ScaleB's real rates.
export const estimator = {
  usdToBdt: 122,
  types: [
    { label: "Website", base: 88 },
    { label: "Web app or SaaS", base: 350 },
    { label: "Mobile app", base: 420 },
    { label: "Ecommerce", base: 175 },
    { label: "AI solution", base: 315 },
    { label: "Enterprise software", base: 875 },
  ],
  features: [
    { label: "User accounts and login", cost: 35 },
    { label: "Online payments", cost: 42 },
    { label: "Admin dashboard", cost: 53 },
    { label: "Chat or real time", cost: 70 },
    { label: "AI features", cost: 88 },
    { label: "Third party integrations", cost: 35 },
    { label: "Multi language", cost: 28 },
    { label: "Analytics and reports", cost: 35 },
  ],
  designs: [
    { label: "Clean and simple", factor: 1 },
    { label: "Custom branded", factor: 1.25 },
    { label: "Premium with motion", factor: 1.6 },
  ],
  timelines: [
    { label: "Flexible (3+ months)", factor: 0.95, pace: 1.15 },
    { label: "Standard (1 to 3 months)", factor: 1, pace: 1 },
    { label: "Urgent (under 1 month)", factor: 1.3, pace: 0.7 },
  ],
};
