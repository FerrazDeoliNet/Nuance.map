# Nuance.map

🧭 Nuance.map - Seu mapa político sem extremos

O Nuance.map é um aplicativo web (Single Page Application) focado em mapear a posição política do usuário de forma imparcial, moderna e livre de extremismos.

Diferente dos testes tradicionais que forçam o usuário a escolher entre o "8 ou 80" (Sim ou Não), o Nuance.map foi desenhado para capturar as sutilezas e as contradições naturais do pensamento humano.

🤖 Nota de Desenvolvimento: Este projeto foi integralmente construído utilizando a metodologia Vibecode (Desenvolvimento assistido por Inteligência Artificial). Toda a lógica, estruturação de dados, design de interface e refatoração de código foram gerados e refinados através de engenharia de prompts e revisão contínua em conjunto com uma IA.

✨ Principais Funcionalidades

· Sistema Anti-Extremismo (Escala Likert): Perguntas com possibilidade de nuances ganham um botão intermediário (ex: "Apenas em casos específicos"). Essa opção vale 0.5 pontos, suavizando a posição no gráfico e mostrando a moderação do usuário.
· Dicionário Interativo: Palavras-chave sublinhadas nas perguntas podem ser tocadas para revelar uma explicação curta e imparcial do termo (ex: Descriminalização vs. Legalização).
· Botão "? Como assim?": Um botão de contexto que explica detalhadamente o que a pergunta está avaliando, evitando interpretações equivocadas.
· Algoritmo de Aprendizado: A cada novo teste, os pontos são somados aos anteriores. O app "aprende" com as respostas e calcula uma média ponderada, tornando o ponto vermelho no gráfico cada vez mais preciso.
· Histórico de Sessão: Menu lateral (Sidebar) que registra todos os testes realizados na sessão atual, permitindo comparar os resultados e ver a evolução do mapa.
· Gráfico de Bússola Política: Avaliação baseada em dois eixos clássicos:
  · Eixo Horizontal: Economia (Esquerda / Direita).
  · Eixo Vertical: Autoridade (Autoritário / Libertário).
· Compartilhamento: Gera uma arte em alta resolução (formato vertical ideal para Stories) com o resultado do usuário e o gráfico desenhado, pronto para download.
· Design Moderno: Interface inspirada no iOS e na One UI (Samsung), com animações em pop-ups, tema Claro/Escuro (Dark Mode) e layout 100% responsivo.

🛠️ Tecnologias Utilizadas

Este é um projeto Vanilla (sem frameworks de mercado) para garantir máxima leveza e compatibilidade:

· HTML5: Estrutura semântica.
· CSS3: Variáveis CSS para o tema (Dark/Light), Flexbox, animações de transição com cubic-bezier (efeito mola) e backdrop-filter (efeito de vidro).
· JavaScript (ES5/ES6): Lógica de randomização (Fisher-Yates Shuffle), cálculo de coordenadas cartesianas e manipulação do DOM.
· HTML Canvas API: Utilizada para desenhar o gráfico de dispersão dinâmico e gerar a imagem de compartilhamento.

🤖 O processo de "Vibecode"

A escolha de usar Inteligência Artificial para criar este app não foi apenas por agilidade, mas por uma decisão de design de software moderno:

1. Prototipagem Rápida: A IA permitiu iterar o design da interface (UI) e a experiência do usuário (UX) dezenas de vezes até chegar no visual limpo atual.
2. Equilíbrio Lógico: O banco de 40 perguntas e a lógica de inversão de pontos (para manter a imparcialidade do teste) foram estruturados e validados matematicamente junto à IA.
3. Resolução de Gargalos: Os desafios de compatibilidade do Canvas e de execução de scripts em navegadores móveis (WebView do Android) foram solucionados através de sessões de debugging assistido.

🔒 Privacidade e Segurança

O Nuance.map foi construído sob o princípio da privacidade absoluta:

· 100% Offline: Nenhum dado é enviado para servidores ou APIs de terceiros.
· Sem Rastreamento: Não há cookies, pixel de rastreamento ou analytics (como Google Analytics).
· Sem Banco de Dados: O histórico é mantido em memória (JavaScript) durante o uso e é limpo ao fechar a página. (Nota: Devido a restrições de segurança de WebViews móveis em arquivos locais, o localStorage não é utilizado para persistência entre sessões).

🚀 Como Executar o Projeto

Como o projeto é composto por um único arquivo, você tem duas formas de rodá-lo:

1. Direto no Navegador (Desktop):
Basta baixar o arquivo index.html e abri-lo em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

2. No Celular (Android/iOS):
Para evitar bloqueios de segurança de scripts locais (comuns em WebViews do Android), a melhor forma de visualizar no celular é usando um servidor local:

· Use o aplicativo Acode e utilize o botão "Preview".
· Ou, se tiver o Termux, rode python3 -m http.server 8000 na pasta do arquivo e acesse http://localhost:8000 no navegador do celular.

⚖️ Imparcialidade

O banco de perguntas foi elaborado de forma equilibrada. Para cada tema, existem perguntas que "puxam" a pontuação para um lado, e perguntas com lógica invertida que puxam para o outro, garantindo que o algoritmo não tenha viés ideológico embutido.

🤝 Contribuições

Sinta-se à vontade para fazer um Fork do projeto, sugerir novas perguntas para o banco de dados ou melhorar a interface.

---

Desenvolvido com foco em pensamento crítico e moderação via IA.