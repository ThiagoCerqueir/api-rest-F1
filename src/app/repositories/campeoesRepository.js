import { consulta } from '../database/conexao.js'

class campeoesRepository {
    // CRUD
    create(campeoes) {
        const sql = "INSERT INTO campeoes SET ?"
        return consulta(sql, campeoes, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM campeoes;"
        return consulta(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM campeoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(campeoes, id) {
        const sql = "UPDATE campeoes SET ? WHERE id=?;"
        return consulta(sql, [campeoes, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM campeoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new campeoesRepository()
