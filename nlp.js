const Markov = require('markov-strings').default;
 
const palavras = [
  'medicina', 'nutrição', 'tratamento', 'ginecologia', 'dieta', 'cirurgia',
  'saúde', 'ambulância', 'recuperação', 'doença', 'psicologia', 'vitamina',
  'cuidado', 'consultório', 'exercício', 'hospital', 'terapia', 'vacina',
  'prevenção', 'emagrecimento', 'enfermagem', 'psicoterapia', 'bem-estar',
  'medicamento', 'cardiologia', 'check-up', 'saúde mental', 'fisioterapia',
  'reabilitação', 'médico', 'psiquiatria', 'nutricionista', 'terapeuta',
  'obesidade', 'imunização', 'oncologia', 'ortopedia', 'radiologia',
  'pediatria', 'dermatologia', 'tratamento alternativo', 'alergia', 'consulta',
  'clareamento dental', 'endocrinologia', 'estresse', 'anestesia', 'envelhecimento',
  'injeção', 'plástica', 'infecção', 'acupuntura', 'cardiologista', 'obstetrícia',
  'oftalmologia', 'otorrinolaringologia', 'urologia', 'hematologia', 'nutrólogo',
  'psiquiatra', 'terapia ocupacional', 'neurologia', 'gastroenterologia', 'radioterapia',
  'cirurgião', 'intensivista', 'radiologista', 'procedimento', 'consulta médica',
  'anatomia', 'biópsia', 'antibiótico', 'ambulatório', 'quimioterapia', 'endoscopia',
  'exame de sangue', 'exame de imagem', 'psicoterapeuta', 'psiquiátrico', 'clínica',
  'psicossomático', 'emergência', 'saúde pública', 'sintoma', 'diagnóstico',
  'tratamento intensivo', 'hipertensão', 'hipotireoidismo', 'hiperatividade',
  'anorexia', 'bulimia', 'transtorno', 'atendimento', 'psicólogo', 'diagnosticar',
  'prevenir', 'enfermeira', 'fisioterapeuta', 'especialista', 'reabilitar',
  'analgésico', 'doença crônica', 'paliativo', 'deficiência', 'hemorragia',
  'cardiopatia', 'imunidade', 'infecção', 'tratamento medicamentoso', 'genética',
  'resfriado', 'imunidade', 'saúde da mulher', 'pandemia', 'vírus', 'sintoma',
  'tratamento natural', 'nutracêutico', 'suplemento', 'assistência', 'cirúrgico',
  'paciente', 'termogênico', 'fitoterapia', 'convalescença', 'transplante',
  'prognóstico', 'fisiologia', 'nefrologia', 'ambulante', 'hospitalização',
  'unidade de terapia intensiva', 'radiografia', 'autodiagnóstico', 'sedativo',
  'analgésico', 'arteriosclerose', 'atendimento médico', 'avaliação', 'bactéria',
  'consultório médico', 'dor', 'ecografia', 'efeito colateral', 'emergência',
  'epidemia', 'estilo de vida saudável', 'farmacologia', 'glicose', 'hepatite',
  'higiene', 'imunização', 'incubação', 'injeção', 'inovação médica', 'insulina',
  'intervenção', 'laboratório', 'lesão', 'medicamento', 'menopausa', 'nutriente',
  'obesidade', 'paciente', 'pandemia', 'patologia', 'precaução', 'profilaxia',
  'quarentena', 'quimioterapia', 'radiografia', 'recuperação', 'remédio',
  'ressonância magnética', 'reumatismo', 'rinoplastia', 'saúde', 'sistema imunológico',
  'sono', 'stress', 'terapia', 'termômetro', 'toxina', 'tratamento', 'ultrassom',
  'urologista', 'vacinação', 'virologia', 'vitalidade'
];
 

function generateRandomWord(palavras) {
    const index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
  }
  
  function generateRandomPhrase(palavras, length) {
    let phrase = generateRandomWord(palavras);
    for (let i = 1; i < length; i++) {
      const randomWord = generateRandomWord(palavras);
      phrase += ` ${randomWord}`;
    }
    return phrase;
  }
  
  const generatedPhrases = [];
  for (let i = 0; i < 2; i++) {
    const randomPhrase = generateRandomPhrase(palavras, 10); // Escolha o tamanho que você preferir
    generatedPhrases.push(randomPhrase);
  }
  
  console.log(generatedPhrases.join('\n'));
