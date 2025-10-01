import mysql from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();

	const { name, password } = await readBody(event);

	if (!name || !password) {
		throw createError({
			statusCode: 400,
			message: 'Отсутствуют обязательные поля: name или password',
		});
	}

	const connection = await mysql.createConnection({
		host      : config.BD_HOST,
		port      : 3306,
		user      : config.BD_USER,
		password  : config.BD_PASSWORD,
		database  : config.BD_DATABASE,
	});

	try {
		const checkQuery = 'SELECT id FROM users WHERE name = ?';
		const [rows]: any = await connection.execute(checkQuery, [name]);

		if (rows.length > 0) {
			throw createError({
				statusCode: 409,
				message: 'Пользователь с таким именем уже существует',
			});
		}
		const token = uuidv4();
		const insertQuery = 'INSERT INTO users (name, password, token) VALUES (?, ?, ?)';
		await connection.execute(insertQuery, [name, password, token]);
		await connection.end();

		return {
			success: true,
			token,
		};
	} catch (error: any) {
		await connection.end();

		console.error('Ошибка при выполнении запроса:', error);

		if (error.statusCode)
			throw error;

		throw createError({
			statusCode: 500,
			message: 'Ошибка сервера при добавлении пользователя',
		});
	}
});