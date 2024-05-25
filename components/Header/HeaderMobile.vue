<template>
	<div
		class="mobile-menu flex flex-col lg:hidden overflow-auto space-y-7 absolute"
		:class="{ 'mobile-menu-open': data.isMobileOpen }">
		<ul class="space-y-7">
			<li>
				<nuxt-link
					class="underline-link text-3xl"
					to="/"
					>Home</nuxt-link
				>
				
			</li>
			<li>
				<nuxt-link
					:external="true"
					to="/menu"
					class="underline-link text-3xl"
					>Menu</nuxt-link>
			</li>	
			<li>
				<nuxt-link
					:external="true"
					to="/about"
					class="underline-link text-3xl"
					>About Us</nuxt-link
				>
			</li>
			<li>
				<a
				class="underline-link text-3xl"
					href="https://www.seabreezemotel.net"
					target="_blank">
					Sea Breeze Motel</a
				>
			</li>
			<li>
				<nuxt-link
					:external="true"
					to="/gallery"
					class="underline-link text-3xl"
					>Gallery</nuxt-link>
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
