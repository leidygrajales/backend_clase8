const express = require('express')
const router_productos = require('./router.productos')

const app = express()
const PORT = 8080

app.use(express.json())

app.use('/api/productos', router_productos)

app.use(express.static(`${__dirname}/public`))

app.listen(PORT, () => console.log(`servidor corriendo en el puerto ${PORT}`))
