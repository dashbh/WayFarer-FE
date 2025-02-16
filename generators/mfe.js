const fs = require("fs");
const path = require("path");

function createMFE(mfeName) {
    if (!mfeName) {
        console.error("❌ Error: Please provide a micro frontend name.");
        console.log("Usage: node generators/mfe.js <mfe-name>");
        process.exit(1);
    }

    // Ensure naming convention "wayfarer_mfe_*"
    if (!mfeName.startsWith("wayfarer_mfe_")) {
        mfeName = `wayfarer_mfe_${mfeName}`;
    }

    const templateDir = path.join(__dirname, "../templates/mfe-template");
    const mfeDir = path.join(__dirname, `../apps/${mfeName}`);

    // Prevent duplicate creation
    if (fs.existsSync(mfeDir)) {
        console.error(`❌ Error: ${mfeName} already exists.`);
        process.exit(1);
    }

    // Copy template files recursively
    fs.cpSync(templateDir, mfeDir, { recursive: true });

    // Rename package.json
    const packageJsonPath = path.join(mfeDir, "package.json");
    let packageJson = fs.readFileSync(packageJsonPath, "utf8");
    packageJson = packageJson.replace(/wayfarer_mfe_template/g, mfeName);
    fs.writeFileSync(packageJsonPath, packageJson);

    // Rename the Craco config file
    const cracoConfigPath = path.join(mfeDir, "craco.config.js");
    if (fs.existsSync(cracoConfigPath)) {
        let cracoConfig = fs.readFileSync(cracoConfigPath, "utf8");
        cracoConfig = cracoConfig.replace(/wayfarer_mfe_template/g, mfeName);
        fs.writeFileSync(cracoConfigPath, cracoConfig);
    }

    // Rename the README.md
    const readMePath = path.join(mfeDir, "README.md");
    if (fs.existsSync(readMePath)) {
        let readMe = fs.readFileSync(readMePath, "utf8");
        readMe = readMe.replace(/wayfarer_mfe_template/g, mfeName);
        fs.writeFileSync(readMePath, readMe);
    }

    // Rename the src/App.tsx
    const appFilePath = path.join(mfeDir, "src/App.tsx");
    if (fs.existsSync(appFilePath)) {
        let appTsxFile = fs.readFileSync(appFilePath, "utf8");
        appTsxFile = appTsxFile.replace(/wayfarer_mfe_template/g, mfeName);
        fs.writeFileSync(appFilePath, appTsxFile);
    }

    console.log(`✅ Micro frontend ${mfeName} created successfully!`);
    console.log(`Next steps:\n1. cd apps/${mfeName}\n2. Run 'npm install'\n3. Start with 'npm run start'`);
}

// Run the script if executed from CLI
if (require.main === module) {
    const mfeName = process.argv[2];
    createMFE(mfeName);
}
