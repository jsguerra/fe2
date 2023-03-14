#Micro Front End App 2
This project is setup using **Next.js 13.2** and bootstrapped with **create-next-app@latest**.

> This project does not use the experimental **App directory** or Next.js version 12's **Src directory**. Setup with plain JavaScript.

### Dependencies
- [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
├── components/
│   └── FetchPosts.jsx
├── pages/
│   ├── api/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   └── posts.jsx
├── public/
├── styles/
│   ├── global.css
│   └── Home.module.css
├── .gitignore
├── jconfig.json
├── next.config.js
├── package-lock.json
├── package.json
└── README.md
```
### Shared Components
- components/FetchPosts.jsx

### Special Pages
- Posts (changes here reflect on remote micro front end app 1)