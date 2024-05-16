create database craftland;

use craftland;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table pontuacao (
id int PRIMARY KEY AUTO_INCREMENT,
Fase1 int,
Fase2 int,
Total int,
fkUsuario int,
foreign key (fkUsuario) references usuario (id)
);

select * from usuario;
select * from pontuacao;
