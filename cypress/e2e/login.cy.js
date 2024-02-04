describe('Автотесты формы логина и пароля', function () {
     it('Верный логи и верный пароль', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('german@dolnikov.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();
          cy.contains('Авторизация прошла успешно').should('be.visible');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })
    it('Проверка логики восстановления пароля', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#forgotEmailButton').click();
     cy.get('#mailForgot').type('german@dolnikov.ru');
     cy.get('#restoreEmailButton').click();
     cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
           })
           it('Верный логи и не верный пароль', function () {
               cy.visit('https://login.qa.studio/');
               cy.get('#mail').type('german@dolnikov.ru');
               cy.get('#pass').type('iLoveqastudio2');
               cy.get('#loginButton').click();
               cy.contains('Такого логина или пароля нет').should('be.visible');
               cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })
           it('Не верный логи и  верный пароль', function () {
               cy.visit('https://login.qa.studio/');
               cy.get('#mail').type('gurman@dolnikov.ru');
               cy.get('#pass').type('iLoveqastudio1');
               cy.get('#loginButton').click();
               cy.contains('Такого логина или пароля нет').should('be.visible');
               cy.get('#exitMessageButton > .exitIcon').should('be.visible');
 })
 it('Вводим логин без at symbol и  верный пароль', function () {
     cy.visit('https://login.qa.studio/');
     cy.get('#mail').type('germandolnikov.ru');
     cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').click();
     cy.contains('Нужно исправить проблему валидации').should('be.visible');
     })
     it('Проверка на приведение к строчным буквам в логине', function () {
          cy.visit('https://login.qa.studio/');
          cy.get('#mail').type('GerMan@Dolnikov.ru');
          cy.get('#pass').type('iLoveqastudio1');
          cy.get('#loginButton').click();
          cy.contains('Авторизация прошла успешно').should('be.visible');
          cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })
})
     