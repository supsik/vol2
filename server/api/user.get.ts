import mysql from 'mysql2/promise';
import type { RowDataPacket } from 'mysql2/promise';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();

	const authHeader = getHeader(event, 'authorization');
	const token = authHeader?.replace('Basic ', '').trim();

	if (!token) {
		throw createError({
			statusCode: 401,
			message: 'Не передан токен'
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
		const [ rows ] = await connection.execute<RowDataPacket[]>('SELECT name FROM users WHERE token = ?', [ token ]);

		const user = (rows as any)[0];

		if (!user) {
			throw createError({
				statusCode: 401,
				message: 'Неверный токен'
			});
		}

		return { user }
	} catch (error: any) {
		throw createError({
			statusCode: 500,
			message: 'Ошибка сервера при проверке токена' + error
		});
	} finally {
		await connection.end();
	}
});