const menuimg = document.querySelector('.imgmobile')
const menu = document.querySelector('.menu')
const list = document.querySelector('.menu-list')
let i = 1
menuimg.addEventListener('click', function () {
    i++
    if (i % 2 == 0) {
        menuimg.setAttribute('src', './images/icon-close.svg')
        menu.classList.remove('nonee')
        menu.classList.add('flex')

    } else {
        menuimg.setAttribute('src', './images/icon-hamburger.svg')
        menu.classList.add('nonee')
        menu.classList.remove('flex')

    }
})
