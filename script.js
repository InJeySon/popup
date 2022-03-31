
//alert('Hello')
//alert(14 -3 *2)

var $popup = document.querySelector('#popup')

document.querySelector('#button_popup').addEventListener('click', showPopup)


function showPopup () {
    $popup.classList.remove('hide')
} 