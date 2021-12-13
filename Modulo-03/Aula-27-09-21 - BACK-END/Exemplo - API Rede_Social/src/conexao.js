const {Pool} = require('pg')

const poll = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'rede_social2',
    password: 'fatestay',
    port: 5432
})


const query = (text, param) => {
    return poll.query(text,param)
}

module.exports = {
    query
}