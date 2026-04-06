import { Video, Share2, Target, Search, Globe, CreditCard, Mail, type LucideIcon } from "lucide-react";

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
  desc: string;
  heroTagline: string;
  heroDescription: string;
  heroImage?: string;
  features: string[];
  process: { step: string; description: string }[];
}

import socialMediaHero from "@/assets/service-social-media-hero.jpg";
import videographyHero from "@/assets/service-videography-hero.jpg";

export const services: ServiceData[] = [
  {
    icon: Share2,
    title: "Social Media",
    slug: "social-media",
    desc: "We film, storyboard, schedule, and report on your short-form social content, end to end.",
    heroTagline: "Build Communities, Not Just Followers",
    heroDescription: "We don't just manage your socials. We come to you, film short-form content, storyboard creative ideas, schedule everything, and deliver monthly performance reports. From concept to analytics, we handle it all so you can focus on running your business.",
    heroImage: socialMediaHero,
    features: [
      "On-Location Short-Form Content Filming",
      "Creative Storyboarding & Ideation",
      "Content Scheduling & Publishing",
      "Monthly Performance Reports & Analytics",
      "Community Management & Engagement",
      "Platform-Specific Strategy (TikTok, Reels, Shorts)",
      "Brand Voice Development",
      "Influencer Partnership Coordination",
    ],
    process: [
      { step: "Discovery", description: "We meet with you to understand your brand, goals, and target audience. We plan the content themes and messaging." },
      { step: "Storyboard", description: "Our creative team develops concepts, scripts, and storyboards for your short-form content." },
      { step: "Film", description: "We come to your location and film professional short-form video content for Reels, TikToks, and Shorts." },
      { step: "Edit & Schedule", description: "We edit the content, add captions and graphics, then schedule it across your platforms." },
      { step: "Report", description: "Monthly performance reports showing reach, engagement, growth, and actionable insights for the next month." },
    ],
  },
  {
    icon: Video,
    title: "Videography",
    slug: "videography",
    desc: "Professional, cinematic video production shot on top-tier cameras and drones for hero banners, promotions, and brand films.",
    heroTagline: "Cinematic Video That Elevates Your Brand",
    heroDescription: "Our videography service delivers premium, longer-form video content shot on professional cinema cameras, gimbals, and drones. From hero banners and promotional films to brand documentaries, we bring a cinematic quality that sets your business apart.",
    heroImage: videographyHero,
    features: [
      "Cinema-Grade Camera Equipment (RED, Sony, Blackmagic)",
      "Professional Drone Footage (Licensed Pilots)",
      "Hero Banner & Website Video Production",
      "Promotional & Advertising Films",
      "Brand Documentaries & Company Profiles",
      "Professional Colour Grading & Sound Design",
      "Motion Graphics & Title Sequences",
      "Event & Product Launch Coverage",
    ],
    process: [
      { step: "Brief", description: "We sit down with you to understand your vision, brand identity, and the story you want to tell." },
      { step: "Pre-Production", description: "Scriptwriting, storyboarding, shot lists, location scouting, and scheduling the shoot." },
      { step: "Production", description: "Full production day with cinema cameras, lighting rigs, drone operators, and experienced crew on location." },
      { step: "Post-Production", description: "Expert editing, professional colour grading, sound design, motion graphics, and music licensing." },
      { step: "Delivery", description: "Final exports optimised for web, social, broadcast, and any other platforms you need." },
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
    heroDescription: "We design and build stunning websites that don't just look good, they drive results. Every pixel is intentional, every interaction is optimised for conversion.",
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
