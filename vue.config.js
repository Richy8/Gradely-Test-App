module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./public/sass/basic_scss/_color.scss"; @import "./public/sass/basic_scss/_breakpoints.scss"; @import "./public/sass/basic_scss/_mixin.scss";`
            }
        }
    },

    chainWebpack: config => {
        config.module.rule('pdf')
            .test(/\.(pdf)(\?.*)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: './src/assets/files/[name].[hash:8].[ext]'
            })

    }
};