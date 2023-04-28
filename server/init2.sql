-- [공통]
-- 데이터베이스 목록 보기
SHOW databases;

-- 데이터베이스 선택
USE kdt;

-- [DDL]
-- 테이블 생성
DROP TABLE IF EXISTS todo;
CREATE TABLE todo (
  id INT NOT NULL PRIMARY KEY auto_increment,
  title VARCHAR(100) NOT NULL,
  done BOOLEAN NOT NULL DEFAULT false
);

-- 테이블 구조 확인
DESC todo;

-- [DML]
-- 테이블 데이터 조회 (Read)
SELECT * FROM todo;

-- 테이블 데이터 추가 (Cerate)
INSERT INTO todo VALUES (null, 'my todo1', 0);
INSERT INTO todo VALUES (null, 'my todo2', 1);
INSERT INTO todo VALUES (null, 'my todo3', 0);
INSERT INTO todo VALUES (null, 'my todo4', 1);
INSERT INTO todo VALUES (null, 'my todo5', 1);
INSERT INTO todo VALUES (null, 'my todo6', 0);

-- 테이블 데이터 수정 (Update)
UPDATE todo SET title = '내 할일2' WHERE id = 2;

-- 테이블 데이터 삭제 (Delete)
DELETE FROM todo WHERE id = 3;


-- [DCL]
-- MySQL 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '1234'; 
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- MySQL 비번 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';