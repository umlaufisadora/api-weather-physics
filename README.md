# 🌦️ API Weather Physics

Aplicação web desenvolvida para uma atividade da disciplina de **Física**, com o objetivo de apresentar informações meteorológicas de diferentes cidades e relacioná-las à localização escolhida pelo usuário.

O projeto utiliza APIs externas para consultar dados climáticos, bandeiras dos países e imagens relacionadas às cidades pesquisadas.

---

## 📌 Sobre o projeto

O **API Weather Physics** permite que o usuário pesquise uma cidade e visualize informações atuais sobre o clima.

A aplicação apresenta:

* 🌡️ Temperatura atual;
* 🌤️ Condição meteorológica;
* 💧 Umidade do ar;
* 💨 Velocidade do vento;
* 🌎 País da cidade pesquisada;
* 🏳️ Bandeira do país;
* 🖼️ Imagem relacionada à cidade pesquisada.

Além disso, **Jaraguá do Sul** possui um tratamento especial dentro da aplicação, exibindo uma mensagem comemorativa relacionada aos 150 anos da cidade.

---

## 🚀 Tecnologias utilizadas

* **HTML5** — estrutura da aplicação;
* **CSS3** — estilização e layout;
* **JavaScript** — lógica da aplicação e consumo das APIs;
* **OpenWeatherMap API** — dados meteorológicos;
* **Pexels API** — imagens relacionadas às cidades;
* **Flags API** — bandeiras dos países;
* **Font Awesome** — ícones da interface;
* **Google Fonts** — tipografia.

---

## 🔌 APIs utilizadas

### OpenWeatherMap

Responsável pelo fornecimento dos dados meteorológicos.

A aplicação realiza uma requisição utilizando o nome da cidade informado pelo usuário e recebe informações como:

* temperatura;
* descrição do clima;
* umidade;
* velocidade do vento;
* código do país;
* ícone correspondente à condição climática.

### Pexels

Para cidades diferentes de Jaraguá do Sul, a aplicação realiza uma busca de imagens utilizando o nome da cidade e utiliza uma das imagens retornadas como plano de fundo.

### Flags API

Utilizada para apresentar a bandeira correspondente ao país da cidade pesquisada.

---

## 🖥️ Funcionamento

O fluxo principal da aplicação é:

```text
Usuário
   │
   ▼
Digita uma cidade
   │
   ▼
JavaScript realiza uma requisição
   │
   ▼
OpenWeatherMap
   │
   ▼
Dados meteorológicos
   │
   ├── Temperatura
   ├── Condição climática
   ├── Umidade
   ├── Vento
   └── País
   │
   ▼
Interface atualizada
   │
   ├── Bandeira do país
   └── Imagem da cidade
```

A pesquisa pode ser realizada de duas maneiras:

1. Clicando no botão de pesquisa;
2. Pressionando **Enter** no campo de cidade.

---

## 📂 Estrutura do projeto

```text
api-weather-physics/
│
├── css/
│   └── style.css
│
├── image/
│   └── jaragua-do-sul.jpg
│
├── js/
│   └── app.js
│
└── index.html
```

### `index.html`

Responsável pela estrutura da interface, incluindo:

* campo de pesquisa;
* botão de consulta;
* área de informações meteorológicas;
* temperatura;
* descrição do clima;
* umidade;
* velocidade do vento;
* bandeira do país.

### `css/style.css`

Contém a estilização da aplicação, incluindo:

* cores;
* layout;
* formulário;
* cards de informação;
* mensagens de erro;
* plano de fundo;
* responsividade visual dos elementos.

### `js/app.js`

Contém a lógica principal da aplicação.

Entre suas responsabilidades estão:

* capturar a cidade informada;
* realizar requisições HTTP utilizando `fetch()`;
* interpretar respostas JSON;
* atualizar elementos do DOM;
* apresentar informações meteorológicas;
* buscar imagens no Pexels;
* alterar o plano de fundo;
* tratar o caso especial de Jaraguá do Sul.

---

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/umlaufisadora/api-weather-physics.git
```

### 2. Entre na pasta

```bash
cd api-weather-physics
```

### 3. Abra o projeto

Como o projeto é composto por HTML, CSS e JavaScript, não é necessário instalar dependências com `npm` ou Maven.

Você pode abrir o arquivo:

```text
index.html
```

diretamente no navegador ou utilizar uma extensão como **Live Server** no Visual Studio Code.

---

## 🎯 Objetivo acadêmico

O projeto foi desenvolvido como uma atividade da disciplina de **Física**, utilizando uma aplicação web para apresentar informações relacionadas às condições meteorológicas de diferentes localidades.

Além do objetivo acadêmico, o projeto também proporciona prática com:

* consumo de APIs REST;
* requisições assíncronas;
* JavaScript;
* manipulação do DOM;
* JSON;
* integração entre serviços externos;
* desenvolvimento de interfaces web.

---

## 📚 Conceitos praticados

Durante o desenvolvimento foram utilizados conceitos importantes de desenvolvimento web, como:

**API REST → HTTP → JSON → JavaScript → DOM → Interface**

A aplicação recebe dados externos em formato JSON, processa essas informações com JavaScript e atualiza dinamicamente os elementos da página.

---

## 👩‍💻 Autora

Desenvolvido por **Isadora Umlauf**.

Projeto acadêmico desenvolvido para estudos de **Desenvolvimento de Sistemas** e integração de APIs.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
