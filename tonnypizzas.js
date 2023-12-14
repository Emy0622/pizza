/************************************************************************************************
 * Objetivo: Tenho como objetivo criar uma API que possua dados da Tony Pizzaria.
 * Autora: Yasmin Targino
 * Data: 13/12/2023
 * Versão: 1.0
************************************************************************************************/

var clientes = {
    cliente: [
        {
            id: 1,
            nome: 'Fernanda Oliveira',
            email: 'fernanda@gmail.com',
            senha: 'senha123',
            telefone: '(11) 98765-4321',
            foto_perfil: 'url_da_foto',
            endereco: [
                {
                    cep: '055448-110',
                    rua: 'Avenida das Palmeiras, 123',
                    complemento: 'apto 301',
                    bairro: 'Vila Verde',
                    estado: 'SP'
                }
            ]
        },

        {
            id: 2,
            nome: 'Camila Santos',
            email: 'camila.santos@gmail.com',
            senha: 'senha789',
            telefone: '(11) 87654-3210',
            foto_perfil: 'url_da_foto',
            endereco: [
                {
                    cep: '030224-080',
                    rua: 'Alameda das Rosas, 789',
                    complemento: 'apto 502',
                    bairro: 'Jardim das Flores',
                    estado: 'SP'
                }
            ]
        },

        {
            id: 3,
            nome: 'Juliana Lima',
            email: 'juliana.lima@gmail.com',
            senha: 'senha567',
            telefone: '(11) 98765-4321',
            foto_perfil: 'url_da_foto',
            endereco: [
                {
                    cep: '041224-050',
                    rua: 'Travessa das Acácias, 543',
                    complemento: 'apto 201',
                    bairro: 'Vila Azul',
                    estado: 'SP'
                }
            ]
        },

        {
            id: 4,
            nome: 'Arthur Targino',
            email: 'arthur.targino@gmail.com',
            senha: 'senha321',
            telefone: '(11) 76543-2109',
            foto_perfil: 'url_da_foto',
            endereco: [
                {
                    cep: '085551-330',
                    rua: 'Rua das Violetas, 987',
                    complemento: 'casa',
                    bairro: 'Parque Industrial',
                    estado: 'SP'
                }
            ]
        },

        {
            id: 5,
            nome: 'Maria Oliveira',
            email: 'maria.oliveira@gmail.com',
            senha: 'senha111',
            telefone: '(11) 55555-5555',
            foto_perfil: 'url_da_foto',
            endereco: [
                {
                    cep: '070551-200',
                    rua: 'Rua dos Pinheiros, 456',
                    complemento: 'casa',
                    bairro: 'Centro',
                    estado: 'SP'
                }
            ]
        },

        {
            id: 6,
            nome: 'Isabela Rodrigues',
            email: 'isabela.rodrigues@gmail.com',
            senha: 'senha999',
            telefone: '(11) 99999-8888',
            foto_perfil: 'url_da_foto',
            endereco: [
                {
                    cep: '070112-220',
                    rua: 'Avenida das Oliveiras, 678',
                    complemento: 'apto 405',
                    bairro: 'Jardim Primavera',
                    estado: 'SP'
                }
            ]
        }
    ]
};

module.exports = {
    clientes
};

      

var categorias = {

    categoria:
        [
            {
                id: 1,
                nome_categoria: 'Geral',
                icon: ''
            },

            {
                id: 2,
                nome_categoria: 'Pizza',
                icon: ''
            },

            {
                id: 3,
                nome_categoria: 'Bebida',
                icon: ''
            },

            {
                id: 4,
                nome_categoria: 'Sobremesa',
                icon: ''
            },

            {
                id: 5,
                nome_categoria: 'Favoritos',
                icon: ''
            }

        ]

}

var produtos = {
        produto: [
            {
                id: 1,
                nome_produto: 'Pizza Margherita',
                valor: 'R$18,00',
                foto_produto: '',
                descricao: 'Molho de tomate, muçarela fresca, manjericão e azeitonas.',
                categoria: categorias.categoria[1],
                avaliacao: 4,
                comentario: [
                    {
                        cliente: clientes.cliente[0],
                        texto: 'Sabor clássico, muito bom!',
                        data: '12/09/2022'
                    },

                ]
            },
    
            {
                id: 2,
                nome_produto: 'Pizza de Frango com Catupiry',
                valor: 'R$22,00',
                foto_produto: '',
                descricao: 'Frango desfiado, catupiry, milho e azeitonas.',
                categoria: categorias.categoria[1],
                avaliacao: 4,
                comentario: [
                    {
                        cliente: clientes.cliente[3],
                        texto: 'Combinação perfeita, adorei!',
                        data: '07/02/2022'
                    },
  
                ]
            },
    
            {
                id: 3,
                nome_produto: 'Pizza Calabresa',
                valor: 'R$16,99',
                foto_produto: '',
                descricao: 'Massa recheada com calabresa, cebola, muçarela e molho de tomate.',
                categoria: categorias.categoria[1],
                avaliacao: 5,
                comentario: [
                    {
                        cliente: clientes.cliente[2],
                        texto: 'Pizza incrível, muito saboroso!',
                        data: '17/10/2022'
                    }

                ]
            },
    

            {
                id: 4,
                nome_produto: 'Pizza Quatro Queijos',
                valor: 'R$20,00',
                foto_produto: '',
                descricao: 'Molho de tomate, muçarela, gorgonzola, parmesão e provolone.',
                categoria: categorias.categoria[1],
                avaliacao: 4,
                comentario: [
                    {
                        cliente: clientes.cliente[1],
                        texto: 'Adoro a combinação de queijos, muito saborosa!',
                        data: '28/11/2022'
                    },
                    {
                        cliente: clientes.cliente[4],
                        texto: 'Queijo derretido é sempre uma delícia!',
                        data: '02/12/2022'
                    }
                                ]
            },
    
            {
                id: 5,
                nome_produto: 'Pizza Vegetariana',
                valor: 'R$19,50',
                foto_produto: '',
                descricao: 'Molho de tomate, muçarela, abobrinha, berinjela, pimentão e cebola.',
                categoria: categorias.categoria[1],
                avaliacao: 5,
                comentario: [
                    {
                        cliente: clientes.cliente[4],
                        texto: 'Opção saudável e deliciosa!',
                        data: '03/12/2022'
                    },
                    {
                        cliente: clientes.cliente[0],
                        texto: 'A textura dos vegetais é incrível!',
                        data: '05/12/2022'
                    }
                ]
            },
    


    ]

}

module.exports = {
    clientes,
    categorias,
    produtos
}