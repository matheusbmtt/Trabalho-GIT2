let ask = require('readline-sync')

export interface Login{

constructor()
escolha()
login()
menu()
cadastro()

}


export class Login implements Login{

    cadastro(){}
    menu(){
        
        console.log(`${console.clear()}                                       ---------------------------------------------------------------------\n
                                                                        SEJA BEM VINDO\n
                                                                              AO\n
                                                                        BANCO BANRISUL\n
                                           ---------------------------------------------------------------------
                                           
                                                                   FAÇA SEU LOGIN - 1
                                                                   NOVO CADASTRO - 2`)
    }

    public escolha(){

        let continua = true

            while(continua){

                this.menu()

                let perguntaEscolha = ask.question('ESCOLHA UMA OPÇÃO: ')

                switch(perguntaEscolha){

                    case 1:
                        this.login()
                    break
                    case 2: 
                        this.cadastro()
                    break

                    default:
                    console.log('escolha uma opção válida!')
                }
            }
        
        
    


}
    }  // vAmoooooooooooo
    

