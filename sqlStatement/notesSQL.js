"use strict"

exports.selectUserAllNoteSQL = 
`SELECT ` + 
`note_id, title, substring(content for 100) AS content ` + 
`FROM "TB_notes" ` + 
`WHERE user_id = $1 ` + 
`ORDER BY note_id ASC `;

exports.selectUserNoteSQL = 
`SELECT * ` + 
`FROM "TB_notes" ` + 
`WHERE ` + 
`user_id = $1 ` + 
`AND ` + 
`note_id = $2 `;

exports.selectUserLastNoteSQL = 
`SELECT * ` + 
`FROM "TB_notes" ` + 
`WHERE user_id = $1 ` + 
`ORDER BY note_id ` + 
`DESC ` + 
`LIMIT 1 `;

exports.createUserNoteSql = 
`INSERT INTO ` + 
`"TB_notes" ` + 
`(user_id, title, language, subject, content) ` + 
`VALUES ` + 
`($1, $2, $3, $4, $5) `;

exports.updateUserNoteSql = 
`UPDATE ` + 
`"TB_notes" ` + 
`SET ` + 
`title = $3, ` + 
`language = $4, ` + 
`subject = $5, ` + 
`content = $6 ` + 
`WHERE ` + 
`user_id = $1 ` + 
`AND ` + 
`note_id = $2 `;

exports.deleteUserNote = 
`DELETE ` + 
`FROM "TB_notes" ` + 
`WHERE ` + 
`user_id = $1 ` + 
`AND ` + 
`note_id = $2 `;