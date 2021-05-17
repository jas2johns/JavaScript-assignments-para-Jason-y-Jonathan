CREATE TABLE patron(  
    patron_id int NOT NULL primary key AUTO_INCREMENT,
    lastname VARCHAR(40) not null,
    firstname VARCHAR(40) not null,
    email VARCHAR(100) null,
    city VARCHAR(40) null,
    birthyear int(11) not null,
    userid VARCHAR(10) null,
    password VARCHAR (10) null 
) 