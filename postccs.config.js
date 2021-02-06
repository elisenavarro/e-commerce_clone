// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./pages/index.js'),
        require('autoprefixer')
    ],
};
