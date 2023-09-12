CREATE TABLE cursos_CienciasBiologicasDaSaude (
    id SERIAL PRIMARY KEY,
    curso_name VARCHAR(255) NOT NULL,
    area_do_conhecimento VARCHAR(255),
    banner_do_curso TEXT,
    frase_de_impacto_curso TEXT,
    descricao_curso TEXT,
    link_de_inscricao TEXT,
    link_para_pagina TEXT
);


-- inserir os dados

INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Assistência de Enfermagem em Oncologia', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/ASSISTENCIA-DE-ENFERMAGEM-EM-ONCOLOGIA-scaled.jpg', ' Aperfeiçoe seus conhecimentos no tratamento de quimioterapia e radioterapia, bem como todos os cuidados paliativos em oncologia. ', 'O curso reúne os temas concernentes à área, desde aspectos morfofisiopatológicos gerais do câncer, passando pelo entendimento dos principais e mais prevalentes tipos de câncer até o cuidado e humanização da assistência em enfermagem em oncologia no tratamento com uso de quimioterapia e radioterapia, bem como os cuidados paliativos em oncologia.', 'https://inscricao.onelearning.com.br/?add-to-cart=829', 'https://www.onelearning.com.br/curso/assistencia-de-enfermagem-em-oncologia');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Auditoria em Saúde', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/AUDITORIA-EM-SAUDE-scaled.jpg', ' Desenvolva todas as competências do auditor no setor saúde, ética e legislações, até a auditoria no SUS e  interface entre operadoras e prestadoras.  ', 'O curso reúne os temas concernentes à área, desde Processo e modalidades de auditória no setor saúde, passando pelo entendimento das contas hospitalares, auditoria de contas, registro eletrônico em saúde – prontuário, competências do auditor no setor saúde, ética e legislações, até a auditoria no Sistema Único de Saúde e  interface entre operadoras e prestadoras. ', 'https://inscricao.onelearning.com.br/?add-to-cart=189 
', 'https://www.onelearning.com.br/curso/auditoria-em-saude');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Biossegurança e Controle de Infecções', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/BIOSSEGURANCA-E-CONTROLE-DE-INFECCOES-scaled.jpg', ' Aprimore seus conhecimentos acerca da legislação aplicada à saúde e segurança do trabalhador nos serviços de saúde. ', 'Aprimore seus conhecimentos acerca da legislação aplicada à saúde e segurança do trabalhador nos serviços de saúde; gerenciamento dos riscos biológicos nos serviços de saúde; utilização de Equipamentos de segurança Individuais (EPIs) e prevenção e o controle de infeções em ambientes hospitalares.', 'https://inscricao.onelearning.com.br/?add-to-cart=196 
', 'https://www.onelearning.com.br/curso/biosseguranca-e-controle-de-infeccoes');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Biossegurança e Segurança do Trabalhador em Serviços de Saúde', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/BIOSSEGURANCA-E-SEGURANCA-DO-TRABALHADOR-EM-SERVICOS-DE-SAUDE-scaled.jpg', ' Capacite-se para principais normas de biossegurança ligadas a Agência Nacional de Vigilância Sanitária - ANVISA e legislação no âmbito hospitalar. ', 'O curso apresenta e capacita para principais normas de biossegurança ligadas a Agência Nacional de Vigilância Sanitária - ANVISA e legislação no âmbito hospitalar. Níveis de Biossegurança, acidente com risco de contaminação por material biológico. Conceito de segurança no trabalho. Medidas e ações para segurança no dia-a-dia do ambiente hospitalar. Discussão das normas reguladoras em segurança do trabalho: Normas reguladoras - Segurança e Saúde no trabalho em Serviços de Saúde. Definição dos conceitos de risco biológico, programa de prevenção de risco ambiental, programa de controle médico de saúde ocupacional, vacinação de trabalhadores dos serviços de saúde, riscos químicos, plano de proteção radiológica. Manuseio e transporte de gases ambientais. Definição de medicamentos e drogas de risco. Resíduos: definição, classificação, potencial de risco, segregação e transporte. Sistema de gerenciamento e descarte de resíduos hospitalares.', 'https://inscricao.onelearning.com.br/?add-to-cart=1083
', 'https://www.onelearning.com.br/curso/biosseguranca-e-seguranca-do-trabalhador-em-servicos-de-saude');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Biossistemas do Corpo Humano', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/BIOSSISTEMAS-DO-CORPO-HUMANO-scaled.jpg', ' Um mergulho sobre embriologia e o desenvolvimento humano.  ', 'O curso aborda temas como: Embriologia e desenvolvimento humano. Aspectos morfológicos do desenvolvimento. Aspectos funcionais do desenvolvimento. Análise morfofuncional dos sistemas corporais. Processos de controle homeostático. Circulação.Respiração. Digestão. Secreção. Reprodução. Regulação e controle dos fenômenos físico-químicos. Regulação e controle das funções vitais.Características histológicas dos tecidos epiteliais. Características histológicas dos tecidos conjuntivos. Características histológicas dos tecidos muscular e nervoso. Relação das estruturas, órgãos e sistemas com distúrbios observados no corpo humano.', 'https://inscricao.onelearning.com.br/?add-to-cart=1086
', 'https://www.onelearning.com.br/curso/biossistemas-do-corpo-humano');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Cosmetologia e Cosmiatria', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/Cosmetologia-e-cosmiatria-scaled.jpg', ' Um curso focado em desenvolvimento, registro, avaliação e segurança de produtos cosméticos. ', 'Estude com uma abordagem prática, contextualizada e aplicada à realidade das organizações e do mercado em um curso focado em desenvolvimento, registro, avaliação e segurança de produtos cosméticos.', 'https://inscricao.onelearning.com.br/?add-to-cart=199
', 'https://www.onelearning.com.br/curso/cosmetologia-e-cosmiatria');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Desequilíbrios Multisistêmicos', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/DESEQUILIBRIOS-MULTISISTEMICOS-scaled.jpg', 'Entenda desde a avaliação clínica, bioquímica, hematológica e o diagnóstico de desequilíbrios multisistêmicos, até às intervenções assistenciais de enfermagem e o cuidado do paciente crítico com desequilíbrios ácido-base e hemodinâmicos. ', 'O curso reúne os temas concernentes à área, desde a fisiopatologia e mecanismos compensatórios dos principais desequilíbrios multisistêmicos, ácido-base e hemodinâmicos, passando pelo entendimento da avaliação clínica, bioquímica, hematológica e o diagnóstico de desequilíbrios multisistêmicos, até às intervenções assistenciais de enfermagem e o cuidado do paciente crítico com desequilíbrios ácido-base e hemodinâmicos. ', 'https://inscricao.onelearning.com.br/?add-to-cart=202
', 'https://www.onelearning.com.br/curso/desequilibrios-multisistemicos');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Enfermagem e os Distúrbios Gastrointestinais, Ostomias e Sondas', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/Enfermagem-e-os-Disturbios-Gastrointestinais-Ostomias-e-Sondas-scaled.jpg', ' Exerça a sua liderança para uma prática de enfermagem efetiva, integradora e articulada com todos os profissionais da equipe multidisciplinar em saúde, visando a qualidade do cuidado. ', 'O curso tem como objetivo capacitar os profissionais enfermeiros a atuar de forma humanizada e especializada na assistência de média e alta complexidade aos pacientes pediátricos, adultos e idosos no ambiente Hospitalar, exercendo a liderança para uma prática de enfermagem efetiva, integradora e articulada com todos os profissionais da equipe multidisciplinar em saúde, visando a qualidade do cuidado.', 'https://inscricao.onelearning.com.br/?add-to-cart=205
', 'https://www.onelearning.com.br/curso/enfermagem-e-os-disturbios-gastrointestinais-ostomias-e-sondas');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Estética Aplicada ao Envelhecimento Cutâneo', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/Estetica-aplicada-ao-envelhecimento-cutaneo-scaled.jpg', ' Aperfeiçoe-se e identifique os aspectos nutricionais relacionados à estrutura e função da pele. Características e fatores relacionados ao envelhecimento cutâneo intrínseco e extrínseco  ', 'O Curso proporciona conhecimento acerca dos aspectos histológicos, celulares e funcionais do sistema tegumentar; hidratação da pele. Aspectos Nutricionais relacionados à estrutura e função da pele. Características e fatores relacionados ao envelhecimento cutâneo intrínseco e extrínseco, capacitando os alunos para que atuem com segurança e excelência na estética aplicada ao envelhecimento cutâneo.', 'https://inscricao.onelearning.com.br/?add-to-cart=208
', 'https://www.onelearning.com.br/curso/estetica-aplicada-ao-envelhecimento-cutaneo');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Estética Aplicada as Discromias e Acne', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/Estetica-aplicada-as-discromias-e-acne-scaled.jpg', ' Atue com expertise, segurança e excelência na estética aplicada as discromias e acne. ', 'O Curso proporciona conhecimento acerca dos aspectos histológicos, celulares e funcionais relacionados à pigmentação da pele, ao folículo piloso e secreção sebácea. Fisiopatologia da acne vulgaris. Aspectos nutricionais relacionados ao tratamento da acne. Avaliação e classificação das discromias e acne. Recursos cosméticos aplicados ao tratamento de discromias e acne, capacitando os alunos para que atuem com segurança e excelência na estética aplicada as discromias e acne.', 'https://inscricao.onelearning.com.br/?add-to-cart=212
', 'https://www.onelearning.com.br/curso/estetica-aplicada-as-discromias-e-acne');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Neuropsicofarmacologia', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/NEUROPSICOFARMACOLOGIA-scaled.jpg', ' Atue em programas de avaliação e reabilitação neuropsicológica de crianças, adolescentes, adultos e idosos. ', 'O curso capacita profissionais da saúde e educação para atuarem em programas de avaliação e reabilitação neuropsicológica de crianças, adolescentes, adultos e idosos.', 'https://inscricao.onelearning.com.br/?add-to-cart=215
', 'https://www.onelearning.com.br/curso/neuropsicofarmacologia');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Neuropsicologia das Funções Cognitivas', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/NEUROPSICOLOGIA-DAS-FUNCOES-COGNITIVAS-scaled.jpg', ' Aperfeiçoe seus conhecimentos em comportamento, cognição neuropsicologia e aprendizagem acerca do cérebro. ', 'O Curso proporciona conhecimento acerca do cérebro, comportamento, cognição neuropsicologia e aprendizagem. Aborda também as teorias do desenvolvimento cognitivo, a avaliação neuropsicológica, a neuropsicologia das funções executivas e de diversos transtornos. ', 'https://inscricao.onelearning.com.br/?add-to-cart= 361
', 'https://www.onelearning.com.br/curso/neuropsicologia-das-funcoes-cognitivas');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Neuropsicologia e Terapia Cognitiva Comportamental', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/Neuropsicologia-e-Terapia-Cognitiva-Comportamental-scaled.jpg', ' Compreenda o histórico e origem da Terapia Cognitivo Comportamental, os princípios básicos dessa abordagem: esquemas, crenças, pensamento automático, erros cognitivos, técnicas para serem utilizadas no tratamento e muito mais. ', 'O curso proporciona que você compreenda o histórico e origem da Terapia Cognitivo Comportamental, os princípios básicos dessa abordagem: esquemas, crenças, pensamento automático, erros cognitivos, algumas técnicas para serem utilizadas no tratamento, relação terapêutica, duração e foco da terapia; aprenda a fazer a conceituação cognitiva e reconhecer o perfil cognitivo de alguns transtornos psiquiátricos.', 'https://inscricao.onelearning.com.br/?add-to-cart=218
', 'https://www.onelearning.com.br/curso/neuropsicologia-e-terapia-cognitiva-comportamental');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Processos Biológicos', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/05/Processos-Biologicos-scaled.jpg', 'Bioquímica é sinônimo de vida! Descubra como o estudo das células e de seus processos fisiológicos e metabólicos viabilizam diversos avanços para a saúde.', 'Se você está aqui, é porque sua futura profissão exige conhecimento sobre as células e as bases genéticas do nosso corpo. Nós, seres vivos, somos formados por uma grande variedade de biomoléculas complexas que, a partir de reações químicas, permitem a nossa sobrevivência, o nosso crescimento e a nossa reprodução.
<br><br>
Analisar esses processos biológicos nos ajuda a desenvolver técnicas poderosas que podem ser empregadas nos campos da imunologia, da genética e da biologia celular. Sem contar que oferecem elementos essenciais para o tratamento de doenças e para melhorar a eficiência industrial no tratamento da água e na síntese de pesticidas e fármacos.
<br><br>
Para lhe ajudar a entender essa área de estudo tão vital para a nossa saúde, neste curso você vai aprender:
<br><br>
- Origem, estrutura, função e evolução das células
- Membranas, citoplasma, organelas e estruturas subcelulares
- Organização estrutural e funcional de procariontes e eucariontes
- Tipos celulares, com ênfase na especificidade e caracterização funcional
- Propriedades físico-químicas da água, ácidos, bases, pH e tampões fisiológicos
- Estrutura e organização do genoma, estrutura do núcleo e dos ácidos nucleicos (DNA e RNA)
- Transmissão das informações genéticas
- Hereditariedade
- Anomalias cromossômicas
- Caracterização bioquímica, estrutural e funcional dos aminoácidos, proteínas, carboidratos e lipídios

<br><br>', 'https://inscricao.onelearning.com.br/?add-to-cart=1833', 'https://www.onelearning.com.br/curso/processos-biologicos');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Saúde Única', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/SAUDE-UNICA-scaled.jpg', ' Tudo sobre políticas públicas de saúde, Sistema Único de Saúde (SUS) no Brasil e a evolução histórica da saúde coletiva no Brasil. ', 'O curso aborda a interface entre saúde humana, animal e ambiental. Você fará uma imersão em temas como políticas públicas de saúde, Sistema Único de Saúde (SUS) no Brasil e compreenderá a evolução histórica da saúde coletiva no Brasil.', 'https://inscricao.onelearning.com.br/?add-to-cart=974
', 'https://www.onelearning.com.br/curso/saude-unica');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Sistemas Integrados de Gestão ', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/SISTEMAS-INTEGRADOS-DE-GESTAO-scaled.jpg', ' Aprimore seus conhecimentos sobre a gerência de projetos, Metodologia de gerência de projetos e ciclo de vida da gestão de projetos e muito mais. ', 'O curso foi elaborado para o profissional que visa aprimorar seus conhecimentos sobre a gerência de projetos; Metodologia de gerência de projetos e ciclo de vida da gestão de projetos; Técnicas para planejamento de projetos objetivos e abrangência da organização do trabalho; Planejamento da produção; Impactos no modelo de distribuição e redução do ciclo de vida dos produtos na operação; Metas e indicadores de desempenho; Produtividade e competitividade.', 'https://inscricao.onelearning.com.br/?add-to-cart=221
', 'https://www.onelearning.com.br/curso/sistemas-integrados-de-gestao');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Tricoterapia', 'Ciências Biológicas & da Saúde', 'https://pos.una.br/app/uploads/2023/03/TRICOTERAPIA-scaled.jpg', ' Capacite-se na realização de procedimentos práticos para o sucesso profissional e a desempenhe ações de prevenção, promoção, proteção e reabilitação da saúde e do bem estar. ', 'O curso aborda temas relacionados à estética capilar, protocolos estéticos e cosmetologia. Além de capacitar o profissional na realização de procedimentos práticos para o sucesso profissional e a desempenhar ações de prevenção, promoção, proteção e reabilitação da saúde e do bem estar.', 'https://inscricao.onelearning.com.br/?add-to-cart=224
', 'https://www.onelearning.com.br/curso/tricoterapia');


INSERT INTO cursos_CienciasBiologicasDaSaude (curso_name, area_do_conhecimento, banner_do_curso, frase_de_impacto_curso, descricao_curso, link_de_inscricao, link_para_pagina)
VALUES ('Vida e Carreira', 'Arquitetura e Urbanismo & Design;Engenharias;TI & Computação;Ciências Agrárias & Meio Ambiente;Ciências Biológicas & da Saúde;Ciências Humanas;Ciências Jurídicas;Gestão & Negócios;Comunicação & Artes', 'https://pos.una.br/app/uploads/2023/04/Vida-e-carreira.png', ' Esse curso vai te auxiliar no desenvolvimento de sua carreira e te preparar para os desafios do mercado de trabalho.

.', 'O curso tem o objetivo de auxiliar na compreensão das novas demandas do mundo do trabalho, potencializar a carreira a partir  das necessidades do profissional, preparar para os desafios e tendências do mercado. Além disso, desenvolver as competências socioemocionais mais requisitadas.', 'https://inscricao.onelearning.com.br/?add-to-cart=1956', 'https://www.onelearning.com.br/curso/vida-e-carreira');

