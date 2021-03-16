// div ---jsx-----> document.createElement('div')
//JSX rules
//not all attributes of HTML are accessible in JSX
//do not use class use className, your editor may not understand JSX, set to JavaScript React
//react build components with JSX(markup)
//if you want to wrap JSX without having to use an element<></>

import AppBar from './components/app-bar/AppBar';
function App() {
  return (
  <AppBar/>
  
  );
}

export default App;
