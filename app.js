let find_icon = document.getElementById("find-icon")
let menu_icon = document.getElementById("menu-icon")
let top_var = document.getElementById("header__top-bar")
let header_nav = document.getElementById("header__nav")
let header_search_bar=document.getElementById("header__search-bar")
let close_button =document.getElementById("header__close")
let menu_button = document.getElementById("menu-icon")
let sub_menu = document.getElementById("sub-menu")
let showing_search_bar=false
let showing_submenu=false

find_icon.addEventListener("click", showBar )
close_button.addEventListener("click", showBar )

menu_button.addEventListener("click", showMenu)
window.addEventListener("resize", closeAll)


function showMenu(){
   
    sub_menu.classList.toggle("sub-menu__active")
    if(showing_submenu==false){
        showing_submenu=true
    }else{
        showing_submenu=false
    }
    
}
  

function showBar(){
   
    header_search_bar.classList.toggle("searchbar_active")
    if(showing_search_bar==false){
        showing_search_bar=true
    }else{
        showing_search_bar=false
    }

    
}

function closeAll(){
    if(window.innerWidth>=1024 && showing_submenu== true ){
        showing_submenu=false
        sub_menu.classList.toggle("sub-menu__active")

    }
    if(window.innerWidth>=1024 && showing_search_bar==true){
        showing_search_bar=false
        header_search_bar.classList.toggle("searchbar_active")
    }
}