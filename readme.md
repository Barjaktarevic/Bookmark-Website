# Shortly Website

Made following a tutorial by Brad Traversy. Site deployed on Netlify: [Shortly Website](https://zesty-eclair-1f384e.netlify.app/ 'Click to visit site')

## What things have I learned working on this project?
+ How to create an animated hamburger menu.
+ How to use JS and Regex to validate whether something is a url, e.g.
```javascript
function isValidURL(string) 
        {
            var res = 
            string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        return (res !== null);
        };

function formSubmit(e) {
    e.preventDefault()
    if(input.value === '') {
        error.textContent = 'Please include a link'
        input.classList.add('border-red')
    } else if(!isValidURL(input.value)) {
        error.textContent = 'Please enter a valid URL'
        input.classList.add('border-red')
    } else {
        error.textContent = ''
        input.classList.remove('border-red')
    }
}
```
+ How to stack elements on top of one another without using z-index.
+ How to elegantly and with few lines of code display error messages under form inputs.
+ Was given a reminder on how to toggle classes without using jQuery, e.g.
```javascript
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
```

## How would I rate this project?
| Satisfying | Edifying | Total Score |
|------------|----------|-------------|
| 2.5/5      | 4/5      | 3.5/5       |
