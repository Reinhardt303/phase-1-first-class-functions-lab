const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  }

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function () {
        return fare * 5
}
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(array, secondFunction){
    return secondFunction(array)
}