var jogo = [];
var tabuleiro = [];
var quemJoga = 0;
var verifica;
var jogando = true;
var nivel = 2;
var jogadaCpu = 1;
var quemComeca = 1;
var jogada = 0;

var humano = 0;
var robo = 0;

function jogar(p){
    if((jogando) || (quemJoga === 0)){

        switch(p){

            case 1:

                if(jogo[0][0]===''){

                    jogo[0][0] = 'X';
                    quemJoga = 1;
                }
                break;
            case 2:

                if(jogo[0][1]===''){

                    jogo[0][1] = 'X';
                    quemJoga = 1;
                }
                break;
            case 3:

                if(jogo[0][2]===''){

                    jogo[0][2] = 'X';
                    quemJoga = 1;
                }
                break;
            case 4:

                if(jogo[1][0]===''){

                    jogo[1][0] = 'X';
                    quemJoga = 1;
                }
                break;
            case 5:

                if(jogo[1][1]===''){

                    jogo[1][1] = 'X';
                    quemJoga = 1;
                }
                break;
            case 6:

                if(jogo[1][2]===''){

                    jogo[1][2] = 'X';
                    quemJoga = 1;
                }
                break;
            case 7:

                if(jogo[2][0]===''){

                    jogo[2][0] = 'X';
                    quemJoga = 1;
                }
                break;
            case 8:

                if(jogo[2][1]===''){

                    jogo[2][1] = 'X';
                    quemJoga = 1;
                }
                break;
            default:

                if(jogo[2][2]===''){

                    jogo[2][2] = 'X';
                    quemJoga = 1;
                }
                break;
        }

        if(quemJoga === 1){

            atualizaTabuleiro();

            verifica = verificaVitoria();
            if(verifica != ''){
    
                jogando = false;
                                
                humano++;
                
                document.getElementById('dvplacar').innerHTML = 'Humano: ' + (humano) + '| Robô: ' + (robo);
                //alert(verifica + ' venceu');
            }

            jogada++;
            
            cpuJoga();
        }
    }
}

function cpuJoga(){
    
    var linha, coluna;

    if(jogando){

        if(nivel === 1){

            do{

                linha = Math.round(Math.random() * 2);
                coluna = Math.round(Math.random() * 2);
            }while(jogo[linha][coluna] != '');

            jogo[linha][coluna] = 'O';
        }
        else if(nivel === 2){
            debugger
            // ATAQUE
            // Jogadas linha 1
            if((jogo[0][0] === 'O') && (jogo[0][1] === 'O') && (jogo[0][2] === '')){
                jogo[0][2] = 'O';
            }else if((jogo[0][0] === 'O') && (jogo[0][2] === 'O') && (jogo[0][1] === '')){
                jogo[0][1] = 'O';
            }else if((jogo[0][1] === 'O') && (jogo[0][2] === 'O') && (jogo[0][0] === '')){
                jogo[0][0] = 'O';
            }
            // Jogadas linha 1
            else if((jogo[1][0] === 'O') && (jogo[1][1] === 'O') && (jogo[1][2] === '')){
                jogo[1][2] = 'O';
            }else if((jogo[1][0] === 'O') && (jogo[1][2] === 'O') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[1][1] === 'O') && (jogo[1][2] === 'O') && (jogo[1][0] === '')){
                jogo[1][0] = 'O';
            }
            // Jogadas linha 3
            else if((jogo[2][0] === 'O') && (jogo[2][1] === 'O') && (jogo[2][2] === '')){
                jogo[2][2] = 'O';
            }else if((jogo[2][0] === 'O') && (jogo[2][2] === 'O') && (jogo[2][1] === '')){
                jogo[2][1] = 'O';
            }else if((jogo[2][1] === 'O') && (jogo[2][2] === 'O') && (jogo[2][0] === '')){
                jogo[2][0] = 'O';
            }
            // Jogadas Coluna 1
            else if((jogo[0][0] === 'O') && (jogo[1][0] === 'O') && (jogo[2][0] === '')){
                jogo[2][0] = 'O';
            }else if((jogo[0][0] === 'O') && (jogo[2][0] === 'O') && (jogo[1][0] === '')){
                jogo[1][0] = 'O';
            }else if((jogo[1][0] === 'O') && (jogo[2][0] === 'O') && (jogo[0][0] === '')){
                jogo[0][0] = 'O';
            }
            // Jogadas Coluna 2
            else if((jogo[0][1] === 'O') && (jogo[1][1] === 'O') && (jogo[2][1] === '')){
                jogo[2][1] = 'O';
            }else if((jogo[0][1] === 'O') && (jogo[2][1] === 'O') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[1][1] === 'O') && (jogo[2][1] === 'O') && (jogo[0][1] === '')){
                jogo[0][1] = 'O';
            }
            // Jogadas Coluna 3
            else if((jogo[0][2] === 'O') && (jogo[1][2] === 'O') && (jogo[2][2] === '')){
                jogo[2][2] = 'O';
            }else if((jogo[0][2] === 'O') && (jogo[2][2] === 'O') && (jogo[1][2] === '')){
                jogo[1][2] = 'O';
            }else if((jogo[1][2] === 'O') && (jogo[2][2] === 'O') && (jogo[0][2] === '')){
                jogo[0][2] = 'O';
            }
            // Jogadas Diagonal 1
            else if((jogo[0][0] === 'O') && (jogo[1][1] === 'O') && (jogo[2][2] === '')){
                jogo[2][2] = 'O';
            }else if((jogo[0][0] === 'O') && (jogo[2][2] === 'O') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[1][1] === 'O') && (jogo[2][2] === 'O') && (jogo[0][0] === '')){
                jogo[0][0] = 'O';
            }
            // Jogadas Diagonal 2
            else if((jogo[0][2] === 'O') && (jogo[1][1] === 'O') && (jogo[2][0] === '')){
                jogo[2][0] = 'O';
            }else if((jogo[0][2] === 'O') && (jogo[2][0] === 'O') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[2][0] === 'O') && (jogo[1][1] === 'O') && (jogo[0][2] === '')){
                jogo[0][2] = 'O';
            }
            // DEFESA
            // Jogadas linha 1
            if((jogo[0][0] === 'X') && (jogo[0][1] === 'X') && (jogo[0][2] === '')){
                jogo[0][2] = 'O';
            }else if((jogo[0][0] === 'X') && (jogo[0][2] === 'X') && (jogo[0][1] === '')){
                jogo[0][1] = 'O';
            }else if((jogo[0][1] === 'X') && (jogo[0][2] === 'X') && (jogo[0][0] === '')){
                jogo[0][0] = 'O';
            }
            // Jogadas linha 1
            else if((jogo[1][0] === 'X') && (jogo[1][1] === 'X') && (jogo[1][2] === '')){
                jogo[1][2] = 'O';
            }else if((jogo[1][0] === 'X') && (jogo[1][2] === 'X') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[1][1] === 'X') && (jogo[1][2] === 'X') && (jogo[1][0] === '')){
                jogo[1][0] = 'O';
            }
            // Jogadas linha 3
            else if((jogo[2][0] === 'X') && (jogo[2][1] === 'X') && (jogo[2][2] === '')){
                jogo[2][2] = 'O';
            }else if((jogo[2][0] === 'X') && (jogo[2][2] === 'X') && (jogo[2][1] === '')){
                jogo[2][1] = 'O';
            }else if((jogo[2][1] === 'X') && (jogo[2][2] === 'X') && (jogo[2][0] === '')){
                jogo[2][0] = 'O';
            }
            // Jogadas Coluna 1
            else if((jogo[0][0] === 'X') && (jogo[1][0] === 'X') && (jogo[2][0] === '')){
                jogo[2][0] = 'O';
            }else if((jogo[0][0] === 'X') && (jogo[2][0] === 'X') && (jogo[1][0] === '')){
                jogo[1][0] = 'O';
            }else if((jogo[1][0] === 'X') && (jogo[2][0] === 'X') && (jogo[0][0] === '')){
                jogo[0][0] = 'O';
            }
            // Jogadas Coluna 2
            else if((jogo[0][1] === 'X') && (jogo[1][1] === 'X') && (jogo[2][1] === '')){
                jogo[2][1] = 'O';
            }else if((jogo[0][1] === 'X') && (jogo[2][1] === 'X') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[1][1] === 'X') && (jogo[2][1] === 'X') && (jogo[0][1] === '')){
                jogo[0][1] = 'O';
            }
            // Jogadas Coluna 3
            else if((jogo[0][2] === 'X') && (jogo[1][2] === 'X') && (jogo[2][2] === '')){
                jogo[2][2] = 'O';
            }else if((jogo[0][2] === 'X') && (jogo[2][2] === 'X') && (jogo[1][2] === '')){
                jogo[1][2] = 'O';
            }else if((jogo[1][2] === 'X') && (jogo[2][2] === 'X') && (jogo[0][2] === '')){
                jogo[0][2] = 'O';
            }
            // Jogadas Diagonal 1
            else if((jogo[0][0] === 'X') && (jogo[1][1] === 'X') && (jogo[2][2] === '')){
                jogo[2][2] = 'O';
            }else if((jogo[0][0] === 'X') && (jogo[2][2] === 'X') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[1][1] === 'X') && (jogo[2][2] === 'X') && (jogo[0][0] === '')){
                jogo[0][0] = 'O';
            }
            // Jogadas Diagonal 2
            else if((jogo[0][2] === 'X') && (jogo[1][1] === 'X') && (jogo[2][0] === '')){
                jogo[2][0] = 'O';
            }else if((jogo[0][2] === 'X') && (jogo[2][0] === 'X') && (jogo[1][1] === '')){
                jogo[1][1] = 'O';
            }else if((jogo[2][0] === 'X') && (jogo[1][1] === 'X') && (jogo[0][2] === '')){
                jogo[0][2] = 'O';
            }else{

                if(jogada < 8){

                    do{

                        linha = Math.round(Math.random() * 2);
                        coluna = Math.round(Math.random() * 2);
                    }while(jogo[linha][coluna] != '');

                    jogo[linha][coluna] = 'O';
                }else{

                    for(var l = 0; l < 3; l++){

                        for(var c = 0; c < 3; c++){

                            if(jogo[l][c] === ''){

                                jogo[l][c] = 'O'
                            }
                        }
                    }
                }
            }           
        }

        verifica = verificaVitoria();
        if(verifica != ''){

            jogando = false;
            
            robo++;
            
            document.getElementById('dvplacar').innerHTML = 'Humano: ' + (humano) + '| Robô: ' + (robo);
            //alert(verifica + ' venceu');
        }

        atualizaTabuleiro();
        jogada++;
        quemJoga = 0;
    }
}

function verificaVitoria(){

    var linha, coluna;

    //Testando as linhas
    for(linha = 0; linha < 3; linha++){

        if((jogo[linha][0] === jogo[linha][1]) && (jogo[linha][1] === jogo[linha][2])){

            return jogo[linha][0];
        }
    }

    //Testando as colunas
    for(coluna = 0; coluna < 3; coluna++){

        if((jogo[0][coluna] === jogo[1][coluna]) && (jogo[1][coluna] === jogo[2][coluna])){

            return jogo[0][coluna];
        }
    }

    // Testando as diagonais
    if((jogo[0][0] === jogo[1][1]) && (jogo[1][1] === jogo[2][2])){

        return jogo[0][0];
    }

    if((jogo[0][2] === jogo[1][1]) && (jogo[1][1] === jogo[2][0])){

        return jogo[0][0];
    }

    return '';
}

function atualizaTabuleiro(){

    for(var linha = 0; linha < 3; linha++){

        for(var coluna = 0; coluna < 3; coluna++){

            if(jogo[linha][coluna] === 'X'){

                tabuleiro[linha][coluna].innerHTML = 'X';
                tabuleiro[linha][coluna].style.cursor = 'default';
            }
            else if(jogo[linha][coluna] === 'O'){

                tabuleiro[linha][coluna].innerHTML = 'O';
                tabuleiro[linha][coluna].style.cursor = 'default';
            }
            else{

                tabuleiro[linha][coluna].innerHTML = '';
                tabuleiro[linha][coluna].style.cursor = 'pointer';
            }

        }
    }

}

function inicia(){
    
    jogando = true;
    
    jogadaCpu = 1;
    
    jogada = 0;

    jogo = [
        ['','',''],
        ['','',''],
        ['','','']
    ]

    tabuleiro = [
        [document.getElementById('p1'), document.getElementById('p2'), document.getElementById('p3')],
        [document.getElementById('p4'), document.getElementById('p5'), document.getElementById('p6')],
        [document.getElementById('p7'), document.getElementById('p8'), document.getElementById('p9')]
    ]

    atualizaTabuleiro();

    if(quemComeca === 1){

        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById('dvquemcomeca').innerHTML = 'Quem começa: Jogador'
    }
    else{

        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById('dvquemcomeca').innerHTML = 'Quem começa: Computador';

        cpuJoga();
    }
}

window.addEventListener('load', inicia);