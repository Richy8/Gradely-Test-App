const RenderAssets = {
    methods: {
        localImg(src) {
            return require('@/assets/local/' + src + '');
        },

        dynamicImg(src) {
            return require('@/assets/dynamic/' + src + '');
        },

        dynamicVid(src) {
            return require('@/assets/video/' + src + '');
        }
    }
}

export default RenderAssets;