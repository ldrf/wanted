CREATE TABLE users (
     id INT NOT NULL AUTO_INCREMENT,
	 name VARCHAR(200) NOT NULL,
     mail VARCHAR(200) not null,
     password VARCHAR(200) not null,
     active boolean not null,
     PRIMARY KEY (id)
);


CREATE TABLE customers (
     id INT NOT NULL AUTO_INCREMENT,
	 name VARCHAR(200) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE projects (
     id INT NOT NULL AUTO_INCREMENT,
	 name VARCHAR(200) NOT NULL,
     customer_id int,
     PRIMARY KEY (id)
);

CREATE TABLE user_project (
     user_id INT ,
	 project_id INT ,
     username_tool VARCHAR(200)
);

insert into users (name, mail, password, active) values ('Frank', 'admin@cpqi.com', '1234', true);
insert into users (name, mail, password, active) values ('Presunto', 'presunto@cpqi.com', '7890', true);
insert into users (name, mail, password, active) values ('Lukita', 'lukita@cpqi.com', '0000', true);
insert into users (name, mail, password, active) values ('Charlie', 'charlie@cpqi.com', '9999', true);
commit;

insert into projects (name, customer_id) values ('BGBA-FASE3', 1);
insert into projects (name, customer_id) values ('BGBA-RTB', 1);

commit;

insert into customers (name) values ('Galicia');




insert into user_project (user_id,project_id, username_tool) values (1, 1, 'Frank');
insert into user_project (user_id,project_id, username_tool) values (1, 2, 'Frank');
insert into user_project (user_id,project_id, username_tool) values (2, 1, 'Presunto');
insert into user_project (user_id,project_id, username_tool) values (2, 2, 'Presunto');
insert into user_project (user_id,project_id, username_tool) values (3, 2, 'Charlie');
insert into user_project (user_id,project_id, username_tool) values (4, 1, 'Lukita');
commit;


