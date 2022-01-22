-- Exercise 1 (done for you):
SELECT * FROM users;


-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;


-- Exercise 3
SELECT id, first_name, last_name 
FROM users 
ORDER BY last_name;


-- Exercise 4
SELECT id, image_url, user_id  
FROM posts 
WHERE user_id=26; 


-- Exercise 5
SELECT id, image_url, user_id  
FROM posts 
WHERE user_id=26 OR user_id=12;  


-- Exercise 6
SELECT count(posts) 
FROM posts;


-- Exercise 7
SELECT user_id, count(comments) 
FROM comments 
GROUP BY user_id 
ORDER BY count(comments) DESC;


-- Exercise 8
SELECT posts.id, posts.image_url, user_id, username, first_name, last_name 
FROM posts 
INNER JOIN users ON posts.user_id = users.id
WHERE user_id=26 OR user_id=12;  


-- Exercise 9
SELECT posts.id, pub_date, following_id 
FROM posts 
INNER JOIN following ON posts.user_id = following.following_id
WHERE following.user_id = 26;


-- Exercise 10
SELECT posts.id, pub_date, following_id, username 
FROM posts 
INNER JOIN following ON posts.user_id = following.following_id
INNER JOIN users ON following.following_id = users.id
WHERE following.user_id = 26
ORDER BY pub_date DESC;


-- Exercise 11
INSERT INTO bookmarks (user_id, post_id)
VALUES ('26','219'),
       ('26','220'),
       ('26','221');


-- Exercise 12
DELETE FROM bookmarks
WHERE user_id = 26 AND (post_id = 219 OR post_id = 220 OR post_id = 221);


-- Exercise 13
UPDATE users
SET email = 'cyoung2022@gmail.com' 
WHERE id=26;


-- Exercise 14
SELECT posts.id, posts.user_id, count(comments), caption
FROM posts
INNER JOIN comments ON comments.post_id = posts.id
GROUP BY posts.id
HAVING posts.user_id=26
ORDER BY count(comments) DESC;