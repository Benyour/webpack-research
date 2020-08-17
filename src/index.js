import './style.css'
import Icon from './Icon.png'
import Data from './data.xml'
import csvData from './csvData.csv'
import pringMe from './print.js'
function component () {
    var element = document.createElement('div')
    var btn = document.createElement('button')
    btn.innerHTML = 'Cliek me to check the console!'
    btn.onclick = pringMe
    element.innerHTML = "Hello, Webpack!";
    element.classList.add('hello')

    var img = new Image()
    img.src = Icon

    element.appendChild(btn)
    element.appendChild(img)

    console.log(Data)
    console.log(csvData)

    return element;
}
document.body.appendChild(component())