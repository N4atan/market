//Importar Fornecedor

import { Fornecedor } from "./ClassFornecedor"


export class Produto {
    private id: number
    private nome: string
    private categoria: string
    private valorCompra: number
    private valorVenda: number
    private qtdEstoque: number
    private fornecedor: Fornecedor

    constructor(id: number, nome: string, categoria: string, valorCompra: number, valorVenda: number, qtdEstoque: number, fornecedor: Fornecedor){}




    setId(novoId: number):void {

      this.id = novoId

    }

    setNome(novoNome: string):void {

      this.nome = novoNome

    }

    setCategoria(novaCategoria: string):void {

      this.categoria = novaCategoria

    }

    setValorCompra(novoValorCompra: number):void {

      this.valorCompra = novoValorCompra

    }

    setValorVenda(novoValorVenda: number):void {

      this.valorVenda = novoValorVenda

    }

    setQtdEstoque(novaQuantidade):void {

      this.qtdEstoque = novaQuantidade

    }

    setFornecedor(novoFornecedor: Fornecedor){

      this.fornecedor = novoFornecedor

    }






    getValorCompra():number {

        return this.valorCompra

    }

    getQtdEstoque(): number {

        return this.qtdEstoque

    }

    getValorVenda():number {

        return this.valorVenda

    }

    toString(): string {

        return `

        IdProduto: ${this.id}

        Nome: ${this.nome}

        Categoria: ${this.categoria}

        Valor de Venda: ${this.valorVenda}

        Quantidade Disponivel: ${this.qtdEstoque}

        Fornecedor: ${this.fornecedor.getNome()}

        `;

    }




    

}
