const descontoTenis = (a,b,c) => {
    return `A porcentagem necessária para realizar a compra é ${Math.round((100-(c*b)/a))}%`
}

console.log(descontoTenis(129,100,80))

