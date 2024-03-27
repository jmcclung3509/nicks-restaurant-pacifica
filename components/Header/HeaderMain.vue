<template>
	<header
		class="main sticky flex bg-grey-900 text-grey-100 py-3.5 px-6 shadow justify-between w-full"
		@mobileMenuClosed="onMobileMenuClosed">
		<div class="container m-auto flex justify-between items-end">
			<div class="left">
				<nuxt-link to="/">
					<img
						src="@/assets/images/logo-pelican.png"
						alt="Nick's logo"
				/></nuxt-link>
			</div>
			<template v-if="['lg', 'xl'].includes(size)">
				<nav class="w-3/4 right main flex justify-end items-center">
					<ul class="flex justify-between gap-10">
						<li>
							<nuxt-link
								class="underline-link parent-link"
								to="/"
								>Home</nuxt-link
							>
						</li>
						<li>
							<Accordion
								id="0"
								:open="data.pages[0].open"
								@toggleAccordion="
									data.pages[0].open = !data.pages[0].open
								">
								<template #visible="visibleProps">
									<nuxt-link
											to="/menu#"
												:external="true"
										class="parent-link underline-link"
										>Menu</nuxt-link
									>
								</template>
								<template #hidden="{ closeAccordion }">
									<div
										class="flex flex-col dropdown space-y-7"
										@mouseleave="closeAccordion">
										<nuxt-link
											@click="closeAccordion"
											:external="true"
											to="/menu#"
											class="child-link underline-link whitespace-nowrap"
											data-go-to="breakfast">
											Breakfast & Lunch
										</nuxt-link>
										<nuxt-link
											@click="closeAccordion"
											:external="true"
											to="/menu#dinner"
											class="child-link underline-link whitespace-nowrap"
											>Dinner</nuxt-link
										>
										<nuxt-link
											@click="closeAccordion"
											:external="true"
											to="/menu#dessert"
											class="child-link underline-link whitespace-nowrap">
											Dessert
										</nuxt-link>
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											to="/menu#bar"
											class="child-link underline-link whitespace-nowrap">
											Bar & Lounge
										</nuxt-link>
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											to="/menu#happy-hour"
											class="child-link underline-link whitespace-nowrap"
											>Happy Hour</nuxt-link
										>
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											to="/menu#banquet"
											class="child-link underline-link whitespace-nowrap"
											>Banquets</nuxt-link
										>
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											to="/menu#music"
											class="child-link underline-link whitespace-nowrap"
											>Live Music</nuxt-link
										>
									</div>
								</template>
							</Accordion>
						</li>

						<li>
							<nuxt-link
								:external="true"
								class="underline-link parent-link"
								to="/about"
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
								:open="data.pages[1].open"
								@toggleAccordion="
									data.pages[1].open = !data.pages[1].open
								">
								<template #visible="visibleProps">
									<nuxt-link
										:external="true"
										to="/gallery"
										class="parent-link underline-link">
										Gallery</nuxt-link
									>
								</template>
								<template #hidden="{ closeAccordion }">
									<div
										class="flex flex-col dropdown space-y-7"
										@mouseleave="closeAccordion">
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											class="child-link underline-link whitespace-nowrap"
											to="/gallery#views"
											>Views</nuxt-link
										>
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											class="child-link underline-link whitespace-nowrap"
											to="/gallery#food"
											>Menu Items</nuxt-link
										>
										<nuxt-link
											:external="true"
											@click="closeAccordion"
											class="child-link underline-link whitespace-nowrap"
											to="/gallery#fun"
											>Fun Times</nuxt-link
										>
									</div>
								</template>
							</Accordion>
						</li>
					</ul>
				</nav>
			</template>
			<template v-else>
				<i
					class="mobile-nav-trigger font-icon cursor-pointer text-5xl z-2000 bi"
					:class="mobileNavIcon"
					@click="
						(data.isMobileOpen = !data.isMobileOpen),
							$emit('mobileMenuClick', data.isMobileOpen)
					">
				</i>
			</template>
		</div>
	</header>
</template>

<script setup>

const data = reactive({
	isMobileOpen: false,

	pages: [
		{ id: "0", name: "Menu", open: false },
		{ id: "1", name: "Gallery", open: false },
	],
});

const size = useScreensize().size;

const onMobileMenuClick = (payload) => {
	data.isMobileOpen = payload;
	console.log(payload, data.isMobileOpen);
};

const mobileNavIcon = computed(() => {
	return data.isMobileOpen ? "bi-x" : "bi-list";

});


</script>
