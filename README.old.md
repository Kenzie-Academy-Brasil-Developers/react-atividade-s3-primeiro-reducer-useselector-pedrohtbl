# 📋 Sobre a atividade

Nessa atividade iremos aprender a criar nosso primeiro **reducer**. Também vamos aprender sobre o hook **useSelector**. Esse hook nos proporciona a função de buscar os dados da **Store** (nossos estados globais) e selecionar o **reducer** especifico que queremos os dados.

Por fim, listaremos os dados em tela para selecionados em tela.

# ℹ️ Informações úteis

## Resultado final

![](https://i.ibb.co/LZSPb8B/Captura-de-tela-de-2021-07-19-11-19-22.png)

## Mão na massa!

Para iniciar nosso projeto, devemos instalar as dependências necessárias:

    yarn add redux react-redux

Com essas duas dependências instaladas podemos começar a criar a nossa estrutura.

### Criando a estrutura inicial de pastas

Para iniciarmos, devemos criar nossas pastas que conterão o gerenciamento de estado da nossa aplicação.

1.  Inicie criando a pasta **store** com seu **index.js,** dentro da **src**.

2.  Dentro da nossa pasta **store**, teremos a pasta **modules**.

    **Observação**: Os nossos "módulos" do redux, são representações de "domínios" da aplicação que precisam ser compartilhados entre todos os componentes. Exemplo: Carrinho de compras, informações do usuário.

3.  Cada módulo da nossa store, terá um **reducer** e suas **actions**. O **reducer** é responsável por receber os dados e trata-los, enquanto as **actions** são as que enviarão os dados para o **reducer**.

Exemplo de estruturação das pastas:

![](https://i.ibb.co/w0Ykz97/exemplo-pastas.png)

### Primeiro Reducer

Agora vamos criar o **reducer** do módulo **fruits**.

    const initialState = ["Banana", "Maçã", "Morango"];

    const fruitsReducer = (state = initialState, action) => {
      switch (action.type) {
        default:
          return state;
      }
    };

    export default fruitsReducer;

Nesse **reducer**, temos uma constante que é o nosso **state inicial**. Todo **reducer** é uma função que recebe dois paramêtros:

1.  **State atual** (o qual definimos com o valor padrão da initialState).

2.  **Action**, que será um objeto que conterá as informações para podermos alterar o **state** do nosso **reducer**.

Dentro do **reducer** temos um **switch** que testa o **action.type** (isso ficará mais claro nas próximas aulas). No caso do exemplo não alteraremos o **state**, mas isso vai acontecer dentro do **switch**, nas próximas aulas teremos exemplos com alteração do **state**.

Caso precise lembrar sobre o funcionamento do **switch**:

[switch - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

### Configurando o Redux

Dentro da **store**, no arquivo **index.js** teremos uma estruturação nesse formato:

    import { createStore, combineReducers } from "redux";

    // importando o reducer
    import fruitsReducer from "./modules/fruits/reducer";

    // combinando os reducers da aplicação, nesse exemplo temos apenas um
    const reducers = combineReducers({ fruits: fruitsReducer });

    // passando os reducers combinados para a store
    const store = createStore(reducers);

    export default store;

Com a função **createStore** criamos a nossa **store** e com **combineReducers** iremos criar a **store** baseada na fusão dos nossos **reducers**.

Conforme vamos criando **reducers**, nós adicionamos no **combineReducers**. Ou seja, a **store** é um **state global** que é dividido em diversos outros **states**.

A partir de agora vamos importar a **store** no **index.js** do projeto, o primeiro arquivo onde colocamos os componentes de configuração. Vamos utilizar o `<Provider>` do react-redux que tem o papel de compartihar a **store** com os componentes, ou seja, tudo que for `{children}` do `<Provider>`, poderá acessar os dados da **store**.

    import React from "react";
    import ReactDOM from "react-dom";
    import App from "./App";

    // importando Provider e a store
    import { Provider } from "react-redux";
    import store from "./store";

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );

Terminamos a configuração da **store**. Só falta entender o como funciona o consumo desses dados.

### Consumindo os dados

O consumo de dados é feito com o **useSelector**. Ele tem como parâmetro o **state inteiro** do redux, ou seja, a **store**. E dentro da **store**, acessamos o **reducer de fruits**, que instanciamos logo acima. A partir disso é só mostrar os dados em tela.

    //importando useSelector do react-redux
    import { useSelector } from "react-redux";

    const FruitsPage = () => {
    	//acessando o estado global e pegando o state fruits
      const fruits = useSelector((state) => state.fruits);

      return (
        <div>
          {fruits.map((fruit) => (
            <p key={fruit}> {fruit} </p>
          ))}
        </div>
      );
    }

    export default FruitsPage;

Para finalizar, estilize está atividade.

# 💡Conhecimentos aplicados:

*   Redux estruturação
*   Redux useSelector
