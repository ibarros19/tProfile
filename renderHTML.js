// Dry = Don't repeat Yourself
const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname + "/views");

const getEmpTemplate = name => fs.readFileSync(path.resolve(`${templatesDir}/${name}.html`), "utf8");

const render = employees => {
    const html = [];
    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    return renderMain(html.join(""));
};

const renderManager = manager => {
    let template = getEmpTemplate('manager');
    return renderBlock(template, {
        name: manager.getName(),
        role: manager.getRole(),
        email: manager.getEmail(),
        id: manager.getId(),
        officeNumber: manager.getOfficeNumber()
    });
};

const renderEngineer = engineer => {
    let template = getEmpTemplate('engineer');
    return renderBlock(template, {
        name: engineer.getName(),
        role: engineer.getRole(),
        email: engineer.getEmail(),
        id: engineer.getId(),
        github: engineer.getGithub()
    });
};

const renderIntern = intern => {
    let template = getEmpTemplate('intern');
    return renderBlock(template, {
        name: intern.getName(),
        role: intern.getRole(),
        email: intern.getEmail(),
        id: intern.getId(),
        school: intern.getSchool()
    });
};
const renderMain = html => {
    let template = getEmpTemplate('home');
    return renderBlock(template, { staff: html });
};

const renderBlock = (template, scope) => {
    const entries = Object.entries(scope)
    for (const [key, value] of entries) {
        const pattern = new RegExp("{{ " + key + " }}", "gm");
        template = template.replace(pattern, value);
    }
    return template
};

module.exports = render;