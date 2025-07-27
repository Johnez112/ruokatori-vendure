import {MigrationInterface, QueryRunner} from "typeorm";

export class Vendorseller1752635852260 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsPhonenumber"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsStreet"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsCity"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsPostalcode"`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" ADD "phoneNumber" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" ADD "street" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" ADD "city" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" ADD "postalCode" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" ADD "country" character varying`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "mv_seller" DROP COLUMN "country"`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" DROP COLUMN "postalCode"`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" DROP COLUMN "city"`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" DROP COLUMN "street"`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" DROP COLUMN "phoneNumber"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsPostalcode" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsCity" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsStreet" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsPhonenumber" character varying(255)`, undefined);
   }

}
