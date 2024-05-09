// objeto que representa os jogadores e suas classes (X e O)
const players = {
    X: { name: prompt('Insira o nome do jogador 1'), class: 'X' },
    O: { name: prompt('Insira o nome do jogador 2'), class: 'O' }
};

// variável que mantém o jogador atual
let currentPlayer = players.X;

// span no qual exibimos de quem é o turno
let span = document.getElementById('playerTurn');
span.innerText = currentPlayer.name;

// array das células do tabuleiro
const cells = document.querySelectorAll('.cell');

// combinações vencedoras
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// função para verificar se há um vencedor
function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        // se todas as células na combinação forem do mesmo jogador, esse jogador venceu
        if (cells[a].classList.contains(currentPlayer.class) &&
            cells[b].classList.contains(currentPlayer.class) &&
            cells[c].classList.contains(currentPlayer.class)) {
            alert(currentPlayer.name + ' venceu a partida!');
            resetGame(); // reseta o jogo após a vitória
            return;
        }
    }

    // se não houver, verifica se o jogo está empatado
    if (checkForTie()) {
        alert('Jogo empatado!');
        resetGame(); // reseta o jogo
        return;
    }
}

// função para verificar se o jogo está empatado
function checkForTie() {
    // verifica se todas as células do (cells) foram preenchidas
    return Array.from(cells).every(cell => cell.classList.contains(players.X.class) || cell.classList.contains(players.O.class));
}

// evento de clique para cada célula do tabuleiro
cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        // verifica se a célula já foi preenchida
        if (cell.classList.contains(players.X.class) || cell.classList.contains(players.O.class)) {
            return;
        } else {
            // se não é preenchida com a marca do jogador atual
            cell.classList.add(currentPlayer.class);
            cell.innerText = currentPlayer.class;
        }
        // verificação de vitória
        checkForWinner();
        // troca o turno para o próximo jogador
        currentPlayer = (currentPlayer === players.X) ? players.O : players.X;
        span.innerText = currentPlayer.name; // Atualiza o texto mostrando de quem é o turno
    });
});

// função para reiniciar o jogo
function resetGame() {
    // limpa as classes e textos de todas as células
    cells.forEach(function (cell) {
        cell.classList.remove(players.O.class, players.X.class);
        cell.innerText = '';
    });
}


/* 
VERSÃO ORIGINAL
const playerX = prompt('Insira o nome do jogador 1')
const playerO = prompt('Insira o nome do jogador 2')
const playerXClass = 'X'
const playerOClass = 'O'

let currentPlayer = playerX
let span = document.getElementById('playerTurn')
span.innerText = currentPlayer

const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
const b9 = document.getElementById('b9')
const winningCombinations = [
    [b1, b2, b3], 
    [b4, b5, b6], 
    [b7, b8, b9], 
    [b1, b4, b7], 
    [b2, b5, b8], 
    [b3, b6, b9], 
    [b1, b5, b9], 
    [b3, b5, b7]
]

function checkForWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [cell1, cell2, cell3] = winningCombinations[i]

        if (cell1.classList.contains(playerXClass) && 
            cell2.classList.contains(playerXClass) &&
            cell3.classList.contains(playerXClass)) {
                alert(playerX + ' venceu a partida!')
                resetGame();
                return
        } else if (cell1.classList.contains(playerOClass) && 
                   cell2.classList.contains(playerOClass) &&
                   cell3.classList.contains(playerOClass)) {
                        alert(playerO + ' venceu a partida!')
                        resetGame()
                        return
        }
            
    if (checkForTie()) {
        alert('Jogo empatado!')
        resetGame()
        return
    }
    }
}

function checkForTie () {
    return Array.from(document.querySelectorAll('.cell')).every(cell => cell.classList.contains(playerXClass) || cell.classList.contains(playerOClass))
}

document.querySelectorAll('.cell').forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (cell.classList.contains(playerXClass) || cell.classList.contains(playerOClass)) {
            return;
        } else {
            if (currentPlayer === playerX) {
                cell.classList.add(playerXClass)
                cell.innerText = 'X'
            } else {
                cell.classList.add(playerOClass)
                cell.innerText = 'O'
            }
        }
        // Verificação de vitória
        checkForWinner();
        // Trocar o turno
        currentPlayer = (currentPlayer === playerX) ? playerO : playerX;
        span.innerText = currentPlayer;
    });
});

function resetGame() {
    // Lógica para reiniciar o jogo
    document.querySelectorAll('.cell').forEach(function (cell) {
        cell.classList.remove(playerOClass, playerXClass)
        cell.innerText = ''
    })
}
*/