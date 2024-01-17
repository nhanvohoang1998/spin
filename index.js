let arrayRandomNumber = []

const randomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}

const checkNumber = ()=>{
    let number = randomNumber(1,1000)

    console.log("random ra number: ",number, typeof(number))

    let isNumber = arrayRandomNumber.find((value, index)=>{
        return value == number
    })

    while(isNumber != undefined){
        number = randomNumber(1,1000)
        isNumber = arrayRandomNumber.find((value, index)=>{
            return value == number
        })
        console.log('while: ',number)
    }


    console.log("number sau nhiu lan random: ",number)

    console.log(isNumber)

    arrayRandomNumber.push(number)
    console.log(arrayRandomNumber)
}



