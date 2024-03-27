<template>
	<Html>
		<Body
			:class="[{ 'notify-open': data.notifyOpen }, `page-${route.name}`]">
			<Transition name="banner-open-close">
				<div
					class="notify flex items-center justify-center"
					v-if="data.notifyOpen">
					<NotifyBanner
						:open="data.notifyOpen"
						@notify-close="data.notifyOpen = false" />
				</div>
			</Transition>
			<div
				class="relative flex flex-col main-page page-animate"
				:class="{ 'mobile-menu-open': data.isMobileOpen }">
				<HeaderMain @mobileMenuClick="onMobileMenuClick" />

				<div class="inner w-full overflow-hidden">
					<slot />
					<Footer />
				</div>

				<HeaderMobile></HeaderMobile>
			</div>
		</Body>
	</Html>
</template>
<script setup>



const route = useRoute();
const config = useRuntimeConfig()

const host = config.public.BASE_API_BROWSER_URL;
const title = "Nick's Restaurant";
const description ="Specializing in fresh seafood and prime-cut steaks, the Gust family has been welcoming guests from all over the world since 1927.";
const image= host + "/static/images/nicks-restaurant-featured-image.jpeg";
const url=host + route.fullPath;


useHead({
	titleTemplate: (globalTitle) => {
		return globalTitle ? `${globalTitle} | ${title}` : title;
	},
	meta: [
		{name: "title", content: title},
		{name: "description", content: description},
		{hid: "og:type", property: "og:type", content: "website"},
		{hid: "og:title", property: "og:title", content: title},
		{hid: "og:description", property: "og:description", content: description},
		{hid: "og:url", property: "og:url", content: url},
		{hid: "og:image", property: "og:image", content: image},
		{hid: "twitter:title", name: "twitter:title", content: "title"},
		{hid: "twitter:description", name: "twitter:description", content: description},
		{hid: "twitter:image", name: "twitter:image", content: image},
		{hid: "twitter:url", name: "twitter:url", content: url},
	]
})







const data = reactive({
	isMobileOpen: false,
	notifyOpen: false,
});
const onMobileMenuClick = (payload) => {
	data.isMobileOpen = payload;
	data.notifyOpen = false;
	console.log("click", payload);
};

const toggleNotifyOpen = () => {
	setTimeout(() => {
		data.notifyOpen = true;
	}, 200);
};
onMounted(() => {
	setTimeout(() => {
		useAnimateObserver();
		useGoToAnchor();
		toggleNotifyOpen();
	}, 100);
});
</script>

<style scoped>
.toggle-notify {
	position: relative;
	z-index: 100;
}
</style>
