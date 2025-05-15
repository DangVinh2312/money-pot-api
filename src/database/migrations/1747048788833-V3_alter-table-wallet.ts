import { MigrationInterface, QueryRunner } from 'typeorm';

export class V3AlterTableWallet1747048788833 implements MigrationInterface {
  name = 'V3AlterTableWallet1747048788833';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "money-pot"."wallet" DROP COLUMN "icon"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "money-pot"."wallet" ADD "icon" character varying NOT NULL`,
    );
  }
}
