const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('transpile-module', () => {
  return gulp.src(['./src/index.js', './src/CurrencyMap.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('transpile-classes', () => {
  return gulp.src(['./src/classes/*.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('./dist/classes/'));
});

gulp.task('babel-module', () => {
  return gulp.watch(['./src/index.js', './src/CurrencyMap.js'], ['transpile-module']);
});

gulp.task('babel-classes', () => {
  return gulp.watch(['./src/classes/*.js'], ['transpile-classes']);
});

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('default', [
  'transpile-module',
  'transpile-classes',
  'babel-module',
  'babel-classes'
]);
