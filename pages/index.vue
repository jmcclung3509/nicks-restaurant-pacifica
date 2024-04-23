<template>
  <section id="hero" class="animate">
    <div
      class="hero-container flex justify-center items-center h-[85vh] w-[100vw]"
    >
      <div class="bg1 bg" :class="{ active: data.activeIndex === 0 }"></div>
      <div class="bg2 bg" :class="{ active: data.activeIndex === 1 }"></div>
      <div class="bg3 bg" :class="{ active: data.activeIndex === 2 }"></div>
      <div class="bg4 bg" :class="{ active: data.activeIndex === 3 }"></div>
      <div class="bg5 bg" :class="{ active: data.activeIndex === 4 }"></div>
      <div class="bg6 bg" :class="{ active: data.activeIndex === 5 }"></div>

      <div
        class="outer-container flex justify-center items-center w-[80%] sm:w-[70%] lg:w-[65%] xl:w-[60%] min-h-fit py-14 max-w-screen-lg"
      >
        <div
          class="text-container flex flex-col justify-end items-center w-[80%] mx-auto space-y-7 lg:space-y-14"
        >
          <h1
            class="text-3xl sm:text-4xl lg:text-6xl text-center animate__animated animate__zoomIn animate__delay-1s"
          >
            Welcome to <br />
            Nick's Restaurant
          </h1>
          <p class="text-center lg:w-[80%] mx-auto">
            Specializing in fresh seafood and prime-cut steaks, the Gust family
            has been welcoming guests from all over the world since 1927.
          </p>
          <button
            class="text-white font-bold py-4 px-8 border border-none rounded"
          >
            <nuxt-link to="/about"> Our Story</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="hours" class="hours space-y-14 animate mx-auto">
    <div
      class="inner-wrapper section-container mx-auto flex flex-col lg:flex-row justify-center lg:justify-around lg:items-start items-center"
    >
      <div
        class="sidebar w-full lg:w-1/2 space-y-7 max-w-[650px] flex flex-col justify-start"
      >
        <h2 class="caps border-none">Dine. Dance. Romance.</h2>
        <p>
          Immerse yourself in the coastal charm of Nicks Restaurant, where every
          visit is an unforgettable experience. Indulge in classic seafood
          cuisine with a modern twist, complemented by a curated selection of
          local California wines, craft beers, and specialty cocktails. With
          breathtaking views of the Pacific Ocean, Nicks creates a welcoming
          ambiance that seamlessly blends retro accents with contemporary
          comfort, inviting guests to unwind and savor the moment.
        </p>
        <p>
          Stepping into Nicks is embarking on a culinary journey that transcends
          time and tradition. Whether you're savoring fresh seafood, succulent
          steaks, or indulging in Italian and Mediterranean fare, every dish is
          crafted with care and precision. Join us for live music and dancing on
          weekends, and let the Gust family's century-long commitment to
          excellence ensure that your dining experience at Nicks is nothing
          short of extraordinary.
        </p>
      </div>
      <div class="sidebar w-full lg:w-[30%] flex flex-col items-start pt-24 lg:pt-0">
        <h2 class="border-none">Hours</h2>
        <div class="flex flex-col">
          <h3>Dining Room</h3>
          <div class="hours-container space-y-2 flex flex-col">
            <p class="hours text-sm">Monday & Thursday: 11am - 9pm</p>
            <p class="hours text-sm">Friday: 11am - 9:30pm</p>
            <p class="hours text-sm">Saturday: 10am - 9:30pm</p>
            <p class="hours text-sm">Sunday: 10am - 8:30pm</p>
            <p class="hours text-sm">
              Tuesday & Wednesday:
              <span class="closed text-normal">CLOSED</span>
            </p>
          </div>
        </div>
        <div class="flex flex-col">
          <h3>Bar & Lounge</h3>
          <div class="hours-container space-y-2 flex flex-col">
            <p class="hours text-sm">Sunday, Monday & Thursday: until 10pm</p>
            <p class="hours text-sm">Friday - Saturday: until 11pm</p>
          </div>
        </div>
        <div class="flex flex-col">
          <h3>Happy Hour</h3>
          <div class="hours-container space-y-2 flex flex-col">
            <p class="hours text-sm">Monday & Thursday: 3pm - 5pm</p>
            <a
              class="underline-link blue caps"
              href="/menu#happy-hour"
              target="_blank"
              >Happy hour menu</a
            >
          </div>
        </div>
        <div class="flex flex-col">
          <h3>Live Music</h3>
          <div class="hours-container space-y-2 flex flex-col">
            <p class="hours text-sm">Monday - Thursday: 11am - 9pm</p>
            <p class="hours text-sm">Friday - Saturday: 7pm - 11pm</p>
            <a
              class="underline-link blue caps"
              href="/menu#music"
              target="_blank"
              >Music calendar</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = reactive({
  activeIndex: 0,
});

const setActiveIndex = () => {
  setInterval(() => {
    data.activeIndex = (data.activeIndex + 1) % 6;
  }, 6000);
};

onMounted(() => {
  setActiveIndex();
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
onUpdated(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
</script>
