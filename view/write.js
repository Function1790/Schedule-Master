const starList = document.getElementsByClassName('star')
const starInput = document.getElementById('starInput')

function setStar(count) {
    for (var i = 0; i < starList.length; i++) {
        starList[i].innerText = i < count ? '★' : '☆'
    }
    starInput.value = count
}

for (var i = 0; i < starList.length; i++) {
    starList[i].index = i + 1
    starList[i].addEventListener('click', (event) => {
        setStar(event.target.index)
    })
}