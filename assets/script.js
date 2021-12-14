let inputTarefa = document.getElementById("inputTarefa");
let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");

function adicionarTarefa(){
    if (inputTarefa.value !== ""){
        let tarefaLista = document.createElement("li");
        let tarefaCheckbox = document.createElement("input");
        let tarefaCheckboxType = document.createAttribute("type");
        let tarefaCheckboxId = document.createAttribute("id");
        let tarefaLabel = document.createElement("label");
        let tarefaValidacao = document.createAttribute("onclick");

        tarefaCheckbox.setAttributeNode(tarefaCheckboxType);
        tarefaCheckboxType.value = "checkbox";
        tarefaCheckbox.setAttributeNode(tarefaCheckboxId);
        tarefaCheckboxId.value = (inputTarefa.value).toLowerCase()
        tarefaCheckbox.setAttributeNode(tarefaValidacao);
        tarefaValidacao.value = "validacao(this)";
        // tarefaCheckbox.setAttributeNode(tarefaCheckboxId);
        // tarefaCheckboxId.value = inputTarefa.value;
        tarefaLabel.innerHTML = inputTarefa.value;

        lista.appendChild(tarefaLista);
        tarefaLista.appendChild(tarefaCheckbox);
        tarefaLista.appendChild(tarefaLabel);

        inputTarefa.value = "";
        inputTarefa.focus();
    } else {
        alert("Digite uma tarefa.")
        inputTarefa.focus();
    }
}

function validacao(element) {
    let id = element.id; // Pega o ID do próprio elemento que chamou a função
    let li = element.parentNode;
    let checkbox = document.getElementById(id);  

    if (checkbox.checked) {
        li.style = "text-decoration: line-through";
    } else {
        li.style = "text-decoration: none";
    }
}