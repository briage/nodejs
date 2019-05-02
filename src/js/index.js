import {sum} from './computed';
const box = document.querySelector('.box');

box.innerHtml = sum([1,2,3,4])