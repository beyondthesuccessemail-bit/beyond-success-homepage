import { Video, Share2, Target, Search, Globe, CreditCard, Mail, type LucideIcon } from "lucide-react";

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
  desc: string;
  heroTagline: string;
  heroDescription: string;
  features: string[];
  process: { step: string; description: string }[];
}

export const services: ServiceData[] = [
  {
    icon: Share2,
    title: "Social Media",
    slug: "social-media",
    desc: "Organic strategies that build real communities and turn followers into loyal customers.",
    heroTagline: "Build Communities, Not Just Followers",
    heroDescription: "We craft organic social media strategies that create genuine connections between your brand and your audience. From content creation to community management, we turn your social presence into a revenue-driving machine.",
    features: [
      "Content Strategy & Calendar Planning",
      "Community Management & Engagement",
      "Brand Voice Development",
      "Analytics & Performance Reporting",
      "Influencer Partnership Coordination",
      "Platform-Specific Content Creation",
    ],
    process: [
      { step: "Audit", description: "Deep dive into your current social presence, audience demographics, and competitor landscape." },
      { step: "Strategy", description: "Custom content strategy aligned with your brand goals and audience behaviour." },
      { step: "Create", description: "Thumb-stopping content designed for each platform's unique algorithm and audience." },
      { step: "Engage", description: "Active community management that builds loyal brand advocates." },
      { step: "Optimise", description: "Data-driven refinements to continuously improve reach and engagement." },
    ],
  },
  {
    icon: Video,
    title: "Videography",
    slug: "videography",
    desc: "Cinematic video content that captures your brand's story and connects with your audience on a deeper level.",
    heroTagline: "Stories That Move People",
    heroDescription: "From concept to final cut, we produce cinematic video content that captures the essence of your brand. Our productions range from social media clips to full brand documentaries.",
    features: [
      "Brand Films & Documentaries",
      "Social Media Video Content",
      "Product & Service Showcases",
      "Event Coverage & Highlights",
      "Testimonial & Interview Production",
      "Motion Graphics & Animation",
    ],
    process: [
      { step: "Brief", description: "Understanding your vision, goals, and the story you want to tell." },
      { step: "Pre-Production", description: "Scriptwriting, storyboarding, location scouting, and scheduling." },
      { step: "Production", description: "Professional filming with cinema-grade equipment and experienced crew." },
      { step: "Post-Production", description: "Expert editing, colour grading, sound design, and motion graphics." },
      { step: "Delivery", description: "Optimised exports for every platform and use case." },
    ],
  },
  {
    icon: Target,
    title: "PPC",
    slug: "ppc",
    desc: "Pay-per-click campaigns that maximise your return on investment and drive qualified leads.",
    heroTagline: "Every Click Counts",
    heroDescription: "Our data-driven PPC campaigns put your brand in front of high-intent buyers. We manage Google Ads, Bing Ads, and display networks to maximise your ROI.",
    features: [
      "Google Ads Management",
      "Bing Ads & Microsoft Advertising",
      "Display & Remarketing Campaigns",
      "Shopping & E-commerce Ads",
      "Conversion Tracking & Attribution",
      "A/B Testing & Landing Page Optimisation",
    ],
    process: [
      { step: "Research", description: "Keyword research, competitor analysis, and audience targeting strategy." },
      { step: "Build", description: "Campaign structure, ad copy creation, and landing page alignment." },
      { step: "Launch", description: "Strategic campaign rollout with controlled budget allocation." },
      { step: "Monitor", description: "Real-time performance tracking and bid management." },
      { step: "Scale", description: "Data-driven scaling of winning campaigns and pruning of underperformers." },
    ],
  },
  {
    icon: Search,
    title: "SEO",
    slug: "seo",
    desc: "Search engine optimisation that puts your brand in front of the right people at the right time.",
    heroTagline: "Be Found, Be Chosen",
    heroDescription: "We build sustainable organic visibility through technical excellence, compelling content, and strategic link building. Our SEO drives long-term, compounding growth.",
    features: [
      "Technical SEO Audits & Fixes",
      "On-Page Optimisation",
      "Content Strategy & Creation",
      "Link Building & Digital PR",
      "Local SEO & Google Business Profile",
      "Monthly Reporting & Insights",
    ],
    process: [
      { step: "Audit", description: "Comprehensive technical and content audit of your current site." },
      { step: "Strategy", description: "Keyword mapping, content gaps analysis, and prioritised roadmap." },
      { step: "Implement", description: "On-page optimisations, technical fixes, and content creation." },
      { step: "Build", description: "Authority building through strategic link acquisition and digital PR." },
      { step: "Report", description: "Transparent monthly reporting with actionable insights." },
    ],
  },
  {
    icon: Globe,
    title: "Website Design",
    slug: "website-design",
    desc: "Beautiful, high-converting websites that reflect your brand and deliver results.",
    heroTagline: "Design That Converts",
    heroDescription: "We design and build stunning websites that don't just look good — they drive results. Every pixel is intentional, every interaction is optimised for conversion.",
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions",
      "Conversion Rate Optimisation",
      "Responsive & Mobile-First Design",
      "CMS Setup & Training",
      "Ongoing Maintenance & Support",
    ],
    process: [
      { step: "Discover", description: "Understanding your business, audience, and goals." },
      { step: "Design", description: "Wireframes and high-fidelity mockups for your approval." },
      { step: "Develop", description: "Clean, performant code that brings the design to life." },
      { step: "Test", description: "Rigorous cross-browser and device testing." },
      { step: "Launch", description: "Smooth deployment with post-launch monitoring and support." },
    ],
  },
  {
    icon: CreditCard,
    title: "Paid Social",
    slug: "paid-social",
    desc: "Targeted social advertising that reaches your ideal audience and drives measurable growth.",
    heroTagline: "Precision Targeting, Real Results",
    heroDescription: "We create and manage paid social campaigns across Meta, TikTok, LinkedIn, and more. Our approach combines creative excellence with data-driven targeting.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "TikTok Advertising",
      "LinkedIn Ads for B2B",
      "Creative Ad Production",
      "Audience Building & Lookalikes",
      "Retargeting & Funnel Optimisation",
    ],
    process: [
      { step: "Audience", description: "Deep audience research and persona development." },
      { step: "Creative", description: "Scroll-stopping ad creative designed for each platform." },
      { step: "Launch", description: "Strategic campaign structure with testing frameworks." },
      { step: "Optimise", description: "Continuous creative and audience optimisation." },
      { step: "Scale", description: "Scaling winning combinations while maintaining ROAS targets." },
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    desc: "Personalised email campaigns that nurture leads and keep your customers coming back.",
    heroTagline: "Inbox to Income",
    heroDescription: "We build email marketing systems that nurture leads, drive repeat purchases, and turn one-time buyers into lifetime customers. Every email is crafted to convert.",
    features: [
      "Email Strategy & Automation",
      "Campaign Design & Copywriting",
      "List Segmentation & Personalisation",
      "A/B Testing & Optimisation",
      "Drip Sequences & Nurture Flows",
      "Deliverability & List Hygiene",
    ],
    process: [
      { step: "Audit", description: "Review existing email infrastructure, lists, and performance." },
      { step: "Strategy", description: "Map out automation flows, segments, and campaign calendar." },
      { step: "Build", description: "Design templates, write copy, and set up automation sequences." },
      { step: "Test", description: "A/B test subject lines, content, and send times." },
      { step: "Refine", description: "Ongoing optimisation based on open rates, clicks, and revenue." },
    ],
  },
];
