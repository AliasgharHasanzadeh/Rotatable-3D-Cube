const inputz = document.getElementById('rotatez');
const inputy = document.getElementById('rotatey');
const inputx = document.getElementById('rotatex');
const cube = document.querySelector('.box');
let x=45;
let y=45;
let z=45;
inputz.addEventListener('input',function(){
    z = inputz.value;
    cube.style.transform = 'rotatez('+z+"deg)" + " " + 'rotatey('+y+"deg)"+ 'rotatex('+x+"deg)"
})
inputy.addEventListener('input',function(){
    y = inputy.value
    cube.style.transform = 'rotatez('+z+"deg)" + " " + 'rotatey('+y+"deg)"+ 'rotatex('+x+"deg)"
})
inputx.addEventListener('input',function(){
    x = inputx.value;
    cube.style.transform = 'rotatez('+z+"deg)" + " " + 'rotatey('+y+"deg)"+ 'rotatex('+x+"deg)"
})