class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
    
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event){
        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-')); ou new Date(this._inputData.value.replace(/-/g, ',')); trocar o '-' por virgúla. o g é globlal todas as ocorencias daquele caractere
        let data = new Date(
            ...this._inputData.value.split('-').map(function (item, indice) {
                return item - indice % 2; // Modulo = % .Exemplo: 0 % 2 = 0; 1 % 2 = 1; 2 % 2 = 0;
                //Ou 
                // if(indice == 1){
                //     return item - 1;
                // }
                //return item;
            })
        ); // Os "..." serem para referenciar as posições do array que o split gera então . = 1, .. = 2 e ... = 3
        console.log(data);
        
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );
        // console.log(negociacao);        
    }
}