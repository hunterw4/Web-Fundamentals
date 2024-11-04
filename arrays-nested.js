

function coordinateOptimizer(arr) {
    var xCount = 0
    var yCount = 0
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length-1; j++) {
            xCount += arr[i][j]
            yCount += arr[i][j + 1]
        }
    }
    var xMean = xCount / arr.length
    var yMean = yCount / arr.length
    var optimalCoords = [xMean , yMean]
    return optimalCoords
}



var moveTruck = coordinateOptimizer([[120, 75], [45, 130], [150, -200], [310, 0], [-180, 60], [90, 250], [225, -175]])

console.log(moveTruck)