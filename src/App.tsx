// import React from 'react';
import Info from './components/switch_info/Info';
import IpAdress from './components/switch_ip/IpAdress';
// import IpDropdown from './components/switch_ip/IpDropdown';


function App() {
  return (
    <div className="App">
      {/* <IpDropdown/> */}
      <IpAdress/>
      <Info/>
    </div>
  );
}

export default App;
