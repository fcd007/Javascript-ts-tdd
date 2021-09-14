
function contadorTempo(dataEnvio, diasPrazo) {

    const MILISSEGUNDOS= 10000;
    const MINUTOS= 60;
    const HORA= 60;
    const DIA= 24;
    const DIA_MILIS=  DIA * (HORA * MINUTOS) * MILISSEGUNDOS;


    let dataAtual; // data atual do usuário
    let dataEnvioDoPedido; //data base para calcular o prazo
    let diasParaPrazoFinal; // dias para adicionar a data atual - contagem prazo
    let diferenca;
    let tempoRestante;

    dataAtual = new Date();
    dataEnvioDoPedido = new Date(dataEnvio);
    diasParaPrazoFinal = new Date(diasPrazo);
    // calcula a diferenca entra as datas e pega em milissegundos;
    diferenca = diasParaPrazoFinal.getTime() - dataAtual.getTime();

    //validações para calculo
    if(diferenca > 0) {
        tempoRestante = Math.floor(diferenca);
        console.log("tempo restante: " + tempoRestante);
    }else if(diferenca < 0) {
        console.log("Prazo finalizado - setar 00:00:00 ou não mostrar nada");
    }
}
