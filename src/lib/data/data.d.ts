export type Route = string | URL;

// resolve is imported via value in consumers that need it, keep Route simple? Or just inline type

export type Link = {
	content: string;
};
export type InternalLink = Link & {
	href: Route;
};
export type ExternalLink = Link & {
	href: string;
};

export type Experience = {
	position: string;
	company: string;
	url: string;
	date: string;
	description: string;
	points: string[];
	technologies: string[];
};

export type Metrics = {
	stars: string;
	forks: string;
};

export type Project = {
	name: string;
	url: string;
	description: string;
	metrics: Metrics;
	technologies: string[];
};
