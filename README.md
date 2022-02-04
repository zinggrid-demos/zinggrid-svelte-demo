# Demonstration of using ZingGrid in a Svelte app

This project demonstrates creating and interacting with a ZingGrid instance using Svelte.
It's written using Svelte's starter template and svelte-router-spa.

## Running the demo

You'll need an environment with `node` and `npm` installed.
After cloning this repository:

```
cd zinggrid-svelte-demo
npm install
```

And then either 

```
npm run dev
```

for development mode (watches for file changes and reloads the app automatically) or 

```
npm run start
```

to just serve the app normally.

You should then be able to view the demo in your browser at `localhost:5000`.

## GraphQL server

One of the GraphQL demos uses a server located at [https://examples.zingsoft.com/graphql](https://examples.zingsoft.com/graphql).
If that server is not available, you can run an instance locally. The code is available at:
[https://github.com/zinggrid-demos/graphql-demo-server](https://github.com/zinggrid-demos/graphql-demo-server)

## Starting a new project

This project was bootstrapped with [Svelte template](https://github.com/sveltejs/template) via this sequence of commands:

```
npx degit sveltejs/template zinggrid-svelte-demo
cd zinggrid-svelte-demo
npm install svelte-router-spa
```
