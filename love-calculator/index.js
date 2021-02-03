
$('.btn').click(()=>{
    if($("#firts-partner").val()==""||$("#second-partner").val()==""){alert('Enter name, please')}
    else{
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${$("#firts-partner").val()}&sname=${$("#second-partner").val()}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "love-calculator.p.rapidapi.com"
        }
    })
        .then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
        }))
        ).then(res=> {
        if($(".response").length>0){$('.response').remove()}
        console.log(res)
        $( ".btn-primary" ).after( `
<div class="response p-2">
<div class="names">${res.data.fname} and ${res.data.sname}</div>
<div class="percentage">Your chanses is: ${res.data.percentage}% </div>
<div class="result">${res.data.result}</div>
</div>` );
    })
        .catch(err => {
            console.error(err);
        });

    }}
)
