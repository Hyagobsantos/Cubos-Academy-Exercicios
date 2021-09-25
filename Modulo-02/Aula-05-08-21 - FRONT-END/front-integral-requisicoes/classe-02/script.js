const dropDownList = document.querySelector('#moedas-select');
const dropDownListValor = document.querySelector('option');
const p = document.querySelector('.texto-high');

const listaMoedas = [
    "BTC",
    "AAVE",
    "ACMFT",
    "ACORD", 
    "ALLFT",
    "AMFT",
    "ANKR",
    "ARGFT",
    "ASRFT",
    "ATMFT",
    "AXS",
    "BAL",
    "BAND ",
    "BARFT",
    "BAT  ",
    "BCH  ",
    "BNT ",
    "CAIFT",
    "CHZ ",
    "CITYF",
    "COMP ",
    "CRV" ,
    "DAI" ,
    "DAL" ,
    "ENJ" ,
    "ETH" ,
    "GALFT",
    "GALOF",
    "GRT" ,
    "IMOB0",
    "IMOB0",
    "JUVFT",
    "KNC ",
    "LINK ",
    "LTC ",
    "MANA",
    "MATIC",
    "MBCON",
    "MBCON",
    "MBFP0",
    "MBFP0",
    "MBFP0",
    "MBFP0",
    "MBFP0",
    "MBPRK",
    "MBPRK",
    "MBPRK",
    "MBPRK",
    "MBPRK",
    "MBVAS",
    "MCO2 ",
    "MKR ",
    "NAVIF",
    "OGFT",
    "OMG ",
    "PAXG ",
    "PFLFT",
    "PSGFT",
    "REI ",
    "REN ",
    "SAUBE",
    "SCCPF",
    "SNX ",
    "SUSHI",
    "THFT ",
    "UMA",
    "UNI ",
    "USDC ",
    "WBTC ",
    "WBX ",
    "XRP ",
    "YBOFT",
    "YFI ",
    "ZRX "
];


listaMoedas.forEach((moedas) => {
    option = new Option(moedas, moedas.toLowerCase());
    dropDownList.options[dropDownList.options.length] = option;
  });


dropDownList.addEventListener('change', async function(event) {
    const resposta = await fetch('https://www.mercadobitcoin.net/api/' + event.target.value.trim() + '/ticker')
    const respostaBody = await resposta.json();
    p.textContent = Number(respostaBody.ticker.high).toFixed(2)
})



