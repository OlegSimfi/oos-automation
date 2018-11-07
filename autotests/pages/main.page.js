class MainPage {
    get mainPageTitle() {return $('//h1'); }
    get crewMembersArray() {return $$('.CrewMemeber-name'); }
    get nameInput() {return $('#name'); }
    get cityInput() {return $('#city'); }
    get submitButton() {return $('//button[@type="submit"]'); }
    get clearButton() {return $('//button[.="Clear"]'); }
}

module.exports = new MainPage();