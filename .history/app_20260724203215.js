const describe = document.getElementById('btn-describe');
let count = 0;
if(count<1);
{
    describe.addEventListener('click', () =>
    {
        const list = document.createElement('li');

        list.classList.add('button');

        const content = `<input placeholder="Digite o nome da cidade..." id="input-list"></input>`;

        list.innerHTML = content;
        describe.appendChild(list)
        
    });

    console.log(count)
}