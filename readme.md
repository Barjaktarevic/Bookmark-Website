# Bookmark Website

Made following a tutorial by Brad Traversy. Site deployed on Netlify: [Bookmark Website](https://aesthetic-gingersnap-f17104.netlify.app/ 'Click to visit site')

## What things have I learned working on this project?
+ How to create an animated hamburger menu and toggle it using the open class (also, how to make it into an overlay over the entire page - basically just using 'fixed' and 'inset-0').
+ How to create an accordion using only Tailwind classes and 0 JavaScript, e.g.
```html
<div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
```
+ What 'tracking-wide' and 'tracking-widest' classes do.
+ A different approach to toggling tabs using JS, e.g.
```javascript
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
```
+ How to combine custom classes with Tailwind directives, e.g.
```css
.bg-hero {
        width: 2000px;
        height: 300px;
        left: 30%;
        @apply absolute rounded-l-full top-52 bg-softBlue;
    }
```

## How would I rate this project?
| Satisfying | Edifying | Total Score |
|------------|----------|-------------|
| 3/5        | 3.5/5      | 3.5/5       |
