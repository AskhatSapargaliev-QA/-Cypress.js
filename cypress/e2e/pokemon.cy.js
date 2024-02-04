describe(' Автотест на покупку нового фото для своего тренера', function () {
    it('Каждый раз выбираем разный аватар', function () {
        cy.visit('https://pokemonbattle.me');
        cy.wait(10000);
        cy.get(':nth-child(1) > .auth__input').type('sapargalievakatrin@icloud.com'); // вводим логин
        cy.get('#password').type('Sapargaliev56'); // вводим пароль
        cy.wait(10000);
        cy.get('.auth__button').click();         // кликаем на вход
        cy.wait(50000);
        cy.get('.header__btns > [href="/shop"]').click(); //кликаем на магазин
        cy.wait(50000);
        cy.get(':nth-child(3) > .shop__button').click(); // кликаем купить аватар
        cy.wait(50000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.wait(30000);
        cy.get('.pay-btn').click();
        cy.wait(50000);
        cy.get('#cardnumber').type('56456');
        cy.wait(10000);
        cy.get('.payment__submit-button').click();
        cy.wait(10000);
        cy.get('.payment__adv').click();
        })
    })