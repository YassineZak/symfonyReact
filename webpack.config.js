var Encore = require('@symfony/webpack-encore');
var CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .addEntry('slider', './assets/css/slider-animations.css')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableReactPreset()
    .enableSassLoader()
    .addEntry('home', './assets/css/sass/home.scss')
    .addEntry('chambre', './assets/css/parimis/style_chambres.css')
    .autoProvidejQuery()
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    })

    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/images', to: 'images' }
    ]))
    .configureBabel(function (babelConfig) {
        babelConfig.plugins = [
            "@babel/plugin-proposal-object-rest-spread","@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
        ]
    })
;

module.exports = Encore.getWebpackConfig();