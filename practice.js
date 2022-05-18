let uname = prompt("Enter your name");
let email = prompt("Enter your E-Mail");
let salary = Number(prompt("Enter your monthly salary"));

let annualSalary=salary*12;
// Calculate the annual salary
document.write(`
    <div class="container">
        <p><span>Name:</span> ${uname} </p>
        <p><span>E-Mail:</span> ${email} </p>
        <p><span>Annual salary:</span> ${annualSalary}</p>
    </div>
`);