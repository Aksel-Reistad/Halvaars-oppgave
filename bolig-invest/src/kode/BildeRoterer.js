import '../App.css';
import "../bilder/1.jpg";
import "../bilder/2.jpg";
import "../bilder/3.jpg";


const images = [
    'bilder/1.jpg',
    'bilder/2.jpg',
    'bilder/3.jpg'
  ];
  
  let currentIndex = 0;
  
function Roterer()
{
        document.body.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
}

setInterval(Roterer, 5000);




export default Roterer;