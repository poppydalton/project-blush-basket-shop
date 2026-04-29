# BlushBasket
A web application for browsing and searching clothing styles across multiple brands in one place. 

# Authorship & Attribution
Created by Poppy Dalton

[My Github Profile](https://github.com/poppydalton) 

# User Story
As someone constantly looking for new clothing styles, 
I want to browse and search items by category, 
so that I can easily compare options and discover items I like without visiting numerous websites.  

# Project Narrative 
#### What the app does:
* BlushBasket is a website where users can browse clothes for men and women, search for items, and save their favorite pieces in one place.
#### Why I chose this:
* I chose this idea to make shopping easier by putting different clothing options from multiple brands and stores into one simple website instead of having to look at so many different sites.
#### What was built or improved:
* I added a Favorites feature that allows users to save and remove clothing items. I also created a Favorites page where saved items are displayed with images, descriptions, and links. Navigation was improved by adding Favorites links in multiple areas of the site, and the favorite button now updates between “Add to Favorites” and “Unadd from Favorites.”
#### Brief development story:
* The project started as a basic clothing browsing site. Over time, I added more features like separate pages for men’s and women’s clothing, a search bar, and a Favorites page. I also improved how the site looks and works so it is easier to use on different screen sizes.

# Attributions
#### Bootstrap Components:
* https://getbootstrap.com/docs/5.2/components/card/#content-types
* https://getbootstrap.com/docs/5.2/utilities/shadows/ 
* https://getbootstrap.com/docs/5.2/components/toasts/ 
* https://getbootstrap.com/docs/5.2/components/buttons/ 
* https://getbootstrap.com/docs/5.2/layout/grid/
#### Icons/Images:
* https://icons.getbootstrap.com/icons/list/
* https://icons.getbootstrap.com/icons/github/
* https://icons.getbootstrap.com/icons/flower3/
* Product images were taken from variosu retail websites and product pages.
#### Font:
* https://fonts.google.com/specimen/Montserrat+Alternates
#### AI usage: 
* ChatGPT was used when I ran into errors or bugs in my JavaScript. It helped me understand problems and fix parts of my code while building features like favorites and improving button behavior.
#### Code Sources:
* BearBot example project by Cumbie was used as inspiration for session storage and overall app structure: https://github.com/barrycumbie/bearbot

# Project Structure
```
.
├── index.html
├── search.html
├── assets
│   ├── docs
│   └── data
├── pages
│   ├── women.html
│   ├── men.html
│   ├── login.html
│   ├── session.html
│   └── favorites.html
├── scripts
│   ├── search-script.js
│   ├── login-script.js
│   ├── session-script.js
│   ├── auth.js
│   ├── storage.js
│   └── login-logout.js
├── styles
│   └── blushbasket-styles.css
└── README.md
``` 

# Code Block:
* This code controls the favorites feature.
* It checks if an item is already saved or not.
* The updated list is stored in sessionStorage so it stays saved while the user is on the site.
* This is what allows the “Add to Favorites ❤️” button to toggle between adding and removing items.

```
let favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

function isFav() {
    return favorites.some(item => item.title === product.title);
}

favBtn.addEventListener('click', function () {
    favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

    if (isFav()) {
        favorites = favorites.filter(item => item.title !== product.title);
    } else {
        favorites.push(product);
    }

    sessionStorage.setItem('favorites', JSON.stringify(favorites));
});
```

# Validation
TO DO

# Future Improvements:
TO DO





