create database craftland;

use craftland;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table pontuacao (
pontuacao1 int,
pontuacao2 int,
fkUsuario int,
primary key (pontuacao1, pontuacao2),
foreign key (fkUsuario) references usuario (id)
);

select * from usuario;
select * from pontuacao;
