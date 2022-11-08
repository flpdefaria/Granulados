
//Definindo o titulo da aplicação 
function setConfig() {
    var texts = {
        "title":"Granulados App"
    };
    document.title = texts.title;
    document.getElementById("navTitle").innerHTML = texts.title;
}

//Executando a função de cima
setConfig();