/*
 * Created on Mon Jun 08 2020
 * Authored by Namila Bandara
 * Copyright (c) 2020
 * https://github.com/namila007/aws-s3-js-tutorial
 */
const config = require("./config/config")
const express = require("express")
const bodyParser = require("body-parser")
const errorHandler = require("./errorHandler/errorHandler")
const morgan = require('morgan')
const cors = require("cors")
const router = require("./router/router")
const helmet = require('helmet')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
app.use(helmet())

app.use("/api/",router)

app.use(errorHandler)

app.listen(config.port,() => {
 console.log(`${config.app} App run in PORT:${config.port}`)
})
