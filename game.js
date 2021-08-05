var player_1 = localStorage.getItem('Player 1 Name');
var player_2 = localStorage.getItem('Player 2 Name');
console.log(player_1, player_2);
function names() {
    document.getElementById('name_1').innerHTML = player_1 + ":";
    document.getElementById('name_2').innerHTML = player_2 + ":";
    document.getElementById('player_1').innerHTML = player_1;
    document.getElementById('player_2').innerHTML = player_2;
}
function send() {
    var number_1 = document.getElementById('number_1').value;
    var number_2 = document.getElementById('number_2').value;
    localStorage.setItem('Number 1', number_1);
    localStorage.setItem('Number 2', number_2);
    document.getElementById('answer').style.height = "35vh";
    document.getElementById('answer_input').style.display = "block";
    document.getElementById('check').style.display = "block";
    document.getElementById('no').style.display = "block";
    // For Adding Numbers
    document.getElementById('equation').innerHTML = number_1 + " X " + number_2;
}