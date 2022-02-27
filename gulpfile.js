const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
// const cleanCss = require('gulp-clean-css')


function css() {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ require('autoprefixer'), require('cssnano')({
            preset: ['default', {
                discardDuplicates: true,
                uniqueSelectors: true,
                cssDeclarationSorter: true,
                mergeRules: true,
                mergeLonghand: true,
                minifyFontValues: true
            }]
        }) ]))
        // .pipe(cleanCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'))
}

function js() {
    return gulp.src('./script.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'))
}


exports.default = () => {
    gulp.watch('./css/*.css', css)
    gulp.watch('./script.js', js)
}
