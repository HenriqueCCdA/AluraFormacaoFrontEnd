import { handleNovoItem } from "./componentes/criaTarefa.js";
import { caregaTarefa } from "./componentes/carregaTarefa.js";


const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoItem);

caregaTarefa()
