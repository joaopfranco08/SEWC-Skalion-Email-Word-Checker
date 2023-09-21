let email = document.getElementById("email");
let result = document.getElementById("result")

let list_of_words = [
  'grátis', 'promoção', 'compre', 'oferta', 'tempo limitado', 'agora', 'não exclua', 'abra', 'confira', 
  '100% eficaz', '100% garantido', '100% gratuito', '100% reembolsável', 'a informação que você pediu', 
  'à venda', 'abra, por favor', 'abrir', 'aceita cartões de crédito', 'aceitamos cheque', 
  'aceitamos crediário', 'acesse agora', 'acessível', 'acesso', 'acesso gratuito', 
  'acesso gratuito/grátis', 'acesso vitalício', 'acredite em mim', 'ad', 'adolescente', 'agir', 
  'agir agora', 'agora', 'alerta de preço', 'amostra', 'amostra grátis/gratuita', 'ao redor do brasil', 
  'ao redor do mundo', 'apenas hoje', 'apenas novos clientes', 'apresse-se', 'aqui', 'aqui está', 
  'as melhores tarifas', 'as melhores taxas', 'assine', 'assine agora', 'assine aqui', 
  'assine gratuitamente', 'assine já', 'atacado ', 'atualmente', 'aumente as suas chances', 
  'aumente o tráfego', 'aumente suas vendas', 'aviso legal', 'ação', 'ação necessária', 'barato', 
  'bebida', 'beneficiário', 'bilhão', 'bilhão de reais', 'bilionário', 'boleto', 'bônus', 
  'bônus em dinheiro', 'bônus gratuito/grátis', 'cabo conversor', 'cadastre-se gratuitamente hoje', 
  'cancelamento requerido', 'cancelar', 'cancelar a qualquer momento', 'cancelar inscrição', 
  'cancele agora', 'caro ', 'carro de luxo', 'cartões aceitos', 'caseiro', 'cashback', 'cassino', 
  'celebridades', 'celular', 'cem por cento garantido', 'cem por cento grátis', 'centavos por dia', 
  'certificado', 'certificado de presente', 'chamada', 'chamada grátis', 'check', 'chefe', 
  'cheque ou dinheiro', 'citação', 'clique', 'clique abaixo', 'clique agora', 'clique aqui', 
  'clique já', 'clique para receber', 'clique para remover', 'cobrança ', 'comece agora', 'compare', 
  'compare agora', 'compare online', 'compare preços', 'compra rápida', 'compra forte', 'comprar', 
  'compre agora', 'compre já', 'confidencialmente em todos os pedidos', 'conhecer garotas', 
  'conhecer mulheres', 'conheça solteiros', 'consolidar dívida e crédito', 'consolidar sua dívida', 
  'consulta gratuito/grátis', 'cópia perfeita', 'copiar dvds', 'crediário', 'crédito', 
  'crédito não garantido', 'crédito pré-aprovado', 'cura', 'cura da calvíce', 'custos', 
  'de acordo com as leis', 'de aço inoxidável', 'de desconto', 'de graça', 'de renda', 
  'decisão sobre investimento', 'de crédito', 'deixe sua mensagem', 'depósito garantido', 'desconto', 
  'desempenho', 'despacho', 'despachamos para todo o brasil', 'destinatário não informado', 
  'diagnóstico', 'dinheiro', 'dinheiro extra', 'dinheiro grátis', 'dinheiro rápido', 
  'diplomas universitários', 'disclaimer', 'disconto', 'dívida', 'dívida não garantida', 
  'dobre seu dinheiro', 'dobre seu patrimônio', 'dobre sua renda', 'dólares americanos', 
  'duplique seu dinheiro', 'duplique seu patrimônio', 'duplique sua renda', 'dvd gratuito/grátis', 
  'é eficaz', 'e-mail direto', 'e-mail em massa', 'e-mail marketing', 'e-mail prioritário', 'economize $', 
  'economize agora', 'economize até', 'economize dinheiro', 'economize muito dinheiro', 
  'ejaculação precoce', 'eles estão dando de graça', 'eliminar a dívida', 'emprego on-line', 
  'empréstimo', 'endereço de cobrança', 'enquanto durarem os estoques', 'enquanto estiver disponível', 
  'enquanto houver estoque', 'enquanto você dorme', 'enviado por', 'enviados em conformidade', 
  'escapadinha de fim de semana', 'escolha de ações', 'especial para você', 'espere ganhar', 'esposa', 
  'eu prometo', 'evitar', 'evite falência', 'expira', 'expirar', 'explodir o seu negócio', 'extra', 
  'extrator de email', 'falar sobre cobranças', 'falar sobre prêmios', 'fantástico', 'fazer dinheiro', 
  'faça agora', 'faça agora', 'faça parte de', 'feliz aniversário', 'férias', 'filiação gratuita/grátis', 
  'financeiramente independente', 'financiamento', 'financie já', 'fórmula milagrosa', 'formulário', 
  'fornecedores', 'free', 'frete grátis', 'frete incluso', 'ganhar $', 'ganhar dinheiro', 'ganhe', 
  'ganhe $', 'ganhe dinheiro', 'ganhe dinheiro extra', 'ganhe em casa', 'ganhe mensalmente', 
  'ganhe por semana', 'ganhos', 'ganhos diários', 'ganhos imediatos', 'ganhos mensais', 
  'ganhos potenciais', 'ganhos seguros', 'garantia', 'garantia expirada', 'grande desconto', 
  'grande negócio', 'grande oferta', 'grandes quantidades', 'hoje', 'home office', 'honramos todo', 
  'hormônio do crescimento', 'hospedagem grátis', 'ilimitado', 'imediato', 'impressora a laser', 
  'imprima', 'incrível', 'informação importante sobre', 'informações solicitadas', 'inscreva-se agora', 
  'inscrição gratuita/grátis', 'inss', 'instalação gratuita', 'instantâneo', 'instruções de remoção', 
  'investimento', 'isso não é spam', 'isso não é um golpe', 'isto é um anúncio', 'junk', 'legal', 
  'leia, por favor', 'letras pequenas', 'liberdade', 'liberdade financeira', 'ligue agora', 'ligue já', 
  'ligue para nós', 'limitado', 'liquidação', 'lista de e-mail', 'livre de riscos', 'lucro garantido', 
  'lucros', 'luxo', 'macbook gratuito/grátis', 'mais tráfego', 'marketing', 'marketing direto', 
  'marketing multinível', 'marketing online', 'me encontre', 'medicina', 'melhor negócio', 'melhor oferta', 
  'melhor preço', 'melhor promoção', 'membro', 'menor preço', 'menores taxas de seguro', 'mensagem contém', 
  'mês de ofertas', 'mídia', 'milagrosa', 'milhares', 'milhões de dólares', 'milhões de reais', 
  'milionário', 'money', 'moneyback', 'muito tempo', 'mulheres solteiras', 'não apague', 'não descarte', 
  'não é golpe', 'não é lixo', 'não é lixo eletrônico', 'não é necessário comprar', 'não é spam', 
  'não exclua', 'não hesite', 'não perca tempo', 'não posso viver sem', 'não responda', 'não solicitado', 
  'não vai durar', 'negócio', 'negócio especial', 'negócio fantástico', 'negócio incrível', 
  'nenhum inventário', 'nenhum investimento', 'nenhum pagamento exigido', 'nenhuma obrigação', 
  'nigeriano', 'nome da marca', 'nós odiamos spam', 'notificação importante', 
  'novas extensões de domínio', 'novo em folha', 'número 1', 'número um', 'nunca', 'nunca antes', 
  'o formulário a seguir', 'o que está prendendo você?', 'o que você está esperando?', 'oferta', 
  'oferta de crédito', 'oferta especial', 'oferta exclusiva', 'oferta fantástica', 'oferta imperdível', 
  'oferta incrível', 'oferta limitada', 'oferta limitada ', 'oferta séria', 'oferta vitalícia', 
  'ofertas de férias', 'offshore', 'olá', 'on-line grau', 'oportunidade', 'oportunidade única', 
  'orgânico', 'pagamento garantido', 'pague ', 'pague suas dívidas', 'palavras fáceis', 
  'para acesso instantâneo', 'para você', 'parabéns', 'pare de enviar e-mails', 'pare de me ligar', 
  'pare de roncar', 'pechincha', 'perca peso', 'perda de peso', 'peso', 'peça agora', 'por apenas', 
  'por apenas $ (algum valor)', 'por dia', 'por mês', 'por que pagar mais?', 'por semana', 
  'por tempo limitado', 'possibilidade', 'pré-aprovado', 'prêmio', 'presente gratuito/grátis', 'preço', 
  'preço protecção', 'problema', 'produzido e enviado por', 'promoção especial', 'quantidade', 
  'quantidade limitada', 'quem realmente ganha?', 'quer cartão de crédito', 'rates', 'reais por dia', 
  'real', 'receba agora', 'receba de graça', 'receita caseira', 'receita milagrosa', 'recolher', 
  'recolher pensão alimentícia', 'recursos limitados', 'redor do mundo', 'reduza as taxas de juros', 
  'reduza o pagamento mensal', 'reduza sua taxa de hipoteca ', 'reduzida drasticamente', 'reembolso', 
  'reembolso total', 'refinancie sua casa', 'refinancie sua dívida', 'reivindicar agora', 
  'reivindicar seu desconto', 'reivindicações', 'relógio', 'remove rugas', 'remover', 'remoção', 
  'renda extra', 'renda instantâneo', 'renda on-line', 'rendimento garantido', 
  'requer investimento inicial', 'reserva o direito', 'retorno garantido', 'reverte envelhecimento', 
  'risco zero', 'rolex', 'roncar', 'ronco', 'saia da dívida', 'saiba mais', 'salário', 'satisfação', 
  'satisfação garantida', 'score', 'score alto', 'score baixo', 'se surpreenda', 'seguridade social', 
  'seguro', 'seguro de vida', 'seja membro', 'seja seu próprio patrão', 'seja um membro', 
  'sem análise de crédito', 'sem compromisso', 'sem custo', 'sem custos escondidos', 
  'sem depósito necessário', 'sem exames médicos', 'sem experiência', 'sem formulários de reclamação', 
  'sem igual', 'sem intermediários', 'sem investimento necessário', 'sem nada a esconder', 
  'sem nenhum custo', 'sem obrigação', 'sem pegadinhas', 'sem perguntas', 'sem reembolso!', 
  'sem requisição médica', 'sem restrições de idade', 'sem riscos', 'sem taxas', 'sem taxas escondidas', 
  'sem truques', 'sem vender', 'senhas', 'serasa', 'sério', 'serviço de proteção ao crédito', 
  'seu negócio', 'seu status', 'só hoje', 'solicite', 'solicite agora', 'solicite hoje', 'solução', 
  'soluções de marketing', 'spam', 'spc', 'status', 'status do pedido', 'sua chance', 'sua renda', 
  'sucesso', 'sujeito a análise', 'sujeito a análise de crédito', 'sujeito a crédito', 'suprimentos', 
  'suprimentos limitados', 'taxas de juro', 'taxas escondidas', 'telefone', 
  'telefone celular gratuito/grátis', 'tempo limitado', 'tempo limitado', 'termos e condições', 
  'teste de', 'teste de tráfego', 'teste gratuito/grátis', 'trabalhe em casa', 'trabalhe de casa', 
  'tráfego', 'tráfego da web', 'última chance', 'uma vez', 'uma vez na vida', 'urgentes', 
  'vagas limitadas', 'vai se surpreender', 'veja por si mesmo', 'vencedor', 'vencer', 'venda', 'viagra', 
  'vip', 'visitantes do site ', 'visite nosso site', 'você é um vencedor!', 'você foi escolhido', 
  'você foi rejeitado?', 'você foi selecionado', 'você não vai acreditar em seus olhos', 
  'website grátis/gratuito', 'zero chance', 'zero por cento'
]


function processEmail(){
  let texto = email.value;
  let textoLowerCase = texto.toLowerCase();

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  let regexPattern = list_of_words.map(escapeRegExp).join('|');
  let regex = new RegExp(regexPattern, 'gi');

  function replaceRed(match) {
    return `<span style="color: red;">${match}</span>`;
  }

  let filteredText = textoLowerCase.replace(regex, replaceRed);

  result.innerHTML = filteredText;
}