import { handleNovoItem } from "./componentes/criaTarefa.js";
import { caregaTarefa } from "./componentes/carregaTarefa.js";
import { limpaTarefas } from "./componentes/limpaTodasAsTarefas.js";


const novaTarefa = document.querySelector('[data-form-button-new]');
const limpaTarefa = document.querySelector('[data-form-button-clear]');

novaTarefa.addEventListener('click', handleNovoItem);

limpaTarefa.addEventListener('click', limpaTarefas);

caregaTarefa()
