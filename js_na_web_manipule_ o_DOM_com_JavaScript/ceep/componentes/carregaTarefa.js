import { criaData } from "./criarData.js";
import { ordenaDatas, removeDatasRepetidas } from "./data.js";

export const caregaTarefa = () => {
    const lista = document.querySelector('[data-list]');

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    lista.innerHTML = " ";
    const dataUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(dataUnicas);
    dataUnicas.forEach((dia) =>{
        lista.appendChild(criaData(dia));
    })
}