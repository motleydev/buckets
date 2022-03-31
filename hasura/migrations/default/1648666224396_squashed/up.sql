

CREATE TABLE "public"."item" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_item_updated_at"
BEFORE UPDATE ON "public"."item"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_item_updated_at" ON "public"."item" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."bucket" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_bucket_updated_at"
BEFORE UPDATE ON "public"."bucket"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_bucket_updated_at" ON "public"."bucket" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';


CREATE TABLE "public"."bucket_item" ("id" serial NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "bucket_id" integer NOT NULL, "item_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("bucket_id") REFERENCES "public"."bucket"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("item_id") REFERENCES "public"."item"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_bucket_item_updated_at"
BEFORE UPDATE ON "public"."bucket_item"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_bucket_item_updated_at" ON "public"."bucket_item" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

INSERT INTO "public"."bucket"("id", "created_at", "updated_at") VALUES (1, E'2022-03-29T15:48:20.790552+00:00', E'2022-03-29T15:48:20.790552+00:00');

INSERT INTO "public"."item"("id", "created_at", "updated_at") VALUES (1, E'2022-03-29T15:49:05.922588+00:00', E'2022-03-29T15:49:05.922588+00:00');

INSERT INTO "public"."bucket_item"("id", "created_at", "updated_at", "bucket_id", "item_id") VALUES (2, E'2022-03-29T15:49:31.107463+00:00', E'2022-03-29T15:49:31.107463+00:00', 1, 1);

INSERT INTO "public"."bucket_item"("id", "created_at", "updated_at", "bucket_id", "item_id") VALUES (3, E'2022-03-29T15:49:56.577437+00:00', E'2022-03-29T15:49:56.577437+00:00', 1, 1);
