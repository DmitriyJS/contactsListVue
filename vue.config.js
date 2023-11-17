// const path = require('path');

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "@/assets/_variables.scss";`
//       }
//     }
//   }
// };

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/_variables.scss";`,
      },
    },
  },
  };