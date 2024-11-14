--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2024-11-13 21:53:19

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
-- TOC entry 3349 (class 0 OID 16405)
-- Dependencies: 215
-- Data for Name: Categoria; Type: TABLE DATA; Schema: public; Owner: peliculas
--

INSERT INTO public."Categoria" VALUES (1, 'Comedia');
INSERT INTO public."Categoria" VALUES (2, 'Acción');
INSERT INTO public."Categoria" VALUES (3, 'Drama');
INSERT INTO public."Categoria" VALUES (4, 'Documental');


--
-- TOC entry 3355 (class 0 OID 16435)
-- Dependencies: 221
-- Data for Name: Cine; Type: TABLE DATA; Schema: public; Owner: peliculas
--

INSERT INTO public."Cine" VALUES (1, 'Cineplanet', 'bla bla bla 1');
INSERT INTO public."Cine" VALUES (2, 'Cinemark', 'bla bla bla 2');


--
-- TOC entry 3353 (class 0 OID 16421)
-- Dependencies: 219
-- Data for Name: Pelicula; Type: TABLE DATA; Schema: public; Owner: peliculas
--

INSERT INTO public."Pelicula" VALUES (1, 'Robot Salvaje', 'https://es.web.img3.acsta.net/c_310_420/pictures/24/03/05/17/59/4800434.jpg', 1);
INSERT INTO public."Pelicula" VALUES (3, 'Paddington en Perú', 'https://tnews.com.pe/wp-content/uploads/2024/06/Paddington120624_2.jpg', 1);
INSERT INTO public."Pelicula" VALUES (2, 'Gladiator II', 'https://es.web.img2.acsta.net/c_310_420/img/93/23/9323a23d3967be8808ac146b4c138de3.jpg', 2);


--
-- TOC entry 3357 (class 0 OID 16442)
-- Dependencies: 223
-- Data for Name: CineXPelicula; Type: TABLE DATA; Schema: public; Owner: peliculas
--

INSERT INTO public."CineXPelicula" VALUES (1, 1, 1);
INSERT INTO public."CineXPelicula" VALUES (2, 2, 1);
INSERT INTO public."CineXPelicula" VALUES (3, 1, 2);


--
-- TOC entry 3351 (class 0 OID 16414)
-- Dependencies: 217
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: peliculas
--

INSERT INTO public."Usuario" VALUES (1, 'Pepito', 'pepito', '123');
INSERT INTO public."Usuario" VALUES (2, 'Sebastian', 'sebastian', 'aaa');


--
-- TOC entry 3363 (class 0 OID 0)
-- Dependencies: 214
-- Name: Categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peliculas
--

SELECT pg_catalog.setval('public."Categoria_id_seq"', 4, true);


--
-- TOC entry 3364 (class 0 OID 0)
-- Dependencies: 222
-- Name: CineXPelicula_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peliculas
--

SELECT pg_catalog.setval('public."CineXPelicula_id_seq"', 3, true);


--
-- TOC entry 3365 (class 0 OID 0)
-- Dependencies: 220
-- Name: Cine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peliculas
--

SELECT pg_catalog.setval('public."Cine_id_seq"', 2, true);


--
-- TOC entry 3366 (class 0 OID 0)
-- Dependencies: 218
-- Name: Pelicula_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peliculas
--

SELECT pg_catalog.setval('public."Pelicula_id_seq"', 3, true);


--
-- TOC entry 3367 (class 0 OID 0)
-- Dependencies: 216
-- Name: Usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: peliculas
--

SELECT pg_catalog.setval('public."Usuario_id_seq"', 2, true);


-- Completed on 2024-11-13 21:53:19

--
-- PostgreSQL database dump complete
--

