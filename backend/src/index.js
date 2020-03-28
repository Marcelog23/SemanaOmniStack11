const express = require('express');
const cors    = require('cors');
const routes  = require('./routes');
const {errors}  = require('celebrate');
const app = express();

app.use(cors());

/** Informamos que vamos utilizar json no corpo das requisições */
app.use(express.json());

app.use(routes);
app.use(errors());

/** 
 * Query Params: Parametros nomeados enviados na rota após o "?"
 * Route Params: Parametros utilizados para identificar recusros
 * Request Body:
 */

/**
 * Utilizamos o banco de dados Sqlite
 * 
 * Ferramenta utilizada para fazer a conexão: Knex
 */

app.listen(3333);