import {MigrationInterface, QueryRunner} from "typeorm";

export class Addcustomfields1752635580496 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "mv_seller" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "userId" uuid NOT NULL, "id" SERIAL NOT NULL, "channelId" integer, CONSTRAINT "REL_cbb77ec64564493bf3dadd91ba" UNIQUE ("channelId"), CONSTRAINT "PK_b727c1a6eafbdf8d2e12d86c1de" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsPhonenumber" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsStreet" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsCity" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" ADD "customFieldsPostalcode" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "mv_seller" ADD CONSTRAINT "FK_cbb77ec64564493bf3dadd91bac" FOREIGN KEY ("channelId") REFERENCES "channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
   }

   public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "mv_seller" DROP CONSTRAINT "FK_cbb77ec64564493bf3dadd91bac"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsPostalcode"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsCity"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsStreet"`, undefined);
        await queryRunner.query(`ALTER TABLE "seller" DROP COLUMN "customFieldsPhonenumber"`, undefined);
        await queryRunner.query(`DROP TABLE "mv_seller"`, undefined);
   }

}
