var message = "Hello World!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("This is episode " + episode);
var favoriteDroid;
favoriteDroid = "abc";
favoriteDroid = 1;
console.log("Meu favorito droid é " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 10;
console.log("Is " + distance + " parcecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO') + " ");
var call = function (name) { return console.log("Do you copy, " + name + "??"); };
call("R1");
function incremento(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
var speed = 3;
console.log("incremento \u00E9 " + incremento(speed, 1));
console.log("incremento \u00E9 " + incremento(speed));
