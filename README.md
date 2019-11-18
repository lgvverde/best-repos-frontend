# 🎈 [Frontend] - BestRepos - Busque pelos melhores repositórios

##  🔍 Sumário

- [Descrição](#description)
- [Configurações padrão](#standard-configurations)
- [Variáveis ambiente](#environment-vars)
- [Rotinas de Teste](#test-routines)
- [Iniciar aplicação](#start-application)



## 📄 <a id="description">Descrição</a>

- Interface da aplicação BestRepos (sistema de consulta de repositórios do GitHub).
- **Confira aqui o <a href="http://best-repos.herokuapp.com/" target="_blank">LIVE DEMO</a>**
- Tecnologias e bibliotecas utilizadas:

  - NodeJS
  - React
  - Axios
  - react-bootstrap
  - react-alert
  - Redux
  - Enzyme
  - Jest



## 🔨 <a id="standard-configurations">Configurações padrão</a>

- Você pode acessar algumas configurações padrões do sistema pela pasta **config** e **api**, localizada dentro da pasta **src**.

- *config/index.js*:

  - Alguns dados padronizados do sistema como:
    - Máximo de itens na pesquisa;
    - Opções de linguagem de programação para busca;
    - Lista de Menus e suas respectivas chaves.

- *api/index.js:*

  - Estão localizadas todas as chamadas necessárias, sinta-se a vontade para criar novas chamadas e as implementar neste arquivo. Só não esqueça de <u>configurar as variáveis ambiente</u> e ter certeza que o end-point **existe**!

  

## 🌎 <a id="environment-vars">Variáveis ambiente</a>

- Para a configuração das variáveis ambiente é necessária a criação de um arquivo na pasta raiz da aplicação, que será chamado de **.env**.

- Neste arquivo .env devem estar contidas as seguintes informações, onde o prefixo de cada uma exemplifica o dado a ser inserido.

  - **OBS:** Manter o mesmo padrão de formato do exemplo apresentado.

  - **OBS²**: É necessário que todas as chaves iniciem com *REACT_APP*, pois é uma regra do framework para identificação das variáveis ambiente.

  - Lembrando que todos os valores são valores EXEMPLO.
  
    ````
    REACT_APP_API_URL=http://sua.api.com
    REACT_APP_GITHUB_API_URL=https://api.github.com/search
    ````

## 🦾 <a id="test-routines">Rotina de testes</a>

- Tecnologia utilizada para a implementação de TDD:  <a href="https://jestjs.io/">Jest</a>
- Os testes foram executados  visando a funcionalidade dos componentes principais que são:
  - Página inicial (*App*);
  - Seção de pesquisa (*SearchSection*);
- Seção de histórico de repositórios (*RepositoriesHistorySection*).
- Para realizar os testes proporcionados é fácil! Apenas verifique se configurou corretamente os dados até agora, e execute o comando:

> yarn test

- Aguarde o término dos testes para prosseguir com o início da aplicação.

  


## 💻 <a id="start-application">Iniciar aplicação</a>

- Após seguir todos os passos, vamos iniciar a aplicação!

- É bem simples, basta iniciar com a instrução:

  > yarn start






