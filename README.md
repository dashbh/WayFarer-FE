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
 │   ├── wayfarer_mfe_shell/   # Host application
 │   ├── wayfarer_mfe_home/    # Example MFE
 │   ├── wayfarer_mfe_search/  # Example MFE
 │   ├── wayfarer_mfe_nav/     # Example MFE
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

## 🛠️ How to Create a New Micro Frontend (MFE)

Creating a new MFE is easy with our automated script! Follow these steps:

### **Step 1: Run the Generator Command**

```sh
npm run create-mfe <mfe-name>
```

Example:

```sh
npm run create-mfe search
```

This will generate a new MFE in `apps/wayfarer_mfe_search/` following the correct naming convention.

### **Step 2: Change the Port (if needed)**

To change the port for the new MFE, edit the craco.config.js file inside apps/wayfarer_mfe_search/:

```sh
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'http://localhost:3001/';
      ...
    },
  },
  devServer: {
    port: 3001,
  },
};

```

### **Step 3: Install Dependencies**

Navigate to the newly created MFE directory and install dependencies:

```sh
cd apps/wayfarer_mfe_search
npm install
```

### **Step 4: Start the MFE Locally**

Run the development server:

```sh
npm run start
```

The new MFE should now be running locally.

---

## 🔗 Registering the MFE in the Host (`wayfarer_mfe_shell`)

To make the new MFE accessible from the shell:

- Step 1: Open `craco.config.js` and Add the new MFE under `remotes`:

```js
remotes: {
  "wayfarer_mfe_search": "wayfarer_mfe_search@http://localhost:3002/remoteEntry.js"
}
```

- Step 2: Use the new MFE in `wayfarer_mfe_shell`
  To use the new MFE inside the host application, update `apps/wayfarer_mfe_shell/src/App.tsx`:

```tsx
import React, { Suspense } from 'react';

...
const Search = React.lazy(() => import('@wayfarer_mfe_search/Search'));
...

const App = () => (
  <div>
    ...
    <Suspense fallback={<div>Loading Search...</div>}>
      <Search />
    </Suspense>
    ...
    </Suspense>
  </div>
);

export default App;
```

- Step 3: Update `apps/wayfarer_mfe_shell/src/declarations.d.ts`

```tsx
declare module '@wayfarer_mfe_search/Search' {
  const SearchPage: React.ComponentType;
  export default SearchPage;
}
```

- Step 4: Restart the shell to apply changes:

```sh
cd apps/wayfarer_mfe_shell
npm run start
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to create issues or submit pull requests to improve WayFarer! 😊
