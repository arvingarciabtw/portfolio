import adapter from "@sveltejs/adapter-cloudflare";
import { sveltekit } from "@sveltejs/kit/vite";
import { escapeSvelte, mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { type BundledLanguage, codeToHtml } from "shiki";
import rehypeSlug from "rehype-slug";

function rehypeCollectHeadings() {
	return (tree: any, file: any) => {
		const headings: { id: string; text: string }[] = [];

		function textContent(node: any): string {
			if (node.type === "text") return node.value;
			return (node.children ?? []).map(textContent).join("");
		}

		function walk(node: any) {
			if (node.type === "element" && node.tagName === "h2") {
				const id = node.properties?.id;

				if (typeof id === "string" && id.length > 0) {
					headings.push({
						id,
						text: textContent(node).replace(/\s+/g, " ").trim(),
					});
				}
			}

			node.children?.forEach(walk);
		}

		walk(tree);
		file.data.fm = { ...(file.data.fm ?? {}), headings };
	};
}

export default defineConfig({
	resolve: {
		alias: {
			"#lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
		},
	},
	plugins: [
		sveltekit({
			extensions: [".svelte", ".svx"],
			preprocess: [
				mdsvex({
					extensions: [".svx"],
					layout: fileURLToPath(
						new URL(
							"./src/lib/layouts/post.svelte",
							import.meta.url,
						),
					),
					layoutPropForwarding: "runes",
					highlight: {
						highlighter: async (code, lang) => {
							const html = await codeToHtml(code, {
								lang: (lang ?? "text") as BundledLanguage,
								themes: {
									light: "gruvbox-light-hard",
									dark: "gruvbox-dark-hard",
								},
								defaultColor: false,
							});

							return `{@html \`${escapeSvelte(html)}\`}`;
						},
					},
					rehypePlugins: [rehypeSlug, rehypeCollectHeadings],
				}),
			],
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes("node_modules")
						? undefined
						: true,
			},
			adapter: adapter({ platformProxy: { persist: false } }),
		}),
	],
});
