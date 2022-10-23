function bottone(){
    document.getElementById("testo").innerHTML += "<br>";
    document.getElementById("testo").innerHTML += '<input type="checkbox">';
    document.getElementById("testo").innerHTML += document.getElementById("todo").value;
}