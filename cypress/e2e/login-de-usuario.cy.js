import 'cypress-xpath';

//Nome da especificação de teste
describe('template spec', () => {

  //Cenário de teste (Test case)
  it('Deve autenticar usuário com sucesso', () => {

    //ARRANGE
    cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
    cy.xpath('//*[@id="usuario"]').type("admin");
    cy.xpath('//*[@id="senha"]').type('123');

    //ACT
    cy.xpath('//*[@id="loginForm"]/button').click();

    //ASSERT
    cy.url().should('contain', 'dashboard.html');

    //EVIDÊNCIA
    cy.screenshot('Deve autenticar usuário com sucesso', { overwrite : true });
    
  });

    //Cenário de teste (2) (Test case)
  it('Deve retornar acesso negado para usuário inválido', () => {

    //ARRANGE
    cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
    cy.xpath('//*[@id="usuario"]').type("teste"); //usuário inválido
    cy.xpath('//*[@id="senha"]').type('321');//senha inválida 

    //ACT
    cy.xpath('//*[@id="loginForm"]/button').click();

    //ASSERT
    cy.xpath('//*[@id="loginError"]').should('contain', 'Usuário ou senha inválidos');

    //EVIDÊNCIA
    cy.screenshot('DDeve retornar acesso negado para usuário inválido', { overwrite : true });
    
  });

})