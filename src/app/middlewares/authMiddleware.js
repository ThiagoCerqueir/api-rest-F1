import jwt from 'jsonwebtoken';

export default function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

    const [, token] = authHeader.split(' ');

    jwt.verify(token, 'sua-chave-secreta', (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Token inválido' });

        req.userId = decoded.id; // Adiciona o ID do usuário na requisição
        next();
    });
}
