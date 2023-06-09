PGDMP                          {           eval_m7    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    42615    eval_m7    DATABASE     i   CREATE DATABASE eval_m7 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE eval_m7;
                postgres    false            �            1259    42631    paises    TABLE     �   CREATE TABLE public.paises (
    nombre character varying(200) NOT NULL,
    continente character varying(200),
    poblacion integer
);
    DROP TABLE public.paises;
       public         heap    postgres    false            �            1259    42646    paises_data_web    TABLE     h   CREATE TABLE public.paises_data_web (
    nombre_pais character varying NOT NULL,
    accion integer
);
 #   DROP TABLE public.paises_data_web;
       public         heap    postgres    false            �            1259    42636 
   paises_pib    TABLE     {   CREATE TABLE public.paises_pib (
    nombre character varying(200) NOT NULL,
    pib_2019 integer,
    pib_2020 integer
);
    DROP TABLE public.paises_pib;
       public         heap    postgres    false                      0    42631    paises 
   TABLE DATA           ?   COPY public.paises (nombre, continente, poblacion) FROM stdin;
    public          postgres    false    214   $                 0    42646    paises_data_web 
   TABLE DATA           >   COPY public.paises_data_web (nombre_pais, accion) FROM stdin;
    public          postgres    false    216                    0    42636 
   paises_pib 
   TABLE DATA           @   COPY public.paises_pib (nombre, pib_2019, pib_2020) FROM stdin;
    public          postgres    false    215   b       {           2606    42652 $   paises_data_web paises_data_web_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.paises_data_web
    ADD CONSTRAINT paises_data_web_pkey PRIMARY KEY (nombre_pais);
 N   ALTER TABLE ONLY public.paises_data_web DROP CONSTRAINT paises_data_web_pkey;
       public            postgres    false    216            y           2606    42640    paises_pib paises_pib_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.paises_pib
    ADD CONSTRAINT paises_pib_pkey PRIMARY KEY (nombre);
 D   ALTER TABLE ONLY public.paises_pib DROP CONSTRAINT paises_pib_pkey;
       public            postgres    false    215            w           2606    42635    paises paises_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.paises
    ADD CONSTRAINT paises_pkey PRIMARY KEY (nombre);
 <   ALTER TABLE ONLY public.paises DROP CONSTRAINT paises_pkey;
       public            postgres    false    214            |           2606    42641    paises_pib fk_paises    FK CONSTRAINT     w   ALTER TABLE ONLY public.paises_pib
    ADD CONSTRAINT fk_paises FOREIGN KEY (nombre) REFERENCES public.paises(nombre);
 >   ALTER TABLE ONLY public.paises_pib DROP CONSTRAINT fk_paises;
       public          postgres    false    3447    214    215               �   x�E�KN�0���)8��:�eA�6�3�HmR�iĭ8#�zc��������%��;��B�����̒�
�S.~l��6d�3��z�Cm�0���)I�i�xj{��݅��$T�&?sܹUػj����a�
���X����_m�7J:gn?��[��D���%�Υս#Mp�ySe$aȣ�����Б1ޮ��M]�         F   x��)�H�M*-J��4�
.ͬJ�~�E��� �kqIbJ~�Bh^&�
x��$楀��2�@�L;F��� �<�         �   x��MJA�שSx����2��wn�S�=UC�4��3x1Ӯ_�K��k9}��؉���-��Z���� J!D��>�eT6���j�~�ȱ/7o������}�v�-�ۤ���6X�"%�P����I�B�C��3̣�{#�nPbᶮ���Y��خ���S!���'�\���S�:b8��ϲԉ��'9h�<�v�M(Ã�&z�c� �|C     