# Feihong's React Quickstart

Basic React app that uses an Express backend. Works on Glitch.

## Scripts

Run in dev mode

    yarn dev

Build the client app

    yarn build

Start the server (only used on Glitch)

    yarn start

Run tests

    yarn test

## Sources

- [starter-react on Glitch](https://glitch.com/~starter-react)
- [The Minimal React + Webpack 4 + Babel Setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
- [How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)

## Links

- https://github.com/facebook/create-react-app
- https://support.glitch.com/t/create-react-app-support/1295/13
- https://glitch.com/~create-react-app-demo
- [Material Design Icons](https://material.io/tools/icons/?style=baseline)

## Notes

I configured `babel-preset-env` to target "last 2 Chrome versions" because then it won't try to transform code that uses the new async syntax. This means that the compiled `bundle.js` won't run in very old browsers.
