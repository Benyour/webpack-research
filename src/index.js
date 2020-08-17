import './style.css'
import Icon from './Icon.png'
function component () {
    var element = document.createElement('div')
    element.innerHTML = "Hello, Webpack!";
    element.classList.add('hello')

    var img = new Image()
    img.src = Icon

    element.appendChild(img)
    return element;
}
document.body.appendChild(component())