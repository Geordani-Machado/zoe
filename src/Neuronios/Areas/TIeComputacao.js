
const Keywords = [
  "linguagem de programação",
  "hardware",
  "software",
  "sistemas operacionais",
  "rede de computadores",
  "segurança da informação",
  "banco de dados",
  "inteligência artificial",
  "machine learning",
  "front-end",
  "back-end",
  "full-stack",
  "devops",
  "cloud computing",
  "virtualização",
  "API",
  "IoT",
  "big data",
  "data science",
  "UX/UI",
  "criptografia",
  "firewall",
  "servidor",
  "cliente",
  "protocolo",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Ruby",
  "PHP",
  "SQL",
  "NoSQL",
  "framework",
  "biblioteca",
  "compilador",
  "interpretador",
  "algoritmo",
  "estrutura de dados",
  "engenharia de software",
  "gestão de projetos",
  "scrum",
  "agile",
  "Kanban",
  "git",
  "repositório",
  "código-fonte",
  "debug",
  "QA",
  "testes automatizados",
  "CI/CD",
  "SaaS",
  "PaaS",
  "IaaS",
  "VoIP",
  "telecomunicações",
  "LAN",
  "WAN",
  "VPN",
  "DNS",
  "HTTP",
  "HTTPS",
  "FTP",
  "SMTP",
  "POP3",
  "IMAP",
  "SSH",
  "TCP/IP",
  "UDP",
  "IPv4",
  "IPv6",
  "NAT",
  "roteador",
  "switch",
  "hub",
  "firewall",
  "antivírus",
  "malware",
  "ransomware",
  "phishing",
  "BYOD",
  "governança de TI",
  "compliance",
  "auditoria",
  "backup",
  "recuperação de desastres",
  "latência",
  "largura de banda",
  "fibra óptica",
  "wireless",
  "5G",
  "4G",
  "3G",
  "ethernet",
  "código aberto",
  "licença de software",
  "patente",
  "direitos autorais"
];

function wordCounts(tokens) {
  const counts = {};
  for (const token of tokens) {
    counts[token.toLowerCase()] = (counts[token.toLowerCase()] || 0) + 1;
  }
  return counts;
}

function keywordProximity(tokens, keywords) {
  const proximity = {};
  tokens = tokens.map(token => token.toLowerCase()); // Converte todos os tokens para minúsculas
  
  keywords.forEach(keyword => {
    proximity[keyword] = {};
    tokens.forEach((token, index) => {
      if (keyword === token) {
        for (let offset = -3; offset <= 3; offset++) {
          const neighbor = tokens[index + offset];
          if (neighbor && neighbor !== keyword) {
            proximity[keyword][neighbor] = (proximity[keyword][neighbor] || 0) + 1;
          }
        }
      }
    });
  });

  return proximity;
}

function analyzeInterest(wordArray) {
  const tokens = wordArray; // assume que a entrada é um array de palavras
  const counts = wordCounts(tokens);

  let healthScore = 0;
  const proximities = keywordProximity(tokens, Keywords);

  Keywords.forEach(keyword => {
    healthScore += (counts[keyword] || 0);
    
    for (const score of Object.values(proximities[keyword] || {})) {
      healthScore += score;
    }
  });

  const proximityPercentage = (healthScore / tokens.length) * 100;

  return proximityPercentage > 0 ? `${proximityPercentage}` : '0';
}

module.exports = analyzeInterest;
    