CREATE TABLE IF NOT EXISTS urls (
    token varchar(8) PRIMARY KEY,
    url varchar(2048) NOT NULL,
    created TIMESTAMP WITH TIME ZONE DEFAULT now()
);
