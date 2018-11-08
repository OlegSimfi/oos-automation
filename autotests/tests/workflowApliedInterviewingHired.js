const MainPage = require('../pages/main.page');

let nemeUserForMoving;


describe("Workflow move (Applied-Interviewing-Hired)", function () {
    it("Open Main page", function () {
        browser.url('');
        MainPage.mainPageTitle.waitForExist();
        const mainPageTitle = MainPage.mainPageTitle.getText();
        expect(mainPageTitle).to.contain('OpenOceanStudio: Crew Applications');
    });
    it("Find quantity of Applied users and take user for workflow Moving", function () {
        const appliedUsersArrayBeforeWorkflowMoving = MainPage.appliedMembersArray; // Get array of Applied users before searching
        const amountOfappliedUsersBeforeWorkflowMoving = appliedUsersArrayBeforeWorkflowMoving.length; //Find amount of users (Array length)
        expect(amountOfappliedUsersBeforeWorkflowMoving).to.equal(4); //According to the test data, there can only be one user in the Interview column
        nemeUserForMoving = appliedUsersArrayBeforeWorkflowMoving[0].getAttribute('textContent').slice(0, - 1);
    });
    it("Moving from Applied to Interviewing", function () {
        const moveUpButtonArray = MainPage.сrewMemberUpToInterviewingButtonsArray;
        const moveUpButton = moveUpButtonArray[0];  // Not the best solution, but fast. But then we will check that there is no error. In a real situation, we would take a more optimal solution with the developer.
        moveUpButton.click();
    });
    it("Check Moving from Applied to Interviewing", function () {
        const amountOfappliedUsersAfterWorkflowMoving = MainPage.appliedMembersArray.length;
        expect(amountOfappliedUsersAfterWorkflowMoving).to.equal(3); // Amount of remaining users
        const interviewingMembersArrayLenth = MainPage.interviewingMembersArray.length;
        expect(interviewingMembersArrayLenth).to.equal(1); //According to the test data, there can only be one user in the Interview column
        const nameOfUserInInterviewColumn = MainPage.interviewingMembersArray[0].getAttribute('textContent').slice(0, - 2);
        expect(nameOfUserInInterviewColumn).to.contain(nemeUserForMoving);
    });
    it("Moving from Interviewing to Hired", function () {
        const moveUpButtonArray = MainPage.сrewMemberUpToHiredButtonsArray;
        const moveUpButton = moveUpButtonArray[0];
        moveUpButton.click();
    });
    it("Check Moving from Interviewing to Hired", function () {
        const amountOfInterviewingUsersAfterWorkflowMoving = MainPage.interviewingMembersArray.length;
        expect(amountOfInterviewingUsersAfterWorkflowMoving).to.equal(0); // Amount of remaining users
        const hiredMembersArrayLenth = MainPage.hiredMembersArray.length;
        expect(hiredMembersArrayLenth).to.equal(2); //According to the test data, there can only be one user in the Interview column
        const nameOfUserInHiredColumn = MainPage.hiredMembersArray[1].getAttribute('textContent').slice(0, - 1);
        expect(nameOfUserInHiredColumn).to.contain(nemeUserForMoving);
    });
});