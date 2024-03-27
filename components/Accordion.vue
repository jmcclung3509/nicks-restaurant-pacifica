<template>
	<div class="accordion" :class="{ open: isOpen, transition: transition, enabled: enabled }">
		<div class="visible-part" v-on="enabled ? { click: toggleAccordion } : {}">
			<slot name="visible" :enabled="enabled">
			</slot>
		</div>

		<div class="hidden-part" v-show="isOpen">
			<slot name="hidden" :closeAccordion='closeAccordion' />
		</div>


	</div>
</template>
<script setup>

const props = defineProps({

	enabled: {
		type: Boolean,
		default: true,

	},
	transition: {
		type: Boolean,
		default: false,
	},
	id: {
		type: [Number,String],
		default: undefined
	},

})

const emit = defineEmits(["toggleAccordion","closeAccordion"])


const data = reactive({
	open: false
})

const isOpen = computed(() => {
	return data.open
})

const toggleAccordion = () => {
	data.open = !data.open
	emit("toggleAccordion",data.open);
}

const closeAccordion = () => {
	data.open = false
	emit("closeAccordion",data.open);
}

</script>