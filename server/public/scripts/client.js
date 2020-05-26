console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    displayJokes();
    $('#addJokeButton').on('click', addJoke)
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


function addJoke(){
    let who = $('#whoseJokeIn').val();
    let question = $('#questionIn').val();
    let punchLine = $('#punchlineIn').val();

    let dataToSend = {
        whoseJoke: who,
        jokeQuestion: question,
        punchLine: punchLine
    }

    $.ajax({
        method: 'POST',
        url: '/addJoke',
        data: dataToSend
    }).then( function (response){
       
    });
    displayJokes();
}


