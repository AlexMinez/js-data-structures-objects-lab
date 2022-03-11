
let driver = {
    driverName: 'greg',
    driverAddress: '123 fake street'
}


function updateDriverWithKeyAndValue(driver,driverName,driverAddress){
    let newDriver = {...driver};
    newDriver[driverName] = driverAddress
    return newDriver
}
function destructivelyUpdateDriverWithKeyAndValue(driver, driverName, driverAddress){
    driver[driverName]=driverAddress
    return driver
}
function deleteFromDriverByKey(driver){
    const aDriver = {...driver}
    delete aDriver.driverName
    return aDriver.driverName = {driverName: 'sam'}
}
function destructivelyDeleteFromDriverByKey(driver,driverName){
 Reflect.deleteProperty(driver,driverName)
 return driver
}