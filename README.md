
# ✌😎 Fala Dev, Tranqz?
<p>Este é meu template para projetos NestJS, com uma estrutura de diretórios padronizada e configurações iniciais claras e simples de implementar. Foquei bastante na separação da responsabilidades e principalmente no poder do NestJS para aplicar Inversão de Dependência e Injeção de dependência também. A arquitetura ficou extremamente desacoplada e modularizada. Espero que ajude a comunidade!</p>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nestjs,nodejs,typescript,git" />
  </a>
</p>

## NestJS Project Boilerplate

### Estrutura de Diretórios
<ul>
  <li>📁src
    <ul>
      <li>📁auth -> Lógica de autenticação</li>
      <li>📁common -> Elementos comuns para compartilhamento global (pipes, filters, etc.)</li>
      <li>📁config -> Configurações da aplicação como variáveis de ambiente, configuração de banco de dados,etc</li>
      <li>📁constants -> Constantes e enumerações. Costumo utilizar para armazenar os tokens de dependências renomeados</li>
      <li>📁core -> Funcionalidades core da aplicação como os modulos padrão de instalação.</li>
      <li>📁middlewares -> Middlewares personalizados (rotas, globais...)</li>
      <li>📁modules -> Módulos da aplicação
        <ul>
          <li>📁tarefas -> Módulos iniciais criados para contextualizar a camada de módulos. Pode ser deletado e recriado.</li>
          <ul>
            <!-- Aqui segue a estrutura das camadas e modulos principais da aplicação -->
            <li>📁dtos</li>
            <li>📁entities</li>
            <li>📁interfaces</li>
            <li>📁repositories</li>
            <li>📝tarefas.controller.ts</li>
            <li>📝tarefas.service.ts</li>
            <li>📝tarefas.moduler.ts</li>
          </ul>
          <li>📁vazio -> Pasta vazia criada apenas para organizar o diretorio de modulos visualmente. Pode ser deletada.</li>
        </ul>
      </li>
      <li>📁shared -> Recursos compartilhados entre módulos</li>
      <li>📁types -> Tipos e interfaces TypeScript</li>
      <li>📁utils -> Funções utilitárias</li>
      <li>📝main.ts</li>
    </ul>
  </li>
</ul>

### 💻 Pré-requisitos
<p>✔ Node.js (versão 14 ou superior)</p>
<p>✔ npm ou yarn</p>

## Como Usar Este Template
1. Clique no botão "Use this template" no GitHub.
2. Dê um nome ao seu novo repositório e crie-o.
3. Clone o novo repositório para sua máquina local.
4. Navegue até o diretório do projeto e instale as dependências:
   
```bash
$ npm install
```

### Scripts Disponíveis
1. Script padrão do NestJS para rodar o projeto
```bash
npm run start:dev
```
2. Script modificado de minha preferência para rodar o bom e velho npm run dev 😎✌
```bash
npm run dev
```

### Configuração Adicional
<p>Este template inclui configurações básicas para ESLint e Prettier. No caso do Prettier adicionei algumas configurações pessoais:</p>
<ul>
  <li>✔ Ponto e vírgula sempre</li>
  <li>✔ Tabs com 2 espaçamentos apenas</li>
  <li>✔ Espaçamento entre as chaves { ❤ }</li>
</ul>

<i>📝.prettierrc</i>

```JSON
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "tabWidth": 2,
  "bracketSpacing": true
}
```

### Bugs ocasionais no ESLint 
<p>Algumas vezes aparecem uns caracteres malucos no código dos projetos com NestJS. Percebi que é uma espécie de conflito entre o Prettier e o ESLint. Para resolver é muito simples. Basta rodar o comdando abaixo:</p>

```bash
npm run lint --fix
```

### Contribuindo
<p>Se você tiver sugestões para melhorar este template, sinta-se à vontade para criar uma issue ou enviar um pull request.</p>


- [Nest](https://github.com/nestjs/nest) repositório oficial do NestJS.
- [NestJS Documentation](https://docs.nestjs.com) site oficial.


