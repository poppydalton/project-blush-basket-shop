document.addEventListener('DOMContentLoaded', function () {

    let products = [];
    let activeCategory = null;

    const results = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const message = document.getElementById('searchMessage');

    const pageCategory = document.body.dataset.categoryPage;

    fetch('../assets/data/clothing-data.json')
        .then(res => res.json())
        .then(data => {
            products = data.products;

            if (pageCategory) {
                activeCategory = pageCategory;
                render(products.filter(p => p.category === pageCategory));
            } else {
                render(products);
            }
        });

    function getFavorites() {
        return JSON.parse(sessionStorage.getItem('favorites')) || [];
    }

    function saveFavorites(favs) {
        sessionStorage.setItem('favorites', JSON.stringify(favs));
    }

    document.querySelectorAll('.blush-category-button').forEach(btn => {
        btn.addEventListener('click', function () {

            activeCategory = this.dataset.category;

            const filtered = products.filter(p => p.category === activeCategory);

            if (message) message.textContent = activeCategory;

            render(filtered);
        });
    });

    searchButton?.addEventListener('click', function () {

        const value = searchInput.value.toLowerCase();

        let base = activeCategory
            ? products.filter(p => p.category === activeCategory)
            : products;

        const filtered = base.filter(p =>
            p.title.toLowerCase().includes(value)
        );

        render(filtered);
    });

    resetButton?.addEventListener('click', function () {
        searchInput.value = '';

        if (pageCategory) {
            activeCategory = pageCategory;
            render(products.filter(p => p.category === pageCategory));
        } else {
            activeCategory = null;
            render(products);
        }
    });

    function render(list) {

        results.innerHTML = '';

        const favorites = getFavorites();

        list.forEach(item => {

            const fav = favorites.some(f => f.title === item.title);

            results.innerHTML += `
                <div class="col-md-4">
                    <div class="card blush-product-card shadow-sm">

                        <img src="${item.image}" class="blush-product-image">

                        <div class="card-body">
                            <h5 class="blush-card-title">${item.title}</h5>
                            <p class="blush-card-text">${item.description}</p>

                            <button class="btn fav-btn ${fav ? 'btn-danger' : 'blush-primary-action'}"
                                data-title="${item.title}">
                                ${fav ? 'Remove from Favorites ❌' : 'Add to Favorites ❤️'}
                            </button>

                        </div>
                    </div>
                </div>
            `;
        });
    }

    document.addEventListener('click', function (e) {

        const btn = e.target.closest('.fav-btn');
        if (!btn) return;

        const title = btn.dataset.title;

        let favorites = getFavorites();

        const index = favorites.findIndex(f => f.title === title);

        if (index !== -1) {
            favorites.splice(index, 1);
        } else {
            const item = products.find(p => p.title === title);
            if (item) favorites.push(item);
        }

        saveFavorites(favorites);

        const current = activeCategory
            ? products.filter(p => p.category === activeCategory)
            : products;

        render(current);
    });

});