import icon1 from '../assets/icon.svg';
import icon2 from '../assets/icon-2.svg';
import icon3 from '../assets/icon-3.svg';
import icon4 from '../assets/icon-4.svg';

export const navItems = [
  { label: "About Us", href: "#about-us" },
  { label: "How it works", href: "#how-it-works"},
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
];

export const aboutList = [
  { label: "1", description: "Shared Cloud Libraries, for a single source of truth"},
  { label: "2", description: "Prototype previews for user testing and research"},
  { label: "3", description: "Easy organization with projects"},
  { label: "4", description: "Free developer handoff, right inside the browser"},
  { label: "5", description: "Two-factor authentication and SSO"},
];

export const works = [
  {
    icon: icon4,
    text: "Shared Cloud Libraries",
    description: "Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library.",
  },
  {
    icon: icon3,
    text: "Free developer handoff, right inside",
    description: "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code -- all in the browser and, most importantly, for free.",
  },
  {
    icon: icon2,
    text: "Real-time collaborative editing",
    description: "Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.",
  },
  {
    icon: icon1,
    text: "Integrations with the Cloud API",
    description: "Unlocking the value requires an iPaaS that delivers the transformative power of APIs and integration.",
  },
];

export const priceOptions = [
  {
    id: "1",
    price: "49",
    offer: "A pay-once license, just for you",
    features: [
      "The Mac app",
      "Beautiful White_level",
      "One year of saving",
    ],
  },
  {
    id: "2",
    price: "99",
    offer: "Pro account, just for you",
    features: [
      "The Mac app",
      "One year of Mac app",
      "One year of saving",
      "A personal Cloud",
      "All tools, just for you",
    ],
  },
  {
    id: "3",
    price: "299",
    offer: "A subscription for the whole team",
    features: [
      "Acces to the Mac app",
      "Cloud workspace",
      "Free Cloud access",
      "Easy team management",
      "No license key required",
    ],
  },
];

export const faqAccordion = [
  {
    id: "1",
    title: "How much does a Team subscription cost?",
    description: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch docuemnts. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    id: "2",
    title: "Do I need to purchase licenses for the Mac App?",
    description: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch docuemnts. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    id: "3",
    title: "What are the differences between Contributors and Viewers?",
    description: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch docuemnts. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    id: "4",
    title: "How long does the free Teams subscription last?",
    description: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch docuemnts. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
  {
    id: "5",
    title: "Will program for Teams replace volume licensing?",
    description: "Contributors are members of your team who need access to use the Mac app to create and edit Sketch docuemnts. These prices don't include sales tax, which may still apply. Head over to our pricing page to get full details.",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
