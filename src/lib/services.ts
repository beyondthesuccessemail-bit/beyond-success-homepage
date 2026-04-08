import { Video, Share2, Target, Search, Globe, CreditCard, Mail, type LucideIcon } from "lucide-react";

export interface ServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
  desc: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  heroDescription: string;
  heroImage?: string;
  features: string[];
  process: { step: string; description: string }[];
  relatedServices?: { text: string; linkText: string; slug: string }[];
}

import socialMediaHero from "@/assets/service-social-media-hero.jpg";
import videographyHero from "@/assets/service-videography-hero.jpg";
import websiteDesignHero from "@/assets/service-website-design-hero.jpg";
import seoHero from "@/assets/service-seo-hero.jpg";
import ppcHero from "@/assets/service-ppc-hero.jpg";
import paidSocialHero from "@/assets/service-paid-social-hero.jpg";
import emailMarketingHero from "@/assets/service-email-marketing-hero.jpg";

export const services: ServiceData[] = [
  {
    icon: Share2,
    title: "Social Media",
    slug: "social-media",
    desc: "We film, storyboard, schedule, and report on your short-form social content, end to end.",
    metaTitle: "Social Media Marketing Services - Becoming The Success",
    metaDescription: "We film, edit & manage your short-form social content end to end. Build a real community and turn followers into customers. Get a free quote today.",
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
    metaTitle: "Professional Videography Services - Becoming The Success",
    metaDescription: "Cinema-grade video for hero banners, brand films & promotions. Professional cameras, drones & colour grading included. Book your production today.",
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
      { step: "Post-Production", description: "Expert editing, professional colour grading, sound design, and music licensing." },
      { step: "Delivery", description: "Final exports optimised for web, social, broadcast, and any other platforms you need." },
    ],
  },
  {
    icon: Target,
    title: "PPC",
    slug: "ppc",
    desc: "Strategic pay-per-click advertising that puts your business in front of high-intent buyers and delivers measurable returns.",
    metaTitle: "PPC & Google Ads Management - Becoming The Success",
    metaDescription: "Drive qualified leads with data-driven PPC campaigns on Google & Bing. We manage setup, optimisation & reporting to maximise your return on ad spend.",
    heroTagline: "Every Click Counts",
    heroDescription: "We build and manage pay-per-click campaigns that turn ad spend into revenue. From Google Ads to Bing and display networks, every campaign is structured around your goals, your audience, and your bottom line. We handle the research, the setup, the optimisation, and the reporting so you get results without the guesswork.",
    heroImage: ppcHero,
    features: [
      "Google Ads Search & Display Management",
      "Bing Ads & Microsoft Advertising",
      "Shopping & E-commerce Ad Campaigns",
      "Remarketing & Retargeting Strategies",
      "Conversion Tracking & Attribution Setup",
      "A/B Testing & Ad Copy Optimisation",
      "Landing Page Strategy & Alignment",
      "Transparent Budget Management & Reporting",
    ],
    process: [
      { step: "Research", description: "In-depth keyword research, competitor analysis, and audience targeting to build a strategy that reaches the right people at the right time." },
      { step: "Build", description: "Campaign structure, compelling ad copy, keyword grouping, and landing page alignment designed to maximise quality scores and conversions." },
      { step: "Launch", description: "Strategic rollout with controlled budget allocation, ensuring your spend is focused where it will have the greatest impact." },
      { step: "Optimise", description: "Continuous performance monitoring, bid adjustments, ad testing, and refinement to improve results week on week." },
      { step: "Scale", description: "Data-driven scaling of winning campaigns while cutting underperformers, so your return on ad spend keeps growing." },
    ],
  },
  {
    icon: Search,
    title: "SEO",
    slug: "seo",
    desc: "Strategic search engine optimisation that drives consistent, qualified organic traffic to your website month after month.",
    metaTitle: "SEO Services That Grow Rankings - Becoming The Success",
    metaDescription: "Climb Google rankings with proven SEO strategies. Technical audits, content, link building & monthly reporting. Start growing organic traffic today.",
    heroTagline: "Be Found, Be Chosen",
    heroDescription: "We help businesses climb the search rankings and stay there. Our approach to search engine optimisation combines technical expertise, high-quality content, and strategic link building to deliver sustainable organic growth. No shortcuts, no tricks, just proven methods that compound over time and put your brand in front of the people actively searching for what you offer.",
    heroImage: seoHero,
    features: [
      "Comprehensive Technical SEO Audits & Fixes",
      "On-Page Optimisation & Keyword Targeting",
      "Content Strategy, Creation & Optimisation",
      "Link Building & Digital PR Outreach",
      "Local SEO & Google Business Profile Management",
      "Competitor Analysis & Market Research",
      "Core Web Vitals & Site Speed Optimisation",
      "Transparent Monthly Reporting & Insights",
    ],
    process: [
      { step: "Audit", description: "We carry out a thorough technical and content audit of your website, identifying every issue holding back your rankings." },
      { step: "Strategy", description: "Keyword research, competitor analysis, content gap mapping, and a prioritised roadmap tailored to your goals." },
      { step: "Implement", description: "On-page optimisations, technical fixes, meta data improvements, and content creation to strengthen your site from the ground up." },
      { step: "Build Authority", description: "Strategic link acquisition and digital PR to grow your domain authority and build trust with search engines." },
      { step: "Report & Refine", description: "Monthly performance reports with clear insights, tracking rankings, traffic, and conversions so you can see the impact." },
    ],
  },
  {
    icon: Globe,
    title: "Website Design",
    slug: "website-design",
    desc: "Bespoke, high-performance websites built from scratch, designed to look stunning and engineered to rank, convert, and scale.",
    metaTitle: "Website Design & Development - Becoming The Success",
    metaDescription: "Bespoke websites built to look stunning and convert visitors. Fast, mobile-first & SEO-friendly design from scratch. Start your project with us today.",
    heroTagline: "Websites Built to Perform",
    heroDescription: "We don't just design websites, we build digital platforms made for growth. Every site we create is crafted from scratch with clean code, fast load times, and a structure built to convert. Whether you need a brand-new site or a complete rebuild, we deliver a website that looks world-class and works even harder behind the scenes.",
    heroImage: websiteDesignHero,
    features: [
      "Bespoke Website Design & Development from Scratch",
      "Search-Friendly Architecture & Clean URL Structures",
      "Conversion-Optimised Landing Pages & Funnels",
      "Responsive & Mobile-First Design",
      "Performance-Optimised for Core Web Vitals",
      "E-commerce Solutions (Shopify, WooCommerce, Custom)",
      "CMS Integration, Setup & Training",
      "Ongoing Maintenance, Hosting & Support",
    ],
    process: [
      { step: "Discovery & Strategy", description: "We learn your business inside out, your goals, audience, competitors, and growth plans, to define a website strategy that delivers." },
      { step: "Wireframing & UX Design", description: "We map out every page with user journeys, conversion paths, and intuitive navigation before any visual design begins." },
      { step: "Visual Design", description: "High-fidelity mockups that bring your brand to life with bold, modern aesthetics and pixel-perfect attention to detail." },
      { step: "Development & Build", description: "Clean, semantic code with structured data, optimised meta tags, and fast load times, all built on a solid foundation for long-term growth." },
      { step: "Testing & Launch", description: "Rigorous cross-browser and device testing, performance audits, and a smooth deployment with post-launch monitoring." },
    ],
  },
  {
    icon: CreditCard,
    title: "Paid Social",
    slug: "paid-social",
    desc: "Strategic social media advertising that gets your brand in front of the right audience and turns impressions into customers.",
    metaTitle: "Paid Social Advertising Services - Becoming The Success",
    metaDescription: "Precision paid social ads across Meta, TikTok & LinkedIn. Audience research, creative production & full funnel management. Get your free quote today.",
    heroTagline: "Precision Targeting, Real Results",
    heroDescription: "We plan, build, and manage paid social campaigns across Meta, TikTok, LinkedIn, and more. Every campaign is backed by audience research, creative testing, and continuous optimisation to make sure your ad spend is working as hard as possible. From awareness to conversion, we handle the full funnel so you can focus on your business.",
    heroImage: paidSocialHero,
    features: [
      "Meta Ads (Facebook & Instagram)",
      "TikTok Advertising & Creative",
      "LinkedIn Ads for B2B Lead Generation",
      "Scroll-Stopping Ad Creative Production",
      "Audience Research, Building & Lookalikes",
      "Retargeting & Full-Funnel Strategies",
      "Creative Testing & Performance Analysis",
      "Transparent Reporting & ROAS Tracking",
    ],
    process: [
      { step: "Audience Research", description: "We dig into your ideal customer, building detailed personas, interest maps, and lookalike audiences to ensure your ads reach the right people." },
      { step: "Creative Production", description: "Our team produces platform-native ad creative, from static graphics to short-form video, designed to stop the scroll and drive action." },
      { step: "Campaign Launch", description: "Structured campaign rollout with proper testing frameworks, budget allocation, and tracking in place from day one." },
      { step: "Optimise & Test", description: "Continuous creative and audience testing, with regular optimisation to improve cost per result and overall performance." },
      { step: "Scale & Report", description: "We scale what works, cut what doesn't, and provide clear monthly reports showing spend, results, and return on ad spend." },
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    slug: "email-marketing",
    desc: "Personalised email campaigns that nurture leads and keep your customers coming back.",
    metaTitle: "Email Marketing Services & Campaigns - Becoming The Success",
    metaDescription: "From welcome flows to monthly campaigns, we write, design & automate emails that open, click & convert. Turn your list into revenue. Start today.",
    heroTagline: "Inbox to Income",
    heroDescription: "We build email marketing systems that nurture leads, drive repeat purchases, and turn one-time buyers into lifetime customers. From welcome sequences and abandoned cart flows to monthly newsletters and product launches, every email we send is strategically crafted to engage your audience and generate revenue. No spam, no fluff, just emails people actually want to open.",
    heroImage: emailMarketingHero,
    features: [
      "Email Strategy & Automation Flows",
      "Campaign Design & Copywriting",
      "List Segmentation & Personalisation",
      "A/B Testing & Subject Line Optimisation",
      "Drip Sequences & Nurture Flows",
      "Deliverability Monitoring & List Hygiene",
      "Welcome, Abandoned Cart & Win-Back Sequences",
      "Monthly Performance Reporting & Insights",
    ],
    process: [
      { step: "Audit", description: "We review your existing email infrastructure, subscriber lists, and past campaign performance to identify gaps and opportunities." },
      { step: "Strategy", description: "We map out automation flows, audience segments, and a campaign calendar aligned to your business goals and customer journey." },
      { step: "Build", description: "Our team designs on-brand templates, writes compelling copy, and sets up automation sequences in your chosen email platform." },
      { step: "Test", description: "We A/B test subject lines, content layouts, calls to action, and send times to find the combinations that drive the best results." },
      { step: "Refine", description: "Ongoing optimisation based on open rates, click-through rates, conversions, and revenue, with clear monthly reporting." },
    ],
  },
];
