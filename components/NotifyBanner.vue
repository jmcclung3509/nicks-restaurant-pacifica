<template>
	<div
		class="py-4 z-100  ">

		<div class="inner-banner-wrapper px-4 flex justify-center items-center min-h-[120px] ">

				<div class="flex justify-center items-center py-7 space-y-4 flex-col absolute ">
											<p class="font-bold">
				June 20, 2024</p>
				<p class="font-bold text-3xl">

				Thursday Night Lights is back! 🚘
					</p>



				</div>


			<i
				class="icon-close icon cursor-pointer text-5xl z-2000 bi-x right-0 top-0 absolute"
				@click="$emit('notify-close')"></i>
		</div>
	</div>

</template>

<script setup>


const props = defineProps({

	open: {
		type: Boolean,
		default: false,
	},
});


</script>
