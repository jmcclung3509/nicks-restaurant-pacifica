<template>
	<div
		class="mobile-menu flex flex-col lg:hidden overflow-auto space-y-4 absolute"
		:class="{ 'mobile-menu-open': data.isMobileOpen }">
		<ul>
			<li>
				<Accordion
					id="0"
					:open="data.accordionPages[0].open"
					@toggleAccordion="onAccordionClick">
					<template #visible="visibleProps">
						<nuxt-link
							:external="true"
							to="/menu"
							class="parent-link underline-link"
							>Menu</nuxt-link
						>
					</template>
					<template #hidden>
						<div class="flex flex-col">
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu"
								>Breakfast & Lunch</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu#dinner"
								>Dinner</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu#dessert"
								>Dessert</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu#bar"
								>Bar & Lounge</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu#happy-hour"
								>Happy Hour</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu#banquet"
								>Banquets</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/menu#music"
								>Live Music</nuxt-link
							>
						</div>
					</template>
				</Accordion>
			</li>
			<li>
				<nuxt-link
					:external="true"
					to="/about"
					class="parent-link underline-link"
					>About Us</nuxt-link
				>
			</li>
			<li>
				<a
					class="underline-link parent-link"
					href="https://www.seabreezemotel.net"
					target="_blank">
					Sea Breeze Motel</a
				>
			</li>
			<li>
				<Accordion
					:id="1"
					:open="data.accordionPages[1].open"
					@toggleAccordion="onAccordionClick">
					<template #visible="visibleProps">
						<nuxt-link
							to="/gallery"
							:external="true"
							class="parent-link underline-link">
							Gallery</nuxt-link
						>
					</template>
					<template>
						<div class="flex flex-col">
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/gallery#views"
								>Views</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/gallery#food"
								>Menu Items</nuxt-link
							>
							<nuxt-link
								:external="true"
								class="child-link whitespace-nowrap"
								to="/gallery#fun"
								>Fun Times</nuxt-link
							>
						</div>
					</template>
				</Accordion>
			</li>
		</ul>
	</div>
</template>

<script setup>
const data = reactive({
	isMobileOpen: false,
	accordionPages: [
		{ id: 0, name: "Menu", open: false },
		{ id: 1, name: "Gallery", open: false },
	],
});

const onAccordionClick = (payload) => {
	data.accordionPages.forEach(
		(item) => (item.open = item.id === payload.id ? payload.open : false)
	);
};
</script>
