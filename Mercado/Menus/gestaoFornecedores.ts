
import { Fornecedor } from "../Classes/ClassFornecedor";
import { Produto } from "../Classes/ClassProduto";
import { CompraFornecedor } from "../Classes/ClassCompraFornecedor";


import { produtosMercado } from "./menuMercado";
import { fornecedoresMercado } from "./menuMercado";
import { comprasParaFornecedores } from "./menuMercado";

let ask = require('readline-sync')

export function gestaoFornecedores() {
    let gestaoFornecedoresLoop = true

    while (gestaoFornecedoresLoop) {
        console.log(`
        -----------------------------
        -- GESTAO DE FORNECEDORES ---
        -----------------------------
        - 1. ADICIONAR FORNECEDOR       -
        - 2. LISTAR FORNECEDORES
        - 3. ATUALIZAR FORNECEDOR     -
        - 4. EXCLUIR      -
        - 5. FAZER PEDIDO -
        - 6. VOLTAR -
        -----------------------------
        `)
        let userOptionGestaoFuncionario = ask.questionInt('Qual deseja? ')

        switch (userOptionGestaoFuncionario) {
            case 1:
                //Function que cria um fornecedor
                fornecedoresMercado.push(new Fornecedor((produtosMercado.length), 0x2278, "Tia Maria LTDa"));
                ask.question("... ")
                console.clear()
                break

            case 2:
                //Function para listar fornecedores
                console.table(fornecedoresMercado);
                ask.question('...')
                console.clear()
                break

            case 3:
                //Metodo set do funcionario se baseando no id do mesmo
                /*
                let fornecedorMudar = fornecedoresMercado[i]
                fornecedorMudar.setId(number) --> Nao mudar
                fornecedorMudar.setCnpj(number)
                fornecedorMudar.setNome(string)
                */
                break

            case 4:
                //Function para excluir se baseando no id do mesmo
                //fornecedoresMercado.slice(/*indice que quero apagar dps da virgula colocar 1 para apagar somente ele*/)
                break
                
            case 5:
                //Function para realizar pedido
                let pedido = new CompraFornecedor((comprasParaFornecedores.length), fornecedoresMercado[0])

                while(true){
                    console.clear()
                    console.table(produtosMercado)

                    let indexProduto = ask.questionInt(`Digite o index do produto que voce quer? \n R:`)
                
                    if (indexProduto != 666) {
                        let produto = produtosMercado[indexProduto]
                        pedido.addProdutos(produto)
                    } else {
                        console.log(pedido)

                        ask.question("...")
                        console.clear()
                        break
                    }
                }

            case 6:
                console.clear()
                //menu off
                gestaoFornecedoresLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
}


