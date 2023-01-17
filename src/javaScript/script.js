const searchButtonMobile=document.getElementById('searchbtn--mob'); 



const searchBar=document.getElementById('searchbar');
    searchButtonMobile.addEventListener('click',()=>{
    searchBar.classList.toggle('active');

});


    


const bar= document.getElementById('bar')
//sidenav bar

navBar=document.querySelector(".side__navbar")

bar && bar.addEventListener("click",()=>{
    navBar.classList.add("sidenav--active")
})

document.querySelector('.close__btn').addEventListener("click", ()=>{
    navBar.classList.remove("sidenav--active")
})


