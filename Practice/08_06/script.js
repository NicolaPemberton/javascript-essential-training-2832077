/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


function chanegBackground() {
    //document.queryselector(".feature1").style.backgroundColor = "pink"
    document.querySelector("main li").style.backgroundColor = "pink"
}

const changeFontSize = function () {
    document.querySelector(".page-header__heading").style.backgroundColor = "green"
}

const changeTextSpacing = () => {
    document.querySelector(".site-title").style.backgroundColor = "skyblue"
}

chanegBackground()
changeFontSize()
changeTextSpacing()