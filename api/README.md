## SEQUENCIA PARA CRIAR O PROJETO

1. Criar o projeto package
### npm init

2. Gerencia as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

3. Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon

4. Instalar o banco de dados MongoDB
### npm install --save mongodb

5. Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizadas pela aplicação.
### npm install --save mongoose

6. Permitir acesso a API
### npm install --save cors

7. Gerar o backup do banco de dados MongoDB
### mongodump --db imersao(nome do bd) --out c:\data\db(caminho de onde será salvo)

8. Restaurar o backup do banco de dados MongoDB
### mongorestore --db imersao(nome do bd) c:\data\db\imersao(caminho de onde está salvo)


### Explicações:
- --save para que acrescente no package.json
- package-lock.json: possui um resumo de todas as dependências que o projeto possui(um cache), ele identifica as dependências que já estão instaladas no projeto
- node_modules: possui todas as dependências do projeto
- O package-lock indica a dependência e o node_modules possui o código fonte dela
