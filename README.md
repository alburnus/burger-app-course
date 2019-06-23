# burger-app-course

### Enable CSS with scope on each component
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
- in google search "google fonts" to find Open Sans font which can be imported on page. 

###
This command import file - not an object: import './index.css'; so it can be globally.
This command import React object from react: import React from 'react';

### Create structure - typical for React projects
- in containers folder will be stored stateful components
- in components folder will be stored just view, dumb components, no manage state
- in assets folder will be stored logo 
- in hoc (higher order component) I added Auxiliary.js (Auxiliary wrapper for component, in Windows I can't add file Aux.js). 
The file does not contain jsx elements, states, so I don't need to import react library.  