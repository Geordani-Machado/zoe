CREATE TABLE cursos_ComunicacaoArtes (
    id SERIAL PRIMARY KEY,
    curso_name VARCHAR(255) NOT NULL,
    area_do_conhecimento VARCHAR(255),
    banner_do_curso TEXT,
    frase_de_impacto_curso TEXT,
    descricao_curso TEXT,
    link_de_inscricao TEXT,
    link_para_pagina TEXT
);

-- inserir os arquivos n atabela


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Análise de Dados e Big Data', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/05/Analise-de-Dados-e-Big-Data-scaled.jpg', 'A revolução dos dados começou! Aprenda a obter insights valiosos e construir estratégias empresariais eficazes com base na ciência de dados.', 'Nós produzimos informações importantes para o mercado digital o tempo todo. Ao fazer compras online, utilizar as redes sociais ou até mesmo ao acessar esta página, estamos gerando uma enorme quantidade de dados. Mas como analisá-los de forma analítica e assertiva?
<br><br>
Neste curso, você descobrirá como tratar, observar e extrair informações estratégicas de um grande conjunto de dados. Para isso, iremos abordar os conceitos iniciais de Data Science, Big Data, Inteligência Artificial, Machine Learning e Deep Learning, além de explorar métodos digitais de coleta e análise de dados para pesquisa de mercado, plataformas e linguagens básicas de programação, visualização de dados para produtos de comunicação e muito mais. E aí, pronto para revolucionar o seu pensamento analítico?
<br><br>', 'https://inscricao.onelearning.com.br/?add-to-cart=1792 ', 'https://www.onelearning.com.br/curso/analise-de-dados-e-big-data');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Campanha Integrada de Comunicação', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/Campanha-integrada-de-comunicacao-scaled.jpg', ' Aprenda a planejar e usar a comunicação integrada, interna e externa em sua organização. ', 'O Curso proporciona conhecimento acerca da conceituação de Comunicação Integrada. Comunicação interna e externa. Comunicação mercadológica, institucional, administrativa e mercadológica intercultural. Macro e microambientes. Análise de demandas comunicacionais. Segmentação. Planejamento de comunicação integrada. Planejamento de comunicação multimídia. Briefing e diagnóstico. ', 'https://inscricao.onelearning.com.br/?add-to-cart=1010
', 'https://www.onelearning.com.br/curso/campanha-integrada-de-comunicacao');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Comunicação Corporativa', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/COMUNICACAO-CORPORATIVA-scaled.jpg', ' Desbrave e pratique a comunicação corporativa, organizacional e empresarial, até a cultura e identidade das organizações ', 'O curso reúne os temas concernentes à área, desde a relação entre comunicação, poder e sociedade, passando pelo entendimento da comunicação corporativa, organizacional e empresarial, até a cultura e identidade das organizações, bem como as estratégias de comunicação interna, externa, digital e novas tecnologias.', 'https://inscricao.onelearning.com.br/?add-to-cart=139
', 'https://www.onelearning.com.br/curso/comunicacao-corporativa');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Comunicação Digital', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/Comunicacao-Digital-scaled.jpg', ' Construa um planejamento de comunicação adequado e entenda e acompanhe o cenário do mercado atual. ', 'Este curso aborda teorias, técnicas, códigos e ambientes da comunicação digital, visando o conhecimento acerca das dinâmicas sociais que estão em contato com tecnologias e processos inovadores, a fim de construir um planejamento de comunicação adequado ou mesmo entender o cenário do mercado atual.', 'https://inscricao.onelearning.com.br/?add-to-cart=142
', 'https://www.onelearning.com.br/curso/comunicacao-digital');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Descomplicando o Podcast: Aprenda com quem faz', 'Gestão & Negócios;Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/04/20230414_ly_ParceriaSpotify_thumbOneLearning_A-scaled.jpg', 'Você no ritmo do Aprendizado! Libere sua voz e alcance o mundo inteiro! Descubra como criar um podcast de sucesso com experts no assunto.', 'A produção de conteúdo não tem limites! O público está cada vez mais exigente, consumindo novos formatos de mídia a todo momento. Investir em diferentes maneiras de entregar o conteúdo é a chave do sucesso. E criar podcasts é uma solução criativa e divertida de comunicação, que tem conquistado cada vez mais seguidores.
<br><br>
Conheça a programação:
<br><br>
<strong>Tema: Os bastidores de um podcast, dos equipamentos à gravação</strong> <br>

Aprenda com <strong>Marianna Romano</strong>, é uma produtora de podcasts do Rio de Janeiro. Desde 2018 edita e faz trilhas sonoras, e desde 2020 também roteiriza e dirige programas. Já trabalhou para Gimlet Media, OBB Sound, Nia Tero, Radio Novelo, Spotify, Amazon Music, Audible, dentre outros produtores. Em 2023, se prepara para anunciar sua produtora de podcasts própria, a Bravado.
<br><br>
Tema: Afinal de contas: o que é um podcast? 
<br><br>

Aprenda com <strong>Magê Flores</strong>, Participou da criação do Café da Manhã, maior podcasts de notícias do Spotify. Jornalista, apresenta o Café desde 2019.
<br><br>

Tema: Podcast não nasce pronto: pré-produção
<br><br>

Aprenda com <strong>Guilherme Pinheiro</strong>, Formado em direito e em cinema, já produziu basicamente todos os formatos de audiovisual existentes, de curtas-metragens a séries de TV, passando por longas-metragens, animações e podcasts. Gosta de pegar boas ideias e transformá-las em conteúdo. Desde  2019 é responsável por colocar de pé todas as produções da Ampère.
<br><br>

Tema: O podcast antes do podcast: planejamento
<br><br>

Aprenda com <strong>Renata Hilário</strong>, publicitária ligada à Agência Gana, é responsável pelo planejamento de entrevistas do podcast Mano a Mano.
<br><br>


<br><br>

Tema: Aprenda com quem faz, podcast narrativo
<br><br>

Aprenda com <strong>Chico Felitti</strong>, é repórter, ganhador dos prêmios Petrobrás e Comunique-se de jornalismo. Escreveu os livros "Rainhas da Noite", "Elke: Mulher Maravilha" e "Ricardo &amp; Vânia", finalista do prêmio Jabuti 2020. Criou os podcasts "Além do Meme", "O Ateliê" e "A Mulher da Casa Abandonada", que foi um dos mais ouvidos da história do país.
<br><br>

Tema: Pré-produção de podcast narrativo e investigativo: tudo o que você precisa saber para desenvolver o seu
<br><br>

Aprenda com <strong>Daniel Pech</strong>, Idealizador e diretor do podcast Leila, é produtor e fundador da Multiverso. Esteve por trás de filmes como “Um Crime em Comum”, “Quem Tem Medo?”, dentre outros.
<br><br>


<br><br>

Tema: Uma sessão de Tape, criando uma identidade sonora
<br><br>

Aprenda com <strong> Cristiano Botafogo </strong>, Cristiano é a voz por trás de </strong>"Medo e Delírio em Brasília"</strong>, um podcast sobre humor e política cheio de recursos sonoros. 
<br><br>

Tema: Fazendo direito, aspectos jurídicos do podcast
<br><br>

Aprenda com <strong> Tiago Soares de Aquino</strong>Advogado em Los Angeles da área de Entretenimento do escritório Sheppard, Mullin, Richter & Hampton LLP
<br><br>


<br><br>

Tema: Desenvolvimento da audiência, da produção ao engajamento
<br><br>

Aprenda com <strong>FêCris Vasconcellos</strong>, jornalista e doutora em Comunicação Social formada pela PUCRS, com dupla diplomação pela Universidade Católica Portuguesa, de Lisboa. Foi professora do curso de Jornalismo na PUCRS, em disciplinas sobre jornalismo e cultura digital,e produção de conteúdo para YouTube e podcasts por cinco anos. Na academia, pesquisa influência digital, jornalismo digital e crises do jornalismo. Foi gerente de produto e estratégia no Matinal Jornalismo e editora digital na Zero Hora.
<br><br>

Tema: Como ganhar dinheiro: monetização e investimentos
<br><br>

Aprenda com <strong>André Gaigher</strong>, CEO dos Estúdios Flow.
<br><br>

<strong> Ainda dá tempo de realizar sua matrícula </strong>e ter acesso a todo conteúdo do curso, e aulas gravadas pelo <strong> calendário</strong> da sua plataforma de estudo - Ulife. 
<br><br>
Perdeu alguma aula ao vivo? Você poderá acessá-la quantas vezes quiser
Link: <a href= https://student.ulife.com.br/Calendar#pageIndex=1 > https://student.ulife.com.br/Calendar#pageIndex=1 > <br><br>
<br><br>

<strong> Esperamos por você!</strong>
', 'https://inscricao.onelearning.com.br/finalizar-pedido/?add-to-cart=2199', 'https://www.onelearning.com.br/curso/descomplicando-o-podcast-aprenda-com-quem-faz');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Design de Interface', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/05/Design-de-Interface-scaled.jpg', '
Experiência do usuário em primeiro lugar! Aprimore suas técnicas de resolução de problemas e saiba como criar interfaces memoráveis.', 'Você já se perdeu em algum site? Teve dificuldade para entender como realizar uma tarefa dentro de algum software? Já pressionou um botão em um app e nada aconteceu? Como usuário, é “fácil” identificar quando alguma plataforma não está funcionando como deveria. Agora, como designer de interface, é importante saber criar soluções práticas para esses problemas.
<br><br>
Neste curso, você irá discutir a definição de interface, sua importância e sua relação com a experiência do usuário. Além de aprender a desenvolver projetos usáveis, acessíveis e intuitivos e criar estratégias para se relacionar com clientes e públicos diversos.
<br><br>
Para isso, abordaremos os conceitos de <strong> experiência do usuário (UX), arquitetura da informação, paradigmas e modelos de Interação Homem-Computador (IHC), ergonomia de interfaces, design para plataformas móveis, softwares de edição e composição de interfaces, </strong> e muito mais!

<br><br>', 'https://inscricao.onelearning.com.br/?add-to-cart=1795', 'https://www.onelearning.com.br/curso/design-de-interface');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Design Thinking', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/DESIGN-THINKING-scaled.jpg', ' Domine todas as fases do processo e das ferramentas de Design Thinking. ', 'O Curso proporciona conhecimento acerca das teorias sobre criatividade. Dinâmicas do pensamento. O processo criativo. Características individuais e influências sociais e criatividade. Inovação: conceitos e principais modelos. Inovação incremental e disruptiva e o pensamento abdutivo. Pensamento criativo nos negócios. Princípios do Design Thinking. Design centrado no usuário e user experience. Fases do processo de Design Thinking. Ferramentas para Design Thinking. ', 'https://inscricao.onelearning.com.br/?add-to-cart=448
', 'https://www.onelearning.com.br/curso/design-thinking');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Estudos e ambientes das organizações', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/05/Estudos-e-Ambientes-das-Organizacoes-scaled.jpg', 'Um(a) gestor(a) de sucesso planeja, organiza e direciona! Descubra como incorporar uma gestão estratégica nas organizações.', 'As adaptações aos contextos sociais e às dinâmicas de mercado reforçam e justificam a necessidade de ampliar os estudos sobre os ambientes organizacionais. Atuar com gestão implica estudar sistematicamente as teorias vigentes e entender como funciona o cotidiano das organizações.
<br><br>
Para exercer essa função com segurança e planejamento estratégico, é importante explorar um campo de conhecimentos pragmáticos que vão lhe ajudar a resolver problemas organizacionais de maneira eficiente. Por isso, neste curso você vai aprender sobre:
<br><br>
- Planejamento, organização, direção e controle como processo administrativo
- Correlações entre as Revoluções Industriais e os modelos de gestão das organizações ao longo da história <br><br>
- Paradigmas: Funcionalismo, Interpretativismo, Humanismo Radical e Estruturalismo Radical, Escolas de administração e suas contribuições para a compreensão dos fenômenos organizacionais <br><br>
- Cultura organizacional <br><br>
- Comunicação interna <br><br>
- Ambientes das organizações: interno (cultura, comunicação, processos e estrutura) e externo (stakeholders e ambientes micro e macro) <br><br>
- Valores, missão e propósito das organizações <br><br>
- Princípios da governança corporativa, liderança e estruturas de tomada de decisão
<br><br>', 'https://inscricao.onelearning.com.br/?add-to-cart=1783', 'https://www.onelearning.com.br/curso/estudos-e-ambientes-das-organizacoes');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Gestão do Conhecimento e Inteligência Competitiva', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/GESTAO-DO-CONHECIMENTO-E-INTELIGENCIA-COMPETITIVA-scaled.jpg', ' Identifique a melhor estratégia para gerenciar a organização com inteligencia competitiva e construir engajamento entre empresas e clientes. ', 'O curso aborda o conceito de inteligência competitiva e o processo de gestão; estratégia de atuação da organização; necessidades de informação da organização; coleta de informação; análise das informações para construir confiança e engajamento entre empresas e clientes, fornecedores, comunidades e instituições.', 'https://inscricao.onelearning.com.br/?add-to-cart=133
', 'https://www.onelearning.com.br/curso/gestao-do-conhecimento-e-inteligencia-competitiva');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Inteligência Artificial na Comunicação', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/Inteligencia-artificial-na-comunicacao-scaled.jpg', ' Domine a contextualização da inteligência artificial; Inteligência artificial aplicada à comunicação. Da comunicação de massa a comunicação dirigida e muito mais. ', ' O Curso aborda a contextualização da inteligência artificial; Inteligência artificial aplicada à comunicação. Da comunicação de massa a comunicação dirigida. Decodificação da linguagem; Construção de visão eletrônica; Ética e inteligência artificial.', 'https://inscricao.onelearning.com.br/?add-to-cart=1034
', 'https://www.onelearning.com.br/curso/inteligencia-artificial-na-comunicacao');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Linguagens e Relações Estéticas', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/LINGUAGENS-E-RELACOES-ESTETICAS-scaled.jpg', ' Você conhecerá a história e filosofia das linguagens e da expressão, além da relação entre linguagens e estética na história e na sociedade. ', 'O curso apresenta as teorias da mídia, mediações e midiatização. Você conhecerá a história e filosofia das linguagens e da expressão, além da relação entre linguagens e estética na história e na sociedade.', 'https://inscricao.onelearning.com.br/?add-to-cart=946 
', 'https://www.onelearning.com.br/curso/linguagens-e-relacoes-esteticas');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Marketing de Conteúdo', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/Marketing-de-Conteudo-scaled.jpg', ' Saiba atuar, gerar conteúdo e fazer a gestão da presença nos canais de comunicação digital e nas redes sociais, desenvolvendo habilidades de comunicação na rede. ', 'O curso aborda os estudos sobre a tecnologia que conectam-se ao conhecimento da comunicação e à produção e análise de dados, bem como a criação de conteúdos inovadores para diferentes plataformas e mídias sociais. A partir do curso, o especialista saberá atuar, gerar conteúdo e fazer a gestão da presença nos canais de comunicação digital e nas redes sociais, desenvolvendo habilidades de comunicação na rede.', 'https://inscricao.onelearning.com.br/?add-to-cart=136
', 'https://www.onelearning.com.br/curso/marketing-de-conteudo');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Narrativas e Produção Transmídia', 'Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/03/NARRATIVAS-E-PRODUCAO-TRANSMIDIA-scaled.jpg', ' Foco na mensuração de resultados. Responsabilidade social e impacto da difusão massiva de informação em múltiplos ambientes midiáticos e muito mais. ', 'O curso tem foco na mensuração de resultados. Responsabilidade social e impacto da difusão massiva de informação em múltiplos ambientes midiáticos. Pós-modernidade. Sociedade em rede. Sociedade da informação. Cibercultura e cultura digital. Cultura da convergência, conexão e participação. Processos de midiatização e sua relação com a cultura digital. Multimídia, Crossmídia e Transmídia. Estudo dos princípios e técnicas da produção narrativa. Narrativas e realidades sócio-históricas. Narrativas e representação social. Análise estrutural da narrativa e modelos de configuração (actancial, Jornada do Herói, morfologia). Construção de universos narrativos ficcionais e a narração de não ficção. Metodologias de análise, planejamento e produção do universo transmídia. Possibilidades de transmidiação em produções informativas, publicitárias, corporativas e artísticas.', 'https://inscricao.onelearning.com.br/?add-to-cart=1116
', 'https://www.onelearning.com.br/curso/narrativas-e-producao-transmidia');


INSERT INTO cursos_ComunicacaoArtes (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Vida e Carreira', 'Arquitetura e Urbanismo & Design;Engenharias;TI & Computação;Ciências Agrárias & Meio Ambiente;Ciências Biológicas & da Saúde;Ciências Humanas;Ciências Jurídicas;Gestão & Negócios;Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/04/Vida-e-carreira.png', ' Esse curso vai te auxiliar no desenvolvimento de sua carreira e te preparar para os desafios do mercado de trabalho.

.', 'O curso tem o objetivo de auxiliar na compreensão das novas demandas do mundo do trabalho, potencializar a carreira a partir  das necessidades do profissional, preparar para os desafios e tendências do mercado. Além disso, desenvolver as competências socioemocionais mais requisitadas.', 'https://inscricao.onelearning.com.br/?add-to-cart=1956', 'https://www.onelearning.com.br/curso/vida-e-carreira');
