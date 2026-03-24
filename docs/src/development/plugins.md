# Creating plugins

## Adding a plugin in the main repository

1. Create a folder in `packages` folder. (e.g.: `myawesome-plugin`)
2. Add `package.json` and `tsconfig.json` to the folder. (Copy and edit from existing plugins)
3. Create `src` folder with `index.ts` and `index.scss`
4. Create symlink to your folder in `node_modules/@yuafox` folder.
5. Add plugin references in `~/tsconfig.json`.
6. Add plugin in `rollup.config.js` file.
