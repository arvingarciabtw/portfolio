import type { PageServerLoad } from "./$types";

type PostMetadata = {
	title: string;
	description: string;
	pubDate: string;
};

type PostSummary = PostMetadata & {
	slug: string;
	date: number;
	year: number;
};

type PostGroup = {
	year: number;
	posts: PostSummary[];
};

const postModules = import.meta.glob<{ metadata: PostMetadata }>(
	"/src/content/blog/*.svx",
);

export const load: PageServerLoad = async () => {
	const posts = await Promise.all(
		Object.entries(postModules).map(async ([path, importPost]) => {
			const { metadata } = await importPost();

			return {
				...metadata,
				slug: path
					.replace("/src/content/blog/", "")
					.replace(/\.svx$/, ""),
				date: new Date(metadata.pubDate.replaceAll(",", "")).getTime(),
				year: Number(metadata.pubDate.match(/\d{4}/)?.[0]),
			};
		}),
	);

	posts.sort((a, b) => b.date - a.date);

	const groups = posts.reduce<PostGroup[]>((acc, post) => {
		const group = acc.find((entry) => entry.year === post.year);

		if (group) {
			group.posts.push(post);
		} else {
			acc.push({ year: post.year, posts: [post] });
		}

		return acc;
	}, []);

	return { groups };
};
