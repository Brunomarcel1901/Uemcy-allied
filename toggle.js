const menuBtn = document.querySelector(".menu")
const sideNav = document.querySelector("nav ul")
const sideLink = document.querySelector("nav ul li a")

sideNav.style.left = '-650px'

menuBtn.onclick = ()=>{
    if(sideNav.style.left === '-650px'){
        sideNav.style.left = '0'
    } else{
        sideNav.style.left = '-650px'
    }
}
sideLink.onclick = ()=>{
    if(sideNav.style.left = '0'){
        sideNav.style.left = '-650px'
    }
}

