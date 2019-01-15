const button = document.querySelector('button');
const div = document.querySelector('div');
import{addElement, addition} from './factory.js';
import '../styles/main.scss';
import '../images/canyon.jpg';
import '../images/colorado.jpg';
import '../images/spring.jpg';

button.addEventListener('click', ev => {
  addElement(div, 'DIV', 'A new task was added')
})
