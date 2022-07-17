-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_fk_id_teacher_fkey";

-- AlterTable
ALTER TABLE "courses" ALTER COLUMN "fk_id_teacher" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
