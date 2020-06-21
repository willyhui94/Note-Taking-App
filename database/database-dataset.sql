INSERT INTO "TB_users" 
(first_name, last_name, email, password) 
VALUES 
('test', 'test', 'test@example.com', '1234567890');

INSERT INTO "TB_languages" 
(language) 
VALUES 
('Chinese'),  
('Spanish'),  
('English'),  
('Hindi'),  
('Arabic'),  
('Portuguese'),  
('Bengali'),  
('Russian'),  
('Japanese'),  
('Punjabi'),  
('Javanese'),  
('German'),  
('Korean'),  
('French'),  
('Telugu'),  
('Marathi'),  
('Turkish'),  
('Tamil'),  
('vietnamese'),  
('Urdu');

INSERT INTO "TB_subjects" 
(subject) 
VALUES 
('Chinese Language'),  
('English Language'),  
('Mathematics'),  
('Liberal Studies'),  
('Physics'),  
('Chemistry'),  
('Biology'),  
('Chinese Literature'),  
('English Literature'),  
('Chinese History'),  
('World History'),  
('Economics'),  
('Geography');

INSERT INTO "TB_notes" 
(title, language, subject, content, user_id) 
VALUES 
(
    'Note Title 1', 
    'Chinese', 
    'Chinese Language', 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    1
), 
(
    'Note Title 2', 
    'English', 
    'English Language', 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    1
), 
(
    'Note Title 3', 
    'Spanish', 
    'Mathematics', 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    1
);
