const star = document.getElementsByClassName('svg-star')
for (var i = 0; i < star.length; i++) {
    star[i].addEventListener('mouseover', (e) => {
        const parentArr = e.target.parentElement.children
        for (var j = 0; j <= Array.from(parentArr).indexOf(e.target); j++) {
            parentArr[j].style.fill = "#FF0000"
        }
    })
    star[i].addEventListener('mouseout', (e) => {
        const parentArr = e.target.parentElement.children
        for (var j = 0; j <= Array.from(parentArr).indexOf(e.target); j++) {
            parentArr[j].style.fill = ""
        }
    })
}

