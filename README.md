# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

***

# Github

![](doc-assets/images/diagrama-git.png)

## Contextualizando

- O site do GitHub é o que podemos chamamr de **remoto** e a sua máquina de **local**.
- **Upstream** é o repositório (projeto) de um usuário o qual se deseja contribuir.
- Ao acessar este repositório (Upstream) e realizar um **fork**, você cria uma "cópia" no seu perfil lá no github.
  - isso é feito para que, se você fizer alterações no projeto, possa "subir" essas alterações para seu perfil ao invés de diretamente para o projeto "original", eai sim, em seguida, abrir um pedido de **pull request**, o qual será avaliado pelo dono do projeto para definir se será aceito ou não.

## Clonando o projeto na sua máquina local

- Cria uma pasta na sua máquina local (normalmente com o mesmo nome do repositório) onde desejar, abra em um terminal e digite ```git init```.
  - isso irá inicializar o git na sua pasta
- Para configurar seu usuário e e-mail digite:
  - ```git config user.name seu-usuario```
  - ```git config user.email seu-email```
- Para "baixar" o repositório do seu perfil no github na sua máquina e criar uma conexão com ela, para que se possa atualizar o código no github, digita-se o código ```git clone url-do-repositorio```
- **[clique aqui para mais informações..](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository)**