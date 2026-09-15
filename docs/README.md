# Authorship & Attribution
Created by Poppy Dalton

[My Github Profile](https://github.com/poppydalton) 
[My Github Profile Link](https://github.com/poppydalton) 

# User Story
As someone constantly looking for new clothing styles, 
```
.
├── index.html
├── search.html
├── assets
│   ├── docs
│   └── data
│   ├── men.html
│   ├── login.html
│   ├── session.html
│   └── favorites.html
│   ├── favorites.html
│   └── search.html 
├── scripts
│   ├── search-script.js
│   ├── login-script.js
│   ├── session-script.js
│   ├── auth.js
│   ├── storage.js
│   └── login-logout.js
├── styles
``` 

# Code Block:
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

# Validation
[Click Here for Nu Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fpoppydalton.github.io%2Fproject-blush-basket-shop%2F)

[Click Here for WAVE Accessibility Report](https://wave.webaim.org/report#/https://poppydalton.github.io/project-blush-basket-shop/)

# Future Improvements:
[Github Milestone 👉 Sprint 99](https://github.com/poppydalton/project-blush-basket-shop/milestones)
* Includes known issues/bugs and future improvements.
