import { gestaoFornecedores } from "./gestaoFornecedores"
import { gestaoFuncionario } from "./gestaoFuncionario"
import { gestaoProdutos
 } from "./gestaoProduto"

let ask = require("readline-sync")

export function menuGestao() {
    let menuGestaoLoop = true

    while (menuGestaoLoop) {
        console.log(`
      -----------------------------
      ---------- GESTAO ----------
      -----------------------------
      - 1. PRODUTOS       -
      - 2. FUNCIONARIOS     -
      - 3. FORNECEDORES     -
      - 4. GERAR RELATORIOS   -
      - 5. VOLTAR           -
      -----------------------------
      `)

        let userOptionMenuGestao = ask.questionInt('Qual deseja? ')

        switch (userOptionMenuGestao) {
            case 1:
                console.clear()
                gestaoProdutos()
                break

            case 2:
                console.clear()
                //Substituir pelas outras functions de menu GESTAO FUNCIONARIO
                gestaoFuncionario()
                break

            case 3:
                console.clear()
                //Substituir pelas outras functions de menu GESTAO FORNECEDORES
                gestaoFornecedores()
                break

            case 4:
                console.clear()
                //Substituir pelas outras functions de menu RELATORIOS
                break

            case 5:
                console.clear()
                //menu off
                menuGestaoLoop = false
                break

            default:
                console.log("OPCAO INVALIDA...")
                break
        }
    }
}

