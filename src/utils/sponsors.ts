export const sponsorsList: {
  [key: string]: {
    name: string;
    sponsors: { name: string; img: string; website?: string }[];
  };
} = {
  platinum: {
    name: "platinum sponsor",
    sponsors: [
      {
        name: "UST",
        img: "ust.svg",
        website: "https://www.ust.com/",
      },
      {
        name: "Wolfram",
        img: "wolfram.png",
        website: "https://www.wolfram.com/",
      },
    ],
  },
  gold: {
    name: "gold sponsor",
    sponsors: [
      {
        name: "Devfolio",
        img: "devfolio.svg",
        website: "https://devfolio.co/discover",
      },
      {
        name: "Axure",
        img: "axure.svg",
        website: "https://www.axure.com/",
      },
      {
        name: "O'Reilly",
        img: "oreilly.svg",
        website: "https://www.oreilly.com/",
      },
    ],
  },
  silver: {
    name: "silver sponsor",
    sponsors: [
      {
        name: "Polygon",
        img: "polygon.svg",
        website: "https://polygon.technology/",
      },
      {
        name: "Ethindia",
        img: "ethindia.png",
        website: "https://ethindia.co/",
      },
    ],
  },
  educational_partner: {
    name: "educational partner",
    sponsors: [
      {
        name: "Interview Cake",
        img: "interview_cake.png",
      },
      {
        name: ".xyz",
        img: "xyz.svg",
        website: "https://gen.xyz/",
      },
      {
        name: "ZulipChat",
        img: "zulip.png",
      },
    ],
  },
  community_partner: {
    name: "community partner",
    sponsors: [
      {
        name: "GDSC MBCET",
        img: "gdsc.svg",
      },
      {
        name: "Blockchained India",
        img: "blochained_india.svg",
      },
      {
        name: "CSI SB MBCET",
        img: "csi.png",
      },
    ],
  },
};
