USE comment_page;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    commentGuid INT(64) PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(250)
);

INSERT INTO Comments (commentGuid, comment) VALUES
("100495", "Comment number one"),
("234556", "Lets make this comment number 2");
