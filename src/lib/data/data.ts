import type {
	Experience,
	ExternalLink,
	InternalLink,
	Project,
} from "./data.d.ts";
import { resolve } from "$app/paths";

const COLORS = {
	react: "#0cc8f9",
	ts: "#619ad8",
	js: "#F0DB4F",
	node: "#8eb88a",
	mongodb: "#4DB33D",
	laravel: "#F05340",
	mariadb: "#008ab3",
};

export const sections: InternalLink[] = [
	{
		content: "home",
		href: "/",
	},
	{
		content: "experience",
		href: "/experience",
	},
	{
		content: "projects",
		href: "/projects",
	},
	{
		content: "about",
		href: "/about",
	},
] as const;

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
			`<p>worked directly with the ngo's higher-ups across three core programs to translate project needs into clear functional requirements.</p>`,
		],
		technologies: ["php", "laravel", "mariadb"],
	},
] as const;

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

export const socials: ExternalLink[] = [
	{
		content: "github",
		href: "https://github.com/arvingarciabtw",
	},
	{
		content: "contact@arvingarcia.com",
		href: "mailto:contact@arvingarcia.com",
	},
];

export const philosophies: ExternalLink[] = [
	{
		content: "care about your craft",
		href:
			"https://pragprog.com/tips/#:~:text=Care%20About%20Your,doing%20it%20well%3F",
	},
	{
		content: "the unix philosophy",
		href: "https://en.wikipedia.org/wiki/Unix_philosophy",
	},
	{
		content: "be grug-brained",
		href: "https://grugbrain.dev/",
	},
];

export const software: ExternalLink[] = [
	{
		content: "linux",
		href: "https://www.linux.org",
	},
	{
		content: "nixos",
		href: "https://nixos.org",
	},
	{
		content: "niri",
		href: "https://niri-wm.github.io/niri/",
	},
	{
		content: "noctalia",
		href: "https://noctalia.dev",
	},
	{
		content: "ghostty",
		href: "https://ghostty.org",
	},
	{
		content: "neovim",
		href: "https://neovim.io",
	},
];

export const games: ExternalLink[] = [
	{
		content: "hollow knight",
		href: "https://www.hollowknight.com",
	},
	{
		content: "hades",
		href: "https://www.supergiantgames.com/games/hades/",
	},
	{
		content: "pokemon",
		href: "https://www.pokemon.com/us",
	},
	{
		content: "gta: san andreas",
		href: "https://www.rockstargames.com/games/SanAndreas",
	},
	{
		content: "assassin's creed",
		href: "https://www.ubisoft.com/en-us/game/assassins-creed",
	},
];

export const music: ExternalLink[] = [
	{
		content: "twenty one pilots",
		href: "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx",
	},
	{
		content: "quadeca",
		href: "https://open.spotify.com/artist/3zz52ViyCBcplK0ftEVPSS",
	},
	{
		content: "tsubi club",
		href: "https://open.spotify.com/artist/6fHEaFnFgMxMAtDt7mFoQ3",
	},
	{
		content: "cavetown",
		href: "https://open.spotify.com/artist/2hR4h1Cao2ueuI7Cx9c7V8",
	},
	{
		content: "internet girl",
		href: "https://open.spotify.com/artist/2eVTKG3Z5bbKk2OWMIe3iL",
	},
];

export const conditions: ExternalLink[] = [
	{
		content: "astigmatism",
		href: "https://www.webmd.com/eye-health/astigmatism-eyes",
	},
	{
		content: "bronchial asthma",
		href: "https://www.webmd.com/asthma/bronchial-asthma",
	},
];
