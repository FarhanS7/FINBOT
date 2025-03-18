export const defaultCategories = [
  // Income Streams
  {
    id: "wages",
    name: "Wages",
    type: "INCOME",
    color: "#16a34a", // emerald-600
    icon: "Banknotes",
  },
  {
    id: "consulting",
    name: "Consulting",
    type: "INCOME",
    color: "#0ea5e9", // sky-500
    icon: "Briefcase",
  },
  {
    id: "dividends",
    name: "Dividends",
    type: "INCOME",
    color: "#9333ea", // purple-600
    icon: "BarChart",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    type: "INCOME",
    color: "#db2777", // rose-600
    icon: "BuildingOffice",
  },
  {
    id: "leasing",
    name: "Leasing",
    type: "INCOME",
    color: "#facc15", // yellow-400
    icon: "House",
  },
  {
    id: "misc-income",
    name: "Miscellaneous Earnings",
    type: "INCOME",
    color: "#475569", // gray-600
    icon: "PlusCircle",
  },

  // Spending Categories
  {
    id: "accommodation",
    name: "Accommodation",
    type: "EXPENSE",
    color: "#dc2626", // red-600
    icon: "HomeModern",
    subcategories: ["Rent", "Loan Payment", "Property Levies", "Upkeep"],
  },
  {
    id: "commuting",
    name: "Commuting",
    type: "EXPENSE",
    color: "#ea580c", // orange-600
    icon: "Train",
    subcategories: ["Gas", "Transit", "Repairs", "Tolls"],
  },
  {
    id: "provisions",
    name: "Provisions",
    type: "EXPENSE",
    color: "#65a30d", // green-600
    icon: "ShoppingCart",
  },
  {
    id: "services",
    name: "Services",
    type: "EXPENSE",
    color: "#0891b2", // cyan-600
    icon: "LightningBolt",
    subcategories: ["Electric", "Water", "Heating", "Internet", "Mobile"],
  },
  {
    id: "leisure",
    name: "Leisure",
    type: "EXPENSE",
    color: "#7c3aed", // indigo-600
    icon: "GameController",
    subcategories: ["Cinema", "Gaming", "Streaming"],
  },
  {
    id: "dining",
    name: "Dining",
    type: "EXPENSE",
    color: "#e11d48", // rose-600
    icon: "ForkKnife",
  },
  {
    id: "retail",
    name: "Retail",
    type: "EXPENSE",
    color: "#c026d3", // fuchsia-600
    icon: "Bag",
    subcategories: ["Clothing", "Tech", "Household Items"],
  },
  {
    id: "medical",
    name: "Medical Care",
    type: "EXPENSE",
    color: "#0d9488", // teal-600
    icon: "HeartPulse",
    subcategories: ["Doctor", "Dentist", "Pharmacy", "Health Insurance"],
  },
  {
    id: "learning",
    name: "Learning",
    type: "EXPENSE",
    color: "#4f46e5", // blue-600
    icon: "BookOpen",
    subcategories: ["Tuition", "Books", "Workshops"],
  },
  {
    id: "selfcare",
    name: "Self Care",
    type: "EXPENSE",
    color: "#d946ef", // violet-500
    icon: "FaceSmile",
    subcategories: ["Salon", "Gym Membership", "Wellness"],
  },
  {
    id: "voyage",
    name: "Voyage",
    type: "EXPENSE",
    color: "#0284c7", // blue-500
    icon: "Airplane",
  },
  {
    id: "coverage",
    name: "Coverage",
    type: "EXPENSE",
    color: "#475569", // slate-600
    icon: "ShieldCheck",
    subcategories: ["Health", "Home", "Car"],
  },
  {
    id: "charity",
    name: "Charity & Contributions",
    type: "EXPENSE",
    color: "#db2777", // rose-600
    icon: "HandHoldingHeart",
  },
  {
    id: "dues",
    name: "Dues & Charges",
    type: "EXPENSE",
    color: "#fb7185", // rose-400
    icon: "ReceiptTax",
    subcategories: ["Bank Penalties", "Late Charges", "Admin Fees"],
  },
  {
    id: "uncategorized",
    name: "Uncategorized Spending",
    type: "EXPENSE",
    color: "#64748b", // gray-500
    icon: "EllipsisHorizontal",
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});
