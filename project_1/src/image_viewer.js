import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';



const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);



const bigImg = document.createElement('img');
bigImg.src = big;

document.body.appendChild(bigImg);
