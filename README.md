# 🪑 CGM Móveis

![Status](https://img.shields.io/badge/status-%20Finalizado-green)
![HTML](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Interactive-yellow)

Projeto de uma landing page institucional para uma empresa de móveis sob medida, desenvolvido com foco em **experiência do usuário, conversão, presença digital e geração de novos orçamentos**.

O projeto foi pensado para representar uma solução moderna para negócios locais que desejam fortalecer sua presença online, apresentar seus serviços de forma profissional e facilitar o contato com potenciais clientes.

---

## 📋 Sobre o projeto

A **CGM Móveis** é uma empresa especializada em móveis sob medida localizada em Barra Velha - SC.

O projeto consiste no desenvolvimento de uma **landing page institucional premium**, criada para transmitir credibilidade, apresentar os serviços da empresa e direcionar potenciais clientes para o contato através do WhatsApp e telefone.

A proposta é criar uma experiência visual moderna e profissional, inspirada em interfaces minimalistas e landing pages de marcas premium.

O visitante pode:

* Conhecer a empresa;
* Entender a proposta do negócio;
* Visualizar os principais serviços;
* Conhecer o processo de desenvolvimento dos projetos;
* Visualizar trabalhos realizados;
* Consultar a localização;
* Ver os horários de funcionamento;
* Acessar as redes sociais;
* Solicitar um orçamento através do WhatsApp;
* Entrar em contato pelo telefone.

---

## 🚀 Demonstração

O projeto está disponível online e pode ser acessado através do link abaixo:

🌐 **[Acessar projeto online](#)**

---

## 📸 Preview

> Adicione aqui uma imagem ou screenshot do projeto após realizar o deploy.

```text
Preview da landing page CGM Móveis
```

---

## ✨ Funcionalidades

### 🏠 Landing Page

A página inicial foi desenvolvida com foco em apresentação, credibilidade e conversão.

Principais seções:

* Hero section com chamada para ação;
* Apresentação da CGM Móveis;
* Storytelling sobre a proposta do negócio;
* Apresentação dos principais serviços;
* Explicação do processo de desenvolvimento dos projetos;
* Galeria de trabalhos realizados;
* Avaliação e prova social;
* Horários de funcionamento;
* Localização;
* Mapa integrado;
* Links para contato;
* Instagram;
* Botões de ação para WhatsApp e telefone.

---

### 🪑 Soluções e Serviços

A landing page apresenta os principais tipos de projetos desenvolvidos pela empresa.

Serviços destacados:

```text
🍳 Cozinhas sob medida
🛏️ Dormitórios e closets
🚿 Banheiros sob medida
📐 Projetos personalizados
```

Cada serviço é apresentado com uma descrição voltada para os benefícios do cliente e o aproveitamento inteligente dos ambientes.

---

### ⚙️ Processo de Desenvolvimento

A experiência apresenta de forma simples como funciona o desenvolvimento de um projeto.

Etapas:

* Conversa;
* Projeto;
* Execução;
* Instalação.

Essa estrutura ajuda o visitante a compreender melhor o processo e reduz possíveis dúvidas antes do primeiro contato.

---

### 🖼️ Galeria de Projetos

O site possui uma galeria visual para apresentação de trabalhos realizados.

Funcionalidades implementadas:

* Navegação manual;
* Reprodução automática;
* Layout responsivo;
* Transições suaves;
* Carregamento otimizado das imagens;
* Estrutura preparada para imagens reais da empresa.

A galeria pode ser utilizada para apresentar ambientes como:

* Cozinhas;
* Dormitórios;
* Banheiros;
* Ambientes corporativos;
* Projetos personalizados.

---

### 📱 Contato via WhatsApp

O principal objetivo de conversão da landing page é facilitar a solicitação de orçamentos.

Os botões de chamada para ação direcionam o usuário diretamente para o WhatsApp da empresa.

Exemplo de mensagem:

```text
Olá! Gostaria de solicitar um orçamento.

Quero conversar sobre um projeto de móveis sob medida.
```

O cliente é então redirecionado para o WhatsApp da CGM Móveis.

---

## 🧭 Fluxo da aplicação

```text
Home
  ↓
Conhecer a CGM
  ↓
Conhecer as soluções
  ↓
Entender o processo
  ↓
Visualizar projetos
  ↓
Construir confiança
  ↓
Solicitar orçamento
  ↓
WhatsApp / Telefone
```

---

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido sem frameworks, utilizando tecnologias fundamentais do desenvolvimento web.

* HTML5;
* CSS3;
* JavaScript;
* Google Fonts;
* Google Maps;
* WhatsApp API;
* Schema.org.

---

## 📁 Estrutura do projeto

```text
cgm-moveis/
│
├── index.html
│
├── assets/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── img/
│       ├── projeto-01.jpg
│       ├── projeto-02.jpg
│       ├── projeto-03.jpg
│       └── projeto-04.jpg
│
└── README.md
```

### Organização

**`index.html`**

Responsável por toda a estrutura da landing page institucional.

Contém seções como:

* Hero;
* Sobre;
* Serviços;
* Processo;
* Projetos;
* Avaliação;
* Localização;
* Horários;
* Contato.

**`style.css`**

Contém os estilos globais e toda a identidade visual do projeto.

Também é responsável por:

* Responsividade;
* Layout;
* Tipografia;
* Componentes;
* Animações;
* Estados de interação.

**`main.js`**

Responsável pelas interações da página.

Principais funcionalidades:

* Menu responsivo;
* Navegação mobile;
* Carrossel de projetos;
* Reprodução automática do carrossel;
* Navegação manual;
* Atualização automática do ano no rodapé.

**`assets/img/`**

Diretório destinado às imagens utilizadas na galeria de projetos.

Arquivos:

* `projeto-01.jpg`;
* `projeto-02.jpg`;
* `projeto-03.jpg`;
* `projeto-04.jpg`.

---

## 💻 Destaque técnico

O carrossel de projetos foi desenvolvido utilizando **JavaScript puro**, sem a utilização de bibliotecas externas.

A lógica controla o índice do projeto atualmente exibido e realiza a movimentação horizontal da galeria.

Exemplo conceitual:

```javascript
let index = 0;

function next() {
  index = (index + 1) % cards.length;
  move();
}
```

Essa abordagem permite:

* Navegação automática;
* Navegação manual;
* Baixo peso no carregamento;
* Controle total sobre o comportamento;
* Facilidade para futuras customizações.

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo uma abordagem responsiva.

A interface se adapta para:

* Desktop;
* Tablet;
* Smartphones.

Algumas adaptações realizadas:

* Menu de navegação mobile;
* Reorganização das seções em coluna;
* Grid de serviços responsivo;
* Carrossel com largura adaptável;
* Ajustes na tipografia;
* Botões otimizados para telas menores;
* CTA flutuante acessível no mobile.

---

## ⚡ Performance

O projeto utiliza uma arquitetura simples e leve.

Algumas decisões tomadas:

* JavaScript puro;
* Sem dependência de frameworks;
* Estrutura HTML semântica;
* CSS organizado por responsabilidade;
* Uso de carregamento tardio nas imagens;
* Poucas dependências externas;
* Layout responsivo;
* Estrutura estática.

O objetivo é manter uma experiência rápida, reduzir o tempo de carregamento e buscar uma boa pontuação em ferramentas como o Lighthouse.

---

## 🎨 Decisões de UI/UX

A experiência foi projetada com foco em transmitir qualidade, credibilidade e facilitar a solicitação de orçamento.

### Estratégia

```text
Gerar interesse
     ↓
Apresentar a empresa
     ↓
Mostrar as soluções
     ↓
Explicar o processo
     ↓
Apresentar projetos
     ↓
Construir confiança
     ↓
Facilitar o contato
     ↓
Solicitar orçamento
```

A landing page possui uma estrutura progressiva, onde cada seção possui uma função específica dentro da jornada do usuário.

O objetivo é evitar que o visitante precise procurar informações importantes e conduzi-lo naturalmente até o contato com a empresa.

---

## 🚀 Próximas melhorias

O projeto foi estruturado pensando em futuras evoluções.

Possíveis funcionalidades:

* [ ] Formulário completo para solicitação de orçamento;
* [ ] Upload de referências para o projeto;
* [ ] Seleção do tipo de ambiente;
* [ ] Formulário de briefing;
* [ ] Galeria dinâmica integrada a uma API;
* [ ] Área administrativa;
* [ ] Integração com banco de dados;
* [ ] Sistema de gerenciamento de projetos;
* [ ] Depoimentos reais de clientes;
* [ ] Integração com avaliações do Google;
* [ ] Otimização avançada de imagens;
* [ ] Página individual para cada serviço;
* [ ] Blog com conteúdo sobre móveis sob medida e decoração.

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como parte da construção do meu portfólio de desenvolvimento front-end.

O principal objetivo foi praticar conceitos como:

* Estruturação de landing pages;
* Design responsivo;
* Manipulação do DOM;
* Desenvolvimento de interfaces modernas;
* Experiência de usuário;
* Hierarquia visual;
* Estratégias de conversão;
* SEO local;
* Organização de código;
* Arquitetura de projetos front-end;
* Performance web.

---

## 👨‍💻 Autor

Desenvolvido por **Thiago Ferreira**.

Projeto criado com foco em evolução técnica, desenvolvimento de portfólio e aplicação prática de conceitos de desenvolvimento front-end.

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!
