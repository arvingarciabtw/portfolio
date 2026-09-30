import adapter from "@sveltejs/adapter-cloudflare";
import { sveltekit } from "@sveltejs/kit/vite";
import { escapeSvelte, mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { type BundledLanguage, codeToHtml } from "shiki";

export default defineConfig({
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
				}),
			],
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes("node_modules")
						? undefined
						: true,
			},
			adapter: adapter(),
			output: {
				bundleStrategy: "single",
			},
		}),
	],
});
