const nav = document.querySelector(".nav-bar");
const navigation = document.querySelector(".nav-links")

nav.addEventListener("click", ()=> {
    navigation.classList.toggle("nav-links")
})