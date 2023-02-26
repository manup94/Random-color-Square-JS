///////////CREAR EL CUADRADO////////////////////////

let cuadrado = document.createElement('div');
document.body.append(cuadrado);
let p = document.createElement('p');
cuadrado.append(p);
p.textContent = 'Soy un cuadrado';
cuadrado.classList.add('cuadrado-basico');

/////////////////cambiar color aleatoriamente//////////////
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
cuadrado.style.backgroundColor = randomColor;
//////////////variar tamaños segun color/////////

if (cuadrado.style.backgroundColor === 'red'|| cuadrado.style.backgroundColor === 'green'|| cuadrado.style.backgroundColor === 'blue' ) {
    cuadrado.style.width = '100px';
    cuadrado.style.height = '100px';
} else if(
    cuadrado.style.backgroundColor === 'yellow' || cuadrado.style.backgroundColor === 'pink' || cuadrado.style.backgroundColor === 'purple'
){
    cuadrado.style.width = '200px';
    cuadrado.style.height = '200px';
} else{
    cuadrado.style.width = '300px';
    cuadrado.style.height = '300px';
}