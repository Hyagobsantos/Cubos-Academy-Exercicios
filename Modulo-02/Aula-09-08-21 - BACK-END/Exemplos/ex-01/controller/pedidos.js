const instanciaAxios = require('../services/pagarme')


const consultarPedido = async (req,res) => {
    const { id } = req.params;

    try{
        const pedido = await instanciaAxios.get(`transactions/${id}`)
        return res.json(pedido.data)

    }catch (err){
        const { data: {errors} , status } = err.response
        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`
        })
    }
}



const criarPedido = async (req,res) => {
    const { body } = req;

    try{
        const pedido = await instanciaAxios.post('transactions', body);

        return res.json(pedido.data)
    } catch(err){
        const { data: {errors} , status } = err.response

        return res.status(status).json({
            erro: `${errors[0].parameter_name} - ${errors[0].message}`
        })
    }

}


module.exports = {criarPedido, consultarPedido}