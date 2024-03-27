<template>

    <div class="outer-wrap w-full pb-28 max-w-[1280px] mx-auto">
        <div class="container w-[90%] mx-auto ">
            <section class="animate ">
                <div class="container mx-auto  p-14 gradient-section">
                    <h1 class="text-6xl text-center text-dark-blue">Menu</h1>
                </div>
            </section>
            <section
                id="breakfast"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto ">
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/breakfast_lunch-1.png"
                        alt="Breakfast and lunch menu" />
                </div>
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/breakfast-lunch-2.png"
                        alt="Breakfast and lunch menu" />
                </div>
            </section>
    
            <section
                id="dinner"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto pt-36 ">
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/dinner-1.png"
                        alt="Dinner menu" />
                </div>
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/dinner-2.png"
                        alt="Dinner menu" />
                </div>
            </section>
    
            <section
                id="dessert"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto pt-36 animate ">
                <div class="menu-subsection mx-auto  gradient-section">
                    <img
                        src="@/assets/images/menu-page/desserts.png"
                        alt="Dessert Menu" />
                </div>
            </section>
    
            <section
                id="bar"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto pt-36 ">
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/winemenu-1.png"
                        alt="Bar menu" />
                </div>
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/winemenu-2.png"
                        alt="Bar menu" />
                </div>
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/winemenu-3.png"
                        alt="Bar menu" />
                </div>
                <div class="menu-subsection mx-auto  animate gradient-section">
                    <img
                        src="@/assets/images/menu-page/winemenu-4.png"
                        alt="Bar menu" />
                </div>
            </section>
    
            <section
                id="happy-hour"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto pt-36 animate gradient-section">
                <div class="menu-subsection mx-auto ">
                    <img
                        src="@/assets/images/menu-page/happy-hour.png"
                        alt="Happy hour menu" />
                </div>
            </section>
    
            <section
                id="banquet"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto pt-36 animate ">
                <div class="menu-subsection mx-auto  gradient-section">
                    <img
                        src="@/assets/images/menu-page/BanquetMenu-1.png"
                        alt="Banquet menu" />
                </div>
                <div class="menu-subsection mx-auto  gradient-section">
                    <img
                        src="@/assets/images/menu-page/BanquetMenu-2.png"
                        alt="Banquet menu" />
                </div>
            </section>
    
            <section
                id="music"
                class="menu-container w-full md:w-3/4 mx-auto flex flex-col justify-content space-y-28 mx-auto pt-36 animate ">
                <div class="menu-subsection mx-auto  gradient-section">
                    <img
                        src="@/assets/images/menu-page/calender.png"
                        alt="Live music calendar" />
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
    