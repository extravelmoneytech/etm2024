
document.querySelector('.currencyContainer').addEventListener('click', () => {
    document.querySelector('.dropDownContainer').classList.toggle('showDropDown');
    document.querySelector('#currencyDropDownIcon').classList.toggle('rotateIcon')

});
let hamBurger=document.querySelector('.hamBurger');
    console.log(hamBurger)
    hamBurger.addEventListener('click',()=>{
        document.querySelector('.header-content').classList.toggle('showNav')
    })
document.querySelector('.toggleFX').addEventListener('click',()=>{
    toggle('FX')
})
document.querySelector('.toggleTT').addEventListener('click',()=>{
    toggle('TT')
})
let toggleOverlay=document.querySelector('.widgetToggle-overlay')
function toggle(val){
    if(val==='FX'){
        toggleOverlay.classList.add('toggleRight');
        document.querySelector('.toggleTT').classList.remove('toggleSelected');
        document.querySelector('.toggleFX').classList.add('toggleSelected');
    }
    if(val==='TT'){
        toggleOverlay.classList.remove('toggleRight');
        document.querySelector('.toggleFX').classList.remove('toggleSelected');
        document.querySelector('.toggleTT').classList.add('toggleSelected');
    }
}