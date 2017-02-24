--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: pet_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE pet_data (
    source_link text,
    img_link text,
    pet_id text,
    gender text,
    breed text,
    color text,
    age text,
    kennel_id text,
    kennel_status text,
    description text,
    pet_name text,
    uniq_id integer NOT NULL,
    owner_id bigint
);


ALTER TABLE pet_data OWNER TO postgres;

--
-- Name: pet_data_uniq_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE pet_data_uniq_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pet_data_uniq_id_seq OWNER TO postgres;

--
-- Name: pet_data_uniq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE pet_data_uniq_id_seq OWNED BY pet_data.uniq_id;


--
-- Name: seen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE seen (
    id integer NOT NULL,
    user_id bigint,
    liked boolean,
    swipee bigint
);


ALTER TABLE seen OWNER TO postgres;

--
-- Name: seen_table_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE seen_table_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE seen_table_id_seq OWNER TO postgres;

--
-- Name: seen_table_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE seen_table_id_seq OWNED BY seen.id;


--
-- Name: user_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE user_table (
    id integer NOT NULL,
    email text,
    description text,
    age integer,
    gender text,
    fb_img text,
    firstname text,
    lastname text,
    fid bigint
);


ALTER TABLE user_table OWNER TO postgres;

--
-- Name: user_table_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE user_table_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_table_id_seq OWNER TO postgres;

--
-- Name: user_table_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_table_id_seq OWNED BY user_table.id;


--
-- Name: pet_data uniq_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY pet_data ALTER COLUMN uniq_id SET DEFAULT nextval('pet_data_uniq_id_seq'::regclass);


--
-- Name: seen id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY seen ALTER COLUMN id SET DEFAULT nextval('seen_table_id_seq'::regclass);


--
-- Name: user_table id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_table ALTER COLUMN id SET DEFAULT nextval('user_table_id_seq'::regclass);


--
-- Data for Name: pet_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY pet_data (source_link, img_link, pet_id, gender, breed, color, age, kennel_id, kennel_status, description, pet_name, uniq_id, owner_id) FROM stdin;
https://www.utahhumane.org/node/18782	https://petharbor.com/get_image.asp?RES=Detail&ID=A109733&LOCATION=UTAH	A109733	Male	Guinea Pig	White	1 YEAR	ADP SM ANI	AVAILABLE	null	EINSTEIN	1	\N
https://www.utahhumane.org/node/18056	https://petharbor.com/get_image.asp?RES=Detail&ID=A109410&LOCATION=UTAH	A109410	Male	Domestic Shorthair	BRN TABBY	8 YEARS	CA17	AVAILABLE	I'll be forever yours & you'll be forever mine; I'm the "Faithful Feline"! I'll be your shadow & your very best friend. I'll frolic at your feet & we can take naps in the sunshine. As your resident Velcro cat, I'm happiest just being by your side.	TIBERIUS	2	\N
https://www.utahhumane.org/node/17861	https://petharbor.com/get_image.asp?RES=Detail&ID=A107272&LOCATION=UTAH	A109733	Male	Great Pyrenees	GOLD	11 MONTHS	DU12	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m extremely playful & affectionate with people & dogs! \n- I have loads of energy; I love to run & enjoy playing fetch.\n- I already know cues to sit & lay down!\n\nWhat I’m working on:\n\n- Impulse control: I don’t know my own size or strength & tend to get a little carried away during playtime!\n- Basic manners: I have some training under my belt already, but there is always room for improvement!\n\nWhat I’m looking for:\n\n- A very active household with experienced owners & no kids under 13 years of age. \n- Friendly, active canine companions who are similar to my own size & energy level to help keep me busy!\n- A secure yard, with supervision outside. \n- Ample mental stimulation & lots of daily exercise!\n- Ongoing positive reinforcement training to help with impulse control & general manners.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.*	GUSTER	3	\N
https://www.utahhumane.org/node/18302	https://petharbor.com/get_image.asp?RES=Detail&ID=A109101&LOCATION=UTAH	A109101	Male	Domestic Longhair	White	7 YEARS	CA17	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	ROCKY	4	\N
https://www.utahhumane.org/node/17940	https://petharbor.com/get_image.asp?RES=Detail&ID=A108528&LOCATION=UTAH	A108528	Female	Domestic Shorthair	Black	12 YEARS	CC27	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	WHISKERS	5	\N
https://www.utahhumane.org/node/17801	https://petharbor.com/get_image.asp?RES=Detail&ID=A066872&LOCATION=UTAH	A066872	Male	Shorthaired Rabbit	White	4 YEARS	BB3	AVAILABLE	With eyes like these it’s hard not to fall in love. I’m on the search for my perfect home that will spoil me silly with treats, love, & of course a forever family! Come meet me today!	ZEPPO	6	\N
https://www.utahhumane.org/node/17883	https://petharbor.com/get_image.asp?RES=Detail&ID=A107661&LOCATION=UTAH	A107661	Female	Domestic Shorthair	Black	5 YEARS	CA12	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	BOO BOO	7	\N
https://www.utahhumane.org/node/18007	https://petharbor.com/get_image.asp?RES=Detail&ID=A109031&LOCATION=UTAH	A109031	Female	Domestic Longhair	TORTIE	6 YEARS	CA17	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	SUMMERS	8	\N
https://www.utahhumane.org/node/18502	https://petharbor.com/get_image.asp?RES=Detail&ID=A098131&LOCATION=UTAH	A098131	Male	Australian Cattle Dog	RED TICK	2 YEARS	DU16	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I already know cues to sit, lay down & shake!\n- I’m already crate trained!\n- I’m extremely intelligent & very athletic! I love to run & enjoy playing fetch.\n\nWhat I’m working on:\n\n- Impulse control: I have a lot of energy & can get a bit carried away when I’m frustrated.\n- Resource guarding: I tend to be a bit greedy when it comes to my food, bones & toys.\n\nWhat I’m looking for:\n\n- A very active household with herding dog experienced owners & no kids under 13 years of age. \n- A secure yard, with supervision outside. (I’ve been known to be a bit of a Houdini!)\n- Canine companions who are similar to my own size & energy level.\n- Ample mental stimulation & lots of exercise.\n- Ongoing positive reinforcement training to help with impulse control & resource guarding.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.*	KNOX	9	\N
https://www.utahhumane.org/node/17814	https://petharbor.com/get_image.asp?RES=Detail&ID=A098110&LOCATION=UTAH	A098110	Male	Domestic Shorthair	Black	10 YEARS	CC40	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	DIESEL	10	\N
https://www.utahhumane.org/node/18505	https://petharbor.com/get_image.asp?RES=Detail&ID=A109383&LOCATION=UTAH	A109383	Female	Cairn Terrier	Black	4 YEARS	FOSTER	AVAILABLE	I am a transfer from another shelter & am ready to start my new life! \n\nAlthough my history is a mystery, I like the people & other dogs I have met here at HSU. It is unknown if I have been around cats or children before. I may or may not be fully house trained…some of us transfer animals have lived our entire lives in a loving home environment, while others have never lived indoors or been part of a family. I can tell you that we are all very eager to learn!\n\nI may need some guidance & a healthy dose of patience while I'm learning the ropes. A regular daily routine, positive reinforcement, crate training & exercise will help me learn to be the very best canine companion I can be! If you do decide to take me home, the behavior staff at HSU is here to help me succeed, so feel free to contact them if you need help!\n\nIf you think we're a match, please call the foster department at The Humane Society of Utah to schedule a meet and greet.\n\nMy temporary home is:\n\nIn a Foster Home. Please contact the foster department at 801-261-2919 x215 for more information on Cashmere or to schedule a meet and greet appointment.	CASHMERE	11	\N
https://www.utahhumane.org/node/17935	https://petharbor.com/get_image.asp?RES=Detail&ID=A108461&LOCATION=UTAH	A108461	Female	Shorthaired Rabbit	White	3 YEARS	BB18	AVAILABLE	Looking for the perfect pair to add to the family? With ears like ours we're pretty hard to resist! We are a bonded pair & love each other very much! Do you have room in your home & heart? Meet us today!	CAESAR	12	\N
https://www.utahhumane.org/node/17966	https://petharbor.com/get_image.asp?RES=Detail&ID=A108731&LOCATION=UTAH	A108731	Female	Domestic Shorthair	CALICO	2 YEARS	CA16	AVAILABLE	Not to toot my own horn, but I'm a "Fancy Foster"! I needed some extra TLC when I arrived, so I went to foster care. The foster department knows the most about me & would love to tell you everything. Please ask the staff to "fetch" them for you!	CALLIE	13	\N
https://www.utahhumane.org/node/17812	https://petharbor.com/get_image.asp?RES=Detail&ID=A094632&LOCATION=UTAH	A094632	Female	Pit Bull Terrier	BR BRINDLE	2 YEARS	DA3	AVAILABLE	I am a transfer from another shelter & am ready to start my new life! \n\nAlthough my history is a mystery, I like the people & other dogs I have met here at HSU. It is unknown if I have been around cats or children before. I may or may not be fully house trained…some of us transfer animals have lived our entire lives in a loving home environment, while others have never lived indoors or been part of a family. I can tell you that we are all very eager to learn!\n\nI may need some guidance & a healthy dose of patience while I'm learning the ropes. A regular daily routine, positive reinforcement, crate training & exercise will help me learn to be the very best canine companion I can be! If you do decide to take me home, the behavior staff at HSU is here to help me succeed, so feel free to contact them if you need help!\n\nIf you think we're a match, please bring your family (including other dogs) to The Humane Society of Utah to meet me today!\n\nMy temporary home is:\n\nTHE HUMANE SOCIETY OF UTAH\n\n4242 SOUTH 300 WEST \n\nMURRAY, UTAH 84107\n\n (801) 261-2919 x227\n\nWWW.UTAHHUMANE.ORG	HONEY	14	\N
https://www.utahhumane.org/node/18445	https://petharbor.com/get_image.asp?RES=Detail&ID=A108950&LOCATION=UTAH	A108950	Female	Labrador Retriever	Black	7 YEARS	DA7	AVAILABLE	I’d love nothing more than to participate in whatever you’re doing! I’m true to my breed I’m an outgoing, energetic, lab blend & will thrive having a job to do! My ideal home will feed me seperately from other K9 pals & teach me how to live inside & be part of the family! Come & meet me today!	KIWI	15	\N
https://www.utahhumane.org/node/17928	https://petharbor.com/get_image.asp?RES=Detail&ID=A108357&LOCATION=UTAH	A108357	Female	Domestic Shorthair	BLUE CREAM	1 YEAR 8 MONTHS	CA06	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	PUMPKIN	16	\N
https://www.utahhumane.org/node/18012	https://petharbor.com/get_image.asp?RES=Detail&ID=A109145&LOCATION=UTAH	A109145	Male	Redtick hound	White	1 YEAR 10 MONTHS	DU16	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m extremely intelligent & very motivated to learn, especially when there are treats involved!\n- I’m a perfect gentleman on a leash, as long as I’m walked using a no-pull harness.\n- I already know cues to sit, down, wait & shake. (I’ll do anything for a treat & I love to learn!)\n\nWhat I’m working on:\n\n- Impulse control: I have a lot of energy & when I’m excited I sometimes forget how strong I am. \n- Basic manners: I still need training to learn some of the basics, like potty training & house manners.\n\nWhat I’m looking for:\n\n- A very active household with hound dog experienced owners & no kids under age 13. \n- Canine companions similar in size & energy level.\n- Forgiving neighbors! (I’m a hound who loves the sound of my own voice.)\n- Ample mental stimulation & lots of exercise are going to be a daily necessity for me.\n- Ongoing positive reinforcement training for impulse control & basic manners.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.*	DOUGAN	17	\N
https://www.utahhumane.org/node/18699	https://petharbor.com/get_image.asp?RES=Detail&ID=A109669&LOCATION=UTAH	A109669	Female	Guinea Pig	TRI	2 YEARS	RT1-1	AVAILABLE	null	MUFFIN	18	\N
https://www.utahhumane.org/node/18557	https://petharbor.com/get_image.asp?RES=Detail&ID=A109533&LOCATION=UTAH	A109533	Female	Domestic Shorthair	Black	8 YEARS	CA10	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	MIDNIGHT	19	\N
https://www.utahhumane.org/node/17824	https://petharbor.com/get_image.asp?RES=Detail&ID=A102815&LOCATION=UTAH	A102815	Female	Domestic Shorthair	Black	9 YEARS	CA02	AVAILABLE	I'll be forever yours & you'll be forever mine; I'm the "Faithful Feline"! I'll be your shadow & your very best friend. I'll frolic at your feet & we can take naps in the sunshine. As your resident Velcro cat, I'm happiest just being by your side.	GABBY	20	\N
https://www.utahhumane.org/node/18628	https://petharbor.com/get_image.asp?RES=Detail&ID=A109376&LOCATION=UTAH	A109376	Female	Shorthaired Rabbit	White	1 YEAR 1 MONTH	BB10	AVAILABLE	Okay…… I’ll admit spoiled is definitely in my vocab. It’s not my fault I think I’m the Princess of rabbits! I’d love nothing more than a castle to call my own where I can be spoiled silly!	DAFFY	21	\N
https://www.utahhumane.org/node/18579	https://petharbor.com/get_image.asp?RES=Detail&ID=A106962&LOCATION=UTAH	A106962	Male	Australian Cattle Dog	White	5 YEARS	DU12	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I have loads of love to give & am very loyal to those I’m bonded to.\n- I’m extremely intelligent & very motivated to learn, especially when there are treats involved!\n- I’m very athletic! I love to run & enjoy playing fetch.\n\nWhat I’m working on:\n\n- Reactivity in kennel environment: Take me out for a walk & see what a different dog I become! \n- Resource guarding: I tend to be a bit greedy when it comes to my food, bones & toys.\n- Social skills with new dogs: I’m insecure when meeting new canines & prefer dogs who respect my space.\n\nWhat I’m looking for:\n\n- A very active household with herding dog experienced owners & no kids under 13 years of age. \n- A secure yard, with supervision outside.\n- Canine companions who are similar to my own size & will respect my personal space.\n- Ample mental stimulation & lots of exercise.\n- Ongoing positive reinforcement training to help with resource guarding\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.*	KAPONE	22	\N
https://www.utahhumane.org/node/18390	https://petharbor.com/get_image.asp?RES=Detail&ID=A109404&LOCATION=UTAH	A109404	Male	Domestic Shorthair	ORG TABBY	15 YEARS	CC13	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	MILO	23	\N
https://www.utahhumane.org/node/18736	https://petharbor.com/get_image.asp?RES=Detail&ID=A109523&LOCATION=UTAH	A109523	Male	Domestic Shorthair	ORG TABBY	14 YEARS	CC20	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	BUTTERSCOTCH	24	\N
https://www.utahhumane.org/node/18057	https://petharbor.com/get_image.asp?RES=Detail&ID=A109411&LOCATION=UTAH	A109411	Male	Domestic Mediumhair	Black	3 YEARS	CA19	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	BANDIT	25	\N
https://www.utahhumane.org/node/17936	https://petharbor.com/get_image.asp?RES=Detail&ID=A108462&LOCATION=UTAH	A108462	Male	Longhaired Rabbit	TRI	2 YEARS	BB18	AVAILABLE	Looking for the perfect pair to add to the family? With ears like ours we're pretty hard to resist! We are a bonded pair & love each other very much! Do you have room in your home & heart? Meet us today!	NATHANIEL	26	\N
https://www.utahhumane.org/node/17858	https://petharbor.com/get_image.asp?RES=Detail&ID=A107171&LOCATION=UTAH	A107171	Male	Labrador Retriever	Black	7 YEARS	FOSTER	AVAILABLE	Looking for a family dog? Look no further than Tripp! He is a fantastic big black lab who is housebroken, good with dogs of all sizes and temperaments, cats, and kids of all sizes. Tripp is a wonderful house dog-- quiet and well behaved, spends most of his daytime hours chilling on the couch or bed, or sitting at your heel. His go-to move is to walk along at your heel wherever you go and sit quietly at heel when you stop. \nWhile Tripp is a mellow housedog, he is an active guy outside. He loves to play in the snow and wrestle other dogs, bark at the neighbor dogs, or go for walks on or off-leash. Because Tripp has some separation anxiety, he needs to go to a home with another dog to keep him company.\n\nTerrific Tripp is the whole package: handsome, affectionate, obedient, fun, and companionable. For more information about him or to meet him, contact the Foster Dept at 801-261-2919 x215. His adoption fee is $60 which includes this year's vaccinations (excluding rabies), deworming, neuter, microchip, a certificate for a free exam with a participating local veterinarian, and a slip leash to take him home.	TRIPP	27	\N
https://www.utahhumane.org/node/18312	https://petharbor.com/get_image.asp?RES=Detail&ID=A109439&LOCATION=UTAH	A109439	Male	Himalayan	BLUE PT	4 YEARS	CA12	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	GABRIEL	28	\N
https://www.utahhumane.org/node/18489	https://petharbor.com/get_image.asp?RES=Detail&ID=A109520&LOCATION=UTAH	A109520	Male	Domestic Shorthair	Black	6 YEARS	CA08	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	TOOTHLESS	29	\N
https://www.utahhumane.org/node/17869	https://petharbor.com/get_image.asp?RES=Detail&ID=A107354&LOCATION=UTAH	A107354	Male	Chihuahua - Smooth Coated	Cream	1 YEAR 9 MONTHS	FOSTER	AVAILABLE	I am a transfer from another shelter & am ready to start my new life! \n\nAlthough my history is a mystery, I like the people & other dogs I have met here at HSU. It is unknown if I have been around cats or children before. I may or may not be fully house trained…some of us transfer animals have lived our entire lives in a loving home environment, while others have never lived indoors or been part of a family. I can tell you that we are all very eager to learn!\n\nI may need some guidance & a healthy dose of patience while I'm learning the ropes. A regular daily routine, positive reinforcement, crate training & exercise will help me learn to be the very best canine companion I can be! If you do decide to take me home, the behavior staff at HSU is here to help me succeed, so feel free to contact them if you need help!\n\nIf you think we're a match, please bring your family (including other dogs) to The Humane Society of Utah to meet me today!\n\nMy temporary home is:\n\nTHE HUMANE SOCIETY OF UTAH\n\n4242 SOUTH 300 WEST \n\nMURRAY, UTAH 84107\n\n (801) 261-2919 x227\n\nWWW.UTAHHUMANE.ORG	PABLO	30	\N
https://www.utahhumane.org/node/17806	https://petharbor.com/get_image.asp?RES=Detail&ID=A089576&LOCATION=UTAH	A089576	Male	Treeing Walker Coonhound	Red	8 YEARS	DU11	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m extremely intelligent & very motivated to learn, especially when there are treats involved!\n- I’m a perfect gentleman on a leash, as long as I’m walked using a no-pull harness.\n- I already know cues to sit & wait.\n\nWhat I’m working on:\n\n- Resource guarding: I tend to be a bit greedy when it comes to my food, bones & toys. \n- Basic manners: I have some training under my belt already but there is always room for improvement!\n- Chewing: I love to chew so I’ll need to be supervised whenever I’m given appropriate toys & treats to work on.\n\nWhat I’m looking for:\n- A very active household with hound dog experienced owners & no kids under age 13. \n- Canine companions similar in size & energy level.\n- A secure yard, with supervision outside.\n- Ample mental stimulation & lots of exercise are going to be a daily necessity for me.\n- Ongoing positive reinforcement training for socialization & basic manners.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.*	PLUTO	31	\N
https://www.utahhumane.org/node/18780	https://petharbor.com/get_image.asp?RES=Detail&ID=A109714&LOCATION=UTAH	A109714	Male	Domestic Mediumhair	Black	4 YEARS	CA05	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	PANCHO	32	\N
https://www.utahhumane.org/node/18700	https://petharbor.com/get_image.asp?RES=Detail&ID=A109670&LOCATION=UTAH	A109670	Female	Guinea Pig	TRI	1 YEAR 6 MONTHS	RT1-2	AVAILABLE	null	AUTUMN	33	\N
https://www.utahhumane.org/node/17988	https://petharbor.com/get_image.asp?RES=Detail&ID=A108907&LOCATION=UTAH	A108907	Female	Shorthaired Rabbit	White	1 YEAR 1 MONTH	BB9	AVAILABLE	null	WHISKEY	34	\N
https://www.utahhumane.org/node/17927	https://petharbor.com/get_image.asp?RES=Detail&ID=A108348&LOCATION=UTAH	A108348	Male	Domestic Shorthair	White	11 YEARS	CC39	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	SIMON	35	\N
https://www.utahhumane.org/node/18440	https://petharbor.com/get_image.asp?RES=Detail&ID=A107165&LOCATION=UTAH	A107165	Female	Shorthaired Rabbit	White	1 YEAR 9 MONTHS	BB8	AVAILABLE	I’ve got a personality that is sure to melt your heart, sweet, petite, & handsome I’d make a great addition to any family! I’d love noting more than a human of my very own that will spoil me silly! Come meet me today!	SEARIA	36	\N
https://www.utahhumane.org/node/18241	https://petharbor.com/get_image.asp?RES=Detail&ID=A109421&LOCATION=UTAH	A109421	Male	Domestic Longhair	Blue	6 YEARS	CA05	AVAILABLE	FROM THE SHADOWS OF THE NIGHT A "MYSTERY MEOW" WILL EMERGE TO STEAL YOUR HEART! MOST OF US CAME HERE WITH NO HISTORY, BUT SOME OF US ARE JUST TIMID & OUR PERSONALITIES HAVE YET TO SHINE. GIVE ME A CHANCE & I'LL SHOW YOU JUST HOW AMAZING I CAN BE!	PHILLIPE	37	\N
https://www.utahhumane.org/node/17891	https://petharbor.com/get_image.asp?RES=Detail&ID=A107741&LOCATION=UTAH	A107741	Female	Domestic Mediumhair	White	3 YEARS	CA19	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	SMOOCHES	38	\N
https://www.utahhumane.org/node/17797	https://petharbor.com/get_image.asp?RES=Detail&ID=A024900&LOCATION=UTAH	A024900	Female	Pit Bull Terrier	Brown	7 YEARS	DA10	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m very playful, affectionate & well-mannered outside of the shelter environment.\n- I’m great on a leash, as long as I’m walked using a no-pull harness.\n- I already know cues to sit, wait & shake!\n\nWhat I’m working on:\n\n- Reactivity on leash & in kennel environment: Take me out for a walk & see what a different dog I become!\n- Impulse control: Sometimes I get a little carried away during playtime!\n\nWhat I’m looking for:\n\n- An active household with experienced dog owners who will use a harness to walk me instead of a collar. \n- A family with older, sturdy children who won’t be overwhelmed by my enthusiastic play style. \n- A home with no cats or small animals. (I’m a little too interested in little critters, if you know what I mean.)\n- A secure yard, with supervision outside. \n- Ample mental stimulation, exercise & ongoing positive reinforcement training for impulse control.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.* \n---	ANUBIS	39	\N
https://www.utahhumane.org/node/18632	https://petharbor.com/get_image.asp?RES=Detail&ID=A109535&LOCATION=UTAH	A109535	Male	Domestic Shorthair	Black	10 YEARS	CC36	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	BANDIT	40	\N
https://www.utahhumane.org/node/18715	https://petharbor.com/get_image.asp?RES=Detail&ID=A103433&LOCATION=UTAH	A103433	Male	Chihuahua - Smooth Coated	Tan	3 YEARS	FOSTER	AVAILABLE	Patch is a little ball of furry cuteness. But he also has a lot of personality that is charming and funny. He does have a few quirks that we'd love to tell you about. Contact the foster department to find out more on Patch 801-261-2919 x215. He would prefer a home with calm well mannered dogs and no children under the age of 13 years old.\n\nIf you think we're a match, please bring your family (including other dogs) to The Humane Society of Utah to meet me today!\n\nMy temporary home is:\n\nTHE HUMANE SOCIETY OF UTAH\n\n4242 SOUTH 300 WEST \n\nMURRAY, UTAH 84107\n\n (801) 261-2919 x227\n\nWWW.UTAHHUMANE.ORG	PATCH	41	\N
https://www.utahhumane.org/node/17851	https://petharbor.com/get_image.asp?RES=Detail&ID=A106583&LOCATION=UTAH	A106583	Male	Domestic Shorthair	GRAY TABBY	2 YEARS	CA04	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	ATTICUS	42	\N
https://www.utahhumane.org/node/18488	https://petharbor.com/get_image.asp?RES=Detail&ID=A109507&LOCATION=UTAH	A109507	Male	Domestic Longhair	Black	16 YEARS	CC09	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	FINIUS	43	\N
https://www.utahhumane.org/node/17823	https://petharbor.com/get_image.asp?RES=Detail&ID=A102597&LOCATION=UTAH	A102597	Male	Domestic Shorthair	BRN TABBY	11 YEARS	CC32	AVAILABLE	I'll be forever yours & you'll be forever mine; I'm the "Faithful Feline"! I'll be your shadow & your very best friend. I'll frolic at your feet & we can take naps in the sunshine. As your resident Velcro cat, I'm happiest just being by your side.	SPRITE	44	\N
https://www.utahhumane.org/node/18588	https://petharbor.com/get_image.asp?RES=Detail&ID=A109624&LOCATION=UTAH	A109624	Female	Domestic Shorthair	CALICO	3 YEARS	CA09	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	LYRA	45	\N
https://www.utahhumane.org/node/18783	https://petharbor.com/get_image.asp?RES=Detail&ID=A109742&LOCATION=UTAH	A109742	Male	Domestic Shorthair	Black	4 YEARS	CA01	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	DENNIS	46	\N
https://www.utahhumane.org/node/18751	https://petharbor.com/get_image.asp?RES=Detail&ID=A109690&LOCATION=UTAH	A109690	Male	Longhaired Rabbit	White	6 MONTHS	BB5	AVAILABLE	Looking for the perfect pair to add to the family? With ears like ours we're pretty hard to resist! We are a bonded pair & love each other very much! Do you have room in your home & heart? Meet us today!	BINX	47	\N
https://www.utahhumane.org/node/18556	https://petharbor.com/get_image.asp?RES=Detail&ID=A109525&LOCATION=UTAH	A109525	Female	Domestic Longhair	TORTIE	10 YEARS	CC14	AVAILABLE	I'll be forever yours & you'll be forever mine; I'm the "Faithful Feline"! I'll be your shadow & your very best friend. I'll frolic at your feet & we can take naps in the sunshine. As your resident Velcro cat, I'm happiest just being by your side.	CLEO	48	\N
https://www.utahhumane.org/node/17926	https://petharbor.com/get_image.asp?RES=Detail&ID=A108344&LOCATION=UTAH	A108344	Male	Domestic Shorthair	BRN TABBY	1 YEAR 8 MONTHS	CA04	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	TILLY	49	\N
https://www.utahhumane.org/node/18730	https://petharbor.com/get_image.asp?RES=Detail&ID=A108981&LOCATION=UTAH	A108981	Female	Australian Cattle Dog	BLUE TICK	7 MONTHS	DM30	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m the prefect size for cuddling!\n- I’m already crate trained!\n- I’m extremely intelligent & very athletic!\n\nWhat I’m working on:\n\n- Resource guarding: I am very greedy when it comes to my food, bones & toys.\n- Impulse control: I tend to get a little carried away during playtime & become a bit rough when I’m excited.\n\nWhat I’m looking for:\n\n- A very active household with experienced herding dog owners & no kids under the age of 13. \n- A secure yard, with supervision outside. \n- Well socialized canine companions close to my own size that can handle my rough & tumble play style.\n- Ample mental stimulation & lots of exercise are a daily necessity for me.\n- Ongoing positive reinforcement training to help with resource guarding, impulse control & general manners.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.* \n(If they are not available, you will need to make an appointment.)	CODA	50	\N
https://www.utahhumane.org/node/17864	https://petharbor.com/get_image.asp?RES=Detail&ID=A107287&LOCATION=UTAH	A107287	Female	Domestic Shorthair	BRN TABBY	6 YEARS	CA18	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	JACK	51	\N
https://www.utahhumane.org/node/18735	https://petharbor.com/get_image.asp?RES=Detail&ID=A109492&LOCATION=UTAH	A109492	Male	Domestic Shorthair	Black	12 YEARS	CC05	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	FELIX	52	\N
https://www.utahhumane.org/node/17917	https://petharbor.com/get_image.asp?RES=Detail&ID=A108195&LOCATION=UTAH	A108195	Male	Domestic Mediumhair	BLK SMOKE	4 YEARS	CC17	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	WALLACE	53	\N
https://www.utahhumane.org/node/17832	https://petharbor.com/get_image.asp?RES=Detail&ID=A103522&LOCATION=UTAH	A103522	Female	Domestic Shorthair	ORG TABBY	13 YEARS	CA09	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	SUNSET	54	\N
https://www.utahhumane.org/node/17811	https://petharbor.com/get_image.asp?RES=Detail&ID=A094628&LOCATION=UTAH	A094628	Female	Domestic Shorthair	CALICO	11 YEARS	CC44	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	LINDA	55	\N
https://www.utahhumane.org/node/18776	https://petharbor.com/get_image.asp?RES=Detail&ID=A108848&LOCATION=UTAH	A108848	Female	Siamese	FLAME PT	3 YEARS	CA11	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	SKY	56	\N
https://www.utahhumane.org/node/17896	https://petharbor.com/get_image.asp?RES=Detail&ID=A107799&LOCATION=UTAH	A107799	Female	Domestic Shorthair	BRN TABBY	2 YEARS	CA17	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	SALLY	57	\N
https://www.utahhumane.org/node/18053	https://petharbor.com/get_image.asp?RES=Detail&ID=A109391&LOCATION=UTAH	A109391	Female	Miniature Pinscher	Brown	5 YEARS	FOSTER	AVAILABLE	Larue is a happy, lively and friendly spayed Min Pin blend. She is friendly with kids and adults; she is affectionate with family. She gets along with most dogs. \nLarue will need some exercise and mental stimulation. \nLarue was fostered to recover from her spay. Her foster family notice she is housetrained; she will sit by the door when she has to go. \nLarue is also a cuddle bug. \nShe is not destructive and is not a barker.	LARUE	58	\N
https://www.utahhumane.org/node/17955	https://petharbor.com/get_image.asp?RES=Detail&ID=A108670&LOCATION=UTAH	A108670	Female	British Shorthair	Black	8 YEARS	CA13	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	TINKERBELL	59	\N
https://www.utahhumane.org/node/17862	https://petharbor.com/get_image.asp?RES=Detail&ID=A107276&LOCATION=UTAH	A107276	Female	Shorthaired Rabbit	White	8 MONTHS	BB17	AVAILABLE	With ears like these I can’t help but over hear everyone say how adorable I am! Besides my adorably good looks I’ve got a soul that’s sure to melt your heart. Come to the Humane society today to verify my real, true, loving bunny heart & soul today!	GEORGIA	60	\N
https://www.utahhumane.org/node/18775	https://petharbor.com/get_image.asp?RES=Detail&ID=A105641&LOCATION=UTAH	A105641	Male	Black Mouth Cur	Tan	6 YEARS	DA5	AVAILABLE	I am a transfer from another shelter & am ready to start my new life! \n\nI am a "special needs adoption" because I have a conformational defect in my legs. I'm told I have crooked tibias & weak ligaments in both of my knees. I need to live a relatively mellow life with less activity than some dogs & will need low impact exercise. I may require further veterinary care in the future. My adopters should be aware that I may be more of a financial commitment than an animal without special needs.\n\nAlthough my history is a mystery, I like the people & other dogs I have met here at HSU. It is unknown if I have been around cats or children before. I may or may not be fully house trained…some of us transfer animals have lived our entire lives in a loving home environment, while others have never lived indoors or been part of a family. I can tell you that we are all very eager to learn!\n\nI may need some guidance & a healthy dose of patience while I'm learning the ropes. A regular daily routine, positive reinforcement, crate training & exercise will help me learn to be the very best canine companion I can be! If you do decide to take me home, the behavior staff at HSU is here to help me succeed, so feel free to contact them if you need help!\n\nIf you think we're a match, please bring your family (including other dogs) to The Humane Society of Utah to meet me today!\n\nMy temporary home is:\n\nTHE HUMANE SOCIETY OF UTAH\n\n4242 SOUTH 300 WEST \n\nMURRAY, UTAH 84107\n\n (801) 261-2919 x227\n\nWWW.UTAHHUMANE.ORG	OBIE	61	\N
https://www.utahhumane.org/node/18006	https://petharbor.com/get_image.asp?RES=Detail&ID=A109029&LOCATION=UTAH	A109029	Female	Domestic Shorthair	BRN TABBY	2 YEARS	CA17	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	SUSIE	62	\N
https://www.utahhumane.org/node/17969	https://petharbor.com/get_image.asp?RES=Detail&ID=A108770&LOCATION=UTAH	A108770	Male	Domestic Shorthair	Black	12 YEARS	CA09	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	MILO	63	\N
https://www.utahhumane.org/node/18317	https://petharbor.com/get_image.asp?RES=Detail&ID=A109454&LOCATION=UTAH	A109454	Female	Snowshoe	LILAC PT	5 YEARS	CA03	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	MAMA	64	\N
https://www.utahhumane.org/node/17818	https://petharbor.com/get_image.asp?RES=Detail&ID=A101144&LOCATION=UTAH	A101144	Male	Domestic Shorthair	Black	10 YEARS	CB12	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	CHESTER	65	\N
https://www.utahhumane.org/node/18020	https://petharbor.com/get_image.asp?RES=Detail&ID=A109192&LOCATION=UTAH	A109192	Female	Shorthaired Rabbit	Brown	2 YEARS	BB2	AVAILABLE	I’ve got to be the cutest thing you’ve seen all day; I mean come on…… I’m small, fluffy, & sure to make anyone smile. I’m on the search for my perfect home that will spoil me silly with treats, & love! Come meet me today!	SUKI	66	\N
https://www.utahhumane.org/node/17971	https://petharbor.com/get_image.asp?RES=Detail&ID=A108793&LOCATION=UTAH	A108793	Male	Shorthaired Rabbit	White	2 YEARS	BB11	AVAILABLE	null	SNOWBALL	67	\N
https://www.utahhumane.org/node/17929	https://petharbor.com/get_image.asp?RES=Detail&ID=A108379&LOCATION=UTAH	A108379	Female	Domestic Shorthair	CRM TABBY	2 YEARS	CA01	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	BABY MAMA	68	\N
https://www.utahhumane.org/node/18582	https://petharbor.com/get_image.asp?RES=Detail&ID=A108872&LOCATION=UTAH	A108872	Female	Pit Bull Terrier	BR BRINDLE	2 YEARS	DA4	AVAILABLE	I’m a cuddle aficionado & have got a smile that’s sure to brighten your day. I’d love nothing more than a home that has another k9 pal my size that I can hang out with & adopters that will feed me seperately. I can be too rough with young kids, I'd do best in a mature home. Come fall in love today!	MUSE	69	\N
https://www.utahhumane.org/node/17804	https://petharbor.com/get_image.asp?RES=Detail&ID=A087346&LOCATION=UTAH	A087346	Male	Treeing Walker Coonhound	TRI	4 YEARS	DU11	AVAILABLE	I'm true to my breed, an energetic hound with a zest for life! I will need lots of patience and guidance as I learn the ropes in my new forever home, I'd do best in a home where someone can be there most of the time! My favorite activities include going on runs, hiking, and chasing tennis balls! Come fall in love!	DUKE	70	\N
https://www.utahhumane.org/node/18485	https://petharbor.com/get_image.asp?RES=Detail&ID=A109046&LOCATION=UTAH	A109046	Female	Siamese	LYNX PT	11 YEARS	CC01	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	FERGIE	71	\N
https://www.utahhumane.org/node/17867	https://petharbor.com/get_image.asp?RES=Detail&ID=A107337&LOCATION=UTAH	A107337	Female	Domestic Mediumhair	Black	3 YEARS	CA18	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	CHRISSY	72	\N
https://www.utahhumane.org/node/18605	https://petharbor.com/get_image.asp?RES=Detail&ID=A101705&LOCATION=UTAH	A101705	Male	Soft-Coated Wheaten Terrier	Tan	6 YEARS	DM32	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m playful & affectionate with people once I’ve had a chance to warm up!\n- I’m extremely intelligent & eager to learn!\n- I’m well-mannered & walk great on a leash!\n\nWhat I’m working on:\n\n- Social skills with other dogs: I’m uncomfortable around other canines & prefer brief encounters with mellow dogs who respect my space.\n- Basic manners: I have some training under my belt already, but there is always room for improvement!\n\nWhat I’m looking for:\n\n- An active household with experienced dog owners & no children under the age of 8. \n- A home where I can be the star of the show & won’t have to share the spotlight with another dog. \n- A home with no cats or other small animals. (I’m a little too interested in them, if you know what I mean.)\n- A new stylist! (I will require regular professional grooming to keep me comfortable & healthy.)\n- Ample mental stimulation, daily exercise & ongoing positive reinforcement training.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.* \n(If they are not available, you will need to make an appointment.)	HURLEY	73	\N
https://www.utahhumane.org/node/18734	https://petharbor.com/get_image.asp?RES=Detail&ID=A108623&LOCATION=UTAH	A108623	Male	Domestic Longhair	ORG TABBY	10 YEARS	CC24	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	CHUBY	74	\N
https://www.utahhumane.org/node/18631	https://petharbor.com/get_image.asp?RES=Detail&ID=A109534&LOCATION=UTAH	A109534	Male	Domestic Shorthair	Black	10 YEARS	CC35	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	CHUBBA	75	\N
https://www.utahhumane.org/node/18024	https://petharbor.com/get_image.asp?RES=Detail&ID=A109218&LOCATION=UTAH	A109218	Female	Domestic Shorthair	BRN TABBY	2 YEARS	CA06	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	MARA	76	\N
https://www.utahhumane.org/node/18636	https://petharbor.com/get_image.asp?RES=Detail&ID=A109584&LOCATION=UTAH	A109584	Female	Domestic Longhair	TORTIE	6 YEARS	CA05	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	PUSS	77	\N
https://www.utahhumane.org/node/17939	https://petharbor.com/get_image.asp?RES=Detail&ID=A108503&LOCATION=UTAH	A108503	Male	Domestic Shorthair	Black	12 YEARS	CC10	AVAILABLE	I'll be forever yours & you'll be forever mine; I'm the "Faithful Feline"! I'll be your shadow & your very best friend. I'll frolic at your feet & we can take naps in the sunshine. As your resident Velcro cat, I'm happiest just being by your side.	NEO	78	\N
https://www.utahhumane.org/node/18746	https://petharbor.com/get_image.asp?RES=Detail&ID=A104686&LOCATION=UTAH	A104686	Female	Shorthaired Rabbit	Black	2 YEARS	BB4	AVAILABLE	I’ve got a personality that is sure to melt your heart, sweet, petite, & handsome I’d make a great addition to any family! I’d love noting more than a human of my very own that will spoil me silly! Come meet me today!	BLACK MAGIC	79	\N
https://www.utahhumane.org/node/17800	https://petharbor.com/get_image.asp?RES=Detail&ID=A066871&LOCATION=UTAH	A066871	Male	Shorthaired Rabbit	White	4 YEARS	BB3	AVAILABLE	I'm sure to brighten any ones day with my happy go lucky personality. I'd love nothing more than a family that can make sure to spend time with me every day, provide tons of treats & of course love too! Come meet me today!	CHARLIE	80	\N
https://www.utahhumane.org/node/17839	https://petharbor.com/get_image.asp?RES=Detail&ID=A105485&LOCATION=UTAH	A105485	Male	Shorthaired Rabbit	Black	11 MONTHS	BB12	AVAILABLE	Fluffy & full of fun it's hard to believe I'm still up for adoption! I'd love a home that can provide proper housing, give me TONS of love & make sure they have enough time to spend with me daily! Call or come in today!	HIP	81	\N
https://www.utahhumane.org/node/18753	https://petharbor.com/get_image.asp?RES=Detail&ID=A109696&LOCATION=UTAH	A109696	Male	Shorthaired Rabbit	White	3 YEARS	BB14	AVAILABLE	null	BERNARD	82	\N
https://www.utahhumane.org/node/18609	https://petharbor.com/get_image.asp?RES=Detail&ID=A093703&LOCATION=UTAH	A093703	Male	English Foxhound	Red	2 YEARS	DU14	AVAILABLE	The Pets in Progress program is HSU's initiative to successfully place animals who are currently working on some behavioral challenges. Best with experienced pet owners, they require a bit of extra training as they work towards becoming the best companions they can be. At HSU, we know they are well worth the effort!\n\nWhat I have to offer:\n\n- I’m extremely intelligent & very motivated to learn, especially when there are treats involved!\n- I’m a semi-professional cuddle bug & enjoy getting attention from people of all ages!\n- I already know cues to sit & lay down.\n\nWhat I’m working on:\n\n- Chewing: I love to chew so I’ll need lots of supervision & should be given appropriate toys & treats to work on.\n- Separation Anxiety: I've been known to get pretty anxious when left alone for long periods of time... I'm what you might call a "velcro dog"! \n- Basic manners: I have some training under my belt already but there is always room for improvement!\n\nWhat I’m looking for:\n\n- Very active adopters with hound dog experience who won’t leave me alone for long hours every day. \n- Canine companions similar in size & energy level to keep me company.\n- A very secure yard with supervision outside. (I’m a bit of a Houdini)\n- Ample mental stimulation & lots of exercise are going to be a daily necessity for me.\n- Ongoing positive reinforcement training for basic manners.\n\nThink this might be the right pet for you? Talk to a staff member today!\n\n*Please note that Pets in Progress adoptions are approved by HSU’s Behavior Department.*	MICKEY	83	\N
https://www.utahhumane.org/node/17813	https://petharbor.com/get_image.asp?RES=Detail&ID=A094709&LOCATION=UTAH	A094709	Male	Domestic Shorthair	ORG TABBY	8 YEARS	CA08	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	STEVE	84	\N
https://www.utahhumane.org/node/17805	https://petharbor.com/get_image.asp?RES=Detail&ID=A088373&LOCATION=UTAH	A088373	Female	Domestic Shorthair	Black	3 YEARS	CA18	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	FLOSSIE	85	\N
https://www.utahhumane.org/node/17855	https://petharbor.com/get_image.asp?RES=Detail&ID=A107128&LOCATION=UTAH	A107128	Female	Chihuahua - Smooth Coated	Tan	7 YEARS	FOSTER	AVAILABLE	I am a transfer from another shelter & am ready to start my new life! \n\nAlthough my history is a mystery, I like the people & other dogs I have met here at HSU. It is unknown if I have been around cats or children before. I may or may not be fully house trained…some of us transfer animals have lived our entire lives in a loving home environment, while others have never lived indoors or been part of a family. I can tell you that we are all very eager to learn!\n\nI may need some guidance & a healthy dose of patience while I'm learning the ropes. A regular daily routine, positive reinforcement, crate training & exercise will help me learn to be the very best canine companion I can be! If you do decide to take me home, the behavior staff at HSU is here to help me succeed, so feel free to contact them if you need help!\n\nIf you think we're a match, please bring your family (including other dogs) to The Humane Society of Utah to meet me today!\n\nMy temporary home is:\n\nTHE HUMANE SOCIETY OF UTAH\n\n4242 SOUTH 300 WEST \n\nMURRAY, UTAH 84107\n\n (801) 261-2919 x227\n\nWWW.UTAHHUMANE.ORG	APPLE	86	\N
https://www.utahhumane.org/node/18553	https://petharbor.com/get_image.asp?RES=Detail&ID=A109501&LOCATION=UTAH	A109501	Male	Domestic Shorthair	BRN TABBY	3 YEARS	CA08	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	EAGLE	87	\N
https://www.utahhumane.org/node/18426	https://petharbor.com/get_image.asp?RES=Detail&ID=A108986&LOCATION=UTAH	A108986	Female	Domestic Shorthair	Gray	8 YEARS	CA16	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	ADDIE	88	\N
https://www.utahhumane.org/node/17937	https://petharbor.com/get_image.asp?RES=Detail&ID=A108469&LOCATION=UTAH	A108469	Female	Domestic Shorthair	CALICO	5 YEARS	CA07	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	PHOEBE	89	\N
https://www.utahhumane.org/node/17820	https://petharbor.com/get_image.asp?RES=Detail&ID=A101839&LOCATION=UTAH	A101839	Female	Domestic Shorthair	Black	3 YEARS	CA19	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	EDDIE	90	\N
https://www.utahhumane.org/node/18752	https://petharbor.com/get_image.asp?RES=Detail&ID=A109691&LOCATION=UTAH	A109691	Male	Shorthaired Rabbit	Brown	6 MONTHS	BB13	AVAILABLE	Looking for the perfect pair to add to the family? With ears like ours we're pretty hard to resist! We are a bonded pair & love each other very much! Do you have room in your home & heart? Meet us today!	BENNY	91	\N
https://www.utahhumane.org/node/17983	https://petharbor.com/get_image.asp?RES=Detail&ID=A108865&LOCATION=UTAH	A108865	Male	Domestic Shorthair	Black	3 YEARS	CA16	AVAILABLE	I like to talk. I am a very clever climber. I adore baby talk. I am very sweet and enjoy being pet, but I am also shy at first with new people. I also have some cloudiness in my eyes. if you have further questions about me or my health please contact the Humane Society of Utah Adoptions Department 801-261-2919 ext 227	MITTY	92	\N
https://www.utahhumane.org/node/18695	https://petharbor.com/get_image.asp?RES=Detail&ID=A109363&LOCATION=UTAH	A109363	Male	Shorthaired Rabbit	Black	1 YEAR	BB1	AVAILABLE	Looking for a perfect addition to add to your family! I’m sweet, petite, & handsome too! I’d love nothing more than a home to call my own, where I will be spoiled silly! Come meet me today!	LOBSTER	93	\N
https://www.utahhumane.org/node/18238	https://petharbor.com/get_image.asp?RES=Detail&ID=A109418&LOCATION=UTAH	A109418	Male	Domestic Shorthair	Black	5 YEARS	CA08	AVAILABLE	FROM THE SHADOWS OF THE NIGHT A "MYSTERY MEOW" WILL EMERGE TO STEAL YOUR HEART! MOST OF US CAME HERE WITH NO HISTORY, BUT SOME OF US ARE JUST TIMID & OUR PERSONALITIES HAVE YET TO SHINE. GIVE ME A CHANCE & I'LL SHOW YOU JUST HOW AMAZING I CAN BE!	MIDNIGHT	94	\N
https://www.utahhumane.org/node/18777	https://petharbor.com/get_image.asp?RES=Detail&ID=A109705&LOCATION=UTAH	A109705	Male	Domestic Shorthair	Black	4 YEARS	CA11	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	COLORADO	95	\N
https://www.utahhumane.org/node/17972	https://petharbor.com/get_image.asp?RES=Detail&ID=A108797&LOCATION=UTAH	A108797	Female	Shorthaired Rabbit	White	1 YEAR 7 MONTHS	BB6	AVAILABLE	null	MARGUERITE	96	\N
https://www.utahhumane.org/node/17826	https://petharbor.com/get_image.asp?RES=Detail&ID=A103087&LOCATION=UTAH	A103087	Male	Domestic Shorthair	BLK TABBY	6 YEARS	CA07	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	MR WHISKERS	97	\N
https://www.utahhumane.org/node/18001	https://petharbor.com/get_image.asp?RES=Detail&ID=A109017&LOCATION=UTAH	A109017	Female	Domestic Shorthair	TORTIE	12 YEARS	CC02	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	SEMORE	98	\N
https://www.utahhumane.org/node/18284	https://petharbor.com/get_image.asp?RES=Detail&ID=A108576&LOCATION=UTAH	A108576	Female	Pit Bull Terrier	Black	4 YEARS	FOSTER	AVAILABLE	If you don’t mind a little drool slung here & there I might be the gal for you! I’d do best with adopters that will make sure I’m given toys & food separate from K9 pals my same size & give me a consistent daily routine! Please contact the Foster Department to learn more about me and schedule a meet and greet 801-261-2919 x215.	DAJA	99	\N
https://www.utahhumane.org/node/17834	https://petharbor.com/get_image.asp?RES=Detail&ID=A104158&LOCATION=UTAH	A104158	Male	Domestic Shorthair	Gray	8 YEARS	CA18	AVAILABLE	"Couch Cat" is the name & relaxing is my game! When I'm not soaking up the sun or enjoying a snack, you'll find me cuddled up on the couch. I'll be happiest just relaxing with you & getting some love in between nap sessions!	JERRY	100	\N
https://www.utahhumane.org/node/17924	https://petharbor.com/get_image.asp?RES=Detail&ID=A108297&LOCATION=UTAH	A108297	Male	Chihuahua - Smooth Coated	Cream	3 YEARS	FOSTER	AVAILABLE	I needed some extra TLC when I arrived, so I went to foster care. The foster department knows the most about me & would love to tell you everything. Please call or come in today to learn more about me!	BG	101	\N
https://www.utahhumane.org/node/17950	https://petharbor.com/get_image.asp?RES=Detail&ID=A108621&LOCATION=UTAH	A108621	Female	Domestic Shorthair	Black	4 YEARS	CA11	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	JOKER	102	\N
https://www.utahhumane.org/node/17987	https://petharbor.com/get_image.asp?RES=Detail&ID=A108903&LOCATION=UTAH	A108903	Male	Domestic Shorthair	Blue	2 YEARS	CA03	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	BUNNY	103	\N
https://www.utahhumane.org/node/18482	https://petharbor.com/get_image.asp?RES=Detail&ID=A101612&LOCATION=UTAH	A101612	Female	Domestic Shorthair	BRN TABBY	4 YEARS	CA18	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	BOO	104	\N
https://www.utahhumane.org/node/18447	https://petharbor.com/get_image.asp?RES=Detail&ID=A109131&LOCATION=UTAH	A109131	Male	Shorthaired Rabbit	Brown	3 YEARS	BB16	AVAILABLE	null	RAGNAR	105	\N
https://www.utahhumane.org/node/18005	https://petharbor.com/get_image.asp?RES=Detail&ID=A109028&LOCATION=UTAH	A109028	Female	Domestic Shorthair	BRN TABBY	6 YEARS	CA19	AVAILABLE	From the shadows of the night a "Mystery Meow" will emerge to steal your heart! Most of us came here with no history, but some of us are just timid & our personalities have yet to shine. Give me a chance & I'll show you just how amazing I can be!	TOOTSIE	106	\N
https://www.utahhumane.org/node/17854	https://petharbor.com/get_image.asp?RES=Detail&ID=A107011&LOCATION=UTAH	A107011	Male	Shorthaired Rabbit	White	1 YEAR 5 MONTHS	BB7	AVAILABLE	Looking for a perfect addition to add to your family! I’m sweet, petite, & handsome too! I’d love nothing more than a home to call my own, where I will be spoiled silly! Come meet me today!	POTATO	107	\N
https://www.utahhumane.org/node/18385	https://petharbor.com/get_image.asp?RES=Detail&ID=A102677&LOCATION=UTAH	A102677	Male	Chihuahua - Smooth Coated	White	6 YEARS	SD5	AVAILABLE	I may be small but I pack a lot of personality into this tiny furry body! I can be a shy guy at first, but once I get to know you we'll be best friends for life! Hints to make me love you, save a spot on the couch, give me yummy treats, & give me a forever home to live out the rest of my days. I'll need a feline free home & someone who can teach me the ropes of living indoors.	THOMAS	108	\N
https://www.utahhumane.org/node/18547	https://petharbor.com/get_image.asp?RES=Detail&ID=A098387&LOCATION=UTAH	A098387	Female	Domestic Longhair	BRN TABBY	6 YEARS	CA07	AVAILABLE	Never fear! "Frisky Feline" is here! Leaping from the highest heights, pouncing from rooftops & saving my humans from the evil red dot! Being a hero is hard work, but someone has to do it! I need plenty of play time to be the best friend I can be!	TINK	109	\N
https://www.utahhumane.org/node/18781	https://petharbor.com/get_image.asp?RES=Detail&ID=A109716&LOCATION=UTAH	A109716	Male	Domestic Shorthair	BRN TABBY	4 YEARS	CA02	AVAILABLE	The saying goes "those who have a cat have no need for sculpture." I'm a confident cat who wants to be the ruler of your kingdom. I love to be loved, but on my terms. As a "Holier Than Meow", my favorite past time is simply being visually admired.	BILLY BOB	110	\N
	https://facebook.github.io/react/img/logo_og.png		Sd	Sd	Sdsd	5	\N	\N	Sdf	Jon\t	111	114537902401642
	https://facebook.github.io/react/img/logo_og.png		Sd	Sd	Sdsd	5	\N	\N	Sdf	Jon\t	112	114537902401642
							\N	\N			113	114537902401642
\.


--
-- Name: pet_data_uniq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('pet_data_uniq_id_seq', 113, true);


--
-- Data for Name: seen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY seen (id, user_id, liked, swipee) FROM stdin;
1001	6	t	1820158758201519
1004	10154319532907816	t	19
1005	10154319532907816	f	20
1006	10154319532907816	t	21
1007	10154319532907816	f	22
1008	10154319532907816	t	23
1009	10154319532907816	f	24
1010	10154319532907816	t	25
1011	10154319532907816	f	26
1012	10154319532907816	t	27
974	10154319532907816	f	1
975	10154319532907816	t	2
976	10154319532907816	f	3
977	10154319532907816	t	4
978	10154319532907816	t	5
979	10154319532907816	f	6
980	10154319532907816	t	7
981	10154319532907816	t	1
982	10154319532907816	f	2
983	10154319532907816	t	8
984	10154319532907816	f	9
985	10154319532907816	t	10
986	10154319532907816	f	11
987	10154319532907816	t	12
988	10154319532907816	f	13
989	10154319532907816	t	14
990	10154319532907816	f	15
991	10154319532907816	t	16
992	10154319532907816	f	17
993	10154319532907816	t	18
1002	6	f	114537902401642
1013	68	t	1820158758201519
994	114537902401642	t	1
995	114537902401642	f	2
996	114537902401642	t	3
997	114537902401642	t	1
998	114537902401642	t	1
999	114537902401642	t	4
1000	114537902401642	t	5
1003	6	t	10154059861557924
\.


--
-- Name: seen_table_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('seen_table_id_seq', 1013, true);


--
-- Data for Name: user_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY user_table (id, email, description, age, gender, fb_img, firstname, lastname, fid) FROM stdin;
10	evies.gift@gmail.com	\N	\N	male	https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15665602_1787646318119430_5334605954449934687_n.jpg?oh=e455c7244272d9a28da4619293fdb696&oe=593C272D	GarrettandAlyssa	Duff	1820158758201519
11	jacob.lemperledev@gmail.com	\N	\N	male	https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50/p50x50/10354686_10150004552801856_220367501106153455_n.jpg?oh=0bb129c4bacce2fd26d99c098ed48ce3&oe=5938E12F	Jacob	Lemperle	114537902401642
12	bjack13@gmail.com	\N	\N	male	https://scontent.xx.fbcdn.net/v/t1.0-1/c12.0.50.50/p50x50/10247314_10151916899322924_2626244486341673535_n.jpg?oh=7f6e1ee3a8808a10d3e46ce7ed44d47c&oe=59739DDE	Bryan	Jackson	10154059861557924
21	lowjonc@gmail.com	\N	\N	male	https://scontent.xx.fbcdn.net/v/t1.0-1/c37.37.465.465/s50x50/255640_10150126795982816_7574770_n.jpg?oh=6cd914013d0ccbf58575ec1755f922ad&oe=5935169F	Jon	Low	10154319532907816
\.


--
-- Name: user_table_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_table_id_seq', 21, true);


--
-- Name: seen pk_seen_table; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY seen
    ADD CONSTRAINT pk_seen_table PRIMARY KEY (id);


--
-- Name: user_table pk_user_table; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_table
    ADD CONSTRAINT pk_user_table PRIMARY KEY (id);


--
-- Name: user_table user_table_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_table
    ADD CONSTRAINT user_table_email_key UNIQUE (email);


--
-- PostgreSQL database dump complete
--

