import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

const myReducer = function (action, state = initialState) {
  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso na requisição');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro na requisição');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};

export default myReducer;
