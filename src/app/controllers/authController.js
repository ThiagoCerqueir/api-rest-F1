import usuariosRepository from '../repositories/usuariosRepository.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class AuthController {
    async register(req, res) {
        try {
            const { username, email, password } = req.body;

            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 8);
            const usuario = { username, email, password: hashedPassword };

            // Salvar no banco
            const row = await usuariosRepository.create(usuario);
            res.status(201).json({ message: 'Usuário criado com sucesso', usuario: row });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Buscar usuário no banco
            const usuario = await usuariosRepository.findByEmail(email);
            if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });

            // Comparar senhas
            const validPassword = await bcrypt.compare(password, usuario.password);
            if (!validPassword) return res.status(401).json({ error: 'Senha incorreta' });

            // Gerar token JWT
            const token = jwt.sign({ id: usuario.id }, 'sua-chave-secreta', { expiresIn: '1h' });
            res.json({ message: 'Login bem-sucedido', token });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
}

export default new AuthController();
