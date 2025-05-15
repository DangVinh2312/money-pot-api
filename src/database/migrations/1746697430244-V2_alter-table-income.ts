import { MigrationInterface, QueryRunner } from 'typeorm';

export class V2AlterTableIncome1746697430244 implements MigrationInterface {
  name = 'V2AlterTableIncome1746697430244';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" DROP COLUMN "name"`,
    );
    await queryRunner.query(`DROP TYPE "money-pot"."income_name_enum"`);
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" ADD "name" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" DROP COLUMN "name"`,
    );
    await queryRunner.query(
      `CREATE TYPE "money-pot"."income_name_enum" AS ENUM('SALARY', 'BONUS', 'REVENUE', 'INVESTMENT', 'ALLOWANCE', 'OTHER')`,
    );
    await queryRunner.query(
      `ALTER TABLE "money-pot"."income" ADD "name" "money-pot"."income_name_enum" NOT NULL`,
    );
  }
}
