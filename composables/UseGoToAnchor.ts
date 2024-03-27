
export const useGoToAnchor = ()=>{
	document.querySelectorAll("a[data-go-go]").forEach((anchor)=>{
		anchor.addEventListener("click", function(e){
			e.preventDefault()
			document.getElementById(this.getAttribute("data-go-go"))?.scrollIntoView({
				behavior: "smooth",
				block: "center",

			})
		})
	})
}