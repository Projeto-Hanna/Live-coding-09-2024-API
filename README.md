## Live coding - 09/2024 - API com banco de dados
Este repositório possui o projeto da API com conexão a banco de dados PostgreSQL feito durante o Live Coding do Projeto Hanna em Setembro de 2024.

Para esta API, utilizamos Typescript no código e banco PostgreSQL para a persistência de dados. Também utilizamos o padrão de Repository para criar as funcionalidades do banco de dados.

### Como instalar
- Baixe os arquivos do projeto
- Tenha o `YARN` (v ^1.22) e o `Node` (v ^20.15) instalados e configurados na sua máquina.
- Instale as dependências com `yarn install`
- Ligue o seu banco de dados PostgreSQL (local ou remoto)
- Crie um arquivo `.env` com as dependências necessárias

### Como executar
- Utilize o comando `yarn start`
- Execute as requests HTTP nas rotas desejadas

### Possíveis melhorias
Algumas possíveis melhorias que podem ser feitas neste projeto, visando utilizado em ambiente profissional:
- Usar os repositories dentro de useCases, passando-os como dependências
- Utilizar um ORM ou query builder para evitar criar queries simples via string
- Separar melhor as camadas da aplicação, talvez usando um modelo Clean-Arch
- Criar testes unitários para cada funcionalidade
- Implementar um middleware de autenticação de usuário
- Implementar middlewares de sanitização e validação de inputs

### Variáveis de ambiente
- `PORT`: porta na qual a API ficará disponível
- `DATABASE_CONNECTION_STRING`: string de conexão ao banco, no formato `postgresql://<usuário>:<senha>@<host>:<porta>/<nome_do_banco>`

### Materiais
- Gravação do live coding: https://www.youtube.com/live/iN7C3EVWvJk?si=eMp7F4xY_ARMLC8e