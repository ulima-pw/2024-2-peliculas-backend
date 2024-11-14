--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2024-11-13 21:51:39

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16405)
-- Name: Categoria; Type: TABLE; Schema: public; Owner: peliculas
--

CREATE TABLE public."Categoria" (
    id integer NOT NULL,
    nombre character varying
);


ALTER TABLE public."Categoria" OWNER TO peliculas;

--
-- TOC entry 214 (class 1259 OID 16404)
-- Name: Categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: peliculas
--

CREATE SEQUENCE public."Categoria_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Categoria_id_seq" OWNER TO peliculas;

--
-- TOC entry 3358 (class 0 OID 0)
-- Dependencies: 214
-- Name: Categoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peliculas
--

ALTER SEQUENCE public."Categoria_id_seq" OWNED BY public."Categoria".id;


--
-- TOC entry 221 (class 1259 OID 16435)
-- Name: Cine; Type: TABLE; Schema: public; Owner: peliculas
--

CREATE TABLE public."Cine" (
    id integer NOT NULL,
    nombre character varying(50),
    direccion character varying(150)
);


ALTER TABLE public."Cine" OWNER TO peliculas;

--
-- TOC entry 223 (class 1259 OID 16442)
-- Name: CineXPelicula; Type: TABLE; Schema: public; Owner: peliculas
--

CREATE TABLE public."CineXPelicula" (
    id integer NOT NULL,
    cine_id integer,
    pelicula_id integer
);


ALTER TABLE public."CineXPelicula" OWNER TO peliculas;

--
-- TOC entry 222 (class 1259 OID 16441)
-- Name: CineXPelicula_id_seq; Type: SEQUENCE; Schema: public; Owner: peliculas
--

CREATE SEQUENCE public."CineXPelicula_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CineXPelicula_id_seq" OWNER TO peliculas;

--
-- TOC entry 3359 (class 0 OID 0)
-- Dependencies: 222
-- Name: CineXPelicula_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peliculas
--

ALTER SEQUENCE public."CineXPelicula_id_seq" OWNED BY public."CineXPelicula".id;


--
-- TOC entry 220 (class 1259 OID 16434)
-- Name: Cine_id_seq; Type: SEQUENCE; Schema: public; Owner: peliculas
--

CREATE SEQUENCE public."Cine_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Cine_id_seq" OWNER TO peliculas;

--
-- TOC entry 3360 (class 0 OID 0)
-- Dependencies: 220
-- Name: Cine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peliculas
--

ALTER SEQUENCE public."Cine_id_seq" OWNED BY public."Cine".id;


--
-- TOC entry 219 (class 1259 OID 16421)
-- Name: Pelicula; Type: TABLE; Schema: public; Owner: peliculas
--

CREATE TABLE public."Pelicula" (
    id integer NOT NULL,
    nombre character varying(50),
    url character varying(2048),
    categoria_id integer
);


ALTER TABLE public."Pelicula" OWNER TO peliculas;

--
-- TOC entry 218 (class 1259 OID 16420)
-- Name: Pelicula_id_seq; Type: SEQUENCE; Schema: public; Owner: peliculas
--

CREATE SEQUENCE public."Pelicula_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Pelicula_id_seq" OWNER TO peliculas;

--
-- TOC entry 3361 (class 0 OID 0)
-- Dependencies: 218
-- Name: Pelicula_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peliculas
--

ALTER SEQUENCE public."Pelicula_id_seq" OWNED BY public."Pelicula".id;


--
-- TOC entry 217 (class 1259 OID 16414)
-- Name: Usuario; Type: TABLE; Schema: public; Owner: peliculas
--

CREATE TABLE public."Usuario" (
    id integer NOT NULL,
    nombre character varying(100),
    usuario character varying(20),
    password character varying(20)
);


ALTER TABLE public."Usuario" OWNER TO peliculas;

--
-- TOC entry 216 (class 1259 OID 16413)
-- Name: Usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: peliculas
--

CREATE SEQUENCE public."Usuario_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Usuario_id_seq" OWNER TO peliculas;

--
-- TOC entry 3362 (class 0 OID 0)
-- Dependencies: 216
-- Name: Usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: peliculas
--

ALTER SEQUENCE public."Usuario_id_seq" OWNED BY public."Usuario".id;


--
-- TOC entry 3193 (class 2604 OID 16408)
-- Name: Categoria id; Type: DEFAULT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Categoria" ALTER COLUMN id SET DEFAULT nextval('public."Categoria_id_seq"'::regclass);


--
-- TOC entry 3196 (class 2604 OID 16438)
-- Name: Cine id; Type: DEFAULT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Cine" ALTER COLUMN id SET DEFAULT nextval('public."Cine_id_seq"'::regclass);


--
-- TOC entry 3197 (class 2604 OID 16445)
-- Name: CineXPelicula id; Type: DEFAULT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."CineXPelicula" ALTER COLUMN id SET DEFAULT nextval('public."CineXPelicula_id_seq"'::regclass);


--
-- TOC entry 3195 (class 2604 OID 16424)
-- Name: Pelicula id; Type: DEFAULT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Pelicula" ALTER COLUMN id SET DEFAULT nextval('public."Pelicula_id_seq"'::regclass);


--
-- TOC entry 3194 (class 2604 OID 16417)
-- Name: Usuario id; Type: DEFAULT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Usuario" ALTER COLUMN id SET DEFAULT nextval('public."Usuario_id_seq"'::regclass);


--
-- TOC entry 3199 (class 2606 OID 16412)
-- Name: Categoria Categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Categoria"
    ADD CONSTRAINT "Categoria_pkey" PRIMARY KEY (id);


--
-- TOC entry 3207 (class 2606 OID 16447)
-- Name: CineXPelicula CineXPelicula_pkey; Type: CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."CineXPelicula"
    ADD CONSTRAINT "CineXPelicula_pkey" PRIMARY KEY (id);


--
-- TOC entry 3205 (class 2606 OID 16440)
-- Name: Cine Cine_pkey; Type: CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Cine"
    ADD CONSTRAINT "Cine_pkey" PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 16428)
-- Name: Pelicula Pelicula_pkey; Type: CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Pelicula"
    ADD CONSTRAINT "Pelicula_pkey" PRIMARY KEY (id);


--
-- TOC entry 3201 (class 2606 OID 16419)
-- Name: Usuario Usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (id);


--
-- TOC entry 3209 (class 2606 OID 16453)
-- Name: CineXPelicula FK_CINEPELICULA_CINE; Type: FK CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."CineXPelicula"
    ADD CONSTRAINT "FK_CINEPELICULA_CINE" FOREIGN KEY (cine_id) REFERENCES public."Cine"(id);


--
-- TOC entry 3210 (class 2606 OID 16448)
-- Name: CineXPelicula FK_CINEPELICULA_PELICULA; Type: FK CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."CineXPelicula"
    ADD CONSTRAINT "FK_CINEPELICULA_PELICULA" FOREIGN KEY (pelicula_id) REFERENCES public."Pelicula"(id);


--
-- TOC entry 3208 (class 2606 OID 16429)
-- Name: Pelicula FK_PELICULA_CATEGORIA; Type: FK CONSTRAINT; Schema: public; Owner: peliculas
--

ALTER TABLE ONLY public."Pelicula"
    ADD CONSTRAINT "FK_PELICULA_CATEGORIA" FOREIGN KEY (categoria_id) REFERENCES public."Categoria"(id) NOT VALID;


-- Completed on 2024-11-13 21:51:39

--
-- PostgreSQL database dump complete
--

