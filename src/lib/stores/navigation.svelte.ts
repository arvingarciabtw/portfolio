import { sections } from '$lib/data/data';

export const navigation = $state({
	activeIndex: 4
});

const isInHeader = $derived(navigation.activeIndex < sections.length);
export function getIsInHeader() {
	return isInHeader;
}
