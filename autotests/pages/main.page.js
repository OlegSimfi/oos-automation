class MainPage {
    get mainPageTitle() {return $('//h1'); }
    get crewMembersArray() {return $$('.CrewMemeber-name'); }
    get nameInput() {return $('#name'); }
    get cityInput() {return $('#city'); }
    get submitButton() {return $('//button[@type="submit"]'); }
    get clearButton() {return $('//button[.="Clear"]'); }
    get appliedMembersArray() {return $$('//h2[.="Applied"]/following-sibling::div[@class="CrewMember-container"]'); }
    get interviewingMembersArray() {return $$('//h2[.="Interviewing"]/following-sibling::div[@class="CrewMember-container"]'); }
    get hiredMembersArray() {return $$('//h2[.="Hired"]/following-sibling::div[@class="CrewMember-container"]'); }
    get сrewMemberUpToInterviewingButtonsArray() {return $$('//h2[.="Applied"]/following-sibling::div[@class="CrewMember-container"]//button[@class="CrewMember-up"]'); }
    get сrewMemberUpToHiredButtonsArray() {return $$('//h2[.="Interviewing"]/following-sibling::div[@class="CrewMember-container"]//button[@class="CrewMember-up"]'); }

}

module.exports = new MainPage();