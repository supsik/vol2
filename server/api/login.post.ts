import mysql from 'mysql2/promise';
import type { RowDataPacket } from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { login, password } = await readBody(event);

  if (!login || !password) {
    throw createError({
      statusCode: 401,
      message: 'Не переданы обязательные параметры',
    });
  }

  const connection = await mysql.createConnection({
    host: config.BD_HOST,
    port: 3306,
    user: config.BD_USER,
    password: config.BD_PASSWORD,
    database: config.BD_DATABASE,
  });

  try {
    const [rows] = await connection.execute<RowDataPacket[]>(
      'SELECT token FROM users WHERE name = ? AND password = ?',
      [login, password]
    );

    if (rows.length === 0) {
      throw createError({
        statusCode: 401,
        message: 'Данный пользователь не существует',
      });
    }

    const token = rows[0].token;
    return { token };
  } catch (error: any) {
    console.error('Ошибка при выполнении запроса:', error);
    throw createError({
      statusCode: 500,
      message: 'Ошибка сервера при проверке токена: ' + error.message,
    });
  } finally {
    await connection.end();
  }
});