# BlushBasket
> A web application for browsing clothing styles across multiple platforms in one place. 


### authorship + version
`@poppydalton` \| `2026-10-13` \| `HOTEL`


### deployments & codebase

| **resource** | **link** |
|---|---|
| main | [PROD](https://github.com/poppydalton/project-blush-basket-shop/tree/main) |
| PROD | [GCP](http://34.118.173.217:3000/hotel.html) |
| dev | [DEV](https://github.com/poppydalton/project-blush-basket-shop/tree/dev) |
| DEV | [DEV server](https://project-blush-basket-shop.onrender.com/) |
| docs | [docs](https://github.com/poppydalton/project-blush-basket-shop/tree/dev/docs) |
| CI/CD workflow | [workflow](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/.github/workflows/deploy-main-to-gcp.yml) |
| successful PROD deployment | [GitHub Action] | 


### HOTEL grading dashboard

| **requirement** | **evidence** |
|---|---|
| MongoDB connection | [server code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js) |
| GET all | [endpoint code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js#L71-97) |
| GET one | [endpoint code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js#L101-117) |
| filtered GET | [endpoint code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js#L73-97) |
| POST / create | [endpoint code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js#L120-124) |
| PATCH / update | [endpoint code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js#L157-164) |
| DELETE | [endpoint code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/server/mongo.js#L167-172) |
| frontend `fetch()` | [client code](https://github.com/poppydalton/project-blush-basket-shop/blob/dev/public/hotel.html) |
| persistent CRUD | [PROD app](http://34.118.173.217:3000/hotel.html) |
| HOTEL milestone | [milestone] |
| example issue | [issue #] |
| development branch | [branch](https://github.com/poppydalton/project-blush-basket-shop/tree/dev) |
| feature → dev | [PR #] |
| dev → main | [PR #] |
| PROD deployment | [GitHub Action](https://poppy.barrycumbie.com/) |

### user story
- **As a** user,
- **I want** to see all stored items,
- **so that** I can view the application's persistent data.
  
### narrative 
BlushBasket is a clothing website where users can browse and search men's and women's clothing. I used GitHub to manage the project, with the `dev` branch deploying to Render and the `main` branch deploying to GCP through GitHub Actions.

### architecture
``` 
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► DEV
  │
  └── main ──► GitHub Actions ──► GCP ──► PROD

CLIENT ──► fetch() ──► Express REST API ──► MongoDB Atlas
```

### stack
`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`


### project structure
```
.
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
│   ├── assets/
│   │   ├── data/
│   │   ├── docs/
│   │   ├── pages/
│   │   ├── scripts/
│   │   └── styles/
│   ├── hotel.html
│   └── index.html
├── server/
│   ├── app.js
│   ├── mongo.js
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
``` 

### GCP
external IP: `34.118.173.217`\
Linux user: `poppydalton545`\
instructor SSH public key installed: `yes`
