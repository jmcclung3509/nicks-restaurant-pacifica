<template>
  <div class="outer-wrapper w-full gradient-section">
    <div class=" pt-24 page-animate">
      <h1 class="text-6xl text-dark-blue text-center ">Gallery</h1>
      <section id="views" class="space-y-14 gradient-section pt-14 pb-36">
        <div class="inner container mx-auto">
          <div
            class="img-container flex flex-wrap justify-between item-starts "
          >
            <h2 class="text-center md:text-left text-dark-blue text-4xl w-full pb-7">
              Views
            </h2>

            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/sunset_2.png"
              alt="sunset"
            />

            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/sunset-four.png"
              alt="sunset"
            />

            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/sunset5.jpg"
              alt="sunset"
            />
            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/sunset6.jpg"
              alt="sunset"
            />

            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/sunset-long.jpeg"
              alt="sunset"
            />
            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/window-view.jpeg"
              alt="sunset"
            />
            <img
              class="w-full md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/views/nicks-sign.png"
              alt="sunset"
            />
          </div>
        </div>
      </section>
      <section id="food" class=" gradient-section reverse">
        <div class="inner container mx-auto py-36">
          <h2
            class="text-center md:text-left text-4xl w-full text-dark-blue animate pb-4"
          >
            Food
          </h2>
          <div
            class="img-container flex flex-wrap justify-between item-start"
          >
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/crab-sandwich.jpeg"
              alt="crab sandwich"
            />
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/tomahawk.jpeg"
              alt="tomahawk"
            />
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/fried-calamari.jpg"
              alt="fried calamari"
            />
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/lobster.jpeg"
              alt="lobster"
            />

            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/Mahi-special.jpeg"
              alt="Mahi-special"
            />
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/scallop-special.jpeg"
              alt="Scallop special"
            />
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/food/clam-chowder.jpg"
              alt="clam chowder"
            />
          </div>
        </div>
      </section>
      <section id="fun" class="space-y-7 gradient-section  pb-24">
        <div class="inner container mx-auto py-36">
          <h2
            class="text-center md:text-left text-dark-blue text-4xl w-full animate"
          >
            Fun
          </h2>
          <div class="img-container flex flex-wrap justify-between ">
            <img
              class="w-full lg:w-[60%] mx-auto animate rounded-2xl border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/fun/4th-of-july.jpeg"
              alt="4th of July BBQ"
            />
            <img
              class="w-full mx-auto md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/fun/4th-of-july-2.jpeg"
              alt="4th of July BBQ"
            />
            <img
              class="w-full mx-auto md:w-[48%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/fun/4th-of-july-5.jpeg"
              alt="4th of July BBQ"
            />
            <img
              class="w-full mx-auto lg:w-[67%] rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/fun/4th-of-july-3.jpeg"
            />

            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/fun/carshow-2.jpeg"
              alt="Car show"
            />
            <img
              class="w-full md:w-[48%] mx-auto rounded-2xl animate border-8 border-[#00356b] my-4"
              src="@/assets/images/gallery/fun/carshow-3.jpeg"
              alt="Car show"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
onMounted(() => {
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
