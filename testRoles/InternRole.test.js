const Intern = require("../models/Intern");

test("Can obtain School", () => {
    const testValue = "ASU";
    const e = new Intern("Bang", 1, "test@mail.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole function returns \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Bang", 1, "test@test.com", "ASU");
    expect(e.getRole()).toBe(testValue);
});

test("Can obtain Schools", () => {
    const testValue = "ASU";
    const e = new Intern("Bang", 1, "test@mail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});