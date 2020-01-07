class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);
    
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event){
        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-')); ou new Date(this._inputData.value.replace(/-/g, ',')); trocar o '-' por virgúla. o g é globlal todas as ocorencias daquele caractere
        // let data = new Date(
        //     ...this._inputData.value.split('-').map((item, indice) => item - indice % 2) { map função que pega o array criado pelo split; trocado o function por => chamado de Arrow Functions e não precisa usar o return
        //         return item - indice % 2;  Modulo = % .Exemplo: 0 % 2 = 0; 1 % 2 = 1; 2 % 2 = 0;
        //         Ou 
        //          if(indice == 1){
        //              return item - 1;
        //         }
        //         return item;
        //     })
        // );  antes do array passado como parâmetro. Cada item do array será passado para cada parâmetro recebido pela função. Inclusive isso vale para o constructor de uma classe.
        
        //Multiplica os numeros por 2 em que o Modulo deles seja 0
        // let numeros = [3,2,11,20,8,7];
        // let aux = numeros.map(item => item % 2 ? item * 2 : item);
        // console.log(aux);    

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(DateHelper.textoParaData(this._inputData.value),
                              this._inputQuantidade.value,
                              this._inputValor.value
        );        
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}