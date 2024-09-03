export class Fornecedor {
    constructor(public id: number, public cnpj: number, public nome: string) {}

    setId(novoID: number):void      {this.id = novoID}
    setCnpj(novoCNPJ: number):void  {this.cnpj = novoCNPJ}
    setNome(novoNOME: string):void  {this.nome = novoNOME}
    getNome():string                {return this.nome}
    getID():number                  {return this.id}

    toString(): string {
        return `\
        Fornecedor: ${this.nome.padEnd(30)} ID: ${this.id}
        CNPJ: ${this.cnpj}
        `
    }
}