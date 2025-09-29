import mysql from 'mysql2/promise';

export default defineEventHandler(async event => {
	const connection = await mysql.createConnection({
		host     : 'localhost',
		port     : 3306,
		user     : 'prod',
		password : '1223',
		database : 'fiveprod',
	})

	const [ users ] = await connection.execute('SELECT id, name FROM users');

	await connection.end();
	
	return users;
})