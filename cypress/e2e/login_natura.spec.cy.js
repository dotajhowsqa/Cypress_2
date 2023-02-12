/// <reference types="cypress" />

import Login from '../support/pages/index';

describe('Acessar Pagina da Natura e Preencher Login', () => {
  it('Cadastrar Usuário com o Preenchimento de todos os Campos.', () => {
    Login.acessarLoginNatura();
    Login.preencherLogin();
  });
});