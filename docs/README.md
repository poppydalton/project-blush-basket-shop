# BlushBasket
> A web application for browsing clothing styles across multiple platforms in one place. 


### authorship + version
`@poppydalton` \| `2026-09-15` \| `GOLF`


### deployments, codebase, & repo features

resource                     link
---------------------------- ------------------------------------------------------------
PROD codebase                [`main`](https://github.com/poppydalton/project-blush-basket-shop/tree/main)
PROD server                  [GCP](https://poppy.barrycumbie.com)
DEV codebase                 [`dev`](https://github.com/poppydalton/project-blush-basket-shop/tree/dev)
DEV server                   [Render](https://project-blush-basket-shop.onrender.com)
docs                         [`docs/`](https://github.com/poppydalton/project-blush-basket-shop/tree/main/docs)
published docs               [GitHub Pages](https://poppydalton.github.io/project-blush-basket-shop/)
CI/CD workflow               [`deploy-main-to-gcp.yml`](https://github.com/poppydalton/project-blush-basket-shop/blob/main/.github/workflows/deploy-main-to-gcp.yml)
successful PROD deployment   [GitHub Action](https://github.com/poppydalton/project-blush-basket-shop/actions/runs/34873433395)
resolved GOLF issue          [issue #REPLACE](https://github.com/poppydalton/project-blush-basket-shop/issues/REPLACE)

### user story
- As someone constantly looking for new clothing styles, 
- I want to browse and search items by category, 
- so that I can easily compare options and discover items I like without visiting numerous websites.  

### narrative 
BlushBasket is a clothing website where users can browse and search men's and women's clothing. I used GitHub to manage the project, with the `dev` branch deploying to Render and the `main` branch deploying to GCP through GitHub Actions.

### architecture
``` text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack
`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`


### project structure
```
.
├── .github/
│   └── workflows/
│       └── deploy-main-to-gcp.yml
├── docs/
│   └── README.md
├── public/
│   ├── index.html
│   └── assets/
│       ├── data/
│       ├── docs/
│       ├── pages/
│       ├── scripts/
│       └── styles/
├── server/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
└── .gitignore
``` 

### GCP
external IP: `34.118.173.217`\
Linux user: `poppydalton545`\
instructor SSH public key installed: `yes`




