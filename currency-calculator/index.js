let currncyList
let calc
$( document ).ready( function loadCurrency(){
fetch("https://currency-converter5.p.rapidapi.com/currency/list", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": key,
        "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
    }
})
    .then(response =>
        response.json().then(data => ({
            data: data,
            status: response.status
        }))
    ).then(res=>{
        currncyList=res
        addCurrencies()})
    .catch(err => {
        console.error(err);
    });


    $('.calculate-btn').on("click",calculate)
} )

function addCurrencies(){
    for(key in currncyList.data.currencies){
        $(".mdb-select").append(`<option value="${key}">${currncyList.data.currencies[key]}</option>`)
            }
    $("#currency-from").select2();
    $("#currency-to").select2();
}


function calculate(){
    console.log('Start calculating, but api sometimes works bad')
    fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${$('#currency-from').val()}&to=${$('#currency-to').val()}&amount=${Number($('.input-from').val())}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com"
        }
    })
        .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            }))
        ).then(res=>{
            calc =res
            let amount = res.data.rates[`${$('#currency-to').val()}`].rate
        $('.input-to').val(amount)
            })
        .catch(err => {
            console.error(err);
        });
}
