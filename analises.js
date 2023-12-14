/************************************************************************************************
 * Objetivo: Tenho como objetivo criar uma API que possua dados da Tony Pizzaria.
 * Autora: Yasmin Targino
 * Data: 13/12/2023
 * Versão: 1.0
************************************************************************************************/

var pizzaria = require('./tonypizzas.js');

// Função para listar informações dos clientes
const getListarClientes = () => {

    // Conseguindo informações dos clientes da pizzaria
    const clientesInfo = pizzaria.clientes.cliente;
    let clientesArray = [];
    let clientesJSON = {};

    clientesInfo.forEach((cliente) => {
        let clienteJSON = {
            id: cliente.id,
            nome_cliente: cliente.nome, 
            email_cliente: cliente.email, 
            senha_cliente: cliente.senha, 
            telefone_cliente: cliente.telefone, 
        };

        // Adicionando o cliente formatado ao array
        clientesArray.push(clienteJSON);
    });

    // Criando o JSON de clientes com o array e a quantidade
    clientesJSON.clientes = clientesArray; 
    clientesJSON.quantidade_clientes = clientesInfo.length; 

    return clientesJSON;
};

const getListarCategorias = () => {
    const categoriaInfo = pizzaria.categorias.categoria;
    let categoriaArray = [];
    let categoriaJSON = {};

  
    categoriaInfo.forEach((categoria) => {
        let categoriasJSON = {
            id: categoria.id,
            nome_categoria: categoria.nome_categoria,
        };

 
        categoriaArray.push(categoriasJSON);
    });


    categoriaJSON.categorias = categoriaArray; 
    categoriaJSON.quantidade_categorias = categoriaInfo.length; 


    return categoriaJSON;
};

// Função para listar informações dos produtos
const getListarProdutos = () => {
    const produtoInfo = pizzaria.produtos.produto;
    let produtoArray = [];
    let produtoJSON = {};

    produtoInfo.forEach((produto) => {
        let produtosJSON = {
            id: produto.id,
            nome_produto: produto.nome_produto,
            valor_produto: produto.valor,
            categoria_produto: produto.categoria.nome_categoria,
            avaliacao_produto: produto.avaliacao,
        };

   
        produtoArray.push(produtosJSON);
    });


    produtoJSON.produtos = produtoArray; 
    produtoJSON.quantidade_produtos = produtoInfo.length; 

    return produtoJSON;
};

// Exportando as funções para utilização em outros módulos
module.exports = {
    getListarClientes,
    getListarCategorias,
    getListarProdutos,
    getComentariosPorProduto,
    getProdutosPorCategoria,
    getEnderecoCliente,
};



 
