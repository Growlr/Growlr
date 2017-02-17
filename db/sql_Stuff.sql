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
