function primeira_questao(){
    var questao1 = document.getElementById('primeira').value 
    if (questao1 == 'This'){
        document.getElementById('first').style.backgroundColor = 'Green'
    }
    else if (questao1 == 'this'){
        document.getElementById('first').style.backgroundColor = 'Yellow'
    }
    else{
        document.getElementById('first').style.backgroundColor = 'Red'
    }
}

function segunda_questao(){
    var questao2 = document.getElementById('segunda').value
    if (questao2 == 'is'){
        document.getElementById('second').style.backgroundColor = 'Green'
    }
    else{
        document.getElementById('second').style.backgroundColor = 'Red'
    }
}

function terceira_questao(){
    var questao3 = document.getElementById('terceira').value
    if (questao3 == 'cs50x!'){
        document.getElementById('third').style.backgroundColor = 'Green'
    }
    else{
        document.getElementById('third').style.backgroundColor = 'Red'
    }
}