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
- **Ticker de Preços**: Preços de criptomoedas atualizados em tempo real
- **Newsletter**: Sistema de captura de leads integrado
- **Depoimentos**: Seção de feedback de clientes com avaliações
- **FAQ Interativo**: Perguntas frequentes com acordeão expansível
- **Scroll Suave**: Navegação fluida e botão de retorno ao topo

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
├── crypto-ticker/       # Ticker de preços de criptomoedas
├── faq/                 # Seção de perguntas frequentes
├── footer/              # Rodapé com links e informações
├── newsletter/          # Formulário de inscrição newsletter
├── nossos-servicos/     # Seção de serviços
├── scroll-to-top/       # Botão de voltar ao topo
├── testimonials/        # Depoimentos de clientes
├── title/               # Componente de título principal
├── models/              # Interfaces e tipos TypeScript
├── services/            # Serviços e lógica de negócio
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

### FooterComponent
Rodapé completo com informações de contato, links rápidos e redes sociais.

**Características:**
- Links para serviços e páginas
- Ícones de redes sociais com hover effects
- Informações de contato
- Links legais (Política de Privacidade, Termos de Uso)

### NewsletterComponent
Formulário de captura de leads para inscrição na newsletter.

**Características:**
- Validação de email
- Design responsivo
- Feedback visual ao usuário

### TestimonialsComponent
Seção de depoimentos de clientes com avaliações.

**Características:**
- Cards de depoimentos com animação
- Sistema de avaliação por estrelas
- Avatares de clientes

### FaqComponent
Seção de perguntas frequentes com acordeão expansível.

**Características:**
- 6 perguntas e respostas comuns
- Animações suaves de abertura/fechamento
- Design intuitivo e acessível

### CryptoTickerComponent
Banner sticky com preços de criptomoedas em tempo real (simulado).

**Características:**
- Atualização automática de preços
- Indicadores de alta/baixa
- Design responsivo e animado

### ScrollToTopComponent
Botão flutuante para retornar ao topo da página.

**Características:**
- Aparece após rolar 300px
- Animação suave de scroll
- Design com gradiente

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
