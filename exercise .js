// Employee data array
const employees = [
    {
        empid: 101,
        empname: "Alice Johnson",
        empcompany: "TechCorp",
        empsalary: 60000,
        empaddress: { empcity: "New York", emparea: "Brooklyn" }
    },
    {
        empid: 102,
        empname: "Bob Smith",
        empcompany: "InnoSoft",
        empsalary: 55000,
        empaddress: { empcity: "San Francisco", emparea: "Downtown" }
    },
    {
        empid: 103,
        empname: "Charlie Brown",
        empcompany: "CloudNet",
        empsalary: 75000,
        empaddress: { empcity: "Chicago", emparea: "Lincoln Park" }
    }
];

function displayEmployeesInConsole() {
    console.log("Employee Data:");
    console.table(employees.map(emp => ({
        empid: emp.empid,
        empname: emp.empname,
        empcompany: emp.empcompany,
        empsalary: emp.empsalary,
        empcity: emp.empaddress.empcity,
        emparea: emp.empaddress.emparea
    })));
}
document.addEventListener("DOMContentLoaded", displayEmployeesInConsole);
