Esse Projeto foi gerado com [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

## Dependências

No terminal execute o comando `npm install` na raiz do projeto, para baixar todas as dependências do projeto. 


## FrontEnd

Em um terminal, execute o comando `npm start` na raiz do projeto, o qual iniciará o `node server.js` para rodar o servidor do frontend e o `json-server` no arquivo de database. 

Navegue até `http://localhost:8000/` para acessar o frontend.

<img src="https://github.com//VitorHeser/DesafioCielo2/blob/develop/app/assets/print/screen1.PNG?raw=true" alt="exemplo1.PNG">
<img src="https://github.com/VitorHeser//DesafioCielo2/blob/develop/app/assets/print/screen2.PNG?raw=true" alt="exemplo2.PNG">
<img src="https://github.com/VitorHeser//DesafioCielo2/blob/develop/app/assets/print/screen3.PNG?raw=true" alt="exemplo3.PNG">
<img src="https://github.com/VitorHeser//DesafioCielo2/blob/develop/app/assets/print/screen4.PNG?raw=true" alt="exemplo4.PNG">


## Backend

Navegue até `http://localhost:3000/` para acessar o backend proveniente do arquivo `.\assets\data\lancamento-conta-legado.json`.

Caso tenha que ser alterado a origin do backend, deve ser alterado dentro do arquivo `.\app\core\service\pagamentosService.js` a função getTodos() que atualmente está direcionada ao endereço `http://localhost:3000/`

## Base de Dados

Para que pudesse ser utilizado a lib json-server, foi necessário a retirada dos atributos de pageable do arquivo json original.

Foi inserido alguns dados no .json original para que pudesse criar alguns insights nos dashboards principais.

## Testes Unitários

execute o comando `npm test` para executar os testes unitários via [Karma](https://karma-runner.github.io).


