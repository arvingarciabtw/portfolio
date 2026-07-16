import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { navigation } from '$lib/stores/navigation.svelte';

export function handlerSectionKeyPress(e: KeyboardEvent) {
	if (e.key == '1') {
		goto(resolve('/'));
		navigation.activeIndex = 0;
	}
	if (e.key == '2') {
		goto(resolve('/experience'));
		navigation.activeIndex = 1;
	}
	if (e.key == '3') {
		goto(resolve('/projects'));
		navigation.activeIndex = 2;
	}
	if (e.key == '4') {
		goto(resolve('/about'));
		navigation.activeIndex = 3;
	}
}
