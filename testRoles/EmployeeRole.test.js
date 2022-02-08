const Employee = require("../models/Employee");

// TDD - Test Driven Development

test("Can run Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name - constructor", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test("Can set name - arguments", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test("Can set id - argument", () => {
    const testValue = 100;
    const e = new Employee("Bang", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email - constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Bang", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can obtain name", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can obtain id", () => {
    const testValue = 100;
    const e = new Employee("Bang", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can obtain email", () => {
    const testValue = "test@mail.com";
    const e = new Employee("Bang", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole function returns \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("John", 1, "test@mail.com");
    expect(e.getRole()).toBe(testValue);
});
