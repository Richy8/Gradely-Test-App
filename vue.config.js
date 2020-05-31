module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "./public/sass/basic_scss/_color.scss"; @import "./public/sass/basic_scss/_breakpoints.scss"; @import "./public/sass/basic_scss/_mixin.scss";`
            }
        }
    }
};