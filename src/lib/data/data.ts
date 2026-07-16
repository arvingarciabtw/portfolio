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

export const experiences: Experience[] = [
	{
		position: 'fullstack dev intern',
		company: 'bridge360 inc',
		url: 'https://www.bridge360.ph/',
		date: '2025',
		description:
			'developed a gig application. led the redesign of the frontend. implemented api + email.',
		points: [
			'developed a fully functional gig application from scratch, expanding the company’s product offerings and providing a brand-new revenue channel.',
			'led the frontend redesign using modern ui components, which drastically improved user navigation, modernized the platform look, and resolved historical layout issues.',

			'implemented secure restful apis and an automated email notification system, eliminating manual communication delays and ensuring instant, real-time user updates.'
		],
		technologies: ['typescript', 'react', 'redux']
	},
	{
		position: 'volunteer work',
		company: 'mbcfi',
		url: 'https://www.mbcfi.org.ph/',
		date: '2025',
		description:
			'built a project management system for a non-profit. communicated with department heads.',
		points: [
			'built and deployed a custom project management system for a registered ngo, centralizing operations and standardizing workflows across multiple internal departments.',
			'communicated directly with department heads and stakeholders to gather core requirements, ensuring complete alignment on feature delivery and non-profit organizational needs.',

			'integrated the new system into the existing legacy website seamlessly, successfully eliminating data silos and simplifying daily task-tracking for the volunteer team.'
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
		url: 'https://github.com/arvingarciabtw/ditto',
		description:
			'a system-wide ascii keyboard visualizer. for ricers who love interactive eye candy.',
		descriptionShort: 'a system-wide ascii keyboard visualizer.',
		metrics: {
			downloads: 40,
			stars: 110,
			forks: 4
		},
		technologies: ['go', 'nix']
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
	{
		name: 'dotfiles',
		url: 'https://github.com/arvingarciabtw/dotfiles',
		description: 'config files for all of the applications and tools i use in my workflow.',
		descriptionShort: 'config for my setup.',
		metrics: {
			downloads: null,
			stars: 1,
			forks: 0
		},
		technologies: ['lua', 'shell', 'css']
	}
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
		name: 'bluesky',
		url: 'https://bsky.app/profile/arvingarciabtw.bsky.social'
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
		description: 'be grug-brained',
		url: 'https://grugbrain.dev/'
	},
	{
		description: 'follow the go proverbs',
		url: 'https://go-proverbs.github.io/'
	}
];

type Tech = {
	os: string;
	distro: string;
	wm: string;
	shell: string;
	terminal: string;
	editor: string;
};

export const tech: Tech = {
	os: 'linux',
	distro: 'arch',
	wm: 'hyprland',
	shell: 'fish',
	terminal: 'ghostty',
	editor: 'neovim'
};
