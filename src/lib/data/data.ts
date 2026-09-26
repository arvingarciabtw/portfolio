import { resolve } from "$app/paths";

type Route = Parameters<typeof resolve>[0];

type Section = {
	name: string;
	shortName: string;
	url: Route;
};

export const sections: Section[] = [
	{
		name: "home",
		shortName: "home",
		url: "/",
	},
	{
		name: "experience",
		shortName: "exp",
		url: "/experience",
	},
	{
		name: "projects",
		shortName: "proj",
		url: "/projects",
	},
	{
		name: "about",
		shortName: "about",
		url: "/about",
	},
] as const;

type Experience = {
	position: string;
	company: string;
	url: string;
	date: string;
	description: string;
	points: string[];
	technologies: string[];
};

const COLORS = {
	react: "#0cc8f9",
	ts: "#619ad8",
	js: "#F0DB4F",
	node: "#8eb88a",
	mongodb: "#4DB33D",
	laravel: "#F05340",
	mariadb: "#008ab3",
};

export const experiences: Experience[] = [
	{
		position: "fullstack dev intern",
		company: "bridge360 inc",
		url: "https://www.bridge360.ph/",
		date: "2025",
		description:
			"developed a gig application. led the redesign of the frontend. implemented api + email.",
		points: [
			`<p>migrated the entire <span style="text-decoration:${COLORS.react} underline dotted;">react/redux</span> frontend of a blue-collar gig marketplace from <span style="text-decoration:${COLORS.js} underline dotted">javascript</span> to <span style="text-decoration:${COLORS.ts} underline dotted">typescript</span> to add type safety.</p>`,
			`<p>led the product redesign from initial figma prototypes all the way up to the frontend implementation</p>`,
			`<p>contributed crud endpoints with <span style="text-decoration:${COLORS.node} underline dotted">node.js</span> and <span style="text-decoration:${COLORS.mongodb} underline dotted">mongodb</span> plus authentication email workflows across the application.</p>`,
		],
		technologies: ["typescript", "react", "redux", "node", "mongodb"],
	},
	{
		position: "volunteer work",
		company: "mbcfi",
		url: "https://www.mbcfi.org.ph/",
		date: "2025",
		description:
			"built a project management system for a non-profit. communicated with department heads.",
		points: [
			`<p>designed and built a <span style="text-decoration:${COLORS.laravel} underline dotted">laravel</span>/<span style="text-decoration:${COLORS.mariadb} underline dotted">mariadb</span> project-management prototype with separate admin and staff workflows.</p>`,
			`<p>worked directly with the ngo's higher-ups across three core conservation programs to translate project-management needs into clear functional requirements.</p>`,
		],
		technologies: ["php", "laravel", "mariadb"],
	},
] as const;

type Project = {
	name: string;
	url: string;
	description: string;
	descriptionShort: string;
	metrics: Metrics;
	technologies: string[];
};

type Metrics = {
	downloads: number | null;
	stars: number | null;
	forks: number | null;
};

export const projects: Project[] = [
	{
		name: "ditto",
		url: "https://ditto.arvingarcia.com",
		description:
			"a system-wide and cross-platform ascii keyboard visualizer and keycaster.",
		descriptionShort: "a system-wide ascii keyboard visualizer.",
		metrics: {
			downloads: 140,
			stars: 120,
			forks: 3,
		},
		technologies: ["go", "nix"],
	},
	{
		name: "bettercalapan",
		url: "https://bettercalapan.org",
		description:
			"open-source lgu initiative for providing better digital services to calapan city.",
		descriptionShort: "open-source digital services for calapan.",
		metrics: {
			downloads: null,
			stars: 1,
			forks: 0,
		},
		technologies: ["svelte", "typescript", "mdsvex"],
	},
	{
		name: "blog",
		url: "https://blog.arvingarcia.com",
		description:
			"my blog where i go over what i'm learning and whatever's on my mind.",
		descriptionShort: "where i talk about what i'm learning.",
		metrics: {
			downloads: null,
			stars: 2,
			forks: 0,
		},
		technologies: ["astro", "typescript"],
	},
] as const;

type About = {
	content: string;
	url: string;
};

export const socials: About[] = [
	{
		content: "github",
		url: "https://github.com/arvingarciabtw",
	},
	{
		content: "contact@arvingarcia.com",
		url: "mailto:contact@arvingarcia.com",
	},
];

export const philosophies: About[] = [
	{
		content: "care about your craft",
		url: "https://pragprog.com/tips/#:~:text=Care%20About%20Your,doing%20it%20well%3F",
	},
	{
		content: "the unix philosophy",
		url: "https://en.wikipedia.org/wiki/Unix_philosophy",
	},
	{
		content: "be grug-brained",
		url: "https://grugbrain.dev/",
	},
];

export const software: About[] = [
	{
		content: "linux",
		url: "https://www.linux.org",
	},
	{
		content: "nixos",
		url: "https://nixos.org",
	},
	{
		content: "niri",
		url: "https://niri-wm.github.io/niri/",
	},
	{
		content: "noctalia",
		url: "https://noctalia.dev",
	},
	{
		content: "ghostty",
		url: "https://ghostty.org",
	},
	{
		content: "neovim",
		url: "https://neovim.io",
	},
];

export const games: About[] = [
	{
		content: "hollow knight",
		url: "https://www.hollowknight.com",
	},
	{
		content: "hades",
		url: "https://www.supergiantgames.com/games/hades/",
	},
	{
		content: "pokemon",
		url: "https://www.pokemon.com/us",
	},
	{
		content: "gta: san andreas",
		url: "https://www.rockstargames.com/games/SanAndreas",
	},
	{
		content: "assassin's creed",
		url: "https://www.ubisoft.com/en-us/game/assassins-creed",
	},
];

export const music: About[] = [
	{
		content: "twenty one pilots",
		url: "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx",
	},
	{
		content: "quadeca",
		url: "https://open.spotify.com/artist/3zz52ViyCBcplK0ftEVPSS",
	},
	{
		content: "tsubi club",
		url: "https://open.spotify.com/artist/6fHEaFnFgMxMAtDt7mFoQ3",
	},
	{
		content: "cavetown",
		url: "https://open.spotify.com/artist/2hR4h1Cao2ueuI7Cx9c7V8",
	},
	{
		content: "internet girl",
		url: "https://open.spotify.com/artist/2eVTKG3Z5bbKk2OWMIe3iL",
	},
];

export const conditions: About[] = [
	{
		content: "astigmatism",
		url: "https://www.webmd.com/eye-health/astigmatism-eyes",
	},
	{
		content: "bronchial asthma",
		url: "https://www.webmd.com/asthma/bronchial-asthma",
	},
];
