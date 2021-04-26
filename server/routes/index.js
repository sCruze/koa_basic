// Импортируем модуль koa-router
const Router = require('koa-router')

// Пример - как подключать controllers
const dataCall = require('../controllers/practice')

// Передаем в переменную router, новый экземпляр Router
const router = new Router()

// Метод get, вызываем index.html если был get запрос на путь /
router.get('/', async (ctx) => {
    // Ждем пока загрузиться файл index.html
    await ctx.render('index')
})

// Продолжение подключения controllers
router.use(dataCall)

// Экспортируем модуль router, для регистрации его в самом приложении app
module.exports = router
