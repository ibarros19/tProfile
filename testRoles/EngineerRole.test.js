const Engineer = require("../models/Engineer");

test("Can obtain GitHub info", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Bang", 1, "test@mail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole function returns \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bang", 1, "test@mail.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can obtain GitHub username", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Bang", 1, "test@mail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});