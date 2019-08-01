CREATE TABLE "TB_users" (
    user_id SERIAL NOT NULL, 
    first_name VARCHAR(20) NOT NULL, 
    last_name VARCHAR(20) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    password TEXT NOT NULL, 
    PRIMARY KEY (user_id), 
    UNIQUE (email)
);

CREATE TABLE "TB_languages" (
    language VARCHAR(100), 
    PRIMARY KEY (language)
);

CREATE TABLE "TB_subjects" (
    subject VARCHAR(100), 
    PRIMARY KEY (subject)
);

CREATE TABLE "TB_notes" (
    note_id SERIAL NOT NULL, 
    title VARCHAR(100), 
    language VARCHAR(100), 
    subject VARCHAR(100), 
    content TEXT, 
    user_id INTEGER, 
    PRIMARY KEY (note_id)
);
ALTER TABLE "TB_notes" 
ADD FOREIGN KEY (language) REFERENCES "TB_languages" (language), 
ADD FOREIGN KEY (subject) REFERENCES "TB_subjects" (subject), 
ADD FOREIGN KEY (user_id) REFERENCES "TB_users" (user_id);

