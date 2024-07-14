# Project Title

AI-taolao is a simple LLM powered chatbot.

## Description

This project aim to build a basic demo with LLM and understand the in and out of building LLM applications and concepts. It's a full stack app with a **monorepo** setup with [Turborepo](https://turbo.build/repo).

- [NextJS](https://nextjs.org) use for the frontend
- [Fastify](https://fastify.dev/) use for the backend

## Getting Started

### Project Structure

The project use a basic example structure for a monorepo setup. Don't care too much about the **packages**, it's meant to be use for sharing resources but currently doesn't have any resources to share.

All the application will be located in the **apps** folder. Each run their on their own structure.

```sh
.
├── apps
│   ├── server
│   └── web
└── packages
    ├── eslint-config
    └── typescript-config
```

### Development

Running dev on the root run both the server and the web front end. This use turbo to run what specify in the app **package.json** for the `npm run dev` script

```
// Run both in parallel
npm run dev

// To run the frontend only
npm run dev:frontend

// Same go for the back end
npm run dev:backend
```

If large directory source make you wanna vomit because of complexity, `cd` into specific folder and run `npm run dev` to work only on a specific part.
