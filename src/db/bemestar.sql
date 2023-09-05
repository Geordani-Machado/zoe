
-- Cria a nova tabela 'cursos_BemEstar'
CREATE TABLE cursos_BemEstar (
    id SERIAL PRIMARY KEY,
    curso_name VARCHAR(255) NOT NULL,
    area_do_conhecimento VARCHAR(255),
    banner_do_curso TEXT,
    frase_de_impacto_curso TEXT,
    descricao_curso TEXT,
    link_de_inscricao TEXT,
    link_para_pagina TEXT
);

INSERT INTO cursos_BemEstar (
    curso_name,
    area_do_conhecimento,
    banner_do_curso,
    frase_de_impacto_curso,
    descricao_curso,
    link_de_inscricao,
    link_para_pagina
)
VALUES (
    'JUDO',
    'Bem-estar',
    'https://pos.una.br/app/uploads/2023/08/2.png',
    '“Caminho suave” (JU = Suave, DÔ = Caminho) é uma arte marcial japonesa, praticada como esporte de combate e fundada por Jigoro Kano (1860 – 1938) em 1882 e os seus principais objetivos são fortalecer o físico, a mente e o espírito de forma integrada.',
    '<strong> Para usar ao máximo a força física e espiritual. </strong> <br><br>\r\n\r\nO <strong> Judô</strong> é uma arte marcial japonesa moderna, focada em projeções e técnicas de solo, que visa o desenvolvimento físico, espiritual e moral dos praticantes. Dessa forma, contribui para a coordenação motora, a concentração, a autoconfiança, além de fortalecer o físico, o espírito e a mente. <br><br>\r\n\r\nAs aulas acontecem no mezanino do <strong> Learning Village</strong> - Rua Harmonia 1250 (Vila Madalena), São Paulo. Assim, ampliamos a promoção de saúde integral através do desenvolvimento da plena consciência, saúde física e mental. <br><br>\r\n\r\nPara realizar sua matrícula, realize a sua inscrição. Esse cadastro será apenas para fins de inscrição no curso. O pagamento deverá ser realizado diretamente com o SENSEI responsável. <br><br>\r\n\r\n<strong> Esperamos por você! </strong>',
    'https://inscricao.onelearning.com.br/?add-to-cart=6605',
    'https://www.onelearning.com.br/curso/judo'
);
