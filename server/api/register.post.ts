import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, password } = body;

  if (!name || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Отсутствуют обязательные поля: name или password',
    });
  }

  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'prod',
    password: '1223',
    database: 'fiveprod',
  });

  try {
    const checkQuery = 'SELECT id FROM users WHERE name = ?';
    const [rows]: any = await connection.execute(checkQuery, [name]);

    if (rows.length > 0) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Пользователь с таким именем уже существует',
      });
    }

    const insertQuery = 'INSERT INTO users (name, password) VALUES (?, ?)';
    await connection.execute(insertQuery, [name, password]);
    await connection.end();

    return {
      success: true,
    };
  } catch (error: any) {
    await connection.end();

    console.error('Ошибка при выполнении запроса:', error);

    if (error.statusCode)
      throw error;

    throw createError({
      statusCode: 500,
      statusMessage: 'Ошибка сервера при добавлении пользователя',
    });
  }
});