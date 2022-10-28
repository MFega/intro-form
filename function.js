const share = document.querySelector(".share");
const link = document.querySelector(".link");
const profile = document.querySelector(".profile")

share.addEventListener("mouseover",()=>{
link.style.display = "block"
})

share.addEventListener("mouseout",()=>{
    link.style.display = "none"
    })