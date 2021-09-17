const pi = 3.14;

function CalculaVolume(diamentro){

    var raio = diamentro /2;

    var volume = 4/3 * pi * (Math.pow(raio,3));
    var resultado = volume / pi;
    return Math.round(resultado);

}

diamentro = 6
raio = diamentro / 2
volumeEmPi = (CalculaVolume(diamentro));

console.log(`O volume de uma esfera de raio ${raio} é ${volumeEmPi} PI`);