import { Produto } from "../Classes/ClassProduto"
import { fornecedoresMercado } from "./menuMercado";
import { produtosMercado } from "./menuMercado";

let ask = require('readline-sync')





export function gestaoProdutos() {
    let gestaoProdutosLoop = true
    
    while(gestaoProdutosLoop){
        console.log(`\
        -----------------------------
        ----- GESTAO DE PRODUTOS ----
        -----------------------------
        - 1. CRIAR PRODUTO       -
        - 2. LISTAR PRODUTOS
        - 3. ATUALIZAR DADOS DE PROD.     -
        - 4. EXCLUIR     -
        - 5. VOLTAR -
        -----------------------------
        `);
        let userOptionGestaoProdutos = ask.questionInt('Qual Deseja: \R: ');

        switch (userOptionGestaoProdutos) {
            case 1:
                //Function que cria um produto
                let id = produtosMercado.length
                let nome = "Arroz 5Kg Tio Joao"
                let categoria = "Basicos"
                let valorCompra = 3.29
                let valorVenda = 5.99
                let qtdEstoque = 100
                let fornecedorDoProduto = fornecedoresMercado[0]

                const produtinho = new Produto(id, nome, categoria, valorCompra, valorVenda, qtdEstoque, fornecedorDoProduto)
                produtosMercado.push(produtinho)

                ask.question('Pronto ...')
                console.clear()

                break

            case 2:
                //Function para listar produtos
                console.table(produtosMercado)
                ask.question('Aperte para voltar ... ')
                console.clear()
                break

            case 3:
                //Metodo set do produto se baseando no id do mesmo
                //De preferencia o id nunca mudar, ser unico !!
                /*
                let produtoMudar = produtosMercado[i]
                produtoMudar.setId(number) --> Nao mudar
                produtoMudar.setNome(string)
                produtoMudar.setCategoria(string)
                produtoMudar.setValorCompra(number)
                produtoMudar.setValorVenda(number)
                produtoMudar.setQtdEstoque(number)
                produtoMudar.setFornecedor(Fornecedor)
                */
                break
            
            case 4:
                //Function para excluir se baseando no id do mesmo
                produtosMercado.slice(/*indice que quero apagar dps da virgula colocar 1 para apagar somente ele*/)                
                break

            case 5:
                console.clear()
                //menu off
                gestaoProdutosLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
}

