//SASS
import './index.scss';

import { auth } from './Firebase';
import { useState, useEffect } from 'react';

//COMPONENTS
import Main from './components/Main';
import Top from './components/Top';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() =>{
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);
  return (
    <div className="App">
      <Top />
      <Header user={user}/>
      <Main user={user} />
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
