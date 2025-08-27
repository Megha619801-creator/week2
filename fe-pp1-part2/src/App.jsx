import "./App.css";
import CreditCard from "./CreditCard.jsx";


import visaImg from "./assets/images/visa.png";
import masterImg from "./assets/images/master.png";

function App() {
  return (
    <div className="App">
      {/* <h1> LAB | React Training</h1> */}

        <CreditCard
  type="Visa"
  number="0123456789018875"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
  logo={visaImg}
  // className="visaCard"
  style={{
    backgroundColor: '#11aa99', color: 'white'
    
  }}
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010993"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
  logo={masterImg}
  // className="masterCard"
  style={{ backgroundColor: '#eeeeee', color: '#222222' }
  
  
  
  }
/>
    
<CreditCard
  type="Visa"
  number="0123456789016982"
  expirationMonth={12}
  expirationYear={2019}
  bank="Nameof the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
  logo={visaImg}
  // className="customCard"
  style={{ backgroundColor: '#f4a261', color: '#1d3557' }}
/>

    </div>
  );
}

export default App;
