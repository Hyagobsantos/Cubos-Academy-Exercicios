const {format} = require('date-fns') ;

const data = new Date(2017,3,12);

console.log(format(data, "dd 'de' MMM 'de' yyyy"))

