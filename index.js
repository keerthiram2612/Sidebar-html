const homeConE1 = document.querySelector(".home-con");
const containerE1 = document.querySelector(".container");
const  listE1 = document.querySelector(".list1");
const sidebarE1 = document.querySelector(".fa-bars");
const sideE1 = document.querySelector(".side");

sidebarE1.addEventListener("click",()=>{
    sideE1.classList.toggle("show-sidebar");
})
listE1.addEventListener("click",()=>{
    homeConE1.classList.toggle("show");
})


