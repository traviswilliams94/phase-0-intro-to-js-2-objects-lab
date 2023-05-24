// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(object, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value
    return newEmployee;
}

updateEmployeeWithKeyAndValue(newEmployee, name, Will);

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    employee[key] = value;
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Bob);

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}
