<script lang="ts">
import { projects } from "#lib/data/data.js";
import { global as G } from "#lib/stores/global.svelte.js";
import Download from "#lib/icons/download.svelte";
import Fork from "#lib/icons/fork.svelte";
import Star from "#lib/icons/star.svelte";
import Navigable from "#lib/components/navigable.svelte";

const rowMap: Record<number, number> = {
	0: 4,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
};

G.maxRow = Object.keys(rowMap).length - 1;
G.indexMap = {
	0: 2,
};

$effect(() => {
	G.maxRowIndex = rowMap[G.activeRow] ?? 0;
});
</script>

<div class="projects-wrapper">
    {#each projects as project, i (project)}
        <div class="project">
            <div class="details">
                <div class="selection">
                    <Navigable
                        content={project.name}
                        href={project.url}
                        external={true}
                        row={i + 1}
                        idx={0}
                    />
                    <div class="metrics">
                        {#if project.metrics.stars != null && project.metrics.stars > 10}
                            <div class="metric stars">
                                <div class="icon">
                                    <Star />
                                </div>
                                <p>
                                    {project.metrics.stars}{project.metrics
                                        .stars > 10
                                        ? "+"
                                        : ""}
                                </p>
                            </div>
                        {/if}
                        {#if project.metrics.downloads != null && project.metrics.downloads > 10}
                            <div class="metric downloads">
                                <div class="icon">
                                    <Download />
                                </div>
                                <p>
                                    {project.metrics.downloads}{project.metrics
                                        .downloads > 10
                                        ? "+"
                                        : ""}
                                </p>
                            </div>
                        {/if}
                        {#if project.metrics.forks != null && project.metrics.forks >= 5}
                            <div class="metric forks">
                                <div class="icon">
                                    <Fork />
                                </div>
                                <p>
                                    {project.metrics.forks}{project.metrics
                                        .forks > 10
                                        ? "+"
                                        : ""}
                                </p>
                            </div>
                        {/if}
                    </div>
                </div>
                <ul class="technology-list">
                    {#each project.technologies as technology, i (technology)}
                        <li class="technology">
                            <p>{technology}</p>
                            {#if i != project.technologies.length - 1}
                                <p class="separator">·</p>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
            <p class="description">{project.description}</p>
        </div>
    {/each}
</div>

<style>
.projects-wrapper {
	padding: 0 1.25rem;
	width: 100%;
	max-width: 78rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	--flicker-color: var(--project);
}
.project {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	max-width: 24rem;
	text-decoration: none;
}
.details {
	display: flex;
	flex-direction: column;
	gap: 0.375rem;
}
.selection {
	margin-left: -0.25rem;
	display: flex;
	gap: 0.5rem;
}
.metrics {
	display: flex;
	gap: 0.5rem;
}
.metric {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.icon {
	min-height: 100%;
	aspect-ratio: 1 / 1;
	display: grid;
	place-items: end;
}
.stars {
	color: var(--star);
}
.downloads {
	color: var(--download);
}
.forks {
	color: var(--fork);
}

.technology-list {
	display: flex;
	gap: 0.5rem;
}
.technology {
	display: flex;
	gap: 0.5rem;
	color: var(--bright-cyan);
}
.separator {
	color: var(--white);
}
.description {
	color: var(--white);
	text-wrap: stable;
	line-height: 2;
}

@media (max-width: 500px) {
	.projects-wrapper {
		padding: 0;
	}
	.description {
		margin-left: 0.25rem;
	}
	.technology-list {
		margin: 0.25rem 0 0 0.25rem;
	}
	.selection {
		margin: 0;
	}
}
</style>
