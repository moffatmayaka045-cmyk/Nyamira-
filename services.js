export const departments = [
  {
    id: "health",
    name: "Health Services",
    swahili: "Huduma za Afya",
    icon: "🏥",
    color: "#c0392b",
    bg: "#fdf0ef",
    count: 14,
    services: [
      { name: "County Referral Hospital", swahili: "Hospitali ya Rufaa ya Kaunti", desc: "Nyamira County Referral Hospital — inpatient & outpatient", fee: "NHIF / Subsidized", online: false, phone: "0720 000 001" },
      { name: "Ambulance Services", swahili: "Huduma za Ambulensi", desc: "Emergency medical transport countywide 24/7", fee: "Free", online: false, phone: "0800 720 555" },
      { name: "Immunization Services", swahili: "Chanjo", desc: "Child & adult vaccines at all health centres", fee: "Free", online: true },
      { name: "MCH Clinic", swahili: "Kliniki ya Mama na Mtoto", desc: "Maternal & child health — antenatal, postnatal", fee: "Free for mothers", online: true },
      { name: "HIV Testing & Treatment", swahili: "Upimaji wa VVU", desc: "Confidential testing, ARV access & counselling", fee: "Free", online: false },
      { name: "Community Health Units", swahili: "Vitengo vya Afya ya Jamii", desc: "Community health visits & outreach programs", fee: "Free", online: false },
      { name: "Mental Health Services", swahili: "Huduma za Afya ya Akili", desc: "Counselling & psychiatric support", fee: "Subsidized", online: true },
    ]
  },
  {
    id: "trade",
    name: "Trade & Business",
    swahili: "Biashara na Viwanda",
    icon: "🏪",
    color: "#d4a017",
    bg: "#fdf8e7",
    count: 8,
    services: [
      { name: "Single Business Permit", swahili: "Leseni ya Biashara", desc: "Annual operating license for all businesses", fee: "From KES 1,500/yr", online: true },
      { name: "Weights & Measures", swahili: "Vipimo na Mizani", desc: "Calibration, certification & consumer protection", fee: "KES 500/inspection", online: false },
      { name: "Market Stall Allocation", swahili: "Ugawaji wa Stendi", desc: "Apply for a market stall in any county market", fee: "From KES 200/month", online: true },
      { name: "Hawker License", swahili: "Leseni ya Muuza", desc: "License for mobile & street trading", fee: "KES 1,000/yr", online: true },
      { name: "SME Business Support", swahili: "Msaada kwa Biashara Ndogo", desc: "Mentorship, training & funding guidance", fee: "Free", online: true },
    ]
  },
  {
    id: "agriculture",
    name: "Agriculture & Livestock",
    swahili: "Kilimo na Mifugo",
    icon: "🌿",
    color: "#1a6b3c",
    bg: "#eaf7f0",
    count: 10,
    services: [
      { name: "Farm Extension Services", swahili: "Huduma za Ugani", desc: "Agronomist visits, crop advisory & demo farms", fee: "Free", online: true },
      { name: "Veterinary Services", swahili: "Huduma za Mifugo", desc: "Animal disease control, treatment & AI", fee: "Subsidized", online: true },
      { name: "Soil Testing", swahili: "Upimaji wa Udongo", desc: "Free soil analysis for farmers", fee: "Free", online: true },
      { name: "Tea Development Program", swahili: "Programu ya Chai", desc: "Support for tea farmers & cooperatives", fee: "Free", online: true },
      { name: "Irrigation Support", swahili: "Msaada wa Umwagiliaji", desc: "Technical support for small-scale irrigation", fee: "Subsidized", online: false },
      { name: "Artificial Insemination", swahili: "AI ya Mifugo", desc: "Livestock AI services for dairy improvement", fee: "KES 500/service", online: true },
    ]
  },
  {
    id: "water",
    name: "Water & Environment",
    swahili: "Maji na Mazingira",
    icon: "💧",
    color: "#0f6e56",
    bg: "#e2f5ef",
    count: 7,
    services: [
      { name: "Water Connection Application", swahili: "Ombi la Maji", desc: "Apply for rural & urban water supply connection", fee: "From KES 3,000", online: true },
      { name: "Borehole Drilling Request", swahili: "Kuchimba Kisima", desc: "Request borehole siting & drilling support", fee: "Varies by location", online: true },
      { name: "Sanitation Services", swahili: "Usafi wa Mazingira", desc: "Sewerage connections & sanitation support", fee: "Subsidized", online: false },
      { name: "Environmental Impact Assessment", swahili: "Tathmini ya Mazingira", desc: "EIA approvals for development projects", fee: "From KES 10,000", online: true },
      { name: "Tree Planting Program", swahili: "Upanzi wa Miti", desc: "Free seedlings & forestry support", fee: "Free", online: true },
    ]
  },
  {
    id: "lands",
    name: "Lands & Planning",
    swahili: "Ardhi na Mipango",
    icon: "🗺️",
    color: "#7d5a1e",
    bg: "#fdf5e4",
    count: 6,
    services: [
      { name: "Building Plan Approval", swahili: "Idhini ya Ujenzi", desc: "Submit & track construction permit applications", fee: "From KES 5,000", online: true },
      { name: "Land Survey Request", swahili: "Upimaji wa Ardhi", desc: "Official surveying, boundary marking & title", fee: "From KES 10,000", online: true },
      { name: "Land Rates Payment", swahili: "Kodi ya Ardhi", desc: "Pay annual land rates online via M-Pesa", fee: "Varies by plot", online: true },
      { name: "Change of Use Application", swahili: "Mabadiliko ya Matumizi ya Ardhi", desc: "Apply to change land use classification", fee: "KES 8,000", online: true },
      { name: "Subdivision Approval", swahili: "Ugawaji wa Ardhi", desc: "Official approval for land subdivision", fee: "From KES 15,000", online: false },
    ]
  },
  {
    id: "education",
    name: "Education & ECDE",
    swahili: "Elimu na ECDE",
    icon: "📚",
    color: "#185fa5",
    bg: "#e8f2fc",
    count: 5,
    services: [
      { name: "County Bursary Application", swahili: "Ombi la Bursari", desc: "Apply for county bursary for secondary & tertiary", fee: "Free to apply", online: true },
      { name: "ECDE Enrolment", swahili: "Usajili wa ECDE", desc: "Enrol children in Early Childhood Development Centres", fee: "Subsidized", online: true },
      { name: "Youth Polytechnic Admission", swahili: "Usajili wa Politekniki", desc: "Apply to county vocational training centres", fee: "Varies by course", online: true },
      { name: "School Infrastructure Request", swahili: "Miundombinu ya Shule", desc: "Request repairs or improvements at public schools", fee: "Free", online: true },
    ]
  },
  {
    id: "social",
    name: "Social Services",
    swahili: "Huduma za Jamii",
    icon: "🤝",
    color: "#5b4fcf",
    bg: "#f0eeff",
    count: 8,
    services: [
      { name: "PWD Support Registration", swahili: "Usajili wa Walemavu", desc: "Register for disability support & assistive devices", fee: "Free", online: true },
      { name: "Women Empowerment Fund", swahili: "Mfuko wa Wanawake", desc: "Women's group grants & training programs", fee: "Free to apply", online: true },
      { name: "Youth Empowerment Program", swahili: "Programu ya Vijana", desc: "Youth funds, sports & skills development", fee: "Free to apply", online: true },
      { name: "OVC Support", swahili: "Msaada wa Watoto Yatima", desc: "Support for orphans & vulnerable children", fee: "Free", online: false },
      { name: "GBV Response Services", swahili: "Huduma za GBV", desc: "Gender-based violence reporting & support", fee: "Free", phone: "0800 720 999", online: false },
      { name: "Senior Citizen Support", swahili: "Msaada wa Wazee", desc: "Welfare & social protection for the elderly", fee: "Free", online: false },
    ]
  },
  {
    id: "finance",
    name: "Finance & Revenue",
    swahili: "Fedha na Mapato",
    icon: "💰",
    color: "#2d6a2d",
    bg: "#edf7ed",
    count: 6,
    services: [
      { name: "Land Rates Payment", swahili: "Kodi ya Ardhi", desc: "Pay annual land rates via M-Pesa or bank", fee: "Varies", online: true },
      { name: "Single Business Permit Renewal", swahili: "Upya wa Leseni", desc: "Renew your annual business permit online", fee: "From KES 1,500", online: true },
      { name: "Agricultural Cess Payment", swahili: "Ushuru wa Kilimo", desc: "Pay produce cess for tea, coffee & crops", fee: "Per tonnage", online: true },
      { name: "Market Fees Payment", swahili: "Ada za Soko", desc: "Pay daily or monthly market user fees", fee: "From KES 50/day", online: true },
    ]
  },
  {
    id: "roads",
    name: "Roads & Infrastructure",
    swahili: "Barabara na Miundombinu",
    icon: "🛣️",
    color: "#534ab7",
    bg: "#eeecfd",
    count: 5,
    services: [
      { name: "Road Repair Request", swahili: "Ombi la Matengenezo ya Barabara", desc: "Report and request repair of county roads", fee: "Free", online: true },
      { name: "Street Light Request", swahili: "Ombi la Taa za Barabara", desc: "Request installation of street lighting", fee: "Free", online: true },
      { name: "Market Construction Request", swahili: "Ombi la Ujenzi wa Soko", desc: "Request public market infrastructure", fee: "Free to apply", online: true },
    ]
  },
  {
    id: "ict",
    name: "ICT Services",
    swahili: "Huduma za TEHAMA",
    icon: "💻",
    color: "#0e7490",
    bg: "#e0f6fb",
    count: 4,
    services: [
      { name: "Huduma Centre Services", swahili: "Huduma za Kituo cha Huduma", desc: "One-stop service delivery at Huduma centres", fee: "Varies", online: false },
      { name: "Digital Literacy Training", swahili: "Mafunzo ya Dijitali", desc: "Free computer & internet skills training", fee: "Free", online: true },
    ]
  },
  {
    id: "culture",
    name: "Culture, Sports & Tourism",
    swahili: "Utamaduni, Michezo na Utalii",
    icon: "🏆",
    color: "#b45309",
    bg: "#fef3e2",
    count: 4,
    services: [
      { name: "Sports Ground Booking", swahili: "Uhifadhi wa Uwanja", desc: "Book county sports facilities & grounds", fee: "From KES 500", online: true },
      { name: "Tourism Information", swahili: "Taarifa za Utalii", desc: "Visitor guide, attractions & investor info", fee: "Free", online: true },
      { name: "Cultural Event Permit", swahili: "Kibali cha Tukio la Utamaduni", desc: "Apply for permit to host public cultural events", fee: "KES 2,000", online: true },
    ]
  },
  {
    id: "admin",
    name: "Public Administration",
    swahili: "Utawala wa Umma",
    icon: "🏛️",
    color: "#374151",
    bg: "#f3f4f6",
    count: 5,
    services: [
      { name: "Civil Registration", swahili: "Usajili wa Raia", desc: "Birth, death & marriage certificate registration", fee: "Free", online: false },
      { name: "Public Participation", swahili: "Ushiriki wa Umma", desc: "Register for county public participation forums", fee: "Free", online: true },
      { name: "County Assembly Petitions", swahili: "Malalamiko ya Bunge la Kaunti", desc: "Submit petitions to the County Assembly", fee: "Free", online: true },
    ]
  },
];

export const quickStats = [
  { num: "60+", label: "Services", swahili: "Huduma" },
  { num: "12", label: "Departments", swahili: "Idara" },
  { num: "4", label: "Sub-Counties", swahili: "Kaunti Ndogo" },
  { num: "24/7", label: "Available", swahili: "Inapatikana" },
];

export const mockApplications = [
  { id: "NYM-2025-0041", name: "Single Business Permit", dept: "Trade & Business", status: "In Review", progress: 60, steps: ["Submitted", "In Review", "Approved", "Issued"] },
  { id: "NYM-2025-0038", name: "County Bursary 2025/26", dept: "Education", status: "Approved", progress: 100, steps: ["Submitted", "Verified", "Approved", "Disbursed"] },
  { id: "NYM-2025-0029", name: "Building Plan Approval", dept: "Lands & Planning", status: "Processing", progress: 35, steps: ["Submitted", "Processing", "Inspected", "Approved"] },
];
