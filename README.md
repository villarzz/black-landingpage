# Black Landing Page - Crypto Currency Agency

Uma landing page moderna e responsiva para agência de criptomoedas, desenvolvida com Angular 17.

## 🚀 Sobre o Projeto

Este projeto é uma landing page para uma agência de criptomoedas que oferece serviços relacionados a Bitcoin, Ethereum e outras altcoins. Desenvolvido para praticar conhecimentos em Angular com foco em boas práticas de desenvolvimento.

## ✨ Características

- **Design Moderno**: Interface limpa com tema escuro
- **Responsivo**: Compatível com diferentes tamanhos de tela
- **Componentes Reutilizáveis**: Arquitetura modular e manutenível
- **Performance Otimizada**: Uso de OnPush change detection strategy
- **Acessibilidade**: Implementação de ARIA labels e HTML semântico
- **TypeScript**: Tipagem forte para maior segurança no código

## 🛠️ Tecnologias

- Angular 17.3.4
- TypeScript 5.4.2
- Bootstrap 5.3.3
- Bootstrap Icons 1.11.3
- SCSS

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente vem com Node.js)
- Angular CLI

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/villarzz/black-landingpage.git
cd black-landingpage/black-landingpage
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
ng serve
```

4. Abra o navegador e acesse `http://localhost:4200/`

## 📦 Build

Para criar uma build de produção:

```bash
npm run build
```

Os arquivos serão gerados no diretório `dist/`.

## 🧪 Testes

Execute os testes unitários:

```bash
npm test
```

## 📁 Estrutura do Projeto

```
src/app/
├── btn-get-started/     # Componente de botão CTA
├── cabecalho/           # Componente de cabeçalho/navegação
├── card/                # Componente de card reutilizável
├── nossos-servicos/     # Seção de serviços
├── title/               # Componente de título principal
├── models/              # Interfaces e tipos TypeScript
└── app.module.ts        # Módulo principal
```

## 🎨 Componentes

### CardComponent
Componente reutilizável para exibir informações de criptomoedas.

**Inputs:**
- `title`: string - Título do card
- `bgColor`: string - Cor de fundo
- `txtColor`: string - Cor do texto
- `category`: string - Categoria (ex: CRYPTO)
- `platform`: string - Plataforma (ex: Dashboard, Mobile App)
- `description`: string - Descrição do serviço

**Exemplo de uso:**
```html
<app-card
  [bgColor]="'#0d6efd'"
  [txtColor]="'white'"
  [category]="'CRYPTO'"
  [platform]="'Mobile App'"
  [title]="'Bitcoin'"
  [description]="'Bitcoin: pioneiro das criptomoedas'">
</app-card>
```

## 🔒 Segurança

O projeto implementa:
- Content Security Policy (CSP)
- Sanitização de dados
- Boas práticas de segurança Angular

## 📝 Licença

Este projeto foi criado para fins educacionais.

## 👤 Autor

**villarzz**

- GitHub: [@villarzz](https://github.com/villarzz)

## 🤝 Contribuindo

Contribuições, issues e feature requests são bem-vindos!

## 📚 Recursos

- [Documentação do Angular](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [TypeScript](https://www.typescriptlang.org/)

---

⭐️ Desenvolvido com Angular
