const linkBtnBackTop = document.querySelector('[data-scroll="smooth"] a[href^="#"]')

function backSmooth(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const top = document.querySelector(href)

    top.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })

}

linkBtnBackTop.addEventListener('click', backSmooth)