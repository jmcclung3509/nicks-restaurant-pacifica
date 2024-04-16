<template>
	<div class="accordion" :class="{ open: isOpen, transition: transition, enabled: enabled }">
		<div class="visible-part" v-on="enabled ? {  click: toggleAccordion, mouseover:toggleAccordion, mouseleave:leaveAnchor } : {}">
			<slot name="visible" :enabled="enabled">
			</slot>
		</div>
<transition name="menu-open-close">
		<div class="hidden-part" @mouseleave="closeAccordion" v-show="isOpen">
			<slot name="hidden" />
		</div>
		</transition>


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

const emit = defineEmits(["toggleAccordion"])



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

const closeAccordion = ()=>{
	data.open = false
}
const leaveAnchor = (e)=>{
	if (closestEdge(e) !== 'bottom'){
		data.open = false
	
	}
}

const closestEdge =(event)=>{
	const elemBounding = event.target.getBoundingClientRect();
	const elementLeftEdge = elemBounding.left;	
	const elementRightEdge = elemBounding.right;
	const elementTopEdge = elemBounding.top;
	const elementBottomEdge = elemBounding.bottom;


	const x = event.clientX;
	const y = event.clientY;

	const leftEdge = Math.abs(elementLeftEdge - x);
	const rightEdge = Math.abs(elementRightEdge - x);
	const topEdge = Math.abs(elementTopEdge - y);
	const bottomEdge = Math.abs(elementBottomEdge - y);

	const min = Math.min(leftEdge,rightEdge,topEdge,bottomEdge);

	switch(min){
		case leftEdge:
			return "left";	
		case rightEdge:
			return "right";
		case topEdge:
			return "top";
		case bottomEdge:
			return "bottom";
	}

}

</script>