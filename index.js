/* Your Code Here */


function createEmployeeRecord(arr){
  const testEmployee ={
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return testEmployee
}
function createEmployeeRecords(arr){

return arr.map(createEmployeeRecord)
}

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

function hoursWorkedOnDate(employee, time){

  const timeIn = employee.timeInEvents[0]
  const timeOut = employee.timeOutEvents[0]
  const hoursWorked = Math.abs(timeIn.hour - timeOut.hour)/100
  return hoursWorked
}



function wagesEarnedOnDate(employee, day){

  const payPerHour = employee.payPerHour
  const timeIn = employee.timeInEvents[0]
  const timeOut = employee.timeOutEvents[0]


  const hoursWorked = Math.abs(timeIn.hour - timeOut.hour)/100
  const wagesEarned =  payPerHour * hoursWorked
  return wagesEarned
}




function calculatePayroll(employees){
  return employees.reduce((totalPay, employee)=> {
     totalPay += allWagesFor(employee)
     return totalPay
  }, 0)
}

function findEmployeeByFirstName(employees){
  const firstName = employees.find(employee => employee.firstName === 'Loki')
  return firstName

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
