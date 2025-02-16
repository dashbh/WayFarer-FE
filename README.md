# WayFarer Micro Frontend (MFE) Monorepo

## 🚀 Overview
WayFarer is a micro frontend (MFE) architecture-based project built with:
- **React** (TypeScript) with **CRACO**
- **TurboRepo** for monorepo management
- **Webpack Module Federation** for sharing components between MFEs

Each MFE is a standalone React application, dynamically loaded into the host application (`wayfarer-mfe-shell`).

---

## 📂 Project Structure
```
wayfarer-mfe-monorepo/
 ├── apps/
 │   ├── wayfarer-mfe-shell/   # Host application
 │   ├── wayfarer-mfe-home/    # Example MFE
 │   ├── wayfarer-mfe-search/  # Example MFE
 │   ├── wayfarer-mfe-nav/     # Example MFE
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
This will generate a new MFE in `apps/wayfarer-mfe-search/` following the correct naming convention.

### **Step 2: Change the Port (if needed)**
To change the port for the new MFE, edit the craco.config.js file inside apps/wayfarer-mfe-search/:
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
cd apps/wayfarer-mfe-search
npm install
```

### **Step 4: Start the MFE Locally**
Run the development server:
```sh
npm run start
```
The new MFE should now be running locally.

---

## 🔗 Registering the MFE in the Host (`wayfarer-mfe-shell`)
To make the new MFE accessible from the shell:

- Step 1: Open `craco.config.js` and Add the new MFE under `remotes`:
```js
remotes: {
  "wayfarer-mfe-search": "wayfarer-mfe-search@http://localhost:3002/remoteEntry.js"
}
```
- Step 2: Use the new MFE in `wayfarer-mfe-shell`
To use the new MFE inside the host application, update `apps/wayfarer-mfe-shell/src/App.tsx`:

```tsx
import React, { Suspense } from 'react';

...
const Search = React.lazy(() => import('@wayfarer-mfe-search/Search'));
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

- Step 3: Update `apps/wayfarer-mfe-shell/src/declarations.d.ts`

```tsx
declare module "@wayfarer-mfe-search/Search" {
  const SearchPage: React.ComponentType;
  export default SearchPage;
}
```

- Step 4:  Restart the shell to apply changes:
```sh
cd apps/wayfarer-mfe-shell
npm run start
```

---

## 📜 License
This project is licensed under the MIT License.

---

## 🤝 Contributing
Feel free to create issues or submit pull requests to improve WayFarer! 😊