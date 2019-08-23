// gulpプラグインの読み込み
const {src, dest, watch} = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")
const autoprefixer = require("gulp-autoprefixer")

// Sassをコンパイルする
const compileSass = () =>
  // scss取得
  src("common/scss/*.scss")
  // Sassのコンパイル実行
  .pipe(
    sass({
      outputStyle: "expanded"
    })
  )
  .pipe(autoprefixer())
  .pipe(dest("common/css"));

// Scssファイルを監視し、変更があったら変換する
const watchSassFiles = () => watch("common/scss/*.scss", compileSass);

// npx gulpを実行したときに、watchSassFilesを実行する
exports.default = watchSassFiles;
