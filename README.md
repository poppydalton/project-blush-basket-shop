# BlushBasket
> A web application for browsing clothing styles across multiple platforms in one place. 


### authorship + version
`@poppydalton` \| `2026-09-15` \| `GOLF`


### deployments, codebase, & repo features
resource                     link
  ---------------------------- ----------------------
  PROD codebase                [`main`](URL)
  PROD server                  [GCP](URL)
  DEV codebase                 [`dev`](URL)
  DEV server                   [Render](URL)
  docs                         [`docs/`](URL)
  published docs               [GitHub Pages](URL)
  CI/CD workflow               [`deploy.yml`](URL)
  successful PROD deployment   [GitHub Action](URL)
  resolved GOLF issue          [issue \#](URL)


### user story
- As someone constantly looking for new clothing styles, 
- I want to browse and search items by category, 
- so that I can easily compare options and discover items I like without visiting numerous websites.  

### narrative 
In 2--4 sentences, briefly describe your GOLF infrastructure and whatyou built/deployed.

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
├── index.html
├── assets
│   ├── docs
│   └── data
├── pages
│   ├── women.html
│   ├── men.html
│   ├── login.html
│   ├── session.html
│   ├── favorites.html
│   └── search.html 
├── scripts
│   ├── search-script.js
│   ├── login-script.js
│   ├── session-script.js
│   ├── storage.js
│   └── login-logout.js
├── styles
│   └── blushbasket-styles.css
└── README.md
``` 

### GCP
external IP: `00.00.00.00`\
Linux user: `username`\
instructor SSH public key installed: `yes`




