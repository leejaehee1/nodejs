# Mern stack

MongoDB -> Mysql 로 변경한 Mern stack 사용(프로토 타이핑은 이 스택을 사용하고 major 프로젝트로 승격되면 spring boot + mysql 로 변경)

![image](https://user-images.githubusercontent.com/54349213/128986236-eabcd22b-62d3-410e-ae1f-d68697e67811.png)

https://www.mongodb.com/mern-stack

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/leejaehee1/nodejs.git # or clone your own fork
$ cd nodejs
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Github

```
$ git remote
heroku
origin
origin2
$ git push -u origin2 main
```
or

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## create sql 쿼리

CREATE DATABASE test DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

# nodejs
