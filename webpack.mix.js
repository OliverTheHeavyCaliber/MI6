const mix = require('laravel-mix');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    processCssUrls: false
});

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}

// ADD YOUR COMPILED ASSETS HERE
//             source file          resulting file
//                SCSS                  CSS
mix.sass('resources/css/app.scss', 'public/css');
mix.js('resources/js/PeopleOfInterest/index.js', 'public/js/people-of-interest.js').react();
mix.js('resources/js/Agent/index.js', 'public/js/agent.js').react();
mix.js('resources/js/Missions/index.js', 'public/js/missions.js').react();

mix.browserSync({
        host: 'localhost',
        port: 3000,
        proxy: {
            target: process.env.APP_URL // Yay! Using APP_URL from the .env file!
        }
    });

// add versions to the compiled assets when they are being loaded with mix()
mix.version();
