export type PostSummary = {
	title: string;
	pubDate: string;
	slug: string;
	date: number;
	year: number;
};

export type PostGroup = {
	year: number;
	posts: PostSummary[];
};

type Post = {
	title: string;
	pubDate: string;
	slug: string;
};

const posts: Post[] = [
	{
		title: "Advanced HTML and CSS",
		pubDate: "Sep 07 2025",
		slug: "advanced-html-and-css",
	},
	{
		title: "Authentication with Passport.js",
		pubDate: "Nov 16 2025",
		slug: "authentication-with-passportjs",
	},
	{
		title: "Back to Square One",
		pubDate: "Aug 02 2025",
		slug: "back-to-square-one",
	},
	{
		title: "Better Auth with Better Auth",
		pubDate: "Feb 01 2026",
		slug: "better-auth-with-better-auth",
	},
	{
		title: "Building a Go CLI Program",
		pubDate: "Jun 14, 2026",
		slug: "building-a-go-cli-program",
	},
	{
		title: "Building with Astro",
		pubDate: "Feb 15 2026",
		slug: "building-with-astro",
	},
	{
		title: "Capturing Keyboard Events in Linux",
		pubDate: "Jun 28, 2026",
		slug: "capturing-keyboard-events-in-linux",
	},
	{
		title: "Client-side Routing with React Router",
		pubDate: "Oct 19 2025",
		slug: "client-side-routing-with-react-router",
	},
	{
		title: "Contribute to Open-Source Civic Tech",
		pubDate: "Aug 02, 2026",
		slug: "contribute-to-open-source-civic-tech",
	},
	{
		title: "Don't Just Check Errors",
		pubDate: "Aug 30, 2026",
		slug: "dont-just-check-errors",
	},
	{
		title: "Easier Queries with Prisma ORM",
		pubDate: "Nov 23 2025",
		slug: "easier-queries-with-prisma-orm",
	},
	{
		title: "Exploring the ESP32",
		pubDate: "Aug 23, 2026",
		slug: "exploring-the-esp32",
	},
	{
		title: "Express.js: Building Web Servers",
		pubDate: "Nov 09 2025",
		slug: "expressjs-building-web-servers",
	},
	{
		title: "Full-Stack Made Easy with Next.js",
		pubDate: "Jan 18 2026",
		slug: "full-stack-made-easy-with-nextjs",
	},
	{
		title: "I Actually Used Subgrid",
		pubDate: "Aug 16, 2026",
		slug: "i-actually-used-subgrid",
	},
	{
		title: "Illusion of Competence",
		pubDate: "Jul 05, 2026",
		slug: "illusion-of-competence",
	},
	{
		title: "Intermediate HTML and CSS",
		pubDate: "Aug 17 2025",
		slug: "intermediate-html-and-css",
	},
	{
		title: "JavaScript: The Halfway Point",
		pubDate: "Aug 24 2025",
		slug: "javascript-the-halfway-point",
	},
	{ title: "Learning SQL", pubDate: "Oct 26 2025", slug: "learning-sql" },
	{
		title: "My First 100 Stars",
		pubDate: "Jul 12, 2026",
		slug: "my-first-100-stars",
	},
	{
		title: "Niche HTML Elements",
		pubDate: "Sep 27, 2026",
		slug: "niche-html-elements",
	},
	{
		title: "pretty tuis in go",
		pubDate: "Jun 21, 2026",
		slug: "pretty-tuis-in-go",
	},
	{
		title: "React: State and Rendering",
		pubDate: "Oct 12 2025",
		slug: "react-state-and-rendering",
	},
	{
		title: "React: The Basics",
		pubDate: "Sep 14 2025",
		slug: "react-the-basics",
	},
	{
		title: "Some Thoughts and Plans for 2026",
		pubDate: "Jan 11 2026",
		slug: "some-thoughts-and-plans-for-2026",
	},
	{
		title: "Test Coverage in Go",
		pubDate: "Sep 20, 2026",
		slug: "test-coverage-in-go",
	},
	{
		title: "Test Driven Development",
		pubDate: "Aug 31 2025",
		slug: "test-driven-development",
	},
	{
		title: "Theming that Doesn't Suck",
		pubDate: "Sep 13, 2026",
		slug: "theming-that-doesnt-suck",
	},
	{
		title: "TypeScript: JavaScript with Types",
		pubDate: "Nov 30 2025",
		slug: "typescript-javascript-with-types",
	},
	{
		title: "UI with Radix Primitives",
		pubDate: "Dec 14 2025",
		slug: "ui-with-radix-primitives",
	},
	{
		title: "Web Development Foundations",
		pubDate: "Aug 10 2025",
		slug: "web-development-foundations",
	},
	{ title: "What is MDX?", pubDate: "Dec 07 2025", slug: "what-is-mdx" },
	{
		title: "What is Node.js?",
		pubDate: "Nov 02 2025",
		slug: "what-is-nodejs",
	},
	{
		title: "Why I Love styled-components",
		pubDate: "Mar 01, 2026",
		slug: "why-i-love-styled-components",
	},
	{
		title: "Your Grit Might Be Hurting You",
		pubDate: "Mar 29, 2026",
		slug: "your-grit-might-be-hurting-you",
	},
];

const grouped = posts
	.map((post) => ({
		...post,
		date: new Date(post.pubDate.replaceAll(",", "")).getTime(),
		year: Number(post.pubDate.match(/\d{4}/)?.[0]),
	}))
	.sort((a, b) => b.date - a.date)
	.reduce<PostGroup[]>((acc, post) => {
		const group = acc.find((entry) => entry.year === post.year);

		if (group) {
			group.posts.push(post);
		} else {
			acc.push({ year: post.year, posts: [post] });
		}

		return acc;
	}, []);

export const groups = grouped;
