import { resolve } from '$app/paths';

type Route = Parameters<typeof resolve>[0];

type Section = {
	name: string;
	shortName: string;
	url: Route;
};

export const sections: Section[] = [
	{
		name: 'home',
		shortName: 'home',
		url: '/'
	},
	{
		name: 'experience',
		shortName: 'exp',
		url: '/experience'
	},
	{
		name: 'projects',
		shortName: 'proj',
		url: '/projects'
	},
	{
		name: 'about',
		shortName: 'about',
		url: '/about'
	}
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
}

export const experiences: Experience[] = [
	{
		position: 'fullstack dev intern',
		company: 'bridge360 inc',
		url: 'https://www.bridge360.ph/',
		date: '2025',
		description:
			'developed a gig application. led the redesign of the frontend. implemented api + email.',
		points: [
			`<p>migrated the entire <span style="text-decoration:${COLORS.react} underline dotted;">React/Redux</span> frontend of a blue-collar gig marketplace from <span style="text-decoration:${COLORS.js} underline dotted">JavaScript</span> to <span style="text-decoration:${COLORS.ts} underline dotted">TypeScript</span>, improving type safety, code quality, and implementation consistency across the application.</p>`,
			`<p>led the product redesign from initial Figma concepts through React implementation, while contributing CRUD endpoints with <span style="text-decoration:${COLORS.node} underline dotted">Node.js</span> and <span style="text-decoration:${COLORS.mongodb} underline dotted">MongoDB</span> plus authentication email workflows across the application.</p>`,
		],
		technologies: ['typescript', 'react', 'redux', 'node', 'mongodb']
	},
	{
		position: 'volunteer work',
		company: 'mbcfi',
		url: 'https://www.mbcfi.org.ph/',
		date: '2025',
		description:
			'built a project management system for a non-profit. communicated with department heads.',
		points: [
			`<p>designed and built a <span style="text-decoration:${COLORS.laravel} underline dotted">Laravel</span>/<span style="text-decoration:${COLORS.mariadb} underline dotted">MariaDB</span> project-management prototype with separate admin and staff workflows, giving the registered biodiversity conservation nonprofit a centralized system for managing project records.</p>`,
			'worked directly with leadership across three core conservation programs to gather requirements, understand existing workflows, and translate project-management needs into clear functional requirements for the application.'
		],
		technologies: ['php', 'laravel', 'mariadb']
	}
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
		name: 'ditto',
		url: 'https://ditto.arvingarcia.com',
		description: 'a system-wide and cross-platform ascii keyboard visualizer and keycaster.',
		descriptionShort: 'a system-wide ascii keyboard visualizer.',
		metrics: {
			downloads: 130,
			stars: 120,
			forks: 3
		},
		technologies: ['go', 'nix']
	},
	{
		name: 'bettercalapan',
		url: 'https://bettercalapan.org',
		description:
			'open-source lgu initiative for providing better digital services to calapan city.',
		descriptionShort: 'open-source digital services for calapan.',
		metrics: {
			downloads: null,
			stars: 1,
			forks: 0
		},
		technologies: ['svelte', 'typescript', 'mdsvex']
	},
	{
		name: 'blog',
		url: 'https://blog.arvingarcia.com',
		description: "my blog where i go over what i'm learning and whatever's on my mind.",
		descriptionShort: "where i talk about what i'm learning.",
		metrics: {
			downloads: null,
			stars: 2,
			forks: 0
		},
		technologies: ['astro', 'typescript']
	},
] as const;

type Social = {
	name: string;
	url: string;
};

export const socials: Social[] = [
	{
		name: 'github',
		url: 'https://github.com/arvingarciabtw'
	},
	{
		name: 'email',
		url: 'mailto:contact@arvingarcia.com'
	}
];

type Philosophy = {
	description: string;
	url: string;
};

export const philosophies: Philosophy[] = [
	{
		description: 'care about your craft',
		url: 'https://pragprog.com/tips/#:~:text=Care%20About%20Your,doing%20it%20well%3F'
	},
	{
		description: 'the unix philosophy',
		url: 'https://en.wikipedia.org/wiki/Unix_philosophy'
	},
	{
		description: 'be grug-brained',
		url: 'https://grugbrain.dev/'
	},
];

type Tech = {
	os: string;
	distro: string;
	wm: string;
	["desktop shell"]: string;
	terminal: string;
	editor: string;
};

export const tech: Tech = {
	os: 'linux',
	distro: 'nixos',
	wm: 'niri',
  "desktop shell": 'noctalia',
	terminal: 'ghostty',
	editor: 'neovim'
};
