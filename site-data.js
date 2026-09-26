/**
 * NOVA_ETH - SHARED DATA LAYER
 * Handles site data storage, defaults, and synchronization with the Admin Panel
 */

const DEFAULT_SITE_DATA = {
  hero: {
    name: "Nova_Eth",
    roleTag: "Web3 Collab Manager",
    headline: "Connecting Web3 Projects With Strong Communities.",
    description: "2.5+ years of Collab Management experience and 4+ years in Web3, building partnerships between projects and communities.",
    xHandle: "@nova_3th",
    xUrl: "https://x.com/nova_3th",
    discordTag: "@nova_3th",
    profileImgUrl: "nova_eth.jpg",
    stats: [
      { val: "4+", lbl: "Years in Web3" },
      { val: "2.5+", lbl: "Years as Collab Manager" },
      { val: "100+", lbl: "Projects Collaborated With" },
      { val: "4", lbl: "Web3 Communities" }
    ]
  },
  about: {
    lead: "Nova_Eth is a Web3 Collab Manager with 2.5+ years of experience in collaboration management and 4+ years of experience in the Web3 ecosystem.",
    body: "His work focuses on building relationships between Web3 projects and communities, securing WL/GTD/FCFS allocations, coordinating collaboration campaigns, managing project outreach, and creating meaningful partnerships between projects and communities.",
    skills: [
      "Web3 Project Research",
      "Project Team Outreach",
      "Partnership Management",
      "WL / GTD / FCFS Allocations",
      "Community Partnerships",
      "Raffles & Giveaways",
      "Discord Collaboration",
      "X/Twitter Collaboration",
      "Community Growth"
    ],
    sideStats: [
      { val: "4+ Years", lbl: "Web3 Immersion" },
      { val: "2.5+ Years", lbl: "Collab Management" },
      { val: "100+", lbl: "Web3 Projects Partnered" }
    ]
  },
  communities: [
    {
      name: "Heroes Alpha",
      monogram: "HA",
      roleBadge: "Collab Manager",
      desc: "Premier alpha hub focused on early project scouting, curated whitelist distribution, and strategic project collaborations across Web3.",
      xLink: "https://x.com/herosalpha?s=20"
    },
    {
      name: "Elite Vision",
      monogram: "EV",
      roleBadge: "Collab Manager",
      desc: "Influential Web3 collective connecting top-tier collectors and traders with exclusive project team partnerships and guaranteed mint allocations.",
      xLink: "https://x.com/_EliteVisions_?s=20"
    },
    {
      name: "Elite Alpha",
      monogram: "EA",
      roleBadge: "Collab Manager",
      desc: "High-engagement Web3 community dedicated to deep ecosystem research, coordinated giveaway campaigns, and strong cross-community alliances.",
      xLink: "https://x.com/EliteAlpha_web3?s=20"
    }
  ],
  founder: {
    title: "Founder of Alpha Core",
    quote: "Founder of Alpha Core, a Web3 community focused on building connections, discovering opportunities, and creating a strong ecosystem around Web3 projects.",
    community: "Alpha Core",
    role: "Founder",
    mission: "Connections & Ecosystem Growth",
    xLink: "https://x.com/Alpha_Core1?s=20"
  },
  collaborations: {
    number: "100+",
    title: "Web3 Collaborations",
    subtitle: "Collaborated with 100+ Web3 projects and teams across the ecosystem.",
    projects: [
      {
        name: "BrokerFarm",
        monogram: "BF",
        badge: "Verified Collaboration",
        desc: "Strategic Web3 allocation and community giveaway partnership.",
        xLink: "https://x.com/BrokerFarm?s=20"
      },
      {
        name: "Snuffle",
        monogram: "SN",
        badge: "Verified Collaboration",
        desc: "Community outreach, cross-promotional giveaway and allocation campaign.",
        xLink: "https://x.com/snuffle_rh?s=20"
      },
      {
        name: "Sheerson Robin",
        monogram: "SR",
        badge: "Verified Collaboration",
        desc: "WL & GTD spot distribution and project amplification campaign.",
        xLink: "https://x.com/sheersonrobin?s=20"
      },
      {
        name: "7TheGoat",
        monogram: "7G",
        badge: "Verified Collaboration",
        desc: "High-engagement Discord & X collab campaign with community rewards.",
        xLink: "https://x.com/7thegoat?s=20"
      },
      {
        name: "Glrtch",
        monogram: "GL",
        badge: "Verified Collaboration",
        desc: "Multi-community FCFS allocation and mutual outreach coordination.",
        xLink: "https://x.com/Glrtch?s=20"
      }
    ]
  },
  services: [
    {
      title: "Project Outreach",
      desc: "Finding relevant Web3 projects and contacting project teams for collaboration opportunities."
    },
    {
      title: "Partnership Management",
      desc: "Building and maintaining relationships between projects and communities."
    },
    {
      title: "WL / GTD / FCFS",
      desc: "Helping communities secure WL, Guaranteed, and FCFS allocations."
    },
    {
      title: "Collaboration Campaigns",
      desc: "Planning and coordinating Web3 collaboration campaigns."
    },
    {
      title: "Raffles & Giveaways",
      desc: "Managing allocation raffles, giveaways, winner selection, and community distribution."
    },
    {
      title: "Community Partnerships",
      desc: "Connecting Web3 projects with relevant communities."
    },
    {
      title: "Discord Collaboration",
      desc: "Coordinating collaboration activities and communication through Discord."
    },
    {
      title: "X / Twitter Collaboration",
      desc: "Managing project announcements, quote posts, engagement, and partnership campaigns."
    }
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      desc: "Find promising Web3 projects and collaboration opportunities."
    },
    {
      step: "02",
      title: "Outreach",
      desc: "Contact project teams and introduce community partnership opportunities."
    },
    {
      step: "03",
      title: "Negotiate",
      desc: "Discuss collaboration terms, allocations, requirements, and campaign structure."
    },
    {
      step: "04",
      title: "Secure",
      desc: "Secure WL, GTD, FCFS, or other collaboration opportunities."
    },
    {
      step: "05",
      title: "Execute",
      desc: "Coordinate announcements, raffles, winners, and community support."
    }
  ],
  results: [
    {
      val: "4+",
      lbl: "Web3 Experience",
      sub: "Deep immersion across evolving Web3 cycles"
    },
    {
      val: "2.5+",
      lbl: "Collab Management",
      sub: "Hands-on community leadership & partnership building"
    },
    {
      val: "100+",
      lbl: "Projects Collaborated With",
      sub: "Successful allocation & partnership campaigns"
    },
    {
      val: "3",
      lbl: "Communities as Collab Manager",
      sub: "Heroes Alpha, Elite Vision, Elite Alpha"
    },
    {
      val: "1",
      lbl: "Community Founded",
      sub: "Founder of Alpha Core"
    }
  ],
  proofs: [
    {
      tag: "Collaboration Confirmation",
      title: "Project Team Direct Agreement",
      snippet: "Project Founder: 'Hey Nova_Eth, we'd love to lock in 15x GTD and 30x FCFS spots for your community. Sending over the campaign details!'"
    },
    {
      tag: "Allocation Sheet",
      title: "WL / GTD Allocation Log",
      snippet: "Alpha Core: 20 GTD Spots [Locked] • Heroes Alpha: 50 FCFS Spots [Active]"
    },
    {
      tag: "Discord Collaboration",
      title: "Discord Collab Channel & Bot Setup",
      snippet: "🎉 COLLAB ANNOUNCEMENT: Over 1,000+ total reactions per featured campaign."
    },
    {
      tag: "Raffle Results",
      title: "Winner Sheets & On-Chain Wallet Collection",
      snippet: "✓ 0x8a...3F19 • Distribution Finalized & Exported."
    },
    {
      tag: "X Collaboration Post",
      title: "Public Partnership Announcement",
      snippet: "@nova_3th: Huge partnership locked! 54 Reposts • 1.2K Views • 180 Likes."
    },
    {
      tag: "Project Team Outreach",
      title: "Terms & Execution Sign-Off",
      snippet: "Lead Coordinator: 'Campaign finalized. Your community members are whitelisted on our contract.'"
    }
  ],
  contact: {
    title: "Let's Build the Next Web3 Collaboration.",
    description: "Have a Web3 project or community looking for collaboration opportunities? Let's connect.",
    xUrl: "https://x.com/nova_3th",
    xHandle: "@nova_3th",
    discordHandle: "@nova_3th"
  }
};

/**
 * Retrieve current site data from localStorage (or fallback to defaults)
 */
function getSiteData() {
  const saved = localStorage.getItem('nova_site_custom_data');
  if (!saved) return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));

  try {
    const parsed = JSON.parse(saved);
    // Deep merge with default structure to prevent missing keys
    return Object.assign({}, DEFAULT_SITE_DATA, parsed);
  } catch (e) {
    console.error("Failed to parse saved site data", e);
    return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  }
}

/**
 * Save updated site data to localStorage
 */
function saveSiteData(data) {
  localStorage.setItem('nova_site_custom_data', JSON.stringify(data));
}
