const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
	'resources/js/app.js',
	
	'public/admin/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
	'public/admin/assets/libs/metismenu/metisMenu.min.js',
	'public/admin/assets/libs/simplebar/simplebar.min.js',
	'public/admin/assets/libs/node-waves/waves.min.js',
	'public/admin/assets/js/app.js',
	], 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'public/admin/assets/css/bootstrap.min.css',
    'public/admin/assets/css/icons.min.css',
    'public/admin/assets/css/app.min.css',
], 'public/css/app.css');
