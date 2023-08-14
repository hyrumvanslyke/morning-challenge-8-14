function buildTower(n){
let tower = []
let towerS = '*'
for(let i = 0; i<n; i++){ 
    tower.push(towerS)
    towerS += "**"
    for (let j = 0; j<i; j++){
        tower[j] = " " + tower[j] + ' '
      }
    }
    return tower
}
console.log(buildTower(8))