const star = document.getElementsByClassName("svg-star");
for (let i = 0; i < star.length; i++) {
	star[i].addEventListener("mouseover", (e) => {
		let parentArr = e.target.parentElement.children;
		for (let j = 0; j <= Array.from(parentArr).indexOf(e.target); j++) {
			parentArr[j].style.fill = "#FF0000";
		}
	});
	star[i].addEventListener("mouseout", (e) => {
		let parentArr = e.target.parentElement.children;
		for (let j = 0; j <= Array.from(parentArr).indexOf(e.target); j++) {
			parentArr[j].style.fill = "";
		}
	});
}
