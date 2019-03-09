CREATE TABLE IF NOT EXISTS user_detail(
  id                  serial          primary key not null,
  user_id             UUID            not null,   
  username            varchar(256)    not null,
  email               varchar(256)    not null,
  salt                char(24)        not null,
  password_hash       char(64)        not null,
  first_name          varchar(128)            ,
  last_name           varchar(128)            ,
  avatar_url          varchar(256)            ,
  creation_date       timestamptz     not null
);

CREATE TABLE IF NOT EXISTS company(
  id            serial          primary key not null,
  company_id    char(24)        not null,   
  company_name  varchar(256)    not null,
  company_url   varchar(256)    not null,
  theme_color   char(7)         not null,
  creation_date timestamptz     not null
);

CREATE TABLE IF NOT EXISTS store_collection(
  id              serial        primary key not null,
  collection_id   char(24)      not null,
  label           varchar(256)  not null,
  file_name       varchar(256)  not null,
  image_url       varchar(256)  not null,
  items_count     INTEGER       not null,
  creation_date   timestamptz   not null
);

CREATE TABLE IF NOT EXISTS store_product(
  id                  serial        primary key not null,
  collection_id       integer       REFERENCES store_collection(id) not null,
  product_id          char(24)      not null unique,
  product_name        varchar(512)  not null,
  product_description varchar(1024) not null,
  price               bigint        not null,
  file_name           varchar(256)  not null,
  image_url           varchar(256)  not null,
  creation_date       timestamptz   not null
);
