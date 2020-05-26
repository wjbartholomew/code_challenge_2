console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    displayJokes();
}

function displayJokes(){
console.log('hello')

    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then( function (response){
        console.log(response)
        for (i=0; i<response.length;i++){
            $('#outputDiv').append(`${response[i].whoseJoke}<br>${response[i].jokeQuestion}<br>${response[i].punchLine} <br><br>`)
        }
    })
}

