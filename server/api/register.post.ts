import mysql from 'mysql2/promise';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();

	const {
		login,
		password,
		user_name
	} = await readBody(event);

	if (!login || !password || !user_name) {
		throw createError({
			statusCode: 400,
			message: 'Отсутствуют обязательные поля',
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
		const checkQuery = 'SELECT id FROM users WHERE login = ?';
		const [rows]: any = await connection.execute(checkQuery, [login]);

		if (rows.length > 0) {
			throw createError({
				statusCode: 409,
				message: 'Пользователь с таким именем уже существует',
			});
		}

		const token       = uuidv4();
		const insertQuery = `
		  INSERT INTO users
		  (login, password, user_name, token, create_date)
		  VALUES (?, ?, ?, ?, CURDATE())  -- CURDATE() вернёт текущую дату в формате YYYY-MM-DD
		`;

		await connection.execute(insertQuery, [login, password, user_name, token]);

		return {
			success: true,
			token,
		};
	} catch (error: any) {
		console.error('Ошибка при выполнении запроса:', error);

		if (error.statusCode)
			throw error;

		throw createError({
			statusCode: 500,
			message: 'Ошибка сервера при добавлении пользователя',
		});
	} finally {
		await connection.end();
	}
});