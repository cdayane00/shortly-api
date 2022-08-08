--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Debian 14.4-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: udo7leof39qeug
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO udo7leof39qeug;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: ctckyhnpwxhvxn
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "deletedAt" timestamp without time zone
);


ALTER TABLE public.urls OWNER TO ctckyhnpwxhvxn;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: ctckyhnpwxhvxn
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO ctckyhnpwxhvxn;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: ctckyhnpwxhvxn
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email text NOT NULL,
    password character varying(100) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO ctckyhnpwxhvxn;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ctckyhnpwxhvxn
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ctckyhnpwxhvxn;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: ctckyhnpwxhvxn
--

COPY public.urls (id, url, "shortUrl", "visitCount", "userId", "createdAt", "deletedAt") FROM stdin;
2	https://app.slack.com/client	1lnF8XZ9	0	2	2022-08-04 15:21:31.056417	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ctckyhnpwxhvxn
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	carla	c@gmail.com	$2b$10$RYiPVkniY6l5Wm.vFhBy2uwPte1ssbSWa.X7i01wy7rSXxgG265Lm	2022-08-03 19:53:39.852458
2	carla2	c2@gmail.com	$2b$10$WhDf7FK7UKn2E4sCquloquuMfsqaE4cdd2Dmk11Y7cJXxSS8nIBaG	2022-08-03 19:53:58.436048
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctckyhnpwxhvxn
--

SELECT pg_catalog.setval('public.urls_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ctckyhnpwxhvxn
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ctckyhnpwxhvxn
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: udo7leof39qeug
--

GRANT USAGE ON SCHEMA heroku_ext TO ctckyhnpwxhvxn;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ctckyhnpwxhvxn
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO ctckyhnpwxhvxn;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO ctckyhnpwxhvxn;


--
-- PostgreSQL database dump complete
--

