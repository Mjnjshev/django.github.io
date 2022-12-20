let logo = document.querySelector('.logo-title')
let btn = document.getElementById('main-arrow');
let arrow = document.querySelectorAll('.arrow');
let submenu = document.querySelectorAll('.nav-block')
let main_block = document.querySelector('.main-block')
let header = document.querySelector('.header')
let bln = true
function Menu() {
    logo.classList.toggle('logo')
    main_block.classList.toggle('main-block__active')
    header.classList.toggle('main-block__active')
    if (bln != false) {
        bln = false
        btn.style.transform = 'rotate(0deg)'
        submenu[0].classList.add('active')
        submenu[1].classList.add('active')
        submenu[2].classList.add('active')
        submenu[3].classList.add('active')
        submenu[4].classList.add('active')
        logo.innerHTML = ''
    } else {
        bln = true
        btn.style.transform = 'rotate(180deg)'
        submenu[0].classList.remove('active')
        submenu[1].classList.remove('active')
        submenu[2].classList.remove('active')
        submenu[3].classList.remove('active')
        submenu[4].classList.remove('active')
        logo.innerHTML = 'django'
    }
}
function tog(item1, item2) {
    let el1 = document.getElementById(item1)
    let el2 = document.getElementById(item2)
    el1.classList.toggle('active')
    el2.classList.toggle('rotate')
}

$(document).ready(function () {
    $(window).resize(function () {
        var windowWidth = $('body').innerWidth();
        if (windowWidth < 375) { 
            $(".del-media").removeClass('media'), 
            $(".add-media").addClass('media') 
        }
        else { 
            $(".del-media").addClass('media'),
            $(".add-media").removeClass('media')
        }
    });
});