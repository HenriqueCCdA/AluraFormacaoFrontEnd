import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

let tarefas = []

const handleNovoItem = (evento) =>{
    evento.preventDefault();
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-from-date]');
    const data = moment(calendario.value);

    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = criarTarefa(dados);

    tarefas.push(dados)

    lista.appendChild(criaTarefa);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    input.value = " ";
};


const criarTarefa = ({valor, dataFormatada}) => {

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${dataFormatada} - ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    return tarefa
};


const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);
