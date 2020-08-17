import './style.css'
import Icon from './Icon.png'
import Data from './data.xml'
import csvData from './csvData.csv'
function component () {
    var element = document.createElement('div')
    element.innerHTML = "Hello, Webpack!";
    element.classList.add('hello')

    var img = new Image()
    img.src = Icon

    element.appendChild(img)

    console.log(Data)
    console.log(csvData)

    return element;
}
document.body.appendChild(component())