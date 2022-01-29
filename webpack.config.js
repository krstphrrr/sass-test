
const path = require( 'path' )
const ReactRefreshPlugin = require( '@pmmmwh/react-refresh-webpack-plugin' )
const HTMLWebpackPlugin = require( 'html-webpack-plugin' )

// module.exports = {
//   entry: {
//     reactRefreshSetup: '@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
//     main: "index.tsx",
//   },
//   // output: {
//   //       filename: "bundle.js",
//   //       path: path.resolve(__dirname, "dist"),
//   //     },
//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.js$/,
//   //       exclude: /node_modules/,
//   //       use: {
//   //         loader: "babel-loader",
//   //       },
//   //     },
//   //     {
//   //       test: /\.tsx?$/,
//   //       use: "ts-loader",
//   //       exclude: /node_modules/,
//   //     },
//   //     {
//   //       test: /\.css$/i,
//   //       use: ["style-loader", "css-loader"],
//   //     },
//   //   ],
//   // },
//   plugins: [
//     new HTMLWebpackPlugin({
//       filename: '../dist/index.html',
//       template: "public/index.html",
//     }),
//   ],
//   resolve: {
//     extensions: ['.ts', '.tsx', '.json', '.css', '.scss'],
//     modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
// },

// };

// module.exports = ( env ) => {

//   return {

//     devServer: {
//       hot: true,
//       port: 8080,
//     },

//     plugins : [
//       new ReactRefreshPlugin()
//     ],

//     optimization: {
//       runtimeChunk: 'single',
//       // Ensure `react-refresh/runtime` is hoisted and shared
//       // Could be replicated via a vendors chunk
//       splitChunks: {
//         chunks: 'all',
//         name(_, __, cacheGroupKey) {
//           return cacheGroupKey;
//         },
//       },
//     }

//   }

// }
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[name].[ext]',
              publicPath: 'public/'
            }
          }
        ], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
     },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      manifest: "./public/manifest.json",
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};