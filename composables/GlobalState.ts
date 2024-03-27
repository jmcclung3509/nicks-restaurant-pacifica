export const globalState = reactive({
	overlay: {
		showing: false,
		clickToClose: true
	}
})
export const useOverlay = ()=>{
	const on = ()=>{
		globalState.overlay.showing = true

	}
	const off = ()=>{
		globalState.overlay.showing = false
	}
	return {on, off}
}
