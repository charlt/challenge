exports.init = function hola() {
    let multiplos = [3, 5];
    let res = [0] //Le agrege un valor cero, para que los testing unitarios y los valores comienzen desde la posicion 1
    for (let index = 1; index <= 100; index++) {
        let val = getMultiplos(index, multiplos);
        console.log(val)
        res.push(val);
    }
    return res;
}
let getMultiplos = (valor, multiplos) => {
    let suma = 0;
    let palabra = "";
    let objValues = { 0: String(valor), 3: "Music", 5: "TI", 8: "Musical" }
    multiplos.forEach(multiplo => {
        if (valor % multiplo == 0) {
            suma += multiplo;
        }
    });
    palabra = objValues[suma]
    return palabra;
}