//Importar Produto e Fornecedor
import { Fornecedor } from "./ClassFornecedor"
import { Produto } from "./ClassProduto"

export class CompraFornecedor {
    private idCompra: number;
    private fornecedorResponsavel: Fornecedor;
    private produtos: Array<Produto> = [];
    private valorTotal: number = 0;

    public constructor(idCompra: number, fornecedorResponsavel: Fornecedor) {}

    public addProdutos(produto: Produto): void {
        try {

            this.produtos.push(produto);
            this.valorTotal += produto.getValorCompra()
            this.valorTotal.toFixed(2)
        
        } catch(error) {
            console.error(`addProdutos(): src/model/CompraFornecedor.ts: 15: Um erro ocorreu: ${error}`);
        }
    }
};