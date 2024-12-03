import { consulta } from '../database/conexao.js';

class UsuariosRepository {
    async create(usuario) {
        const sql = "INSERT INTO usuarios SET ?";
        return consulta(sql, usuario, 'Não foi possível criar o usuário');
    }

    async findByEmail(email) {
        const sql = "SELECT * FROM usuarios WHERE email=?";
        const [row] = await consulta(sql, email, 'Usuário não encontrado');
        return row;
    }
}

export default new UsuariosRepository();
