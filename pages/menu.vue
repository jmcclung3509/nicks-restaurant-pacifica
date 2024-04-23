<template>
  <div class="outer-wrap w-full mx-auto">
    <section
      id="breakfast"
      class="w-full mx-auto flex flex-col justify-content space-y-7 gradient-section pb-36 pt-20 menu-container"
      :class="{ animate: isLargeScreen }"
    >
      <div class="inner container mx-auto space-y-7">
        <h1 class="text-6xl text-center text-dark-blue pb-7">Menu</h1>
        <h2 class="text-center lg:text-3xl lg:text-left">Breakfast & Lunch</h2>
        <div
          class="menu-subsection flex-col justify-center space-y-14 lg:space-y-0 lg:flex-row flex lg:justify-between lg:gap-14 items-center lg:items-start"
        >
          <img
            class=""
            src="@/assets/images/menu-page/breakfast_lunch-1.png"
            alt="Breakfast and lunch menu"
          />

          <img
            src="@/assets/images/menu-page/breakfast-lunch-2.png"
            alt="Breakfast and lunch menu"
          />
        </div>
      </div>
    </section>

    <section
      id="dinner"
      class="menu-container w-full mx-auto flex flex-col justify-content space-y-14 gradient-section reverse py-36"
      :class="{ animate: isLargeScreen }"
    >
      <div class="inner container mx-auto">
        <h2 class="text-center lg:text-3xl lg:text-left">Dinner</h2>
        <div
          class="menu-subsection flex-col justify-center space-y-14 lg:space-y-0 lg:flex-row flex lg:justify-between lg:gap-14 items-center lg:items-start"
        >
          <img src="@/assets/images/menu-page/dinner-1.png" alt="Dinner menu" />

          <img src="@/assets/images/menu-page/dinner-2.png" alt="Dinner menu" />
        </div>
      </div>
    </section>
    <section
      id="bar"
      class="menu-container w-full mx-auto flex flex-col justify-content space-y-14 gradient-section  py-36"
      :class="{ animate: isLargeScreen }"
    >
      <div class="inner container mx-auto space-y-7">
        <h2 class="text-center lg:text-3xl lg:text-left">Bar & Lounge</h2>
        <div
          class="menu-subsection flex-col justify-center space-y-14 lg:space-y-0 lg:flex-row flex  lg:gap-14 items-center lg:items-start"
        >
          <img src="@/assets/images/menu-page/winemenu-1.png" alt="Bar menu" />
          <img src="@/assets/images/menu-page/winemenu-3.png" alt="Bar menu" />
        </div>
        <div
          class="menu-subsection flex-col justify-center space-y-14 lg:space-y-0 lg:flex-row flex lg:gap-14 items-center lg:items-start"
        >
          <img src="@/assets/images/menu-page/winemenu-2.png" alt="Bar menu" />

          <img src="@/assets/images/menu-page/winemenu-4.png" alt="Bar menu" />
        </div>
      </div>
    </section>

    <section
      id="dessert"
      class="menu-container w-full mx-auto flex flex-col justify-content space-y-14 gradient-section reverse  py-36"
    >
      <div class="inner container mx-auto flex justify-center space-y-7">
        <h2 class="text-center lg:text-3xl lg:text-left">Desserts</h2>
        <div class="menu-subsection mx-auto flex-justify-center ">
          <img
            src="@/assets/images/menu-page/desserts.png"
            alt="Dessert Menu"
          />
        </div>
      </div>
    </section>

    <section
      id="happy-hour"
      class="menu-container w-full mx-auto flex flex-col justify-content space-y-14  gradient-section py-36"
    >
      <div class="inner container mx-auto space-y-7">
        <h2 class="text-center lg:text-3xl lg:text-left">Happy Hour</h2>
        <div class="menu-subsection mx-auto flex justify-center">
          <img
            src="@/assets/images/menu-page/happy-hour.png"
            alt="Happy hour menu"
          />
        </div>
      </div>
    </section>

    <section
      id="banquet"
      class="menu-container w-full mx-auto flex flex-col justify-content space-y-14  gradient-section reverse py-36 "
    >
      <div class="inner container mx-auto space-y-7">
        <h2 class="text-center lg:text-3xl lg:text-left">Banquet Menu</h2>
    <div class="menu-subsection justify-center flex litems-center">
          <img
    
            src="@/assets/images/menu-page/BanquetMenu-1.png"
            alt="Banquet menu"
          />
          </div>
          <div class="menu-subsection justify-center flex litems-center">
   
          <img
   
            src="@/assets/images/menu-page/BanquetMenu-2.png"
            alt="Banquet menu"
          />
        </div>
      </div>
    </section>

    <section
      id="music"
      class="menu-container w-full mx-auto flex flex-col justify-content space-y-14 pt-36 gradient-section pb-36 "
    >
      <div class="inner container mx-auto space-y-7">
        <h2 class="text-center lg:text-3xl lg:text-left">Music Calander</h2>
        <div class="menu-subsection flex justify-center">
          <img
            src="@/assets/images/menu-page/calender.png"
            alt="Live music calendar"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { isLargeScreen } = useScreensize();
console.log(isLargeScreen.value);

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
