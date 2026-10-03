export type PostSummary = {
	title: string;
	description: string;
	pubDate: string;
	slug: string;
	date: number;
	pubDateTime: Date;
	year: number;
};

export type PostGroup = {
	year: number;
	posts: PostSummary[];
};

type Post = {
	title: string;
	description: string;
	pubDate: string;
	slug: string;
};

const MONTHS = [
	"jan",
	"feb",
	"mar",
	"apr",
	"may",
	"jun",
	"jul",
	"aug",
	"sep",
	"oct",
	"nov",
	"dec",
];

// pubDate is always "MMM DD YYYY", optionally with a comma after the day.
// new Date() would parse that as local midnight, which shifts the day for anyone
// not on UTC, so the parts get assembled as UTC explicitly instead.
function toDate(pubDate: string): Date {
	const [month, day, year] = pubDate.replaceAll(",", "").split(" ");

	return new Date(
		Date.UTC(
			Number(year),
			MONTHS.indexOf(month.toLowerCase()),
			Number(day),
		),
	);
}

const posts: Post[] = [
	{
		title: "Advanced HTML and CSS",
		description:
			"A blog article going through advanced HTML and CSS concepts covered in The Odin Project.",
		pubDate: "Sep 07 2025",
		slug: "advanced-html-and-css",
	},
	{
		title: "Authentication with Passport.js",
		description:
			"A blog article explaining how to implement authentication with Passport.js.",
		pubDate: "Nov 16 2025",
		slug: "authentication-with-passportjs",
	},
	{
		title: "Back to Square One",
		description:
			"A blog article going through the author's thoughts on starting fresh with their web development journey.",
		pubDate: "Aug 02 2025",
		slug: "back-to-square-one",
	},
	{
		title: "Better Auth with Better Auth",
		description:
			"A blog article on implementing Better Auth for better authentication.",
		pubDate: "Feb 01 2026",
		slug: "better-auth-with-better-auth",
	},
	{
		title: "Building a Go CLI Program",
		description:
			"A blog article on the basics of building a Go CLI program",
		pubDate: "Jun 14, 2026",
		slug: "building-a-go-cli-program",
	},
	{
		title: "Building with Astro",
		description:
			"A blog article on explaining why Astro is good for building content-driven websites.",
		pubDate: "Feb 15 2026",
		slug: "building-with-astro",
	},
	{
		title: "Capturing Keyboard Events in Linux",
		description:
			"A blog article on how to capture keyboard events, particularly in Linux.",
		pubDate: "Jun 28, 2026",
		slug: "capturing-keyboard-events-in-linux",
	},
	{
		title: "Client-side Routing with React Router",
		description:
			"A blog article explaining how to implement client-side routing with React Router.",
		pubDate: "Oct 19 2025",
		slug: "client-side-routing-with-react-router",
	},
	{
		title: "Contribute to Open-Source Civic Tech",
		description:
			"Talking about why people should contribute to open-source civic tech.",
		pubDate: "Aug 02, 2026",
		slug: "contribute-to-open-source-civic-tech",
	},
	{
		title: "Don't Just Check Errors",
		description: "Don't just check errors, handle them gracefully.",
		pubDate: "Aug 30, 2026",
		slug: "dont-just-check-errors",
	},
	{
		title: "Easier Queries with Prisma ORM",
		description:
			"A blog article explaining how database queries are simpler with Prisma ORM.",
		pubDate: "Nov 23 2025",
		slug: "easier-queries-with-prisma-orm",
	},
	{
		title: "Exploring the ESP32",
		description:
			"Trying out the ESP32, as someone with no hardware experience.",
		pubDate: "Aug 23, 2026",
		slug: "exploring-the-esp32",
	},
	{
		title: "Express.js: Building Web Servers",
		description:
			"A blog article explaining the fundamentals of Express.js.",
		pubDate: "Nov 09 2025",
		slug: "expressjs-building-web-servers",
	},
	{
		title: "Full-Stack Made Easy with Next.js",
		description:
			"A blog article on the simplicity of building a full-stack application with Next.js.",
		pubDate: "Jan 18 2026",
		slug: "full-stack-made-easy-with-nextjs",
	},
	{
		title: "I Actually Used Subgrid",
		description: "I didn't think I would ever use subgrid, but here I am!",
		pubDate: "Aug 16, 2026",
		slug: "i-actually-used-subgrid",
	},
	{
		title: "Illusion of Competence",
		description:
			"Going over some thoughts on the recent AI landscape, and the illusion of competence present in a lot of novice developers.",
		pubDate: "Jul 05, 2026",
		slug: "illusion-of-competence",
	},
	{
		title: "Intermediate HTML and CSS",
		description:
			"A blog article explaining intermediate HTML and CSS concepts covered in The Odin project.",
		pubDate: "Aug 17 2025",
		slug: "intermediate-html-and-css",
	},
	{
		title: "JavaScript: The Halfway Point",
		description:
			"A blog article explaining the author's journey and learnings so far, going through the JavaScript course of The Odin Project.",
		pubDate: "Aug 24 2025",
		slug: "javascript-the-halfway-point",
	},
	{
		title: "Learning SQL",
		description: "A blog article explaining the fundamentals of SQL.",
		pubDate: "Oct 26 2025",
		slug: "learning-sql",
	},
	{
		title: "My First 100 Stars",
		description: "Talking about my first 100 stars on GitHub!",
		pubDate: "Jul 12, 2026",
		slug: "my-first-100-stars",
	},
	{
		title: "Niche HTML Elements",
		description:
			"Some niche HTML elements that you might not have known about.",
		pubDate: "Sep 27, 2026",
		slug: "niche-html-elements",
	},
	{
		title: "pretty tuis in go",
		description:
			"A blog article on building pretty TUIs with Bubble Tea and Lipgloss.",
		pubDate: "Jun 21, 2026",
		slug: "pretty-tuis-in-go",
	},
	{
		title: "React: State and Rendering",
		description:
			"A blog article explaining how state and rendering works in React.",
		pubDate: "Oct 12 2025",
		slug: "react-state-and-rendering",
	},
	{
		title: "React: The Basics",
		description: "A blog article explaining the fundamentals of React.",
		pubDate: "Sep 14 2025",
		slug: "react-the-basics",
	},
	{
		title: "Some Thoughts and Plans for 2026",
		description:
			"A blog article on Arvin Garcia's thoughts and plans for the year 2026.",
		pubDate: "Jan 11 2026",
		slug: "some-thoughts-and-plans-for-2026",
	},
	{
		title: "Test Coverage in Go",
		description: "Test coverage in Go is pretty damn good.",
		pubDate: "Sep 20, 2026",
		slug: "test-coverage-in-go",
	},
	{
		title: "Test Driven Development",
		description:
			"A blog article explaining the basics of test driven development.",
		pubDate: "Aug 31 2025",
		slug: "test-driven-development",
	},
	{
		title: "Theming that Doesn't Suck",
		description: "No more of that horrible flashing.",
		pubDate: "Sep 13, 2026",
		slug: "theming-that-doesnt-suck",
	},
	{
		title: "TypeScript: JavaScript with Types",
		description:
			"A blog article on explaining the fundamentals of TypeScript.",
		pubDate: "Nov 30 2025",
		slug: "typescript-javascript-with-types",
	},
	{
		title: "UI with Radix Primitives",
		description:
			"A blog article on easily implementing UI components with Radix Primitives.",
		pubDate: "Dec 14 2025",
		slug: "ui-with-radix-primitives",
	},
	{
		title: "Web Development Foundations",
		description:
			"A blog article explaining the foundations of web development.",
		pubDate: "Aug 10 2025",
		slug: "web-development-foundations",
	},
	{
		title: "What is MDX?",
		description: "A blog article on explaining the fundamentals of MDX.",
		pubDate: "Dec 07 2025",
		slug: "what-is-mdx",
	},
	{
		title: "What is Node.js?",
		description: "A blog article explaining the fundamentals of Node.js.",
		pubDate: "Nov 02 2025",
		slug: "what-is-nodejs",
	},
	{
		title: "Why I Love styled-components",
		description:
			"A blog article on explaining why styled-components are great, despite its adoption within the community decreasing.",
		pubDate: "Mar 01, 2026",
		slug: "why-i-love-styled-components",
	},
	{
		title: "Your Grit Might Be Hurting You",
		description:
			"A blog article on explaining why grit might hurt you, if you don't understand it.",
		pubDate: "Mar 29, 2026",
		slug: "your-grit-might-be-hurting-you",
	},
];

const sorted = posts
	.map((post) => {
		const pubDateTime = toDate(post.pubDate);

		return {
			...post,
			date: pubDateTime.getTime(),
			pubDateTime,
			year: pubDateTime.getUTCFullYear(),
		};
	})
	.sort((a, b) => b.date - a.date);

export const all = sorted;

const grouped = sorted.reduce<PostGroup[]>((acc, post) => {
	const group = acc.find((entry) => entry.year === post.year);

	if (group) {
		group.posts.push(post);
	} else {
		acc.push({ year: post.year, posts: [post] });
	}

	return acc;
}, []);

export const groups = grouped;
