create database trabalho_gps;

use trabalho_gps;

create table vaccinated_table (
	id int auto_increment primary key,
    fullname varchar(50) not null,
    birthdate varchar(20) not null,
    suscard varchar(30) unique not null
);