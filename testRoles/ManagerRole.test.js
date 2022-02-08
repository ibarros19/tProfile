const Manager = require("../models/Manager");

test("Can set office number", () => {
    const testValue = 100;
    const e = new Manager("Anna", 1, "email@mail.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole function returns "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Carlos", 1, "email2@mail.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can obtain office number", () => {
    const testValue = 100;
    const e = new Manager("Maria", 1, "email3@mail.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});