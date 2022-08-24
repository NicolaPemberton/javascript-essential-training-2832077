/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "skyblue";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "palegreen"

function headingColor() {
    let titleColor = "#A569BD ";
    document.querySelector(".title").style.color = titleColor;
    console.log('inside colour:', titleColor)
}

headingColor();
//console.log('outside colour:', titleColor)

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;






