import type { RequestHandler } from "./$types";
import { all } from "$lib/data/posts";
import {
	SITE_DESCRIPTION,
	SITE_LANGUAGE,
	SITE_TITLE,
	SITE_URL,
} from "$lib/data/site";

export const prerender = true;

const FEED_URL = `${SITE_URL}/rss.xml`;
const BLOG_URL = `${SITE_URL}/`;

function escape(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

// RFC 822, which is what RSS 2.0 asks for. Date#toUTCString emits
// "Sun, 07 Sep 2025 00:00:00 GMT", which is already in that shape.
function toRfc822(date: Date): string {
	return date.toUTCString();
}

function render(): string {
	// `all` is already newest-first, so the first entry is the freshest post.
	const lastBuildDate = all[0].pubDateTime;

	const items = all.map((post) => {
		const url = `${SITE_URL}/blog/${post.slug}`;

		return [
			"\t\t<item>",
			`\t\t\t<title>${escape(post.title)}</title>`,
			`\t\t\t<link>${escape(url)}</link>`,
			`\t\t\t<guid isPermaLink="true">${escape(url)}</guid>`,
			`\t\t\t<pubDate>${toRfc822(post.pubDateTime)}</pubDate>`,
			`\t\t\t<description>${escape(post.description)}</description>`,
			"\t\t</item>",
		].join("\n");
	});

	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
		"\t<channel>",
		`\t<title>${escape(SITE_TITLE)}</title>`,
		`\t<link>${escape(BLOG_URL)}</link>`,
		`\t<description>${escape(SITE_DESCRIPTION)}</description>`,
		`\t<language>${escape(SITE_LANGUAGE)}</language>`,
		`\t<lastBuildDate>${toRfc822(lastBuildDate)}</lastBuildDate>`,
		`\t<atom:link href="${
			escape(FEED_URL)
		}" rel="self" type="application/rss+xml"/>`,
		...items,
		"\t</channel>",
		"</rss>",
		"",
	].join("\n");
}

export const GET: RequestHandler = () => {
	return new Response(render(), {
		headers: {
			"content-type": "application/rss+xml; charset=utf-8",
		},
	});
};
