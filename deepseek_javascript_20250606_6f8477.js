const express = require('express');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// База данных SQLite
const db = new sqlite3.Database('./db.sqlite');

// Создаём таблицу пользователей
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
});

// Регистрация
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, hashedPassword],
    (err) => {
      if (err) return res.status(400).json({ error: 'Пользователь уже существует' });
      res.json({ message: 'Пользователь создан!' });
    }
  );
});

// Авторизация
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (!user) return res.status(401).json({ error: 'Неверный логин или пароль' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: 'Неверный пароль' });

    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  });
});

// Проверка токена (мидлварь)
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Нет доступа' });

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Неверный токен' });
    req.userId = decoded.id;
    next();
  });
};

// Защищённый роут (пример)
app.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: 'Добро пожаловать в AnalyticHub!' });
});

app.listen(5000, () => console.log('Сервер запущен на http://localhost:5000'));