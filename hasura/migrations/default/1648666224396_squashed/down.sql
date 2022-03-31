
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."order";


DELETE FROM "public"."bucket_item" WHERE "id" = 3;

DELETE FROM "public"."bucket_item" WHERE "id" = 2;

DELETE FROM "public"."item" WHERE "id" = 1;

DELETE FROM "public"."bucket" WHERE "id" = 1;

DROP TABLE "public"."bucket_item";

alter table "public"."item" rename to "Item";

alter table "public"."bucket" rename to "Bucket";

DROP TABLE "public"."bucket";

DROP TABLE "public"."item";
