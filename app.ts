let message: string = "Hello World!"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("This is episode " + episode)

let favoriteDroid
favoriteDroid = "abc"
favoriteDroid = 1
console.log("Meu favorito droid é " + favoriteDroid)

let isEnoughToBeatMF = function(parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 10
console.log(`Is ${distance} parcecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'} `)

let call = (name: string) => console.log(`Do you copy, ${name}??`)
call("R1")

function incremento (speed: number, inc: number = 1) : number {
    return speed + inc
}

let speed = 3

console.log(`incremento é ${incremento(speed, 1)}`)
console.log(`incremento é ${incremento(speed)}`)

