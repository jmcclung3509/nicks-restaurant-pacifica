
export const useAnimateObserver =()=>{
	const animatedEls=document.querySelectorAll(".animate")

	const options={
		threshold: .4,
	}
	let observer=new IntersectionObserver((entries)=>{
		entries.forEach((entry)=>{
			if(entry.isIntersecting){
				entry.target.classList.add("animated")
				observer.unobserve(entry.target)
			}
		})
	}, options)
	animatedEls.forEach((el)=>observer.observe(el))
}
