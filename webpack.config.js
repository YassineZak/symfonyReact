var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .addEntry('style', './assets/css/app.css')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()
    .enableSassLoader()
    .addEntry('home', './assets/css/sass/home.scss')

    .configureBabel(function (babelConfig) {
        babelConfig.plugins = [
            "@babel/plugin-proposal-object-rest-spread","@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
        ]
    })
;

module.exports = Encore.getWebpackConfig();