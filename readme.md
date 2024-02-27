# Let's Start with Webpack 4

### Webpack configuration introduction

![](https://raw.githubusercontent.com/thejsdeveloper/webpack4-setup/master/src/assets/images/webpack.gif)

## This project provide following functionality:

1.  Webpack configuration for development and production
2.  Transpile .ts and ES6+ to ES5
3.  Convert SCSS to CSS
4.  Managing static resources
5.  Use of different plugins in Webpack

### To clone the repository

> Run `git clone https://github.com/thejsdeveloper/webpack4-setup.git`

### Change directory

> cd `webpack4-setup`

### Install dependencies

> npm install

### Run development server

> Run `npm run dev` for a dev server. Navigate to `http://localhost:8080/`.
> The app will automatically reload if you change any of the source files.

### Build

> Run `npm run build:dev` to build the project in development mode.
> Run `npm run build:prod` to build the project in production mode.

The build artifacts will be stored in the `dist/` directory.

### Deploy

:warning: **This will deploy the target code to https://uottahack.solace.cloud/. Please test your work thoroughly beforehand.**

1. Open a PE request to activate the `uottahack` AWS IAM user in production (if it's dormant), and to share its access key credentials with you (e.g. https://sol-jira.atlassian.net/browse/DATAGO-72229)
2. Create a new AWS profile under `~/.aws/credentials` and name it `[uottahack]`. Add the credentials from the previous step to it

```
[uottahack]
aws_access_key_id=<uottahack-access-key-id>
aws_secret_access_key=<uottahack-secret-access-key>
```

3. Run `npm deploy.js`
