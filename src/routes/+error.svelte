<script lang="ts">
import { global as G } from "$lib/stores/global.svelte";
import Navigable from "$lib/components/navigable.svelte";

const rowMap: Record<number, number> = {
	0: 3,
	1: 1,
};

G.maxRow = Object.keys(rowMap).length - 1;
G.indexMap = {};

$effect(() => {
	G.maxRowIndex = rowMap[G.activeRow] ?? 0;
});
</script>
<div class="error-wrapper">
	<p class="face">(╥﹏╥)</p>
	<p class="message">seems like you're on a page that doesn't exist...</p>
	<ul class="links">
		<li>
			<Navigable
				content="return home"
				href="/"
				external={false}
				row={1}
				idx={0}
				underlined={true}
				multi={true}
			/>
		</li>
		<li class="separator">·</li>
		<li>
			<Navigable
				content="go back"
				href="/"
				external={false}
				row={1}
				idx={1}
				underlined={true}
				multi={true}
				onclick={() => {
          history.back()
        }}
			/>
		</li>
	</ul>
</div>

<style>
.error-wrapper {
	padding: 0 1.25rem;
	min-height: 100%;
	width: 100%;
	max-width: 78rem;
	display: grid;
	place-items: start;
	gap: 1rem;
	--flicker-color: var(--error);
}
.message {
	margin-top: 2rem;
	color: var(--white);
}
.links {
	margin-left: -0.25rem;
	display: grid;
	grid-template-columns: repeat(3, max-content);
	gap: 0.5rem;
	color: var(--white);
}
</style>
