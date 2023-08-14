function buildTower(n){// function to build tower of stars 
let tower = []// create tower empty array
let towerS = '*'// tower stars creation variable
for(let i = 0; i<n; i++){ // run loop for how many times n equals
    tower.push(towerS)// push tower stars to tower array
    towerS += "**"// add more stars for next floor
    for (let j = 0; j<i; j++){
        tower[j] = ' ' + tower[j] + ' '// add spaces to each side
      }
    }
    return tower// return tower
}
console.log(buildTower(8))// logged for testing