const touches = [...document.querySelectorAll('.boutton')];
const listeKeycode = touches.map (touche => touche.dataset.key)

document.addEventListener('keydown', (e) =>{
    const valeur = (e.keycode)
console.log(valeur)
})