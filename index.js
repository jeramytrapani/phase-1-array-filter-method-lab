// Code your solution here
function findMatching (drivers, target) {
    const result = drivers.filter((name)=>{return name.toLowerCase() === target.toLowerCase()})
    return result

}
findMatching(drivers, "Bobby");

function fuzzyMatch (drivers, searchString) {
    const result = drivers.filter((name)=> name.startsWith(searchString));
    return result;
}

fuzzyMatch(drivers, "Sa");
//console.log(result);

function matchName (drivers, name) {
    const result = drivers.filter((driver)=> driver.name === name);
    return result
}

matchName(drivers,'Bobby')