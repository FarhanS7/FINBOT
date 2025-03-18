import {
  CloudLightning,
  FileText,
  Globe2,
  LineChart,
  PieChart,
  Wallet,
} from "lucide-react";

// Key Statistics
export const statsData = [
  {
    value: "75K+",
    label: "Registered Users",
  },
  {
    value: "$3B+",
    label: "Total Transactions Processed",
  },
  {
    value: "99.99%",
    label: "System Availability",
  },
  {
    value: "4.8/5",
    label: "Customer Satisfaction",
  },
];

// Features Overview
export const featuresData = [
  {
    icon: <LineChart className="h-8 w-8 text-green-600" />,
    title: "Deep Financial Analysis",
    description:
      "Gain powerful insights into your financial habits with AI-powered reports",
  },
  {
    icon: <FileText className="h-8 w-8 text-green-600" />,
    title: "AI Receipt Parser",
    description:
      "Scan and extract transaction details automatically from your receipts",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "Smart Budgeting",
    description:
      "Plan and allocate your finances effectively with AI suggestions",
  },
  {
    icon: <Wallet className="h-8 w-8 text-green-600" />,
    title: "Unified Account Management",
    description:
      "Keep track of all your bank accounts and cards in a single place",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-green-600" />,
    title: "Global Currency Support",
    description:
      "Seamlessly handle multiple currencies with live exchange rates",
  },
  {
    icon: <CloudLightning className="h-8 w-8 text-green-600" />,
    title: "Automated Financial Reports",
    description:
      "Receive AI-driven insights to optimize your financial strategy",
  },
];

// Getting Started Steps
export const howItWorksData = [
  {
    icon: <Wallet className="h-8 w-8 text-green-600" />,
    title: "1. Sign Up Instantly",
    description:
      "Quick and secure registration to get started on your financial journey",
  },
  {
    icon: <LineChart className="h-8 w-8 text-green-600" />,
    title: "2. Monitor Expenses",
    description:
      "Automatically log and categorize all transactions for a clear financial overview",
  },
  {
    icon: <PieChart className="h-8 w-8 text-green-600" />,
    title: "3. Optimize Spending",
    description:
      "Receive AI-driven insights and practical recommendations to improve your financial health",
  },
];

// User Reviews
export const testimonialsData = [
  {
    name: "Jessica Parker",
    role: "Entrepreneur",
    // image: "https://randomuser.me/api/portraits/women/72.jpg",
    quote:
      "FinSmart has revolutionized how I track my business expenses. The AI reports help me maximize my profits!",
  },
  {
    name: "David Lee",
    role: "Freelance Consultant",
    // image: "https://randomuser.me/api/portraits/men/72.jpg",
    quote:
      "The automated receipt scanning saves me so much time. Managing my finances has never been easier!",
  },
  {
    name: "Sophia Martinez",
    role: "Investment Analyst",
    // image: "https://randomuser.me/api/portraits/women/73.jpg",
    quote:
      "I recommend FinSmart to all my clients. The multi-currency feature is a game-changer for global investors!",
  },
];
