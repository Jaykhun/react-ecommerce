const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': resolvePath('./src/components'),
            '@UI': resolvePath('./src/components/UI')
        },
    },
}