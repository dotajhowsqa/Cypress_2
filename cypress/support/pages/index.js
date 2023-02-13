import { localizadores } from './locators';

require('./locators')

class Login {
    acessarLoginNatura() {
        cy.visit('https://www.natura.com.br/');
        cy.get(localizadores.HOME_NATURA.minha_conta).should("exist")
        cy.get(localizadores.HOME_NATURA.minha_conta).click()
        cy.get(localizadores.HOME_NATURA.btn_criar_conta).should("exist")
        cy.get(localizadores.HOME_NATURA.btn_criar_conta).click()
    }

    acessarLoginAesop() {
        cy.visit('https://www.aesop.com.br/');
        cy.get(localizadores.HOME_AESOP.cadastrar_se).should("exist")
        cy.get(localizadores.HOME_AESOP.cadastrar_se).click()
    }

    preencherLogin() {
        cy.get(localizadores.CADASTRAR_USUARIO.input_primeiro_nome).type('Fabiola')
        cy.get(localizadores.CADASTRAR_USUARIO.input_sobrenome).type('Silva Costa')
        cy.get(localizadores.CADASTRAR_USUARIO.input_email).type('testesfabiola07@gmail.com')
        cy.get(localizadores.CADASTRAR_USUARIO.input_senha).type('Teste@2023')
        cy.get(localizadores.CADASTRAR_USUARIO.input_repitir_senha).type('Teste@2023')
        cy.get(localizadores.CADASTRAR_USUARIO.input_cpf).type('397.430.740-07')
        cy.get(localizadores.CADASTRAR_USUARIO.input_data_nascimento).type('25/04/1965')
        cy.get(localizadores.CADASTRAR_USUARIO.checkbox_genero).click()
        cy.get(localizadores.CADASTRAR_USUARIO.input_celular).type('11922222222')
        cy.get(localizadores.CADASTRAR_USUARIO.checkbos_confirmar_idade).click()
        cy.intercept('POST', '**/ZCFMWm4YN-/hqM_W7vgQy/EfaYwmJh/HgAzLVlZ/CCxu/JGFVBjw').as('postNatura');
        cy.get(localizadores.CADASTRAR_USUARIO.btn_criar_conta).click()
    }

}

export default new Login();