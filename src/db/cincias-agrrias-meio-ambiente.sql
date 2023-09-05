CREATE TABLE cursos_CienciasAgrariasMeioAmbiente (
    id SERIAL PRIMARY KEY,
    curso_name VARCHAR(255) NOT NULL,
    area_do_conhecimento VARCHAR(255),
    banner_do_curso TEXT,
    frase_de_impacto_curso TEXT,
    descricao_curso TEXT,
    link_de_inscricao TEXT,
    link_para_pagina TEXT
);