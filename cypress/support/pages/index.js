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
        cy.get(localizadores.CADASTRAR_USUARIO.input_primeiro_nome)
            .should('be.visible')
            .type('Fabiola')
        cy.get(localizadores.CADASTRAR_USUARIO.input_sobrenome)
            .should('be.visible')
            .type('Silva Costa')
        cy.get(localizadores.CADASTRAR_USUARIO.input_email)
            .should('be.visible')
            .type('testesfabiola25@gmail.com')
        cy.get(localizadores.CADASTRAR_USUARIO.input_senha)
            .should('be.visible')
            .type('Teste@2023')
        cy.get(localizadores.CADASTRAR_USUARIO.input_repitir_senha)
            .should('be.visible')
            .type('Teste@2023')
        cy.get(localizadores.CADASTRAR_USUARIO.input_cpf)
            .should('be.visible')
            .type('175.649.100-38')
        cy.get(localizadores.CADASTRAR_USUARIO.input_data_nascimento)
            .should('be.visible')
            .type('25/04/1965')
        cy.get(localizadores.CADASTRAR_USUARIO.checkbox_genero).click()
        cy.get(localizadores.CADASTRAR_USUARIO.input_celular)
            .should('be.visible')
            .type('11922222222')
        cy.get(localizadores.CADASTRAR_USUARIO.checkbos_confirmar_idade).click()
        cy.intercept('POST', '**/ZCFMWm4YN-/hqM_W7vgQy/EfaYwmJh/HgAzLVlZ/CCxu/JGFVBjw').as('postNatura');
        cy.get(localizadores.CADASTRAR_USUARIO.btn_criar_conta).click()
    }

    validar_msg_logado_natura(){
        cy.get(localizadores.HOME_NATURA.msg_ola_usuario_natura).should("exist")
        cy.get(localizadores.HOME_NATURA.msg_ola_usuario_natura).contains('Olá, Fabiola!')
    }

    validar_msg_logado_aesop(){
        cy.get(localizadores.HOME_AESOP.msg_ola_usuario_aesop).should("exist")
        cy.get(localizadores.HOME_AESOP.msg_ola_usuario_aesop).contains('Fabiola')
    }

}

export default new Login();