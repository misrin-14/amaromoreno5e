(function(){
    const open = document.querySelector('.nav_menu')
    const menu = document.querySelector('.nav_link')
    const close = document.querySelector('.nav_close')

    open.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show')
    })
    close.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show')
    })
}())