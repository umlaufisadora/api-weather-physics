const describe = document.getElementById('btn-describe');
let count = 0;

    describe.addEventListener('click', () =>
    {
        if(count)
        const list = document.createElement('li');

        list.classList.add('listinha');

        const content = `<input placeholder="Digite o nome da cidade..." id="input-list"></input>`;

        list.innerHTML = content;
        describe.appendChild(list)
        
    });
    
    console.log(count)
