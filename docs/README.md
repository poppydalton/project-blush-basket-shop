# BlushBasket
> A web application for browsing clothing styles across multiple platforms in one place. 


### authorship + version
`@poppydalton` \| `2026-09-29` \| `HOTEL`


### deployments, codebase, & repo features

| requirement | evidence |
|---|---|
| MongoDB connection | [server code](URL) |
| GET all | [endpoint code](URL) |
| GET one | [endpoint code](URL) |
| filtered GET | [endpoint code](URL) |
| POST / create | [endpoint code](URL) |
| PATCH / update | [endpoint code](URL) |
| DELETE | [endpoint code](URL) |
| frontend `fetch()` | [client code](URL) |
| persistent CRUD | [PROD app](URL) |
| HOTEL milestone | [milestone](URL) |
| example issue | [issue #](URL) |
| development branch | [branch](URL) |
| feature → dev | [PR #](URL) |
| dev → main | [PR #](URL) |
| PROD deployment | [GitHub Action](URL) |

### user story
- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

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



