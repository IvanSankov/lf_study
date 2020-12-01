import Text from "./helpers/text";
import CustomImage from "./helpers/image";

import './style.css';

import img from './assets/nichoci.png';

const text = new Text('Hello world!');
text.print();

const wrapper = document.querySelector('.content-wrapper');
const instance = new CustomImage(img);
instance.render(wrapper);