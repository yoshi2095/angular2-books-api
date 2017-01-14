var browserSync = require('browser-sync'),
	del = require('del'),
	gulp = require('gulp'),
	debug = require('gulp-debug'),
	newer = require('gulp-newer'),
	sourcemaps = require('gulp-sourcemaps'),
	tslint = require('gulp-tslint'),
	typescript = require('gulp-typescript'),
	runSequence = require('run-sequence'),
	tsconfig = require('tsconfig-glob'),
	tscConfig = require('./tsconfig.json'),
	reload = browserSync.reload;

// clean the contents of the distribution directory
gulp.task('clean', function() {
	return del('dist/**/*');
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function() {
	return gulp.src(['app/**/*', 'index.html', 'systemjs.config.js', '!app/**/*.ts'], {
			base: './'
		})
		.pipe(gulp.dest('dist'));
});

gulp.task('copy:nodemodules', function() {
	return gulp.src(['node_modules/@angular/**/*', 'node_modules/rxjs/**/*', 'node_modules/angular2-in-memory-web-api/**/*', '!node_modules/**/*.tlog', '!node_modules/**/*.png', '!node_modules/**/*.jpg', '!node_modules/**/*.md', '!node_modules/**/*.txt', '!node_modules/**/LICENSE', '!node_modules/**/license', '!node_modules/**/*.markdown', '!node_modules/**/example/**/*', '!node_modules/**/examples/**/*', '!node_modules/**/test/**/*', '!node_modules/**/benchmark/**/*', '!node_modules/**/doc/**/*', '!node_modules/**/docs/**/*', '!node_modules/**/testData/**/*', '!node_modules/**/build/Debug/**/*', '!node_modules/**/build/deps/**/*'], {
			base: 'node_modules',
		})
		.pipe(debug({
			title: 'copying node modules'
		}))
		.pipe(newer('dist/node_modules'))
		.pipe(gulp.dest('dist/node_modules'));
});

// copy dependencies
gulp.task('copy:libs', function() {
	return gulp.src([
			'node_modules/core-js/client/shim.min.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/systemjs/dist/system.src.js'
		])
		.pipe(gulp.dest('dist/lib'));
});

// linting
gulp.task('tslint', function() {
	return gulp.src('app/**/*.ts')
		.pipe(tslint())
		.pipe(tslint.report('verbose'));
});


// TypeScript compile
gulp.task('compile', function() {
	return gulp
		.src(tscConfig.files)
		.pipe(sourcemaps.init())
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

// update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function() {
	return tsconfig({
		configPath: '.',
		indent: 2
	});
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
	browserSync({
		server: {
			baseDir: 'dist'
		}
	});

	gulp.watch(['app/**/*', 'index.html'], ['buildAndReload']);
});

gulp.task('build', function() {
	runSequence('clean', 'compile', 'copy:libs', 'copy:assets', 'copy:nodemodules');
});

gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);