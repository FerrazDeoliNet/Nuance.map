var dicionario = {
    "descriminalizado": { titulo: "Descriminalização", texto: "Deixar de tratar uma conduta como crime. A pessoa não vai presa, mas a prática pode continuar proibida com multas administrativas." },
    "regulação": { titulo: "Regulação Estatal", texto: "Regras que o Estado cria para controlar e fiscalizar empresas privadas, protegendo o consumidor e a concorrência." },
    "privatizações": { titulo: "Privatização", texto: "Venda de empresas públicas para a iniciativa privada. Pode melhorar a eficiência ou aumentar preços." },
    "flexibilizadas": { titulo: "Flexibilização", texto: "Tornar as leis trabalhistas mais flexíveis, permitindo negociação direta entre patrão e empregado." },
    "transferência de renda": { titulo: "Transferência de Renda", texto: "Programas sociais que dão dinheiro diretamente a famílias de baixa renda (ex: Bolsa Família)." },
    "cotas": { titulo: "Cotas", texto: "Reserva de vagas para grupos marginalizados em universidades e concursos públicos." },
    "teto de gastos": { titulo: "Teto de Gastos", texto: "Regra que limita o crescimento dos gastos do governo para controlar a dívida pública." },
    "monopólio": { titulo: "Monopólio Estatal", texto: "Quando o governo é o único fornecedor de um serviço ou produto específico." },
    "pena de morte": { titulo: "Pena de Morte", texto: "Execução de um condenado pelo Estado como punição por crime grave." },
    "porte de armas": { titulo: "Porte de Armas", texto: "Direito do cidadão de carregar arma de fogo. Debate entre legítima defesa e segurança pública." },
    "intervenção militar": { titulo: "Intervenção Militar", texto: "Forças Armadas assumindo o controle de áreas civis, geralmente por crise de segurança." },
    "censura": { titulo: "Censura", texto: "Controle ou proibição de informações e opiniões pelo governo." },
    "voto obrigatório": { titulo: "Voto Obrigatório", texto: "Comparecimento às urnas é uma obrigação legal, sujeita a multas." },
    "regulamentação": { titulo: "Regulamentação", texto: "Criar regras detalhadas. No caso de drogas, permite a venda e uso controlados pelo Estado." }
};

var bancoPerguntas = [
    { texto: "O Estado deve ter um papel forte na <span class='keyword' data-term='regulação'>regulação</span> da economia?", eixo: "econ", cat: "economia", expl: "Regulação é o nível de intervenção do governo nas empresas. Um papel forte cria muitas regras e fiscalização.", inter: "Só em setores essenciais" },
    { texto: "Serviços essenciais como saúde e educação devem ser 100% gratuitos?", eixo: "econ", cat: "estado", expl: "Questiona se o Estado deve arcar com 100% do custo, sem cobrança de mensalidades.", inter: "Apenas para os mais pobres" },
    { texto: "A carga tributária sobre os mais ricos deveria ser maior?", eixo: "econ", cat: "economia", expl: "Trata do aumento de impostos sobre grandes fortunas como forma de redistribuir renda.", inter: "Apenas um pouco mais" },
    { texto: "<span class='keyword' data-term='privatizações'>Privatizações</span> de estatais são benéficas?", eixo: "econ", cat: "economia", inverter: true, expl: "Vender empresas controladas pelo governo para a iniciativa privada.", inter: "Depende do setor" },
    { texto: "As leis trabalhistas devem ser mais <span class='keyword' data-term='flexibilizadas'>flexibilizadas</span>?", eixo: "econ", cat: "economia", inverter: true, expl: "Permitir que acordos entre patrões e empregados se sobreponham à lei.", inter: "Apenas em momentos de crise" },
    { texto: "Programas de <span class='keyword' data-term='transferência de renda'>transferência de renda</span> devem ser ampliados?", eixo: "econ", cat: "estado", expl: "Aumentar a quantidade de dinheiro ou o número de pessoas atendidas.", inter: "Apenas o necessário" },
    { texto: "O governo deve criar <span class='keyword' data-term='cotas'>cotas</span> raciais e sociais?", eixo: "econ", cat: "costumes", expl: "Reservar um percentual de vagas em universidades e concursos públicos.", inter: "Apenas cotas sociais (renda)" },
    { texto: "O país deve ter um <span class='keyword' data-term='teto de gastos'>teto de gastos</span> rigoroso?", eixo: "econ", cat: "economia", inverter: true, expl: "Uma regra que impede o governo de gastar mais do que um limite.", inter: "Sim, mas com exceções" },
    { texto: "O Estado deveria ter o <span class='keyword' data-term='monopólio'>monopólio</span> de setores estratégicos?", eixo: "econ", cat: "estado", expl: "Manter setores como petróleo e energia exclusivamente nas mãos do governo.", inter: "Apenas em casos raros" },
    { texto: "O livre mercado é a melhor forma de gerar riqueza?", eixo: "econ", cat: "economia", inverter: true, expl: "Acreditar que a economia funciona melhor quando o governo não interfere.", inter: "Com alguma regulação" },
    { texto: "O governo deve subsidiar o transporte público?", eixo: "econ", cat: "estado", expl: "Usar o dinheiro dos impostos para baratear a passagem de ônibus e metrô.", inter: "Apenas para estudantes" },
    { texto: "Empresas deveriam pagar menos impostos para gerar mais empregos?", eixo: "econ", cat: "economia", inverter: true, expl: "A teoria de que reduzir a carga tributária sobra mais dinheiro para contratar.", inter: "Apenas pequenas empresas" },
    { texto: "O Estado deve investir pesado em energia renovável?", eixo: "econ", cat: "ambiente", expl: "Usar dinheiro público ou dar incentivos fiscais para construir parques solares.", inter: "Se não aumentar impostos" },
    { texto: "A previdência social deve ser administrada apenas pelo setor privado?", eixo: "econ", cat: "estado", inverter: true, expl: "Substituir o INSS por contas individuais em bancos ou seguradoras.", inter: "Misto (público e privado)" },
    { texto: "O salário mínimo deveria ser definido por lei federal?", eixo: "econ", cat: "economia", expl: "Defender um valor único para todo o país definido pelo Congresso.", inter: "Com participação dos sindicatos" },
    { texto: "Bancos estatais são essenciais para o desenvolvimento?", eixo: "econ", cat: "estado", expl: "Defender o papel de bancos como Caixa e Banco do Brasil.", inter: "Apenas para certos setores" },
    { texto: "O agronegócio deve receber mais incentivos?", eixo: "econ", cat: "economia", inverter: true, expl: "Apoiar que grandes produtores recebam mais crédito fácil.", inter: "Igualar os incentivos" },
    { texto: "O SUS deveria ser gerido por empresas privadas?", eixo: "econ", cat: "estado", inverter: true, expl: "Transferir a administração de hospitais públicos para empresas particulares.", inter: "Apenas parte da gestão" },
    { texto: "Impostos sobre grandes heranças deveriam ser mais altos?", eixo: "econ", cat: "economia", expl: "Aumentar o ITCMD para pessoas que herdam grandes fortunas.", inter: "Sim, um pouco" },
    { texto: "A exploração de recursos naturais deve ser aberta a empresas estrangeiras?", eixo: "econ", cat: "ambiente", inverter: true, expl: "Permitir que empresas de fora explorem áreas naturais brasileiras.", inter: "Com restrições rígidas" },
    { texto: "O casamento entre pessoas do mesmo sexo deve ser reconhecido?", eixo: "autoridade", cat: "costumes", inverter: true, expl: "Garantir direitos civis e jurídicos no papel de um casamento.", inter: "Apenas união estável" },
    { texto: "A escola deve abordar educação sexual abertamente?", eixo: "autoridade", cat: "costumes", inverter: true, expl: "Permitir que professores falem sobre corpo, gênero e consentimento.", inter: "Depende da idade do aluno" },
    { texto: "O uso de maconha deveria ser <span class='keyword' data-term='descriminalizado'>descriminalizado</span>?", eixo: "autoridade", cat: "seguranca", inverter: true, expl: "Deixar de tratar o porte para uso próprio como crime.", inter: "Apenas uso medicinal" },
    { texto: "O Estado deve poder aplicar a <span class='keyword' data-term='pena de morte'>pena de morte</span>?", eixo: "autoridade", cat: "seguranca", expl: "Permitir que a Justiça condene criminosos à execução.", inter: null },
    { texto: "O <span class='keyword' data-term='porte de armas'>porte de armas</span> por civis deveria ser facilitado?", eixo: "autoridade", cat: "seguranca", inverter: true, expl: "Reduzir as exigências para comprar e andar com uma arma de fogo.", inter: "Apenas no campo / zona rural" },
    { texto: "A <span class='keyword' data-term='intervenção militar'>intervenção militar</span> é válida para segurança?", eixo: "autoridade", cat: "seguranca", expl: "Usar as Forças Armadas para patrulhar cidades e prender pessoas.", inter: "Apenas em crises extremas" },
    { texto: "O governo deve poder aplicar <span class='keyword' data-term='censura'>censura</span> a conteúdos?", eixo: "autoridade", cat: "costumes", expl: "Dar ao Estado o poder de proibir a publicação de livros, músicas, notícias.", inter: "Apenas para crimes (Fake news)" },
    { texto: "O <span class='keyword' data-term='voto obrigatório'>voto obrigatório</span> é positivo para a democracia?", eixo: "autoridade", cat: "estado", expl: "Manter a regra onde o cidadão é multado se não comparecer às urnas.", inter: null },
    { texto: "O Estado deve monitorar dados de cidadãos?", eixo: "autoridade", cat: "seguranca", expl: "Permitir que o governo acesse conversas e localizações para investigar crimes.", inter: "Apenas com ordem judicial" },
    { texto: "A maconha deveria ter <span class='keyword' data-term='regulamentação'>regulamentação</span> completa (venda legal)?", eixo: "autoridade", cat: "seguranca", inverter: true, expl: "Permitir que empresas plantem e vendam maconha legalmente.", inter: "Apenas venda medicinal" },
    { texto: "Pessoas transgênero devem usar o banheiro do gênero com o qual se identificam?", eixo: "autoridade", cat: "costumes", inverter: true, expl: "Garantir que uma pessoa trans use o banheiro da sua identidade de gênero.", inter: "Banheiros unissex" },
    { texto: "A adoção de crianças por casais homoafetivos deve ser permitida?", eixo: "autoridade", cat: "costumes", inverter: true, expl: "Garantir que casais do mesmo sexo tenham o direito legal de adotar.", inter: null },
    { texto: "O Estado deve intervir em empresas para evitar demissões?", eixo: "autoridade", cat: "estado", expl: "Proibir que empresas privadas demitam em massa sem negociar antes.", inter: "Apenas em grandes crises" },
    { texto: "A eutanásia deveria ser permitida em casos terminais?", eixo: "autoridade", cat: "costumes", inverter: true, expl: "Permitir que um doente terminal escolha encerrar a própria vida.", inter: "Apenas com laudos médicos" },
    { texto: "O aborto deveria ser proibido em todos os casos?", eixo: "autoridade", cat: "costumes", expl: "Tornar o aborto crime mesmo em situações de estupro ou risco de morte.", inter: "Apenas com exceções (estupro)" },
    { texto: "Manifestações que bloqueiam ruas devem ser reprimidas?", eixo: "autoridade", cat: "seguranca", expl: "Autorizar o uso da força policial para desobstruir avenidas ocupadas.", inter: "Apenas se afetar hospitais" },
    { texto: "O governo deve exigir 'passaporte de vacinação'?", eixo: "autoridade", cat: "estado", expl: "Exigir a carteira de vacinação em dia para entrar em eventos ou viajar.", inter: null },
    { texto: "A prostituição deveria ser regulamentada?", eixo: "autoridade", cat: "costumes", inverter: true, expl: "Reconhecer a prostituição como uma profissão legal com direitos trabalhistas.", inter: null },
    { texto: "O Estado deve proibir jogos de azar e apostas online?", eixo: "autoridade", cat: "costumes", expl: "Manter a proibição de cassinos, bingos e sites de apostas.", inter: "Apenas regular o mercado" },
    { texto: "Cidadãos deveriam ter o direito de gravar policiais?", eixo: "autoridade", cat: "seguranca", inverter: true, expl: "Garantir que qualquer pessoa possa filmar a ação de policiais nas ruas.", inter: null }
];

var tutorialPassos = [
    { icon: "🧭", title: "Bem-vindo ao Nuance.map!", text: "Este app mapeia sua posição política de forma imparcial, fugindo dos extremos." },
    { icon: "🎲", title: "Perguntas Sorteadas", text: "A cada teste, 20 perguntas são sorteadas. Elas avaliam Economia, Costumes e Estado." },
    { icon: "⚖️", title: "Sem Extremos", text: "Se uma pergunta tiver nuances, um botão do meio aparecerá. Ele vale meio ponto." },
    { icon: "🧠", title: "Contexto e Aprendizado", text: "Toque nas palavras sublinhadas para entender o contexto. A cada teste, o algoritmo aprende com você." }
];

var tutorialAtual = 0;
var perguntasRodada = [];
var indiceAtual = 0;
var historicoRespostas = []; 
var pontosRodadaEcon = 0;
var pontosRodadaAut = 0;
var pontosCategoria = { economia: 0, costumes: 0, estado: 0, ambiente: 0, seguranca: 0 };
var totalCategoria = { economia: 0, costumes: 0, estado: 0, ambiente: 0, seguranca: 0 };
var usouIntermediario = 0;

var dbHistorico = { totalEcon: 0, totalAut: 0, rodadas: 0 }; 
var historicoRodadas = []; 
var currentResult = { x: 0, y: 0, label: "", explicacao: "", titulo: "" };

function irParaHome() {
    document.getElementById('screen-result').classList.add('hidden');
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-tutorial').classList.add('hidden');
    document.getElementById('screen-start').classList.remove('hidden');
    
    document.getElementById('btn-home').classList.add('hidden');
    document.getElementById('btn-sidebar').classList.remove('hidden');
    atualizarTelaInicial();
}

function abrirSidebar() {
    document.getElementById('sidebar').classList.add('ativo');
    document.getElementById('sidebar-overlay').classList.add('ativo');
    desenharHistoricoSidebar();
}

function fecharSidebar() {
    document.getElementById('sidebar').classList.remove('ativo');
    document.getElementById('sidebar-overlay').classList.remove('ativo');
}

function desenharHistoricoSidebar() {
    var list = document.getElementById('history-list');
    list.innerHTML = "";
    
    if (historicoRodadas.length === 0) {
        list.innerHTML = "<div class='sidebar-empty'>Nenhum teste concluído ainda.</div>";
        return;
    }

    for (var i = historicoRodadas.length - 1; i >= 0; i--) {
        var item = historicoRodadas[i];
        var div = document.createElement('div');
        div.className = 'history-item';
        div.setAttribute('data-index', i);
        div.onclick = function() {
            var idx = parseInt(this.getAttribute('data-index'));
            fecharSidebar();
            mostrarResultadoHistorico(idx);
        };
        
        div.innerHTML = "<h4>Teste " + (i + 1) + " - " + item.label + "</h4>" +
                        "<p>" + item.data + " | Econ: " + item.x.toFixed(1) + " | Aut: " + item.y.toFixed(1) + "</p>";
        list.appendChild(div);
    }
}

function mostrarResultadoHistorico(index) {
    var item = historicoRodadas[index];
    
    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-tutorial').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');
    
    document.getElementById('btn-home').classList.remove('hidden');
    document.getElementById('btn-sidebar').classList.add('hidden');

    document.getElementById('result-title').innerText = "Resultado (Teste " + (index + 1) + ")";
    document.getElementById('result-badge').innerText = item.label;
    document.getElementById('user-title').innerText = '"' + item.titulo + '"';
    document.getElementById('result-desc').innerText = item.explicacao;
    document.getElementById('stats-desc').innerText = "Registrado em " + item.data;
    
    currentResult = { x: item.x, y: item.y, label: item.label, explicacao: item.explicacao, titulo: item.titulo };
    drawChart(item.x, item.y);
    drawRadarChart();
}

function mudarTema(isChecked) {
    if (isChecked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    if (!document.getElementById('screen-result').classList.contains('hidden')) {
        drawChart(currentResult.x, currentResult.y);
        drawRadarChart();
    }
}

function apagarHistorico() {
    dbHistorico = { totalEcon: 0, totalAut: 0, rodadas: 0 };
    historicoRodadas = [];
    localStorage.removeItem('nuance_db');
    localStorage.removeItem('nuance_historico');
    desenharHistoricoSidebar();
    atualizarTelaInicial();
    fecharSidebar();
}

function iniciarTeste() {
    document.getElementById('screen-start').classList.add('hidden');
    document.getElementById('screen-result').classList.add('hidden');
    
    document.getElementById('btn-home').classList.remove('hidden');
    document.getElementById('btn-sidebar').classList.add('hidden');

    tutorialAtual = 0;
    desenharTutorial();
    document.getElementById('screen-tutorial').classList.remove('hidden');
}

function desenharTutorial() {
    var content = document.getElementById('tutorial-content');
    var step = tutorialPassos[tutorialAtual];
    content.innerHTML = "<div class='tutorial-icon'>" + step.icon + "</div>" +
                        "<div class='tutorial-title'>" + step.title + "</div>" +
                        "<div class='tutorial-text'>" + step.text + "</div>";
    var dotsHTML = "";
    for (var i = 0; i < tutorialPassos.length; i++) {
        dotsHTML += "<div class='dot " + (i === tutorialAtual ? 'active' : '') + "'></div>";
    }
    document.getElementById('tutorial-dots').innerHTML = dotsHTML;
    var btnNext = document.getElementById('btn-tutorial-next');
    btnNext.innerText = (tutorialAtual === tutorialPassos.length - 1) ? "Começar Teste" : "Próximo";
}

function proximoTutorial() {
    tutorialAtual++;
    if (tutorialAtual >= tutorialPassos.length) { iniciarJogoReal(); } 
    else { desenharTutorial(); }
}

function pularTutorial() { iniciarJogoReal(); }

function iniciarJogoReal() {
    document.getElementById('screen-tutorial').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');
    
    var econ = [], aut = [];
    for (var i = 0; i < bancoPerguntas.length; i++) {
        if (bancoPerguntas[i].eixo === 'econ') econ.push(bancoPerguntas[i]);
        if (bancoPerguntas[i].eixo === 'autoridade') aut.push(bancoPerguntas[i]);
    }
    
    var sorteadasEcon = shuffle(econ).slice(0, 10);
    var sorteadasAut = shuffle(aut).slice(0, 10);
    perguntasRodada = shuffle(sorteadasEcon.concat(sorteadasAut));
    
    indiceAtual = 0;
    historicoRespostas = [];
    pontosRodadaEcon = 0;
    pontosRodadaAut = 0;
    pontosCategoria = { economia: 0, costumes: 0, estado: 0, ambiente: 0, seguranca: 0 };
    totalCategoria = { economia: 0, costumes: 0, estado: 0, ambiente: 0, seguranca: 0 };
    usouIntermediario = 0;
    
    loadQuestion();
}

function voltarMenu() { irParaHome(); }

function voltarPergunta() {
    if (historicoRespostas.length > 0) {
        var ultima = historicoRespostas.pop();
        if (ultima.eixo === 'econ') pontosRodadaEcon -= ultima.pontos;
        else pontosRodadaAut -= ultima.pontos;
        
        var c = ultima.cat;
        if(c) {
            pontosCategoria[c] -= ultima.pontos;
            totalCategoria[c] -= 1;
        }
        if (ultima.pontos === 0.5) usouIntermediario--;

        indiceAtual--;
        loadQuestion();
    }
}

function responder(valorBruto) {
    var q = perguntasRodada[indiceAtual];
    var valor = valorBruto;
    
    if (valorBruto === 0.5) usouIntermediario++;

    if (q.inverter) { valor = 1 - valor; }
    
    historicoRespostas.push({ eixo: q.eixo, pontos: valor, cat: q.cat || 'estado' });
    
    if (q.eixo === 'econ') pontosRodadaEcon += valor;
    else pontosRodadaAut += valor;

    var c = q.cat || 'estado';
    pontosCategoria[c] += valor;
    totalCategoria[c] += 1;

    indiceAtual++;
    loadQuestion();
}

function abrirComoAssim() {
   if (!perguntasRodada[indiceAtual]) return;
    var q = perguntasRodada[indiceAtual];
    document.getElementById('modal-title').innerText = "Contexto da Pergunta";
    document.getElementById('modal-desc').innerText = q.expl;
    document.getElementById('modal').classList.add('ativo');
}

function abrirPalavra(termo) {
    var info = dicionario[termo];
    if (info) {
        document.getElementById('modal-title').innerText = info.titulo;
        document.getElementById('modal-desc').innerText = info.texto;
        document.getElementById('modal').classList.add('ativo');
    }
}

function fecharModal() { document.getElementById('modal').classList.remove('ativo'); }

function fecharFora(event) {
    if (event && event.target && event.target.id === 'modal') { fecharModal(); }
}

function atualizarTelaInicial() {
    if(dbHistorico.rodadas > 0) {
        document.getElementById('historico-info').innerText = "Você já fez " + dbHistorico.rodadas + " teste(s).";
        document.getElementById('historico-info').classList.remove('hidden');
    } else {
        document.getElementById('historico-info').classList.add('hidden');
    }
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        var temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

function loadQuestion() {
    if (indiceAtual >= perguntasRodada.length) { 
        finalizarTeste(); 
        return; 
    }
    
    document.getElementById('progress-text').innerText = "Pergunta " + (indiceAtual + 1) + " de " + perguntasRodada.length;
    var containerPergunta = document.getElementById('question-text');
    containerPergunta.innerHTML = "<div class='text-content'>" + perguntasRodada[indiceAtual].texto + "</div>";

    var keywords = containerPergunta.querySelectorAll('.keyword');
    for (var i = 0; i < keywords.length; i++) {
        keywords[i].onclick = function(e) {
            if (e) e.stopPropagation();
            abrirPalavra(this.getAttribute('data-term'));
        };
    }

    document.getElementById('btn-voltar').style.visibility = (indiceAtual > 0) ? 'visible' : 'hidden';

    var btnInter = document.getElementById('btn-intermediario');
    var interText = perguntasRodada[indiceAtual].inter;
    if (interText) {
        btnInter.innerText = interText;
        btnInter.classList.remove('hidden');
    } else {
        btnInter.classList.add('hidden');
    }
}

function finalizarTeste() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-result').classList.remove('hidden');

    dbHistorico.totalEcon += pontosRodadaEcon;
    dbHistorico.totalAut += pontosRodadaAut;
    dbHistorico.rodadas += 1;

    calcularERenderizarResultado(true); 
    try {
        localStorage.setItem('nuance_db', JSON.stringify(dbHistorico));
        localStorage.setItem('nuance_historico', JSON.stringify(historicoRodadas));
    } catch(e) {}
}

function gerarBadge(x, y, totalInt) {
    if (totalInt > 5) return "O Pragmático Moderado"; 
    if (x < -5 && y < -5) return "O Ativista Libertário";
    if (x < -5 && y > 5) return "O Coletivista Autoritário";
    if (x > 5 && y < -5) return "O Liberal Clássico";
    if (x > 5 && y > 5) return "O Conservador de Ordem";
    if (x >= -2 && x <= 2 && y >= -2 && y <= 2) return "O Centrista Equilibrado";
    return "O Cidadão Independente";
}

function calcularERenderizarResultado(isNew) {
    var maxEcon = dbHistorico.rodadas * 10;
    var maxAut = dbHistorico.rodadas * 10;
    var x = ((dbHistorico.totalEcon / maxEcon) * 20) - 10;
    var y = ((dbHistorico.totalAut / maxAut) * 20) - 10;

    var classificacao = "", explicacao = "";

    if (x < -2 && y < -2) { classificacao = "Esquerda Libertária"; explicacao = "Você defende forte intervenção na economia, mas pouca na vida pessoal."; }
    else if (x < -2 && y > 2) { classificacao = "Esquerda Autoritária"; explicacao = "Você acredita em um Estado forte na economia e no controle da sociedade."; }
    else if (x > 2 && y < -2) { classificacao = "Direita Libertária"; explicacao = "Você prefere o livre mercado e mínima intervenção na vida privada."; }
    else if (x > 2 && y > 2) { classificacao = "Direita Autoritária"; explicacao = "Você defende a liberdade econômica, mas quer forte ordem na sociedade."; }
    else if (x <= 2 && x >= -2 && y <= 2 && y >= -2) { classificacao = "Centro"; explicacao = "Posições moderadas ou equilibradas."; }
    else if (x <= 2 && x >= -2) { classificacao = (y > 0 ? "Centro Autoritário" : "Centro Libertário"); explicacao = "Economia equilibrada, mas inclinações fortes sobre liberdade."; }
    else { classificacao = (x > 0 ? "Centro-Direita" : "Centro-Esquerda"); explicacao = "Posições claras na economia, mas moderadas sobre costumes."; }

    var titulo = gerarBadge(x, y, usouIntermediario);

    document.getElementById('result-title').innerText = "Seu Resultado";
    document.getElementById('result-badge').innerText = classificacao;
    document.getElementById('user-title').innerText = '"' + titulo + '"';
    document.getElementById('result-desc').innerText = explicacao;
    document.getElementById('stats-desc').innerText = "Baseado em " + dbHistorico.rodadas + " teste(s).";

    currentResult = { x: x, y: y, label: classificacao, explicacao: explicacao, titulo: titulo };

    if (isNew) {
        var agora = new Date();
        var dataFormatada = agora.toLocaleDateString('pt-BR') + " às " + agora.toLocaleTimeString('pt-BR').substr(0,5);
        historicoRodadas.push({
            label: classificacao,
            explicacao: explicacao,
            titulo: titulo,
            x: x,
            y: y,
            data: dataFormatada
        });
    }

    drawChart(x, y);
    drawRadarChart();
}

function drawChart(userX, userY) {
    var canvas = document.getElementById('graphCanvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width, height = canvas.height;
    var centerX = width / 2, centerY = height / 2;
    var scale = (width / 2) - 40; 

    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var bgColor = isDark ? "#1C1C1E" : "#FFFFFF";
    var gridColor = isDark ? "#2C2C2E" : "#F2F2F7";
    var axisColor = isDark ? "#3A3A3C" : "#C6C6C8";
    var textColor = isDark ? "#FFFFFF" : "#8E8E93";
    var pointColor = "#FF3B30"; 

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
    ctx.fillRect(centerX, 0, width/2, centerY); 
    ctx.fillRect(0, centerY, centerX, height/2); 

    ctx.beginPath();
    for(var i = 1; i < 4; i++) {
        var step = scale / 2 * i;
        ctx.moveTo(centerX + step, 20); ctx.lineTo(centerX + step, height - 20);
        ctx.moveTo(centerX - step, 20); ctx.lineTo(centerX - step, height - 20);
        ctx.moveTo(20, centerY + step); ctx.lineTo(width - 20, centerY + step);
        ctx.moveTo(20, centerY - step); ctx.lineTo(width - 20, centerY - step);
    }
    ctx.strokeStyle = gridColor; ctx.lineWidth = 1; ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, centerY); ctx.lineTo(width - 20, centerY);
    ctx.moveTo(centerX, 20); ctx.lineTo(centerX, height - 20);
    ctx.strokeStyle = axisColor; ctx.lineWidth = 2; ctx.stroke();

    ctx.fillStyle = textColor; ctx.font = "bold 11px Arial"; ctx.textAlign = "center";
    ctx.fillText("ESQUERDA", centerX - 55, height - 10);
    ctx.fillText("DIREITA", centerX + 55, height - 10);

    ctx.save(); ctx.translate(15, centerY - 55); ctx.rotate(-Math.PI / 2); ctx.fillText("AUTORITÁRIO", 0, 0); ctx.restore();
    ctx.save(); ctx.translate(15, centerY + 65); ctx.rotate(-Math.PI / 2); ctx.fillText("LIBERTÁRIO", 0, 0); ctx.restore();

    var pixelX = centerX + (userX / 10) * scale;
    var pixelY = centerY - (userY / 10) * scale; 

    ctx.shadowBlur = 10; ctx.shadowColor = "rgba(255, 59, 48, 0.4)";
    ctx.beginPath(); ctx.arc(pixelX, pixelY, 10, 0, 2 * Math.PI); ctx.fillStyle = pointColor; ctx.fill();
    ctx.shadowBlur = 0; ctx.strokeStyle = isDark ? "#000" : "#fff"; ctx.lineWidth = 3; ctx.stroke();
}

function drawRadarChart() {
    var canvas = document.getElementById('radarCanvas');
    if(!canvas) return;
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    var centerX = w / 2, centerY = h / 2;
    var maxRadius = (w / 2) - 50;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? "#1C1C1E" : "#FFFFFF";
    ctx.fillRect(0, 0, w, h);

    var labels = ["Economia", "Costumes", "Estado", "Ambiente", "Segurança"];
    var keys = ["economia", "costumes", "estado", "ambiente", "seguranca"];
    var numAxes = labels.length;
    var angleStep = (Math.PI * 2) / numAxes;

    ctx.strokeStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? "#3A3A3C" : "#E5E5EA";
    for (var j = 1; j <= 4; j++) {
        ctx.beginPath();
        for (var i = 0; i < numAxes; i++) {
            var r = (maxRadius / 4) * j;
            var ang = i * angleStep - Math.PI / 2;
            var x = centerX + Math.cos(ang) * r;
            var y = centerY + Math.sin(ang) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
      ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? "#FFFFFF" : "#8E8E93";
    ctx.font = "bold 10px Arial";
    ctx.textAlign = "center";
    for (var i = 0; i < numAxes; i++) {
        var ang = i * angleStep - Math.PI / 2;
        var x = centerX + Math.cos(ang) * maxRadius;
        var y = centerY + Math.sin(ang) * maxRadius;
        ctx.beginPath(); ctx.moveTo(centerX, centerY); ctx.lineTo(x, y); ctx.stroke();
        
        var lx = centerX + Math.cos(ang) * (maxRadius + 20);
        var ly = centerY + Math.sin(ang) * (maxRadius + 20);
        ctx.fillText(labels[i], lx, ly);
    }

    ctx.beginPath();
    for (var i = 0; i < numAxes; i++) {
        var k = keys[i];
        var pct = totalCategoria[k] > 0 ? (pontosCategoria[k] / totalCategoria[k]) : 0;
        var r = pct * maxRadius;
        var ang = i * angleStep - Math.PI / 2;
        var x = centerX + Math.cos(ang) * r;
        var y = centerY + Math.sin(ang) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 59, 48, 0.3)";
    ctx.fill();
    ctx.strokeStyle = "#FF3B30";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function compartilharResultado() {
    var canvas = document.getElementById('shareCanvas');
    var ctx = canvas.getContext('2d');
    var w = canvas.width, h = canvas.height;
    
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var bgColor = isDark ? "#000000" : "#F2F2F7";
    var cardBg = isDark ? "#1C1C1E" : "#FFFFFF";
    var textMain = isDark ? "#FFFFFF" : "#000000";
    var textSec = isDark ? "#8E8E93" : "#8E8E93";
    var primary = "#0A84FF";
    
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, w, h);
    var cardX = 60, cardY = 200, cardW = w - 120, cardH = h - 400;
    ctx.fillStyle = cardBg; ctx.fillRect(cardX, cardY, cardW, cardH);

    ctx.fillStyle = textMain; ctx.font = "bold 70px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Nuance", w/2 - 60, 120);
    ctx.fillStyle = primary; ctx.fillText(".map", w/2 + 150, 120);
    ctx.fillStyle = textSec; ctx.font = "30px sans-serif"; ctx.fillText("Seu mapa político sem extremos", w/2, 170);

    var gSize = 700, gX = (w - gSize) / 2, gY = cardY + 100;
    ctx.save(); ctx.translate(gX, gY);
    ctx.fillStyle = isDark ? "#000000" : "#F2F2F7"; ctx.fillRect(0, 0, gSize, gSize);
    
    var centerX = gSize / 2, centerY = gSize / 2, scale = (gSize / 2) - 60;
    var axisColor = isDark ? "#3A3A3C" : "#C6C6C8";
    ctx.beginPath();
    ctx.moveTo(40, centerY); ctx.lineTo(gSize - 40, centerY);
    ctx.moveTo(centerX, 40); ctx.lineTo(centerX, gSize - 40);
    ctx.strokeStyle = axisColor; ctx.lineWidth = 3; ctx.stroke();
    
    ctx.fillStyle = textSec; ctx.font = "bold 24px Arial"; ctx.textAlign = "center";
    ctx.fillText("ESQUERDA", centerX - 120, gSize - 20); ctx.fillText("DIREITA", centerX + 120, gSize - 20);
    ctx.save(); ctx.translate(20, centerY - 120); ctx.rotate(-Math.PI / 2); ctx.fillText("AUTORITÁRIO", 0, 0); ctx.restore();
    ctx.save(); ctx.translate(20, centerY + 120); ctx.rotate(-Math.PI / 2); ctx.fillText("LIBERTÁRIO", 0, 0); ctx.restore();
    
    var pixelX = centerX + (currentResult.x / 10) * scale;
    var pixelY = centerY - (currentResult.y / 10) * scale; 
    
    ctx.shadowBlur = 20; ctx.shadowColor = "rgba(255, 59, 48, 0.6)";   
    ctx.beginPath(); ctx.arc(pixelX, pixelY, 20, 0, 2 * Math.PI); ctx.fillStyle = "#FF3B30"; ctx.fill();
    ctx.shadowBlur = 0; ctx.strokeStyle = isDark ? "#000" : "#fff"; ctx.lineWidth = 6; ctx.stroke();
    ctx.restore(); 

    ctx.textAlign = "center";
    ctx.fillStyle = primary;
    var badgeText = currentResult.label;
    ctx.font = "bold 45px sans-serif";
    var badgeW = ctx.measureText(badgeText).width + 80;
    ctx.fillRect(w/2 - badgeW/2, gY + gSize + 20, badgeW, 80);
    ctx.fillStyle = "#FFFFFF"; ctx.fillText(badgeText, w/2, gY + gSize + 75);

    ctx.fillStyle = textMain; ctx.font = "italic bold 35px sans-serif";
    ctx.fillText('"' + currentResult.titulo + '"', w/2, gY + gSize + 140);

    ctx.font = "28px sans-serif"; ctx.fillStyle = textSec;
    var words = currentResult.explicacao.split(" ");
    var line = "", startY = gY + gSize + 200;
    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        if (ctx.measureText(testLine).width > cardW - 80 && n > 0) {
            ctx.fillText(line, w/2, startY); line = words[n] + " "; startY += 40;
        } else { line = testLine; }
    }
    ctx.fillText(line, w/2, startY);

    var dataURL = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'nuance_map_resultado.png';
    link.href = dataURL;
    document.body.appendChild(link); link.click(); document.body.removeChild(link);

    var baseUrl = window.location.href.split('?')[0];
    var shareUrl = baseUrl + "?x=" + currentResult.x.toFixed(1) + "&y=" + currentResult.y.toFixed(1) + "&n=" + encodeURIComponent(currentResult.label);

    if (navigator.share) {
        navigator.share({
            title: 'Nuance.map - Meu Resultado',
            text: 'Eu sou "' + currentResult.titulo + '" (' + currentResult.label + '). Faça o teste e compare seu mapa com o meu:',
            url: shareUrl
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText("Meu resultado no Nuance.map: " + shareUrl);
        alert("Link copiado!");
    }
}

window.onload = function() {
    try {
        var db = localStorage.getItem('nuance_db');
        if(db) dbHistorico = JSON.parse(db);
        var hist = localStorage.getItem('nuance_historico');
        if(hist) historicoRodadas = JSON.parse(hist);
    } catch(e) {}
    atualizarTelaInicial();
};
```