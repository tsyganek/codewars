function max(array){
    let maxNumber = array[0]
    for (let i = 1; i < array.length; i++){
        if(array[i] > maxNumber){
            maxNumber = array[i]
        } 
        }
        console.log(maxNumber)
        return maxNumber
    }

function min(array){
    let minNumber = array[0]

    for (let i = 1; i < array.length; i++){
        if(array[i] < minNumber){
            minNumber = array[i] 
        }
    }

    console.log(minNumber)
    return minNumber
}


max([4,6,2,1,9,63,-134,566] )
min ([4,6,2,1,9,63,-134,566] )  

max([-52, 56, 30, 29, -54, 0, -110])
min([-52, 56, 30, 29, -54, 0, -110])

max( [42, 54, 65, 87, 0] )
min( [42, 54, 65, 87, 0] )

max([5])
min([5])