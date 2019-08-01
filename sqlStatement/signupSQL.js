exports.createNewUserSQL = 
`INSERT INTO ` + 
`"TB_users" ` + 
`(first_name, last_name, email, password) ` + 
`VALUES ` + 
`($1, $2, $3, $4) `;