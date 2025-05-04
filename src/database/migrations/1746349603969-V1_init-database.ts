import { MigrationInterface, QueryRunner } from 'typeorm';

export class V1InitDatabase1746349603969 implements MigrationInterface {
  name = 'V1InitDatabase1746349603969';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "money-pot"."user" ("id" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "money-pot"."money_pot" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT gen_random_uuid(), "icon" character varying NOT NULL, "name" character varying NOT NULL, "userId" character varying, CONSTRAINT "PK_257d7dbd24e05cd09df83fd3eba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "money-pot"."quota" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT gen_random_uuid(), "year" integer NOT NULL, "month" integer NOT NULL, "userId" character varying, CONSTRAINT "PK_d2dc1d8a7a0bd55d48f2ed5fe09" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "money-pot"."income_name_enum" AS ENUM('SALARY', 'BONUS', 'REVENUE', 'INVESTMENT', 'ALLOWANCE', 'OTHER')`,
    );
    await queryRunner.query(
      `CREATE TABLE "money-pot"."income" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" "money-pot"."income_name_enum" NOT NULL, "amount" integer NOT NULL, "quotaId" uuid, "userId" character varying, CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "money-pot"."wallet" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT gen_random_uuid(), "icon" character varying NOT NULL, "name" character varying NOT NULL, "userId" character varying, CONSTRAINT "PK_bec464dd8d54c39c54fd32e2334" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "money-pot"."expense" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT gen_random_uuid(), "otherName" character varying, "amount" integer NOT NULL, "moneyPotId" uuid, "quotaId" uuid, "walletId" uuid, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."money_pot" ADD CONSTRAINT "FK_034ac82fd850a33a5791e6dd2c3" FOREIGN KEY ("userId") REFERENCES "money-pot"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."quota" ADD CONSTRAINT "FK_40c5cc158218e7912952a2f57b4" FOREIGN KEY ("userId") REFERENCES "money-pot"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" ADD CONSTRAINT "FK_dc9c700ad899f7ce9f530c4cf83" FOREIGN KEY ("quotaId") REFERENCES "money-pot"."quota"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" ADD CONSTRAINT "FK_0965fe0d5faa3b2e7518d7bb244" FOREIGN KEY ("userId") REFERENCES "money-pot"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."wallet" ADD CONSTRAINT "FK_35472b1fe48b6330cd349709564" FOREIGN KEY ("userId") REFERENCES "money-pot"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."expense" ADD CONSTRAINT "FK_92da7e91905b8e27eea04611233" FOREIGN KEY ("moneyPotId") REFERENCES "money-pot"."money_pot"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."expense" ADD CONSTRAINT "FK_04c38fa3d044faae3a9bbd29dbe" FOREIGN KEY ("quotaId") REFERENCES "money-pot"."quota"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."expense" ADD CONSTRAINT "FK_37c767c79d4d57e6088b901c0f4" FOREIGN KEY ("walletId") REFERENCES "money-pot"."wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "money-pot"."expense" DROP CONSTRAINT "FK_37c767c79d4d57e6088b901c0f4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."expense" DROP CONSTRAINT "FK_04c38fa3d044faae3a9bbd29dbe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."expense" DROP CONSTRAINT "FK_92da7e91905b8e27eea04611233"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."wallet" DROP CONSTRAINT "FK_35472b1fe48b6330cd349709564"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" DROP CONSTRAINT "FK_0965fe0d5faa3b2e7518d7bb244"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" DROP CONSTRAINT "FK_dc9c700ad899f7ce9f530c4cf83"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."quota" DROP CONSTRAINT "FK_40c5cc158218e7912952a2f57b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."money_pot" DROP CONSTRAINT "FK_034ac82fd850a33a5791e6dd2c3"`,
    );
    await queryRunner.query(`DROP TABLE "money-pot"."expense"`);
    await queryRunner.query(`DROP TABLE "money-pot"."wallet"`);
    await queryRunner.query(`DROP TABLE "money-pot"."income"`);
    await queryRunner.query(`DROP TYPE "money-pot"."income_name_enum"`);
    await queryRunner.query(`DROP TABLE "money-pot"."quota"`);
    await queryRunner.query(`DROP TABLE "money-pot"."money_pot"`);
    await queryRunner.query(`DROP TABLE "money-pot"."user"`);
  }
}
