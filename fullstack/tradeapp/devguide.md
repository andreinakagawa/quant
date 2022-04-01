Full-stack

sistema web
descrição geral:
usuários - analista do mercado financeiro - investidor pessoa física
plataforma:

- criar e visualizar estudo sobre algum ativo financeiro
- montar um portfólio de ativos e acompanhar desempenho
  - oferecer relatórios

Funcionalidades:

- node.js + typescript (depois: transformar em python + django)
- o mais famoso para criar uma aplicação web: express
- express: Web server
- sistema login --> usuário e senha
- cada usuário:
- criar um estudo
- estudo: título, descrição geral
- arquivo .csv contendo a série histórica de preços de um ativo
- arquivo .csv contendo algum indicador (média móvel)
- visualizar gráficos
- textfield grande: descrever todo o estudo
- textfield menores: comentários breves
- opção: público ou privado
- busca baseado em palavra-chave contida na descrição do estudo

front-end:

- ataque de injeção de SQL
  - SQL injection attack
  - primeira coisa a considerar sobre segurança
  - acontecia na época do php -- tinha um form lá que você podia fazer um input de um dado qualquer, você pode injetar o código SQL
    no form (fazer um SELECT \* FROM tabela) - a string de um textfield
    pode conter um comando SQL que se interpretado pode dar um pau gigantesco
    react -->

ORM: Object Relational Mapping

- mundo SQL - modelagem de dados -- entidade
- typeORM (way to go): galera tá usando muito pra node com typescript - ORM para Data Access Object (DAO): estratégias diferentes
- NoSQL: ODM - mongoose (mais famoso) - drawback: não tá otimizado para typescript ainda -

docker: ferramenta de containerização
