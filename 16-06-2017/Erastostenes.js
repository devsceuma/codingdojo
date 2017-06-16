class Erastostenes{

    
    
    constructor(){
        this.alvo = 81
        this.listaNumeros =[]
        this.adicionaValoresNaLista()
        this.listaDeMultiplus = []
    }


    adicionaValoresNaLista(){
        for(let i = 1;i<Math.sqrt(this.alvo);i++){
            this.listaNumeros.push(i+1)
        }
        this.encontrarNumerosPrimos(this.listaNumeros);
    }


    encontrarNumerosPrimos(listaNumeros){
        const numeroCorrente = 2;
        listaNumeros.forEach(i => {
            if(i % numeroCorrente !== 0){
                console.log(i+" Os primo");
            } else {
                console.log(i+"Mult de 2");
            }
        })
        console.log(this.listaDeMultiplus);
    }

}