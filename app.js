const express = require("express")
const app = express()

const dotenv = require("dotenv").config()

app.use(express.json())

let {open} = require("sqlite")
let sqlite3 = require("sqlite3")

const path = require("path")

const dbPath = path.join(__dirname, "sqlite.db")

let db = null

const port = process.env.PORT || 5000


app.get('/', async (request, response) => {
    const sqlValue = "select * from dictonary order by random() limit 1"
    const value = await db.get(sqlValue)
    response.send(value)
})

const initalizeDbandServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        })
        app.listen(port, () => {
            console.log(`Server Started: ${port}`)
        })
    } catch (e) {
        console.log(`Error: ${e}`)
        process.exit(1)
    }
}

initalizeDbandServer()

