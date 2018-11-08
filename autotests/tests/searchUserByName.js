const MainPage = require('../pages/main.page');

let crewMembersArrayBeforeSearching = new Array();
let amountOfcrewMembersArrayBeforeSearching;
let nameOfUserForSearching;
let nameOfUserForAfterSeaching;



describe("Search User by Name", function () {
    it("Open Main page", function () {
        browser.url('');
        MainPage.mainPageTitle.waitForExist();
        const mainPageTitle = MainPage.mainPageTitle.getText();
        expect(mainPageTitle).to.contain('OpenOceanStudio: Crew Applications');
    });
    it("Find quantity of users and take user for searching", function () {
        crewMembersArrayBeforeSearching = MainPage.crewMembersArray; // Get array of users before searching
        amountOfcrewMembersArrayBeforeSearching = crewMembersArrayBeforeSearching.length;  //Find amount of users (Array length)
        const userForSearching = crewMembersArrayBeforeSearching[0].getAttribute('textContent'); // Select a user to searching
        nameOfUserForSearching = userForSearching.split(' ')[0]; // Because the search is carried out only by name (Maybe a bug?)
    });
    it("Search User by Name", function () {
        MainPage.nameInput.setValue(nameOfUserForSearching);
        MainPage.submitButton.click();
    });
    it("Check search result", function () {
        const crewMembersArrayBeforeSearching = MainPage.crewMembersArray;
        const lenthOfcrewMembersArrayAfterSearching = crewMembersArrayBeforeSearching.length;
        expect(lenthOfcrewMembersArrayAfterSearching).to.equal(1); // According to the test data, there is only one user with this name
        const foundUserAfterSearching = crewMembersArrayBeforeSearching[0].getAttribute('textContent');
        expect(foundUserAfterSearching).to.contain('lloyd gonzalez');
    });
    it("Check the working of the Clear button", function () {
        MainPage.clearButton.click();
        const lenthOfcrewMembersArrayAfterClear = MainPage.crewMembersArray.length;
        expect(lenthOfcrewMembersArrayAfterClear).to.equal(amountOfcrewMembersArrayBeforeSearching); // The length of the array after cleaning should be equal to the length of the array before searching
    });
});