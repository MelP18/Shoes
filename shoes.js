/*==============================++> MENU ACTIVE <++==================================*/
const menu = document.querySelectorAll('.header__menu__item a')
if (menu) {
    /*  console.log(menu) */
    menu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const menuActive = document.querySelector('.header__menu__item a.active')
            menuActive.classList.remove('active')
            item.classList.add('active')
        })
    })
}
/*==============================++> OPEN MODAL SEARCH <++==================================*/
const search = document.getElementById('search')
const searchRespons = document.getElementById('search1')
const searchModal = document.querySelector('.search__modal')
if(search){
    console.log(search);
    search.addEventListener('focusin',(e)=>{
        e.preventDefault()
        if(!searchModal.classList.contains('active'))
        searchModal.classList.add('active')
    })
    if(searchRespons){
        console.log(searchRespons);
        searchRespons.addEventListener('focusin',(e)=>{
            e.preventDefault()
        if(!searchModal.classList.contains('active'))
        searchModal.classList.add('active')
        })
    }
}/*===============++> CLOSE MODAL SEARCH <++==================*/
const closeModal = document.querySelector('.search__modal a')
if(closeModal){
    console.log(closeModal);
    closeModal.addEventListener('click', ()=>{
        searchModal.classList.remove('active')
    })
}
/*==============================++> MENU HAMBURGER <++==================================*/
const menuHamburger = document.querySelector('.menu__hamburger')
const closeMenuHamburger = document.querySelector('.header__menu__list')
if (menuHamburger) {
    console.log(menuHamburger)
    menuHamburger.addEventListener('click', e => {
        e.preventDefault()
        if (menuHamburger.classList.contains('active')) {
            menuHamburger.classList.remove('active')
        } else {
            menuHamburger.classList.add('active')
        }

        if (closeMenuHamburger.classList.contains('active')) {
            closeMenuHamburger.classList.remove('active')
        } else {
            closeMenuHamburger.classList.add('active')
        }
    })
}

/*==============================++> CHANGE ARTICLES <++==================================*/
const see = document.querySelectorAll("a[class='bracelet']")
if (see) {
    /* console.log(see) */
    see.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            let parent = item.closest('.bottom__left__item')
            let parentImage = parent.querySelector("img")
            let parentImagesrc = parentImage.src
            /* console.log(parentImagesrc) */
            let bannerImg = document.getElementById('banImg')
            let bannerImgsrc = bannerImg.src
            console.log(bannerImgsrc)
            parentImage.src = bannerImgsrc
            bannerImg.src = parentImagesrc

        })
    })
}