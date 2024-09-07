import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.post('/fazer-pagamento', (req, res) => {
	const { numero_cartao, valor } = req.body
	if (!numero_cartao || !valor) {
		return res.status(400).json(
			'Numero do cartão e valor são obrigatórios'
		)
	}
	return res.json(`pagamento de ${valor} realizado para cartão número ${numero_cartao}`)
})

app.listen(process.env.PORT, () => {
	console.log(`Server started in port: ${process.env.PORT}`)
})
