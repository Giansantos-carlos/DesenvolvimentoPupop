const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const closeButton = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none'
// })

popup.addEventListener('click', element => {
    const classNameOfClickedElement = element.target.classList[0]
    const classNames = ['popup-link', 'popup-close', 'popup-wrapper']
    const showClosePopup = classNames.some(className => 
        className === classNameOfClickedElement)


    
    if(showClosePopup){
        popup.style.display = 'none'
    }
    // popup.style.display = 'none'
})

























































































