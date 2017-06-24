class Erastostenes{ 
    
    constructor(){
        this.valFinal = 81
        this.maiorValChecado
        this.listaNumeros = []
        this.listNumerosChecar = []
        this.valorInicial = 1;
        this.listaAuxiliar = []
        this.adicionaValoresNaLista()
        this.criarListaDeNumeros()  
        this.extrairNumerosPrimos()
       
    }

    adicionaValoresNaLista(){
      //Esse é o maior valor a ser checado na operação !
       this.maiorValChecado = Math.sqrt(this.valFinal);
    }

    criarListaDeNumeros(){
       for(let i = this.valorInicial; i <= this.valFinal; i++ ){
            this.listaNumeros.push(i);
            if(i <= this.maiorValChecado){
                this.listNumerosChecar.push(i);
            }
       }
    }

    extrairNumerosPrimos(){
            for(let indexList = this.listaNumeros[1]; indexList <= this.listaNumeros.length; indexList++){
              let primo =  this.verificaSeEPrimao(indexList);
              if(primo == true)
              this.listaAuxiliar.push(indexList);
        }
            console.log(this.listaAuxiliar);
    }

    verificaSeEPrimao(num){
        if(num!=1){
        for (var i = 2; i < num; i++)
            if (num % i == 0) return false;
        return num !== 1;
        }
    }





}