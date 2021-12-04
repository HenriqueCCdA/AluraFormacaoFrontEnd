const concluirTarefa = (atualiza, id) => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida; // inverte false  e true

    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas));

    atualiza()
}

const BotaoConclui = (atualiza, id) =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');

    botaoConclui.innerHTML = 'concluir';

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id));

    return botaoConclui;
}

export default BotaoConclui;