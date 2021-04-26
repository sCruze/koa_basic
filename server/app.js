require('dotenv').config()

// Импортируем метод для работы с путями в node
const path = require('path')

// Передаем в переменную, все из koa
const Koa = require('koa')

// Передаем в переменную новый экземпляр Koa
const app = new Koa()

// Модуль для работы с views
const views = require('koa-views')
// Модуль для работы со статическими файлами
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')

// Экспортируем роуты
const router = require('./routes/index')

// Прописываем модули, которые будем использовать в приложении
app
    .use(bodyParser())
    .use(views(path.join(__dirname, '../views')))
    .use(static(path.join(__dirname, '../src')))
    .use(router.routes())
    .use(router.allowedMethods())

// Экспортируем app для работы с ним в друших местах приложения
module.exports = app
