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
        },

        // loadFile(src) {
        //     return require('@/assets/files/' + src + '');
        // }
    }
}

export default RenderAssets;