const express = require('express')
const axios = require('axios')
require('dotenv').config();

const app = express();
const port = 3000;

async function manterAPIAtiva(api) {
    setInterval(async () => {
        try {
            const health_01 = await axios.get(api);
            console.log(health_01.data);
        } catch (error) {
            console.error("Erro ao acessar a API: ", error.message)
        }
    }, 300000);
}

app.get("/", (req,res) => {
    res.send("<h1>ALWAYS ONLINE API WORKING!</h1>");
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta: ", port);
    if (process.env.APP_01) {
        console.log("API 01")
        manterAPIAtiva(process.env.APP_01);
    }
    if (process.env.APP_02) {
        console.log("API 02");
        manterAPIAtiva(process.env.APP_02);
    }

    if (process.env.APP_03) {
        console.log("API 03")
        manterAPIAtiva(process.env.APP_03);
    }
})