const MILISSEGUNDOS = 1000;
    const SEGUNDOS = 60;
    const MINUTOS = 60; 
    const UM_DIA = 24;
    const UM_DIA_MILS = (UM_DIA*MINUTOS*SEGUNDOS*MILISSEGUNDOS);

    let dataAtual = new Date(); // data atual do usuário
    let dataEnvioDoPedido = new Date(2021, 6, 11); //data base para calcular o prazo
    let diasPrazoFinal = new Date(); // dias para adicionar a data atual - contagem prazo
    diasPrazoFinal.setDate(dataEnvioDoPedido.getDate() + 2); //adicionar o prazo em dias
    let diferencaEntreDatas = diasPrazoFinal.getTime() - dataEnvioDoPedido.getTime();
    let tempoRestante = diferencaEntreDatas;
    console.log(diferencaEntreDatas);