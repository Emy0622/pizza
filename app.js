/************************************************************************************************
 * Objetivo: Tenho como objetivo criar uma API que possua dados da Tony Pizzaria.
 * Autora: Yasmin Targino
 * Data: 13/12/2023
 * Versão: 1.0
************************************************************************************************/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    app.use(cors());
    next();
});

// Endpoints para listar produtos, clientes e categorias

app.get('/pizzaria/produtos', cors(), async (req, res, next) => {
    const controleListaProdutos = require('./modulo/consultas.js');
    const produtos = controleListaProdutos.getListarProdutos();
    res.json(produtos);
    res.status(200);
});

app.get('/pizzaria/clientes', cors(), async (req, res, next) => {
    const controleListaClientes = require('./modulo/consultas.js');
    const clientes = controleListaClientes.getListarClientes();
    res.json(clientes);
    res.status(200);
});

app.get('/pizzaria/categorias', cors(), async (req, res, next) => {
    const controleListaCategorias = require('./modulo/consultas.js');
    const categorias = controleListaCategorias.getListarCategorias();
    res.json(categorias);
    res.status(200);
});

// Endpoint para listar comentários dos clientes pelo ID do produto

app.get('/pizzaria/comentarios/:produtoId', cors(), async (req, res, next) => {
    const idProduto = req.params.produtoId;
    const controleComentarios = require('./modulo/consultas.js');
    const dadosComentarios = controleComentarios.getComentariosPorProduto(idProduto);

    if (dadosComentarios) {
        res.json(dadosComentarios);
        res.status(200);
    } else {
        res.status(404);
        res.json({ erro: 'Não foi possível encontrar o item' });
    }
});

// Endpoint para listar produtos por categoria

app.get('/pizzaria/produtos/:categoriaNome', cors(), async (req, res, next) => {
    const nomeCategoria = req.params.categoriaNome;
    const controleProdutosCategorias = require('./modulo/consultas.js');
    const dadosProdutos = controleProdutosCategorias.getProdutosPorCategoria(nomeCategoria);

    if (dadosProdutos) {
        res.json(dadosProdutos);
        res.status(200);
    } else {
        res.status(404);
        res.json({ erro: 'Não foi possível encontrar o item' });
    }
});

// Endpoint para obter endereço do cliente pelo ID

app.get('/pizzaria/endereco/:clienteId', cors(), async (req, res, next) => {
    const clienteId = req.params.clienteId;
    const controleEnderecoCliente = require('./modulo/consultas.js');
    const dadosEndereco = controleEnderecoCliente.getEnderecoCliente(clienteId);

    if (dadosEndereco) {
        res.json(dadosEndereco);
        res.status(200);
    } else {
        res.status(404);
        res.json({ erro: 'Não foi possível encontrar o item' });
    }
});

// Inicia o servidor na porta 8080

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
