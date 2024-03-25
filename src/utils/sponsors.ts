export const sponsorsList: {
  [key: string]: { name: string; sponsors: { name: string; img: string }[] };
} = {
  platinum: {
    name: "platinum sponsor",
    sponsors: [
      {
        name: "UST",
        img: "ust.svg",
      },
      {
        name: "Wolfram",
        img: "wolfram.png",
      },
    ],
  },
  gold: {
    name: "gold sponsor",
    sponsors: [
      {
        name: "Devfolio",
        img: "devfolio.svg",
      },
      {
        name: "Axure",
        img: "axure.svg",
      },
      {
        name: "O'Reilly",
        img: "oreilly.svg",
      },
    ],
  },
  silver: {
    name: "silver sponsor",
    sponsors: [
      {
        name: "Polygon",
        img: "polygon.svg",
      },
      {
        name: "Ethindia",
        img: "ethindia.png",
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
        name: "ZulipChat",
        img: "zulip.png",
      },
    ],
  },
  community_partner: {
    name: "community partner",
    sponsors: [
      {
        name: "Blockchained India",
        img: "blochained_india.svg",
      },
    ],
  },
};
