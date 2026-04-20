# Kapwa Local Development Setup

This guide is for contributors who already have the Kapwa repository locally and want to run the demo site, component library, and Storybook on their machine.

For the fork, upstream, sync, and pull request workflow, see [CONTRIBUTING.md](../CONTRIBUTING.md).

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- Git

If you use `nvm` or `fnm`, switch to the repo's preferred Node.js version before installing dependencies:

```sh
nvm use
```

or

```sh
fnm use
```

## 1. Install Dependencies

```sh
npm install
```

## 2. Create Your Local `.env`

Create a local `.env` file from `.env.example`:

```sh
cp .env.example .env
```

The current required variable is:

```env
VITE_STORYBOOK_HOST=http://localhost:6006
```

This is important in development because the demo site's navbar uses `VITE_STORYBOOK_HOST` for the local `Storybook` link. If `.env` is missing, that navbar link will not point to your local Storybook server correctly.

## 3. Start The App

Run both the demo site and Storybook together:

```sh
npm run dev
```

This starts:

- the demo site via `npm run start:client`
- Storybook via `npm run start:storybook`

Default local URLs:

- Demo site: `http://localhost:5173`
- Storybook: `http://localhost:6006`

## Useful Commands

Run only the demo site:

```sh
npm run start:client
```

Run only Storybook:

```sh
npm run start:storybook
```

Build the component library:

```sh
npm run build-lib
```

Build the demo site:

```sh
npm run build-site
```

Build Storybook:

```sh
npm run build:storybook
```

Run lint:

```sh
npm run lint
```

## Notes

- `npm run dev` is the easiest way to verify the demo site and Storybook together.
- `npm run build-lib` also regenerates component exports after the library build.
- If you are checking navbar links locally, make sure Storybook is running and `.env` exists before assuming the link is broken.
