CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  U_id INT AUTO_INCREMENT,
  name TEXT NOT NULL,
  PRIMARY KEY (U_id)
);

CREATE TABLE rooms (
  R_id INT AUTO_INCREMENT,
  name TEXT NOT NULL,
  PRIMARY KEY (R_id)
);

CREATE TABLE messages (
  M_id INT AUTO_INCREMENT,
  user INT NOT NULL,
  room INT NOT NULL,
  message_content VARCHAR(140),
  message_time DATETIME,
  PRIMARY KEY (M_id),
  FOREIGN KEY (user) REFERENCES users(U_id),
  FOREIGN KEY (room) REFERENCES rooms(R_id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users_rooms (
  id INT AUTO_INCREMENT,
  User_id INT NOT NULL,
  Room_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (User_id) REFERENCES users(U_id),
  FOREIGN KEY (Room_id) REFERENCES rooms(R_id)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

