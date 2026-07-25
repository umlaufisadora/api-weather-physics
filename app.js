const describe = document.getElementById('btn-describe');
let count = 0;

    describe.addEventListener('click', () =>
    {
        if(count <1)
        {
            count +=1;
            const list = document.createElement('li');
            const lista = document.getElementById('listButton')


            list.classList.add('task');

            const content = `<input placeholder="Digite o nome da cidade..." id="input-list"></input>`;

            list.innerHTML = content;
            lista.appendChild(list)
        }
         console.log(count)
    });
    
