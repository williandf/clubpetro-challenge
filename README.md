<h1 align="center">
    <img alt="Lugares que quero conhecer" title="Lugares que quero conhecer" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pré-requisitos">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-nossa-aplicação-no-docker">Como Executar Docker</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando-nossa-aplicação-local">Como Executar Local</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#google-cloud-platform">Deploy</a>
</p>

<br>

<p align="center">
  <img alt="Lugares que quero conhecer" src=".github/lugares.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

O Lugares que quero conhecer é uma aplicação que cadastra os lugares que quero conhecer.

## 🔖 Layout

No link abaixo você encontra o layout do projeto web. Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

- [Layout Web](https://www.figma.com/file/IC0xt3K3X21rLEfLRQ3mpl/Lugares-que-quero-conhecer)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Docker](http://docker.com)
- [Node.js](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [React Native](https://reactnative.dev/)

## 🎲 Rodando nossa aplicação no docker

# Clone este repositório

```bash
$ git clone git@github.com:williandf/clubpetro-challenge.git

# Acesse a pasta do projeto no terminal/cmd
$ cd clubpetro-challenge

#Rode o docker
docker-compose up -d --build
```

## 🎲 Rodando nossa aplicação local

# Clone este repositório

```bash
$ git clone git@github.com:williandf/clubpetro-challenge.git

# Acesse a pasta do projeto no terminal/cmd
$ cd clubpetro-challenge
```

## Rodando o Back End da Apliação

```bash
# Altere a conexão para o banco de dados local
/backend/src/app.module.ts
mongodb://127.0.0.1:27017/db_clubpetro

# Acesse a pasta do back-end no terminal/cmd
$ cd backend

# Instale as dependências
$ npm install
$ yarn add

# Execute a aplicação em modo de desenvolvimento
$ npm run start
$ yarn start

# Caso prefira execute a aplicação em watch mode
$ npm run start:dev
$ yarn start:dev
```

## Rodando o FrontEnd da Apliação

```bash
# Acesse a pasta do back-end no terminal/cmd
$ cd web

# Instale as dependências
$ npm install
$ yarn add

# Execute a aplicação em modo de desenvolvimento
$ npm run start
$ yarn start
```

## Google Cloud Platform

Acesso ao deploy da aplicação clicando [aqui](https://frontend-clubpetrp.rj.r.appspot.com/)
