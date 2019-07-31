# Cacholinho

O Cacholinho é uma ferramenta web com objetivo de criar uma lista de Cacholos fofinhos.

## Rodando o projeto

- Tenha instalado o `NodeJS` versão `v10.15.0` ou superior.
- Execute o comando `npm install` para instalar as dependências do projeto.
- Modifique o `.env.sample` para `.env`.
- Execute o comando `npm start` roda o projeto na porta `4000`.

## Estrutura do projeto

- Arquivo `webpack.config.js` contem as configurações essenciais para o funcionamento do projeto.

- Arquivo `package.json` contem as dependências e os comando para rodar o projeto.

- Diretório `src/component` contem os componentes do projeto organizados com a arquitetura `Atomic Design`.

- Diretório `src/containers` contem os componentes que estão conectados com a `store` do `redux` organizados com a arquitetura `Atomic Design`.

- Diretório `src/redux-flow` contem todo o fluxo do redux `actions`, `contants`, `reducers` e configuração da `store`.

- Diretório `src/designSystem` contem a organização dos padrões visuais.

- Diretório `src/utils` contem alguns utils utilizados na aplicação.

## Tecnologias

- ES6
- ReactJS
- Redux
- ReactRouter
- axios
- lodash
- StyledComponents
- Webpack
- Babel
