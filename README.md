# Business Website Template

Template moderno, responsivo e reutilizável para sites de pequenos negócios.

O projeto foi desenvolvido como uma base para criar rapidamente sites profissionais para diferentes tipos de negócios, como restaurantes, cafeterias, barbearias, salões, clínicas, lojas e prestadores de serviços.

## ✨ Características

* Design moderno e responsivo
* Estrutura semântica em HTML
* Sistema visual reutilizável em CSS
* Componentes para diferentes necessidades de negócios
* Menu mobile
* FAQ interativo
* Scroll suave
* Header dinâmico durante a rolagem
* Animações de entrada utilizando `IntersectionObserver`
* Validação básica do formulário
* Suporte a `prefers-reduced-motion`
* Estrutura preparada para personalização

## 🛠️ Tecnologias

* HTML5
* CSS3
* JavaScript
* Git

## 📁 Estrutura do projeto

```text
business-template/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contém toda a estrutura e o conteúdo da página.

### `style.css`

Responsável pelo design, layout, responsividade, componentes, estados e animações visuais.

### `script.js`

Adiciona interatividade ao template, incluindo:

* menu mobile;
* FAQ;
* navegação suave;
* comportamento do header durante o scroll;
* animações de entrada;
* validação do formulário.

## 🎨 Personalização

O template foi criado para ser facilmente adaptado para diferentes negócios.

Alguns dos elementos que podem ser personalizados:

* nome e identidade do negócio;
* cores;
* tipografia;
* imagens;
* textos;
* serviços;
* depoimentos;
* planos e preços;
* informações de contato;
* chamadas para ação.

A estrutura pode ser modificada conforme as necessidades de cada projeto.

## 📱 Responsividade

O layout foi desenvolvido para funcionar em diferentes tamanhos de tela:

* Desktop
* Tablet
* Smartphone

Os componentes utilizam CSS moderno para adaptar grids, espaçamentos, tipografia e outros elementos conforme o tamanho da tela.

## ♿ Acessibilidade

O projeto inclui algumas práticas básicas de acessibilidade, como:

* HTML semântico;
* `alt` em imagens;
* labels em campos de formulário;
* navegação por teclado em componentes nativos;
* suporte a `prefers-reduced-motion`;
* estados de `focus-visible`.

## 🚀 Como utilizar

1. Clone ou baixe o projeto.
2. Abra a pasta no seu editor de código.
3. Personalize o `index.html`.
4. Ajuste as variáveis e componentes do `style.css`.
5. Personalize o comportamento em `script.js`, caso necessário.
6. Abra o `index.html` no navegador.

Para utilizar o JavaScript, certifique-se de que o `index.html` possui a referência ao arquivo:

```html
<script src="script.js"></script>
```

Normalmente, essa referência pode ficar antes do fechamento da tag `body`.

## 🎯 Objetivo do projeto

Este projeto foi criado como um **template-base reutilizável**, permitindo transformar uma mesma estrutura em diferentes sites para pequenos negócios sem precisar começar cada projeto do zero.

A ideia é manter uma separação clara entre:

```text
HTML → estrutura
CSS → aparência
JavaScript → comportamento
```

Isso facilita a manutenção, personalização e reutilização do código.

## 📌 Status

**Versão:** 1.0

O template está funcional e pode ser utilizado como base para novos projetos.

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades podem ser adicionadas futuramente, dependendo das necessidades de cada projeto:

* modo claro/escuro;
* slider de depoimentos;
* integração com formulário real;
* integração com APIs;
* sistema de agendamento;
* backend;
* banco de dados;
* mais componentes reutilizáveis;
* novas variações de layout.

---

**Projeto desenvolvido como uma base de estudos e desenvolvimento de sites para pequenos negócios.**
