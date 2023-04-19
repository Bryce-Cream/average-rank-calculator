//have class ranks
//id of result
//ONCHANGE

const selects = document.querySelectorAll('select.ranks');
let result = 0;
let resultText = document.getElementById('result');


function calculateRanks()
{
    result = Math.round((Number(selects[0].value) + Number(selects[1].value) + Number(selects[2].value) + Number(selects[3].value) + Number(selects[4].value)) / 5);

    const index = Math.round(result/100);

    resultText.innerHTML = selects[0].options[selects[0].length - index -1].text;
}