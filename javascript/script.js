const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// Tabs menu event listener
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0')
        })

        panels.forEach(panel => {
            panel.classList.add('hidden')
        })

        e.target.classList.add('border-softRed', 'border-b-4')
        const classString = e.target.getAttribute('data-target')
        document.getElementById('panels')
            .getElementsByClassName(classString)[0]
            .classList.remove('hidden')
    })
})

// Nav toggle elements
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

// Nav toggle on click
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    }
})