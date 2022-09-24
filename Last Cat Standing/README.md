# Last Cat Standing

This is a project exploring Vue3 + Pinia.

Components are utilized at all levels, and props passed in as needed.

[Four Actions](https://github.com/cultureclap/LastCatStanding/blob/main/Last%20Cat%20Standing/src/stores/counter.js) are used.

chosen() is the EventHandler, while in an effort to optimize code, roundChange() and setImage() are utilized to prevent repeating code.

Though first an async function is called to get the data from the API.

# Next Steps
- [ ] Add Ruby API
- [ ] Move components to Storybooks
- [ ] Add Tailwind

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
