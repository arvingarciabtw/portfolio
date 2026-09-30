import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

const posts = import.meta.glob("/src/content/blog/*.svx");

export const load: PageServerLoad = ({ params }) => {
	const postPath = `/src/content/blog/${params.slug}.svx`;

	if (!posts[postPath]) {
		error(404, "Article not found");
	}
};
