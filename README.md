# burger-app-course

### Enable CSS with scope to each component
- npm run eject
- config/webpack.config.dev.js find: "test: /\\.css$/," 
- add some attributes in configuration: "modules:true", "localIdentName: pattern to make unique class name"
```javascript 1.8
loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                },
```
- the same two attributes add in file config/webpack.config.prod.js
- in google search google fonts to find Open Sans font. 

###
This command import file not an object: import './index.css'; so it can be globally.