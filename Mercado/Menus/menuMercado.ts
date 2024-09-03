let ask = require('readline-sync')

import { Fornecedor } from "../Classes/ClassFornecedor";
import { Produto } from "../Classes/ClassProduto";
import { CompraFornecedor } from "../Classes/ClassCompraFornecedor";

import { menuGestao } from "./menuGestao";

export let fornecedoresMercado: Fornecedor[] = [];
export let produtosMercado: Produto[] = [];
export let comprasParaFornecedores: CompraFornecedor[] = []


function menuMercado() {

    console.log(`
    -----------------------------
    ---------- MERCADO ----------
    -----------------------------
    - 1. GESTAO        -
    - 2. FUNCIONAMENTO     -
    -----------------------------
    `)

    let userOptionMenuMercado = ask.questionInt('Qual deseja? ')

    switch (userOptionMenuMercado) {
        case 1:
            console.clear()
            //menuFuncionamento()
            break

        case 2:
            console.clear()
            menuGestao()
            break

        default:
            console.log("OPCAO INVALIDA...")
            break
    }
}

menuMercado()