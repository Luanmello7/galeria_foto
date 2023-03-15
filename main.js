$(document).ready(function(){
    $('header button').mouseover(function(){ //mouse ao descansar o mouse aciona o slide down
        $('form').slideDown(); //Animação do form descer
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp(); //Animação do form subir
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDanovaImagem = $('#endereco-imagem-nova').val(); //quando colarem uma url no input (val é value no jQuery)
        const novoItem = $('<li style=" display:none" ></li>'); // ele cria uma linha sem aparecer 
        $(`<img src ="${enderecoDanovaImagem}"/>`).appendTo(novoItem); // adciona a imagem da url na linha criada 
        $(`
            <div class="overlay-imagem-link"> 
                <a href="${enderecoDanovaImagem}" target="_blank" title="Ver imagem em tamanho real"> 
                    Ver imagem em tamanho real
                </a> 
            </div>
            `).appendTo(novoItem); // Vai criar o link para abrir a imagem em outra aba
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000); //Tempo de aparecer é de 1seg (em miliseg 1000)
            $('#endereco-imagem-nova').val(''); //limpando o campo apos receber um valor
    })
})