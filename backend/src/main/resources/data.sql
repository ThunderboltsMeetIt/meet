INSERT INTO source (id, name)
SELECT 1, 'Medytacje - Marka Aureliusza'
WHERE NOT EXISTS (SELECT 1 FROM source WHERE id = 1);

INSERT INTO category (id, name)
SELECT 1, 'Stoicyzm'
WHERE NOT EXISTS (SELECT 1 FROM category WHERE id = 1);

INSERT INTO tag (id, name)
SELECT 1, 'Acceptance'
WHERE NOT EXISTS (SELECT 1 FROM tag WHERE id = 1);

INSERT INTO tag (id, name)
SELECT 2, 'LiveFully'
WHERE NOT EXISTS (SELECT 1 FROM tag WHERE id = 2);

INSERT INTO tag (id, name)
SELECT 3, 'SelfReflection'
WHERE NOT EXISTS (SELECT 1 FROM tag WHERE id = 3);

INSERT INTO tag (id, name)
SELECT 4, 'InnerPeace'
WHERE NOT EXISTS (SELECT 1 FROM tag WHERE id = 4);

INSERT INTO quote (id, title, source_id, text, category_id)
SELECT 1, 'Meditations 2.1', 1, 'Begin the morning by saying to yourself: I shall meet with the busybody, the ungrateful, arrogant, deceitful, envious, unsocial. ...', 1
WHERE NOT EXISTS (SELECT 1 FROM quote WHERE id = 1);

INSERT INTO quote (id, title, source_id, text, category_id)
SELECT 2, 'Meditations 2.2', 1, 'Whatever this is that I am, it is a little flesh and breath, and the ruling part. ...', 1
WHERE NOT EXISTS (SELECT 1 FROM quote WHERE id = 2);

INSERT INTO quote (id, title, source_id, text, category_id)
SELECT 3, 'Meditations 2.3', 1, 'All that is from the gods is full of Providence. ...', 1
WHERE NOT EXISTS (SELECT 1 FROM quote WHERE id = 3);

INSERT INTO quote (id, title, source_id, text, category_id)
SELECT 4, 'Meditations 6.19', 1, 'If a thing is difficult to be accomplished by yourself, do not think that it is impossible for man. ...', 1
WHERE NOT EXISTS (SELECT 1 FROM quote WHERE id = 4);

INSERT INTO quote (id, title, source_id, text, category_id)
SELECT 5, 'Meditations 12.1', 1, 'It is not death that a man should fear, but he should fear never beginning to live.', 1
WHERE NOT EXISTS (SELECT 1 FROM quote WHERE id = 5);

INSERT INTO users(id)
SELECT 1
WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = 1);

INSERT INTO users(id)
SELECT 2
WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = 2);

INSERT INTO interpretation (id, quote_id, text, author_id, published)
SELECT 1, 1, 'This is very interesting', 2, TRUE
WHERE NOT EXISTS (SELECT 1 FROM interpretation WHERE id = 1);

INSERT INTO interpretation (id, quote_id, text, author_id, published)
SELECT 2, 1, 'I am amazed by this quote', 1, FALSE
WHERE NOT EXISTS (SELECT 1 FROM interpretation WHERE id = 2);

INSERT INTO interpretation (id, quote_id, text, author_id, published)
SELECT 3, 1, 'The quote is truly astonishing', 2, TRUE
WHERE NOT EXISTS (SELECT 1 FROM interpretation WHERE id = 3);

INSERT INTO interpretation (id, quote_id, text, author_id, published)
SELECT 4, 2, 'I love this quote', 1, TRUE
WHERE NOT EXISTS (SELECT 1 FROM interpretation WHERE id = 4);