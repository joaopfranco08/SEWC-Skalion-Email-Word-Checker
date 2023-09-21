let email = document.getElementById("email");
let result = document.getElementById("result")

let list_of_words = ['this isn’t a scam', 'earn per week', 'mail in order form', 'reverses', '#1', 'easy terms', 
'maintained', 'reverses aging', '$$$', 'eliminate bad credit', 'make $', 'risk free', '‘hidden’ assets', 
'eliminate debt', 'make money', 'rolex', '100% free', 'email harvest', 'marketing', 'round the world', 
'100% satisfied', 'email marketing', 'marketing solutions', 's 1618', '4u', 'expect to earn', 
'mass email', 'safeguard notice', '50% off', 'explode your business', 'medicine', 'sale', 
'accept credit cards', 'extra income', 'medium', 'sales', 'acceptance', 'f r e e', 'meet singles', 
'sample', 'access', 'fantastic deal', 'member', 'satisfaction', 'accordingly', 'fast cash', 
'member stuff', 'satisfaction guaranteed', 'act now', 'fast viagra delivery', 'message contains', 
'save $', 'act now!', 'financial freedom', 'message contains disclaimer', 'save big money', 
'act now! don’t hesitate!', 'financially independent', 'million', 'save up to', 'ad', 'for free', 
'million dollars', 'score with babes', 'additional income', 'for instant access', 'miracle', 
'search engine listings', 'addresses on cd', 'for just $ (some amount)', 'mlm', 'search engines', 
'affordable', 'for just $xxx', 'money', 'section 301', 'all natural', 'for only', 'money back', 
'see for yourself', 'all new', 'for you', 'money making', 'sent in compliance', 'amazing', 'form', 
'month trial offer', 'serious cash', 'amazing stuff', 'free', 'more internet traffic', 'serious only', 
'apply now', 'free access', 'mortgage', 'shopper', 'apply online', 'free cell phone', 'mortgage rates', 
'shopping spree', 'as seen on', 'free consultation', 'multi level marketing', 'sign up free today', 
'auto email removal', 'free consultation', 'multi-level marketing', 'social security number', 'avoid', 
'free dvd', 'name brand', 'solution', 'avoid bankruptcy', 'free gift', 'never', 'special promotion', 
'bargain', 'free grant money', 'new customers only', 'stainless steel', 'be amazed', 'free hosting', 
'new domain extensions', 'stock alert', 'be your own boss', 'free info', 'nigerian', 
'stock disclaimer statement', 'being a member', 'free installation', 'no age restrictions', 
'stock pick', 'beneficiary', 'free instant', 'no catch', 'stop', 'best price', 'free investment', 
'no claim forms', 'stop snoring', 'beverage', 'free leads', 'no cost', 'strong buy', 'big bucks', 
'free membership', 'no credit check', 'stuff on sale', 'bill 1618', 'free money', 'no disappointment', 
'subject to cash', 'billing address', 'free offer', 'no experience', 'subject to credit', 'billion', 
'free preview', 'no fees', 'subscribe', 'billion dollars', 'free priority mail', 'no gimmick', 'success', 
'bonus', 'free quote', 'no hidden', 'supplies are limited', 'brand new pager', 'free sample', 
'no inventory', 'take action now', 'bulk email', 'free trial', 'no investment', 
'talks about hidden charges', 'buy', 'free website', 'no medical exams', 'talks about prizes', 
'buy direct', 'freedom', 'no middleman', 'teen', 'buying judgements', 'friend', 'no obligation', 
'tells you it’s an ad', 'buying judgments', 'full refund', 'no purchase necessary', 
'terms and conditions', 'cable converter', 'get', 'no questions asked', 'the best rates', 'call', 
'get it now', 'no selling', 'the following form', 'call free', 'get out of debt', 'no strings attached', 
'they keep your money – no refund', 'call now', 'get paid', 'no-obligation', 'they’re just giving it away', 
'calling creditors', 'get started now', 'not intended', 'this isn’t junk', 'cancel at any time', 
'gift certificate', 'notspam', 'this isn’t spam', 'cannot be combined with any other offer', 
'give it away', 'now', 'this won’t last', 'can’t live without', 'giving away', 'now only', 'thousands', 
'cards accepted', 'great offer', 'obligation', 'time limited', 'cash', 'guarantee', 'off shore', 'trial', 
'cash bonus', 'guaranteed', 'offer', 'undisclosed recipient', 'cashcashcash', 'have you been turned down?', 
'offer expires', 'university diplomas', 'casino', 'hello', 'once in lifetime', 'unlimited', 'celebrity', 
'here', 'one hundred percent free', 'unsecured credit', 'cell phone cancer scam', 'hidden', 
'one hundred percent guaranteed', 'unsecured credit/debt', 'cents on the dollar', 'hidden assets', 
'one time', 'unsecured debt', 'certified', 'hidden charges', 'one time mailing', 'unsolicited', 'chance', 
'home', 'online biz opportunity', 'unsubscribe', 'cheap', 'home based', 'online degree', 'urgent', 
'check', 'home employment', 'online marketing', 'us dollars', 'check or money order', 
'homebased business', 'online pharmacy', 'vacation', 'claims', 'human growth hormone', 'only', 
'vacation offers', 'claims not to be selling anything', 'if only it were that easy', 'only $', 'valium', 
'claims to be in accordance with some spam law', 'important information regarding', 'open', 'viagra', 
'claims to be legal', 'in accordance with laws', 'opportunity', 'viagra and other drugs', 'clearance', 
'income', 'opt in', 'vicodin', 'click', 'income from home', 'order', 'visit our website', 'click below', 
'increase sales', 'order now', 'wants credit card', 'click here', 'increase traffic', 'order shipped by', 
'warranty', 'click to remove', 'increase your sales', 'order status', 'we hate spam', 'collect', 
'incredible deal', 'order today', 'we honor all', 'collect child support', 'info you requested', 
'orders shipped by', 'web traffic', 'compare', 'information you requested', 'outstanding values', 
'weekend getaway', 'compare rates', 'instant', 'passwords', 'weight loss', 'compete for your business', 
'insurance', 'pennies a day', 'what are you waiting for?', 'confidentially on all orders', 
'internet market', 'per day', 'while supplies last', 'congratulations', 'internet marketing', 
'per week', 'while you sleep', 'consolidate debt and credit', 'investment', 'performance', 
'who really wins?', 'consolidate your debt', 'investment decision', 'phone', 'why pay more?', 
'copy accurately', 'it’s effective', 'please read', 'wife', 'copy dvds', 'it’s effective', 
'potential earnings', 'will not believe your eyes', 'cost', 'join millions', 'pre-approved', 'win', 
'costs', 'join millions of americans', 'price', 'winner', 'credit', 'laser printer', 'prices', 'winner', 
'credit bureaus', 'leave', 'print form signature', 'winning', 'credit card offers', 'legal', 
'print out and fax', 'won', 'cures baldness', 'life', 'priority mail', 'work at home', 'deal', 
'life insurance', 'prize', 'work from home', 'dear [email/friend/somebody]', 'lifetime', 'prizes', 
'xanax', 'diagnostics', 'limited time', 'problem', 'you are a winner!', 'dig up dirt on friends', 
'limited time offer', 'produced and sent out', 'you have been selected', 'direct email', 
'limited time only', 'profits', 'you’re a winner!', 'direct marketing', 'loans', 'promise you', 
'your income', 'discount', 'long distance phone offer', 'pure profits', 'do it today', 'lose', 'quote', 
'don’t delete', 'lose weight', 'quotes', 'don’t hesitate', 'lose weight spam', 'real thing', 'dormant', 
'lower interest rate', 'refinance', 'double your', 'lower interest rates', 'refinance home', 
'double your income', 'lower monthly payment', 'refinanced home', 'drastically reduced', 
'lower your mortgage rate', 'removal instructions', 'earn', 'lowest insurance rates', 'remove', 
'earn $', 'lowest price', 'removes wrinkles', 'earn extra cash', 'luxury car and reserves the right']


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