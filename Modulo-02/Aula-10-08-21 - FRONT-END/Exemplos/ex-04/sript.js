const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keydown' , function(event) {
    if(event.key != 'Enter' || input.value === '') return

    const tarefa = document.createElement('li');
    tarefa.textContent = input.value;
    ul.append(tarefa)

    tarefa.addEventListener('click', function(){
        tarefa.style.textDecoration = 'line-through'

        tarefa.addEventListener('dblclick', function(){
            tarefa.remove();
        })
    })
    

    input.value = '';
});