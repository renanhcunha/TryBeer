# Boas vindas ao repositório do projeto TryBeer!

Nessa aplicação foi desenvolvido um e-commerce de cervejas de forma que uma pessoa **usuária** possa pedir uma cerveja no aplicativo e outra pessoa **administradora** possa aceitar esse pedido no lado de **admin**.
Este projeto foi desenvolvido em grupo ao final do módulo de Back-end do curso da Trybe.

---

## O que foi desenvolvido

Nesse projeto foi desenvolvido toda a API, o banco de dados e o front-end necessários para criar uma plataforma de delivery de cerveja. 🍻

A aplicação pode ser dividida em três partes:

- Front-end do **cliente**, onde nossos clientes vão comprar cerveja;

- Front-end do **admin**, onde o estabelecimento controlará os pedidos feitos;

- API, que será compartilhada entre cliente e admin.

## Tecnologias utilizadas:

- Front-end: React.JS, Context API, React Hooks, HTML, CSS e Javascript
- Back-end: Node.JS, Express.JS
- Banco de dados: MySQL


## Linter

Nesta aplicação foi utilizado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

# Instruções para rodar o projeto

1. Clone o repositório

- `git clone https://github.com/renanhcunha/TryBeer.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd TryBeer`

2. Inicialize o banco de dados:

- Com o mysql instalado em sua máquina, execute o comando:

  - `mysql -u root -p`

- Isso fará com que abra o terminal do MySQL se abra. Depois, basta executar o comando:

  - `source script.sql`

3. Instale as dependências do back-end:

- Na pasta geral do projeto, entre na pasta back-end com o comando:

  - `cd back-end`

- Execute o comando para instalar as dependências:

  - `npm install`


4. Crie um arquivo com as variáveis de estado para conexão com o banco de dados:

- Ainda na pasta back-end, crie um arquivo ".env" com o seguinte conteúdo:

  ```
    HOSTNAME=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=
  ```

- No qual MYSQL_USER e MYSQL_PASSWORD são o seu usuário e senha do mysql, respectivamente.

- E então inicialize o back-end com o comando:

  - `npm start`

5. Instale as dependências e inicialize o front-end:

- Na pasta geral do projeto, entre na pasta front-end com o comando:

  - `cd front-end`

- Execute o comando para instalar as dependências:

  - `npm install`

- E então inicialize o front-end com o comando:

  - `npm start`
---

## Detalhes e requisitos do projeto

Caso queira saber mais detalhes sobre o projeto e seus requisitos  acesse o [repositório original do projeto](https://github.com/tryber/sd-06-trybeer).

A avaliação final do grupo pode ser conferida neste [Pull Request](https://github.com/tryber/sd-06-trybeer/pull/42).
