CREATE SCHEMA IF NOT EXISTS "proyecto_tesis";

CREATE SEQUENCE IF NOT EXISTS seguimientos_id_seq;
CREATE SEQUENCE IF NOT EXISTS niveles_usuario_id_seq;
CREATE SEQUENCE IF NOT EXISTS usuario_objetivos_id_seq;
CREATE SEQUENCE IF NOT EXISTS productos_id_seq;
CREATE SEQUENCE IF NOT EXISTS usuarios_id_seq;
CREATE SEQUENCE IF NOT EXISTS marcas_id_seq;
CREATE SEQUENCE IF NOT EXISTS logs_sistema_id_seq;
CREATE SEQUENCE IF NOT EXISTS comentarios_id_seq;
CREATE SEQUENCE IF NOT EXISTS suscripciones_id_seq;
CREATE SEQUENCE IF NOT EXISTS temporadas_id_seq;
CREATE SEQUENCE IF NOT EXISTS producto_locales_id_seq;
CREATE SEQUENCE IF NOT EXISTS likes_id_seq;
CREATE SEQUENCE IF NOT EXISTS objetivos_id_seq;
CREATE SEQUENCE IF NOT EXISTS validaciones_qr_id_seq;
CREATE SEQUENCE IF NOT EXISTS ubicaciones_id_seq;
CREATE SEQUENCE IF NOT EXISTS recompensas_obtenidas_id_seq;
CREATE SEQUENCE IF NOT EXISTS tokens_qr_id_seq;
CREATE SEQUENCE IF NOT EXISTS publicaciones_id_seq;
CREATE SEQUENCE IF NOT EXISTS producto_envases_id_seq;
CREATE SEQUENCE IF NOT EXISTS roles_id_seq;
CREATE SEQUENCE IF NOT EXISTS locales_id_seq;

CREATE TABLE "proyecto_tesis"."referencias" (
    "id" integer NOT NULL,
    "tipo_referencia_id" integer,
    "valor" character varying,
    "descripcion" text,
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."seguimientos" (
    "id" integer NOT NULL DEFAULT nextval('seguimientos_id_seq'::regclass),
    "seguidor_id" integer NOT NULL,
    "seguido_id" integer NOT NULL,
    "fecha_seguimiento" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "estado" character varying(20) DEFAULT '''activo''::character varying',
    PRIMARY KEY ("id")
);


CREATE INDEX "seguimientos_idx_seguimientos_seguidor"
ON "proyecto_tesis"."seguimientos" ("seguidor_id");

CREATE INDEX "seguimientos_idx_seguimientos_seguido"
ON "proyecto_tesis"."seguimientos" ("seguido_id");

CREATE UNIQUE INDEX "seguimientos_seguimientos_seguidor_id_seguido_id_key"
ON "proyecto_tesis"."seguimientos" ("seguidor_id", "seguido_id");


CREATE TABLE "proyecto_tesis"."niveles_usuario" (
    "id" integer NOT NULL DEFAULT nextval('niveles_usuario_id_seq'::regclass),
    "nombre" character varying(50) NOT NULL UNIQUE,
    "puntos_minimos" integer NOT NULL,
    "puntos_maximos" integer,
    "descripcion" text,
    "icono" text,
    "orden" integer NOT NULL UNIQUE,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "niveles_usuario_niveles_usuario_nombre_key"
ON "proyecto_tesis"."niveles_usuario" ("nombre");

CREATE UNIQUE INDEX "niveles_usuario_niveles_usuario_orden_key"
ON "proyecto_tesis"."niveles_usuario" ("orden");


CREATE TABLE "proyecto_tesis"."usuario_objetivos" (
    "id" integer NOT NULL DEFAULT nextval('usuario_objetivos_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "objetivo_id" integer NOT NULL,
    "fecha_creacion" timestamp,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "usuario_objetivos_usuario_id_objetivo_id_key"
ON "proyecto_tesis"."usuario_objetivos" ("usuario_id", "objetivo_id");

CREATE INDEX "usuario_objetivos_idx_usuario_objetivos_usuario"
ON "proyecto_tesis"."usuario_objetivos" ("usuario_id");

CREATE INDEX "usuario_objetivos_idx_usuario_objetivos_objetivo"
ON "proyecto_tesis"."usuario_objetivos" ("objetivo_id");


CREATE TABLE "proyecto_tesis"."productos" (
    "id" integer NOT NULL DEFAULT nextval('productos_id_seq'::regclass),
    "marca_id" integer NOT NULL,
    "nombre" character varying(150) NOT NULL,
    "descripcion" text,
    "estilo" character varying,
    "ibu" integer,
    "grado_alcoholico" numeric(3, 1),
    "color_descripcion" text,
    "maridaje" text,
    "imagen_etiqueta" text,
    "imagen_producto" text,
    "estado" character varying(20) DEFAULT '''activo''::character varying',
    "fecha_creacion" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "productos_productos_marca_id_nombre_key"
ON "proyecto_tesis"."productos" ("marca_id", "nombre");

CREATE INDEX "productos_idx_productos_estado"
ON "proyecto_tesis"."productos" ("estado");

CREATE INDEX "productos_idx_productos_marca"
ON "proyecto_tesis"."productos" ("marca_id");


CREATE TABLE "proyecto_tesis"."usuarios" (
    "id" integer NOT NULL DEFAULT nextval('usuarios_id_seq'::regclass),
    "rol_id" integer,
    "nivel_id" integer,
    "solicitud_id" integer,
    "email" character varying(255) NOT NULL UNIQUE,
    "password_hash" character varying(255) NOT NULL,
    "nombre" character varying(100) NOT NULL,
    "nombre_usuario" character varying(50) UNIQUE,
    "foto_perfil" text,
    "descripcion" text,
    "telefono" character varying(20),
    "fecha_nacimiento" date,
    "estado" character varying(20) DEFAULT '''activo''::character varying',
    "puntos_totales" integer DEFAULT 0,
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "puntos" integer,
    PRIMARY KEY ("id")
);


CREATE INDEX "usuarios_idx_usuarios_estado"
ON "proyecto_tesis"."usuarios" ("estado");

CREATE UNIQUE INDEX "usuarios_usuarios_email_key"
ON "proyecto_tesis"."usuarios" ("email");

CREATE INDEX "usuarios_idx_usuarios_email"
ON "proyecto_tesis"."usuarios" ("email");

CREATE INDEX "usuarios_idx_usuarios_nombre_usuario"
ON "proyecto_tesis"."usuarios" ("nombre_usuario");

CREATE UNIQUE INDEX "usuarios_usuarios_nombre_usuario_key"
ON "proyecto_tesis"."usuarios" ("nombre_usuario");


CREATE TABLE "proyecto_tesis"."marcas" (
    "id" integer NOT NULL DEFAULT nextval('marcas_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "nombre_comercial" character varying(150) NOT NULL,
    "descripcion" text,
    "sitio_web" character varying(255),
    "año_fundacion" integer,
    "logo" text,
    "estado" character varying(20) DEFAULT '''activa''::character varying',
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."logs_sistema" (
    "id" integer NOT NULL DEFAULT nextval('logs_sistema_id_seq'::regclass),
    "usuario_id" integer,
    "accion" character varying(100) NOT NULL,
    "tabla_afectada" character varying(50),
    "registro_id" integer,
    "datos_anteriores" jsonb,
    "datos_nuevos" jsonb,
    "ip_address" inet,
    "user_agent" text,
    "timestamp_accion" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "nivel" character varying(20) DEFAULT '''info''::character varying',
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."comentarios" (
    "id" integer NOT NULL DEFAULT nextval('comentarios_id_seq'::regclass),
    "publicacion_id" integer NOT NULL,
    "autor_id" integer NOT NULL,
    "contenido" text NOT NULL,
    "comentario_padre_id" integer,
    "estado" character varying(20) DEFAULT '''activo''::character varying',
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."suscripciones" (
    "id" integer NOT NULL DEFAULT nextval('suscripciones_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "fecha_inicio" timestamp without time zone NOT NULL,
    "fecha_fin" timestamp without time zone NOT NULL,
    "precio" numeric(10, 2) NOT NULL,
    "estado" character varying(20) DEFAULT '''activa''::character varying',
    "objetivos_restantes" integer DEFAULT 15,
    "metodo_pago" character varying(50),
    "transaccion_id" character varying(100),
    "auto_renovar" boolean DEFAULT true,
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE INDEX "suscripciones_idx_suscripciones_estado_fecha"
ON "proyecto_tesis"."suscripciones" ("estado", "fecha_fin");

CREATE INDEX "suscripciones_idx_suscripciones_usuario"
ON "proyecto_tesis"."suscripciones" ("usuario_id");


CREATE TABLE "proyecto_tesis"."temporadas" (
    "id" integer NOT NULL DEFAULT nextval('temporadas_id_seq'::regclass),
    "local_id" integer NOT NULL,
    "nombre" character varying(150) NOT NULL,
    "descripcion" text,
    "fecha_inicio" date NOT NULL,
    "fecha_fin" date NOT NULL,
    "estado" character varying(20) DEFAULT '''programada''::character varying',
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE INDEX "temporadas_idx_temporadas_local"
ON "proyecto_tesis"."temporadas" ("local_id");

CREATE UNIQUE INDEX "temporadas_temporadas_local_id_nombre_key"
ON "proyecto_tesis"."temporadas" ("local_id", "nombre");

CREATE INDEX "temporadas_idx_temporadas_fechas"
ON "proyecto_tesis"."temporadas" ("fecha_inicio", "fecha_fin");

CREATE INDEX "temporadas_idx_temporadas_estado"
ON "proyecto_tesis"."temporadas" ("estado");


CREATE TABLE "proyecto_tesis"."producto_locales" (
    "id" integer NOT NULL DEFAULT nextval('producto_locales_id_seq'::regclass),
    "producto_id" integer NOT NULL,
    "local_id" integer NOT NULL,
    "marca_id" integer NOT NULL,
    "fecha_asignacion" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "estado" character varying(20) DEFAULT '''activa''::character varying',
    "stock_disponible" boolean DEFAULT true,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "producto_locales_producto_locales_producto_id_local_id_key"
ON "proyecto_tesis"."producto_locales" ("producto_id", "local_id");

CREATE INDEX "producto_locales_idx_producto_locales_local"
ON "proyecto_tesis"."producto_locales" ("local_id");

CREATE INDEX "producto_locales_idx_producto_locales_producto"
ON "proyecto_tesis"."producto_locales" ("producto_id");


CREATE TABLE "proyecto_tesis"."likes" (
    "id" integer NOT NULL DEFAULT nextval('likes_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "publicacion_id" integer,
    "comentario_id" integer,
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "likes_likes_usuario_id_publicacion_id_key"
ON "proyecto_tesis"."likes" ("usuario_id", "publicacion_id");

CREATE UNIQUE INDEX "likes_likes_usuario_id_comentario_id_key"
ON "proyecto_tesis"."likes" ("usuario_id", "comentario_id");


CREATE TABLE "proyecto_tesis"."objetivos" (
    "id" integer NOT NULL DEFAULT nextval('objetivos_id_seq'::regclass),
    "temporada_id" integer NOT NULL,
    "local_id" integer NOT NULL,
    "marca_id" integer NOT NULL,
    "nombre" character varying(150) NOT NULL,
    "descripcion" text,
    "recompensa" text NOT NULL,
    "estado" character varying(20) DEFAULT '''activo''::character varying',
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE INDEX "objetivos_idx_objetivos_temporada"
ON "proyecto_tesis"."objetivos" ("temporada_id");

CREATE INDEX "objetivos_idx_objetivos_local"
ON "proyecto_tesis"."objetivos" ("local_id");

CREATE UNIQUE INDEX "objetivos_objetivos_temporada_id_producto_id_key"
ON "proyecto_tesis"."objetivos" ("temporada_id");


CREATE TABLE "proyecto_tesis"."validaciones_qr" (
    "id" integer NOT NULL DEFAULT nextval('validaciones_qr_id_seq'::regclass),
    "usuario_objetivo_id" integer NOT NULL,
    "local_id" integer NOT NULL,
    "validado_por" integer NOT NULL,
    "token_qr" character varying(255) NOT NULL,
    "timestamp_validacion" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "progreso_anterior" integer NOT NULL,
    "progreso_nuevo" integer NOT NULL,
    PRIMARY KEY ("id")
);


CREATE INDEX "validaciones_qr_idx_validaciones_qr_usuario_objetivo"
ON "proyecto_tesis"."validaciones_qr" ("usuario_objetivo_id");

CREATE INDEX "validaciones_qr_idx_validaciones_qr_local"
ON "proyecto_tesis"."validaciones_qr" ("local_id");


CREATE TABLE "proyecto_tesis"."ubicaciones" (
    "id" integer NOT NULL DEFAULT nextval('ubicaciones_id_seq'::regclass),
    "entidad_tipo" character varying(20) NOT NULL,
    "entidad_id" integer NOT NULL,
    "nombre" character varying(150),
    "direccion_completa" text NOT NULL,
    "latitud" numeric(10, 8),
    "longitud" numeric(11, 8),
    "ciudad" character varying(100),
    "departamento" character varying(100),
    "pais" character varying(100) DEFAULT '''Paraguay''::character varying',
    "codigo_postal" character varying(10),
    "es_principal" boolean DEFAULT false,
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE INDEX "ubicaciones_idx_ubicaciones_entidad"
ON "proyecto_tesis"."ubicaciones" ("entidad_tipo", "entidad_id");

CREATE INDEX "ubicaciones_idx_ubicaciones_coords"
ON "proyecto_tesis"."ubicaciones" ("latitud", "longitud");


CREATE TABLE "proyecto_tesis"."solicitudes" (
    "id" integer NOT NULL,
    "rol_id" integer,
    "usuario_admin_id" integer,
    "datos" jsonb,
    "estado" character varying,
    "fecha_solicitud" timestamp,
    "fecha_aprobacion" timestamp,
    "motivo" integer,
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."recompensas_obtenidas" (
    "id" integer NOT NULL DEFAULT nextval('recompensas_obtenidas_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "objetivo_id" integer NOT NULL,
    "local_id" integer NOT NULL,
    "descripcion_premio" text NOT NULL,
    "fecha_obtencion" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "fecha_canjeado" timestamp without time zone,
    "estado" character varying(20) DEFAULT '''disponible''::character varying',
    "codigo_canje" character varying(100),
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."tipo_referencia" (
    "id" integer NOT NULL,
    "valor" character varying,
    "descripcion" text,
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."tokens_qr" (
    "id" integer NOT NULL DEFAULT nextval('tokens_qr_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "objetivo_id" integer NOT NULL,
    "token" character varying(255) NOT NULL UNIQUE,
    "datos_encriptados" text NOT NULL,
    "fecha_generacion" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "fecha_expiracion" timestamp without time zone NOT NULL,
    "usado" boolean DEFAULT false,
    "fecha_uso" timestamp without time zone,
    "ip_generacion" inet,
    PRIMARY KEY ("id")
);


CREATE INDEX "tokens_qr_idx_tokens_qr_usado"
ON "proyecto_tesis"."tokens_qr" ("usado");

CREATE INDEX "tokens_qr_idx_tokens_qr_usuario"
ON "proyecto_tesis"."tokens_qr" ("usuario_id");

CREATE INDEX "tokens_qr_idx_tokens_qr_expiracion"
ON "proyecto_tesis"."tokens_qr" ("fecha_expiracion");

CREATE UNIQUE INDEX "tokens_qr_tokens_qr_token_key"
ON "proyecto_tesis"."tokens_qr" ("token");


CREATE TABLE "proyecto_tesis"."sub_objetivos" (
    "id" integer NOT NULL,
    "objetivo_id" integer,
    "producto_id" integer,
    "cantidad" integer,
    "tipo_envase" integer,
    "progreso" integer,
    "creado_en" timestamp,
    PRIMARY KEY ("id")
);



CREATE TABLE "proyecto_tesis"."publicaciones" (
    "id" integer NOT NULL DEFAULT nextval('publicaciones_id_seq'::regclass),
    "autor_id" integer NOT NULL,
    "tipo_publicacion_id" integer NOT NULL,
    "titulo" character varying(200),
    "contenido" text NOT NULL,
    "imagen" text,
    "local_id" integer,
    "marca_id" integer,
    "producto_id" integer,
    "puntuacion" integer,
    "color_cerveza" text,
    "aroma" text,
    "sensaciones" text,
    "maridaje_probado" text,
    "fecha_evento" timestamp without time zone,
    "ubicacion_evento" text,
    "estado" character varying(20) DEFAULT '''activa''::character varying',
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE INDEX "publicaciones_idx_publicaciones_autor"
ON "proyecto_tesis"."publicaciones" ("autor_id");

CREATE INDEX "publicaciones_idx_publicaciones_fecha"
ON "proyecto_tesis"."publicaciones" ("creado_en");

CREATE INDEX "publicaciones_idx_publicaciones_tipo"
ON "proyecto_tesis"."publicaciones" ("tipo_publicacion_id");


CREATE TABLE "proyecto_tesis"."producto_envases" (
    "id" integer NOT NULL DEFAULT nextval('producto_envases_id_seq'::regclass),
    "tipo_envase_id" integer,
    "producto_id" integer NOT NULL,
    "precio" numeric(10, 2),
    "disponible" boolean DEFAULT true,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "producto_envases_producto_id_tipo_envase_id_key"
ON "proyecto_tesis"."producto_envases" ("producto_id");


CREATE TABLE "proyecto_tesis"."roles" (
    "id" integer NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
    "nombre" character varying(50) NOT NULL UNIQUE,
    "descripcion" text,
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);


CREATE UNIQUE INDEX "roles_roles_nombre_key"
ON "proyecto_tesis"."roles" ("nombre");


CREATE TABLE "proyecto_tesis"."locales" (
    "id" integer NOT NULL DEFAULT nextval('locales_id_seq'::regclass),
    "usuario_id" integer NOT NULL,
    "ubicacion_id" integer NOT NULL,
    "nombre_establecimiento" character varying(150) NOT NULL,
    "descripcion" text,
    "telefono" character varying(20),
    "horario_atencion" jsonb,
    "imagen" text,
    "estado" character varying(20) DEFAULT '''activo''::character varying',
    "creado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "actualizado_en" timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);



ALTER TABLE "proyecto_tesis"."comentarios"
ADD CONSTRAINT "fk_comentarios_autor_id_usuarios_id" FOREIGN KEY("autor_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."comentarios"
ADD CONSTRAINT "fk_comentarios_comentario_padre_id_comentarios_id" FOREIGN KEY("comentario_padre_id") REFERENCES "proyecto_tesis"."comentarios"("id");

ALTER TABLE "proyecto_tesis"."comentarios"
ADD CONSTRAINT "fk_comentarios_publicacion_id_publicaciones_id" FOREIGN KEY("publicacion_id") REFERENCES "proyecto_tesis"."publicaciones"("id");

ALTER TABLE "proyecto_tesis"."likes"
ADD CONSTRAINT "fk_likes_comentario_id_comentarios_id" FOREIGN KEY("comentario_id") REFERENCES "proyecto_tesis"."comentarios"("id");

ALTER TABLE "proyecto_tesis"."likes"
ADD CONSTRAINT "fk_likes_publicacion_id_publicaciones_id" FOREIGN KEY("publicacion_id") REFERENCES "proyecto_tesis"."publicaciones"("id");

ALTER TABLE "proyecto_tesis"."likes"
ADD CONSTRAINT "fk_likes_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."locales"
ADD CONSTRAINT "fk_locales_ubicacion_id_ubicaciones_id" FOREIGN KEY("ubicacion_id") REFERENCES "proyecto_tesis"."ubicaciones"("id");

ALTER TABLE "proyecto_tesis"."locales"
ADD CONSTRAINT "fk_locales_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."logs_sistema"
ADD CONSTRAINT "fk_logs_sistema_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."marcas"
ADD CONSTRAINT "fk_marcas_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."objetivos"
ADD CONSTRAINT "fk_objetivos_local_id_locales_id" FOREIGN KEY("local_id") REFERENCES "proyecto_tesis"."locales"("id");

ALTER TABLE "proyecto_tesis"."objetivos"
ADD CONSTRAINT "fk_objetivos_marca_id_marcas_id" FOREIGN KEY("marca_id") REFERENCES "proyecto_tesis"."marcas"("id");

ALTER TABLE "proyecto_tesis"."objetivos"
ADD CONSTRAINT "fk_objetivos_temporada_id_temporadas_id" FOREIGN KEY("temporada_id") REFERENCES "proyecto_tesis"."temporadas"("id");

ALTER TABLE "proyecto_tesis"."producto_envases"
ADD CONSTRAINT "fk_producto_envases_producto_id_productos_id" FOREIGN KEY("producto_id") REFERENCES "proyecto_tesis"."productos"("id");

ALTER TABLE "proyecto_tesis"."producto_locales"
ADD CONSTRAINT "fk_producto_locales_local_id_locales_id" FOREIGN KEY("local_id") REFERENCES "proyecto_tesis"."locales"("id");

ALTER TABLE "proyecto_tesis"."producto_locales"
ADD CONSTRAINT "fk_producto_locales_marca_id_marcas_id" FOREIGN KEY("marca_id") REFERENCES "proyecto_tesis"."marcas"("id");

ALTER TABLE "proyecto_tesis"."producto_locales"
ADD CONSTRAINT "fk_producto_locales_producto_id_productos_id" FOREIGN KEY("producto_id") REFERENCES "proyecto_tesis"."productos"("id");

ALTER TABLE "proyecto_tesis"."productos"
ADD CONSTRAINT "fk_productos_marca_id_marcas_id" FOREIGN KEY("marca_id") REFERENCES "proyecto_tesis"."marcas"("id");

ALTER TABLE "proyecto_tesis"."publicaciones"
ADD CONSTRAINT "fk_publicaciones_autor_id_usuarios_id" FOREIGN KEY("autor_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."publicaciones"
ADD CONSTRAINT "fk_publicaciones_local_id_locales_id" FOREIGN KEY("local_id") REFERENCES "proyecto_tesis"."locales"("id");

ALTER TABLE "proyecto_tesis"."publicaciones"
ADD CONSTRAINT "fk_publicaciones_marca_id_marcas_id" FOREIGN KEY("marca_id") REFERENCES "proyecto_tesis"."marcas"("id");

ALTER TABLE "proyecto_tesis"."publicaciones"
ADD CONSTRAINT "fk_publicaciones_producto_id_productos_id" FOREIGN KEY("producto_id") REFERENCES "proyecto_tesis"."productos"("id");

ALTER TABLE "proyecto_tesis"."recompensas_obtenidas"
ADD CONSTRAINT "fk_recompensas_obtenidas_local_id_locales_id" FOREIGN KEY("local_id") REFERENCES "proyecto_tesis"."locales"("id");

ALTER TABLE "proyecto_tesis"."recompensas_obtenidas"
ADD CONSTRAINT "fk_recompensas_obtenidas_objetivo_id_objetivos_id" FOREIGN KEY("objetivo_id") REFERENCES "proyecto_tesis"."objetivos"("id");

ALTER TABLE "proyecto_tesis"."recompensas_obtenidas"
ADD CONSTRAINT "fk_recompensas_obtenidas_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."referencias"
ADD CONSTRAINT "fk_referencias_tipo_referencia_id_tipo_referencia_id" FOREIGN KEY("tipo_referencia_id") REFERENCES "proyecto_tesis"."tipo_referencia"("id");

ALTER TABLE "proyecto_tesis"."seguimientos"
ADD CONSTRAINT "fk_seguimientos_seguido_id_usuarios_id" FOREIGN KEY("seguido_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."seguimientos"
ADD CONSTRAINT "fk_seguimientos_seguidor_id_usuarios_id" FOREIGN KEY("seguidor_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."sub_objetivos"
ADD CONSTRAINT "fk_sub_objetivos_objetivo_id_objetivos_id" FOREIGN KEY("objetivo_id") REFERENCES "proyecto_tesis"."objetivos"("id");

ALTER TABLE "proyecto_tesis"."sub_objetivos"
ADD CONSTRAINT "fk_sub_objetivos_producto_id_productos_id" FOREIGN KEY("producto_id") REFERENCES "proyecto_tesis"."productos"("id");

ALTER TABLE "proyecto_tesis"."suscripciones"
ADD CONSTRAINT "fk_suscripciones_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."temporadas"
ADD CONSTRAINT "fk_temporadas_local_id_locales_id" FOREIGN KEY("local_id") REFERENCES "proyecto_tesis"."locales"("id");

ALTER TABLE "proyecto_tesis"."tokens_qr"
ADD CONSTRAINT "fk_tokens_qr_objetivo_id_objetivos_id" FOREIGN KEY("objetivo_id") REFERENCES "proyecto_tesis"."objetivos"("id");

ALTER TABLE "proyecto_tesis"."tokens_qr"
ADD CONSTRAINT "fk_tokens_qr_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."usuario_objetivos"
ADD CONSTRAINT "fk_usuario_objetivos_objetivo_id_objetivos_id" FOREIGN KEY("objetivo_id") REFERENCES "proyecto_tesis"."objetivos"("id");

ALTER TABLE "proyecto_tesis"."usuario_objetivos"
ADD CONSTRAINT "fk_usuario_objetivos_usuario_id_usuarios_id" FOREIGN KEY("usuario_id") REFERENCES "proyecto_tesis"."usuarios"("id");

ALTER TABLE "proyecto_tesis"."usuarios"
ADD CONSTRAINT "fk_usuarios_nivel_id_niveles_usuario_id" FOREIGN KEY("nivel_id") REFERENCES "proyecto_tesis"."niveles_usuario"("id");

ALTER TABLE "proyecto_tesis"."usuarios"
ADD CONSTRAINT "fk_usuarios_rol_id_roles_id" FOREIGN KEY("rol_id") REFERENCES "proyecto_tesis"."roles"("id");

ALTER TABLE "proyecto_tesis"."usuarios"
ADD CONSTRAINT "fk_usuarios_solicitud_id_solicitudes_id" FOREIGN KEY("solicitud_id") REFERENCES "proyecto_tesis"."solicitudes"("id");

ALTER TABLE "proyecto_tesis"."validaciones_qr"
ADD CONSTRAINT "fk_validaciones_qr_local_id_locales_id" FOREIGN KEY("local_id") REFERENCES "proyecto_tesis"."locales"("id");

ALTER TABLE "proyecto_tesis"."validaciones_qr"
ADD CONSTRAINT "fk_validaciones_qr_usuario_objetivo_id_usuario_objetivos_id" FOREIGN KEY("usuario_objetivo_id") REFERENCES "proyecto_tesis"."usuario_objetivos"("id");

ALTER TABLE "proyecto_tesis"."validaciones_qr"
ADD CONSTRAINT "fk_validaciones_qr_validado_por_usuarios_id" FOREIGN KEY("validado_por") REFERENCES "proyecto_tesis"."usuarios"("id");
