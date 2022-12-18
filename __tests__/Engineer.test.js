const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "chelsbo";
    const employeeInstance = new Engineer("Chelsea", 2, "chelsea.reese@icloud.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "chelsbo";
    const employeeInstance = new Engineer("Chelsea", 2, "chelsea.reese@icloud.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Chelsea", 2, "chelsea.reese@icloud.com", "chelsbo");
    expect(employeeInstance.getRole()).toBe(returnValue);
});