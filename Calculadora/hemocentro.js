// Sistema de Cadastro de Doadores de Sangue
const readlineSync = require('readline-sync');
let doadores = [];
// Função para cadastrar um novo doador no sistema
function cadastrarDoador() {
    console.log("===== CADASTRO DE DOADOR =====");
    let nome = readlineSync.question("Nome: ");
    let idade = (readlineSync.question("Idade: "));
    let peso = (readlineSync.question("Peso (kg): "));
    let tipoSanguineo = readlineSync.question("Tipo Sanguineo: ");
    let ultimaDoacao = readlineSync.question("Data da ultima doacao (dd/mm/aaaa): ");
    // cria um objeto que armazena os dados do usuario
    let doador = {
        nome: nome,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        ultimaDoacao: ultimaDoacao
    };
// adiciona ao fim da array "doador" os novos dados
    doadores.push(doador);
    console.log("Doador cadastrado com sucesso!\n");
}
//Função para listar doadores 
function listarDoadores() {
    console.log("===== LISTAGEM DE DOADORES =====");
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
    console.log("-----------------------------------------------------------------");
    // loop FOR para percorrer minha array "doador"
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i]; //AQUI EU DECLARO QUE O DOADOR É IGUAL AO OBJETO DO INDICE[I], ENTAO ESSA VAR DOADOR VIRA UM OBJETO 
        //Para aparecer os dados do doador.
        
        // Usamos padEnd para adicionar caracterios a string desejada   
    console.log(`${doador.nome.padEnd(17, " ")}|   ${doador.idade.padEnd(4, " ")}|   ${doador.peso.padEnd(3, " ")}| ${doador.tipoSanguineo.padEnd(13, " ")}  |  ${doador.ultimaDoacao.padEnd(15, " ")}`);
    }
    console.log("-----------------------------------------------------------------\n");
}

// Função para buscar doadores por tipo sanguíneo
function buscarPorTipoSanguineo() {
    console.log("===== BUSCAR DOADOR POR TIPO SANGUÍNEO =====");
    let tipoSanguineo = readlineSync.question("Digite o tipo sanguineo desejado: ");
    
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
    console.log("-----------------------------------------------------------------");
    // loop FOR para percorrer minha array "doador"
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];//AQUI EU DECLARO QUE O DOADOR É IGUAL AO OBJETO DO INDICE[I], ENTAO ESSA VAR DOADOR VIRA UM OBJETO 
        //Para aparecer os dados do doador.
        if (doador.tipoSanguineo === tipoSanguineo) { 
            // Usamos padEnd para adicionar caracterios a string desejada  
            console.log(`${doador.nome.padEnd(17, " ")}|   ${doador.idade.padEnd(4, " ")}|   ${doador.peso.padEnd(3, " ")}| ${doador.tipoSanguineo.padEnd(13, " ")}  |  ${doador.ultimaDoacao.padEnd(15, " ")}`);
        }
    }
    console.log("-----------------------------------------------------------------\n");
}

// Função para buscar doadores por data da última doação
function buscarPorUltimaDoacao() {
    console.log("===== BUSCAR DOADOR POR DATA DA ÚLTIMA DOAÇÃO =====");
    let data = readlineSync.question("Digite a data desejada (aaaa): ");
    
    console.log("------------------------");
    console.log("RESULTADO DA BUSCA:");
    console.log("------------------------");
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO");
    console.log("-----------------------------------------------------------------");
    for (let i = 0; i < doadores.length; i++) {
        let doador = doadores[i];//AQUI EU DECLARO QUE O DOADOR É IGUAL AO OBJETO DO INDICE[I], ENTAO ESSA VAR DOADOR VIRA UM OBJETO 
        //Para aparecer os dados do doador.
        
        // Usamos slice para buscar os ultimos 4 caracteres da 'data'. Transformamos as strings 'ultimaDoacao' e 'data' para Number, assim conseguimos usar os comparadores necessarios.
        if (Number(doador.ultimaDoacao.slice(-4)) <= Number(data)) { 
            console.log(`${doador.nome.padEnd(17, " ")}|   ${doador.idade.padEnd(4, " ")}|   ${doador.peso.padEnd(3, " ")}| ${doador.tipoSanguineo.padEnd(13, " ")}  |  ${doador.ultimaDoacao.padEnd(15, " ")}`);
        }
    }
    console.log("-----------------------------------------------------------------\n");
}

// Função principal do Sistema
function main() {
    let opcao = '';
// loop While para o sistema rodar até o Usuario escolher a opeção "5"
    while (opcao !== '5') {
        console.log("===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====");
        console.log("1. Cadastrar doador");
        console.log("2. Listar doadores");
        console.log("3. Buscar doador por tipo sanguíneo");
        console.log("4. Buscar doador por data da última doação");
        console.log("5. Sair");
        opcao = readlineSync.question("Escolha uma opcao: ");

        switch(opcao) {
            case '1':
                cadastrarDoador();
                break;
            case '2':
                listarDoadores();
                break;
            case '3':
                buscarPorTipoSanguineo();
                break;
            case '4':
                buscarPorUltimaDoacao();
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
        }
    }
}

// Invocando a função principal para iniciar o sistema
main();