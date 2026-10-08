# Blush Basket 
> BlushBasket is a clothing shopping website that allows users to browse and search for clothing items by category. Users can explore different styles, compare items, and save their favorite products for easy access later.

### [Click here to go back to dev if needed](https://github.com/poppydalton/project-blush-basket-shop/tree/dev)

### Authorship
Created by Poppy Dalton

[My Github Profile](https://github.com/poppydalton) 
[My Github Profile Link](https://github.com/poppydalton) 

### User Story
- As someone constantly looking for new clothing styles,
- I want to browse and search items by category,
- so that I can easily compare options and discover items I like without visiting numerous websites.

### Narrative
- BlushBasket lets users browse and search for clothing by category and save items to favorites.
- I chose this idea to make it easier for people to find and compare clothing styles in one place.
- I built the website pages, search functionality, login system, and navigation to create an easy-to-use shopping experience.
- I developed the project by building the pages and features, testing them, and fixing errors along the way. I used W3Schools, a provided project example, and AI assistance as resources during development.

### Attribution
- W3Schools: Used as a reference for HTML, CSS, and JavaScript concepts and syntax.
- [Barry Cumbie Profile](github.com/barrycumbie): Used as an example/reference for understanding project structure and implementation.
- AI Assistance: Used to help identify, troubleshoot, and correct errors in the code. AI was used as a support tool for debugging and understanding errors, while the project implementation and decisions were made by the author.

### Project Structure
```
.
├── assets
│   ├── data
│   └── docs
├── pages
├── scripts
├── styles
├── README.md
└── index.html
``` 

### Code Block:
* This code controls the favorites feature.
* It checks if an item is already saved or not.
* The updated list is stored in sessionStorage so it stays saved while the user is on the site.
* This is what allows the “Add to Favorites ❤️” button to toggle between adding and removing items.
* This code controls the favorites page.
* It shows all the items you have saved as favorites.
* If there are no favorites, it displays a message saying “No favorites yet.”
* This is what keeps your favorites list interactive and always up-to-date while browsing.

```
let favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.remove-fav');
    if (!btn) return;

function isFav() {
    return favorites.some(item => item.title === product.title);
}
    let favorites = getFavorites();
    const title = btn.dataset.title;

favBtn.addEventListener('click', function () {
    favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

    if (isFav()) {
        favorites = favorites.filter(item => item.title !== product.title);
    } else {
        favorites.push(product);
    }

    sessionStorage.setItem('favorites', JSON.stringify(favorites));
    favorites = favorites.filter(f => f.title !== title);
    saveFavorites(favorites);
    render();
});
```

### Validation
[Click Here for Nu Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpoppydalton.github.io%2Fproject-blush-basket-shop%2F)

[Click Here for WAVE Accessibility Report](https://wave.webaim.org/report#/https://poppydalton.github.io/project-blush-basket-shop/)

### Future Improvements:
[Github Milestone 👉 Sprint 99](https://github.com/poppydalton/project-blush-basket-shop/milestones)
* Includes known issues/bugs and future improvements.
