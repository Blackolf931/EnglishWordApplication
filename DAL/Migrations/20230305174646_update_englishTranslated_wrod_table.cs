using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    /// <inheritdoc />
    public partial class updateenglishTranslatedwrodtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_EnglishTranslatedWords_EnglishWordId",
                table: "EnglishTranslatedWords",
                column: "EnglishWordId");

            migrationBuilder.CreateIndex(
                name: "IX_EnglishTranslatedWords_TranslatedWordId",
                table: "EnglishTranslatedWords",
                column: "TranslatedWordId");

            migrationBuilder.AddForeignKey(
                name: "FK_EnglishTranslatedWords_EnglishWords_EnglishWordId",
                table: "EnglishTranslatedWords",
                column: "EnglishWordId",
                principalTable: "EnglishWords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_EnglishTranslatedWords_TranslatedWords_TranslatedWordId",
                table: "EnglishTranslatedWords",
                column: "TranslatedWordId",
                principalTable: "TranslatedWords",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EnglishTranslatedWords_EnglishWords_EnglishWordId",
                table: "EnglishTranslatedWords");

            migrationBuilder.DropForeignKey(
                name: "FK_EnglishTranslatedWords_TranslatedWords_TranslatedWordId",
                table: "EnglishTranslatedWords");

            migrationBuilder.DropIndex(
                name: "IX_EnglishTranslatedWords_EnglishWordId",
                table: "EnglishTranslatedWords");

            migrationBuilder.DropIndex(
                name: "IX_EnglishTranslatedWords_TranslatedWordId",
                table: "EnglishTranslatedWords");
        }
    }
}
