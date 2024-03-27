export const useScroll=()=>{
	const scrollPosition=ref(0)
	const lastScrollPosition=ref(0)
	const scrollDirectionUp=ref(false)

	const handleScroll = ()=>{
		//set current scroll position
		scrollPosition.value=window.pageYOffset
		//set scroll direction
		scrollDirectionUp.value=lastScrollPosition.value > scrollPosition.value
		//update lastScrollPosition
		lastScrollPosition.value=scrollPosition.value
	}
	onMounted(()=>{
		window.addEventListener("scroll", handleScroll, {passive:true})
	})
	onUnmounted(()=>{
		window.removeEventListener("scroll", handleScroll, {passive:true})
	})
	return {scrollPosition, scrollDirectionUp}
}