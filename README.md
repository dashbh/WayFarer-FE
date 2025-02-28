# WayFarer Micro Frontend (MFE) Monorepo

## 🚀 Overview

WayFarer is a micro frontend (MFE) architecture-based project built with:

- **React** (TypeScript) with **CRACO**
- **TurboRepo** for monorepo management
- **Webpack Module Federation** for sharing components between MFEs

Each MFE is a standalone React application, dynamically loaded into the host application (`wayfarer_mfe_shell`).

---

## 📂 Project Structure

```
wayfarer-mfe-monorepo/
 ├── apps/
 │   ├── wayfarer_mfe_shell/   # Host MFE -> React + Webpack Module federation
 │   ├── wayfarer_mfe_home/    # MFE -> React + Webpack Module federation
 │   ├── wayfarer_mfe_search/  # MFE -> React + Webpack Module federation
 │   ├── wayfarer_mfe_nav/     # MFE -> React + Webpack Module federation
 │
 ├── generators/
 │   ├── mfe.js               # Script to create new MFEs
 │
 ├── templates/
 │   ├── mfe-template/        # Boilerplate for new MFEs
 │
 ├── package.json
 ├── turbo.json               # TurboRepo config
```

---
## Start the project
```sh
cd apps/wayfarer_mfe_shell
npm i
npm run start
```

---

## 🛠️ How to Create a New Micro Frontend (MFE)
https://github.com/dashbh/WayFarer-Docs/blob/main/MFE.md

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to create issues or submit pull requests to improve WayFarer! 😊****
