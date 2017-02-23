CREATE TABLE public."user"
(
    user_id serial NOT NULL,
    fb_id integer NOT NULL,
    user_name text,
    email character varying,
    age integer,
    PRIMARY KEY (user_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to postgres;
***************

insert into user_table
(fid, firstname, lastname, email, gender, fb_img)
values
(10154319532907816, 'Jon', 'Low', 'lowjonc@gmail.com', 'male', 'https://scontent.xx.fbcdn.net/v/t1.0-1/c37.37.465.465/s50x50/255640_10150126795982816_7574770_n.jpg?oh=6cd914013d0ccbf58575ec1755f922ad&oe=5935169F')
