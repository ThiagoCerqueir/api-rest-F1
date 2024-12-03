import campeoesRepository from '../repositories/campeoesRepository.js'

class campeoesController {
   
    async index(req, res) {
        const row = await campeoesRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await campeoesRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        const campeoes = req.body
        const row = await campeoesRepository.create(campeoes)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const campeoes = req.body
        const row = await campeoesRepository.update(campeoes, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await campeoesRepository.delete(id)
        res.json(row)
    }

}

// padrão Singleton
export default new campeoesController()
