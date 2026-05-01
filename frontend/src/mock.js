// Mock data for KC's Matrimonial Portfolio
// Swap image placeholders later with real photos.

export const profile = {
  name: "KC",
  fullTitle: "Kay Cee",
  age: 33,
  profession: "Software Engineer",
  city: "Bengaluru, IN",
  car: "Maruti Brezza",
  tagline: "33 years old. Mostly bug-free. Occasionally legendary.",
  taglineAlt: [
    "Debugging life, one pull request at a time.",
    "A feature-complete human being. Still shipping updates.",
    "Engineer by designation. Film critic by passion. Reluctant mountaineer by weekend."
  ],
  intro:
    "Somewhere between writing clean code and rewatching Inception for the fourteenth time, I quietly built a decent life. I own a Brezza that has seen more sunrises than most of my colleagues, I debate movie endings like they're unit tests, and yes \u2014 I have genuinely mastered the ancient art of sitting still. In a world addicted to hustle, that's arguably a superpower.",
  stats: [
    { label: "Years shipped", value: "33" },
    { label: "Films watched", value: "1.2k+" },
    { label: "Summits attempted", value: "14" },
    { label: "Bugs fixed", value: "\u221E" }
  ]
};

export const about = {
  kicker: "FEATURE PRESENTATION",
  heading: "A short story about a long-ish life.",
  paragraphs: [
    "I grew up believing every good thing had a soundtrack. That belief has, remarkably, survived 33 monsoons, two career changes, and one mildly regrettable haircut in 2014.",
    "By training I'm a software engineer \u2014 I translate caffeine into code at a company where Slack notifications outnumber words spoken. By temperament, I'm the person who pauses a film to explain the foreshadowing, then apologises, then does it again.",
    "I'm not looking for a co-star. I'm looking for a co-writer."
  ],
  pullQuote:
    "I don\u2019t believe in love at first sight. I believe in pacing, character development, and a killer second act."
};

export const lifeResume = [
  { year: "1992", title: "Production begins", note: "Born on a Tuesday. Allegedly, the nurses clapped." },
  { year: "2010", title: "Plot introduction", note: "Entered engineering college. Discovered coffee, Linux, and long arguments about films." },
  { year: "2014", title: "Inciting incident", note: "First job. First paycheck. First time realising adulthood has fewer cheat codes than expected." },
  { year: "2018", title: "Montage sequence", note: "Switched cities, shipped a product, learned to cook three dishes that people voluntarily eat." },
  { year: "2021", title: "Side quest: the Brezza", note: "Bought a car. Named her once, embarrassed myself, never told anyone." },
  { year: "2023", title: "Rising action", note: "Led a team. Led a trek. Led a watch-party for a 210-minute film. Survived all three." },
  { year: "2025", title: "Now playing", note: "Open for casting. Co-protagonist role available. Snacks provided." }
];

export const lifestyle = {
  career: {
    kicker: "WEEKDAYS",
    title: "Code, coffee, the occasional miracle.",
    body:
      "I work in software \u2014 mostly backend, occasionally infrastructure, always with strong opinions about naming conventions. I like problems that are hard but humane, teams that argue well, and documentation that reads like a human wrote it. I believe calm is a technical skill.",
    chips: ["Python", "Go", "Distributed systems", "Calm PR reviews", "Dark mode evangelist"]
  },
  daily: {
    kicker: "WEEKENDS",
    title: "Brezza, mountains, and masterful stillness.",
    body:
      "Weekends begin with filter coffee and a film I've been avoiding. Afternoons, the Brezza and I go looking for horizons that render better than any screen. Evenings are for long walks, longer conversations, and the disciplined practice of doing absolutely nothing with intent.",
    chips: ["Road trips", "Trail runs", "Filter coffee", "Film Twitter lurker", "Anti-hustle"]
  }
};

export const hobbies = [
  {
    title: "Cinema",
    meta: "1200+ films. Still counting.",
    body:
      "If there's a plot twist, I've probably seen it coming three scenes ago. Don't worry \u2014 I won't spoil it. Much.",
    accent: "#D96E3A"
  },
  {
    title: "Trekking",
    meta: "Western Ghats \u2192 Himalayas",
    body:
      "I climb mountains not for the Instagram, but for the one perfectly silent moment at the top. Okay, also for the Instagram.",
    accent: "#1F4A43"
  },
  {
    title: "Road Therapy",
    meta: "Me + Brezza + bad playlists",
    body:
      "She asks no questions, I play no bad music. Together, we've chased more sunsets than deadlines.",
    accent: "#2E1A24"
  },
  {
    title: "Competitive Stillness",
    meta: "A quiet, undefeated streak.",
    body:
      "I\u2019ve turned \u2018doing nothing\u2019 into a quiet art form. Meditation wishes it had this range.",
    accent: "#E8B95E"
  }
];

export const whyKC = [
  "Will never ask you to explain the film you missed \u2014 we'll just rewatch it together.",
  "Knows the difference between quiet company and awkward silence.",
  "Has a car, a plan, and \u2014 most days \u2014 a functioning sense of direction.",
  "Believes a great partnership has good pacing, no filler episodes, and a killer soundtrack.",
  "Will not try to fix you. Will bring snacks.",
  "Reads the menu entirely, but always orders the first thing he liked."
];

export const flags = {
  green: [
    "Replies to texts in full sentences.",
    "Can sit through a three-hour film without checking his phone.",
    "Calls his mother more than his manager.",
    "Drives like he respects other humans.",
    "Will split the bill, the blanket, and the last samosa."
  ],
  red: [
    "Has genuinely strong opinions about Christopher Nolan's sound mixing.",
    "Will pause a scene to explain the cinematography.",
    "Owns more trekking gear than formal shoes.",
    "Says 'let me think about it' and then thinks about it for a week.",
    "Has been known to sit in silence. On purpose. For fun."
  ]
};

export const credits = {
  directedBy: "Life, mostly improvising.",
  producedBy: "Two parents, one older sibling, and a golden retriever named Biscuit.",
  musicBy: "A.R. Rahman (unofficially), and whoever made the Interstellar score.",
  specialThanks: ["Filter coffee", "Maps that still work offline", "The 2am idea that didn't get shipped"]
};

export const contact = {
  heading: "Roll credits. Or roll with me.",
  subheading:
    "If any of this resonated \u2014 or even mildly amused you \u2014 perhaps we should talk. The next chapter's casting is open.",
  email: "hello.kc@example.com",
  phone: "+91 98xxx xxx12",
  city: "Bengaluru, IN",
  socials: [
    { label: "Letterboxd", handle: "@kc.reels" },
    { label: "Instagram", handle: "@kc.offscreen" },
    { label: "LinkedIn", handle: "/in/kc" }
  ]
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Life Resume" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "hobbies", label: "Hobbies" },
  { id: "why", label: "Why KC" },
  { id: "contact", label: "Contact" }
];
