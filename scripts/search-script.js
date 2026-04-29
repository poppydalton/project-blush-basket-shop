document.addEventListener('DOMContentLoaded', function () {
    let blushBasketData = [];
    let currentCategory = '';

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const searchResults = document.getElementById('searchResults');
    const searchMessage = document.getElementById('searchMessage');
    const categoryButtons = document.querySelectorAll('.blush-category-button');

    loadProductData();
    attachEvents();

    function attachEvents() {
        if (searchButton) searchButton.addEventListener('click', handleSearch);
        if (searchInput) searchInput.addEventListener('input', handleSearch);

        if (resetButton) {
            resetButton.addEventListener('click', function () {
                searchInput.value = '';
                renderSearchResults(getCurrentCategoryItems());
            });
        }

        if (categoryButtons.length > 0) {
            categoryButtons.forEach(button => {
                button.addEventListener('click', function () {
                    currentCategory = button.dataset.category;
                    sessionStorage.setItem('currentCategory', currentCategory);
                    renderSearchResults(getCurrentCategoryItems());
                    searchMessage.textContent = `Showing ${currentCategory} items.`;
                });
            });
        }
    }

    function loadProductData() {
        fetch('../assets/data/clothing-data.json')
            .then(res => res.json())
            .then(data => {
                blushBasketData = data.products;

                const pageCategory = document.body.dataset.categoryPage;

                if (pageCategory) {
                    currentCategory = pageCategory;
                    renderSearchResults(getCurrentCategoryItems());
                }
            });
    }

    function getCurrentCategoryItems() {
        return blushBasketData.filter(item => item.category === currentCategory);
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();

        const items = getCurrentCategoryItems().filter(item =>
            item.title.toLowerCase().includes(query)
        );

        renderSearchResults(items);
    }

    function renderSearchResults(items) {
        searchResults.innerHTML = '';

        items.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-lg-6 col-md-6 col-sm-12';

            col.innerHTML = `
                <div class="card blush-product-card shadow-sm h-100">
                    <div class="blush-product-image-wrap">
                        <img src="${product.image}" class="blush-product-image">
                    </div>

                    <div class="card-body">
                        <div class="blush-card-tag">${product.category}</div>
                        <h3 class="blush-card-title">${product.title}</h3>
                        <p class="blush-card-text">${product.description}</p>

                        <a href="${product.url}" target="_blank" class="btn blush-primary-action w-100">
                            View Item
                        </a>

                        <button class="btn blush-secondary-action w-100 mt-2 fav-btn"></button>
                    </div>
                </div>
            `;

            const favBtn = col.querySelector('.fav-btn');

            let favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

            function isFav() {
                return favorites.some(item => item.title === product.title);
            }

            function updateButton() {
                favBtn.textContent = isFav()
                    ? 'Unadd from Favorites 💔'
                    : 'Add to Favorites ❤️';
            }

            updateButton();

            favBtn.addEventListener('click', function () {
                favorites = JSON.parse(sessionStorage.getItem('favorites')) || [];

                if (isFav()) {
                    favorites = favorites.filter(item => item.title !== product.title);
                } else {
                    favorites.push(product);
                }

                sessionStorage.setItem('favorites', JSON.stringify(favorites));
                updateButton();
            });

            searchResults.appendChild(col);
        });
    }
});