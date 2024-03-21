import { useEffect } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { auth } from "./firebase";

//////////////////////////////////////////
import { useStateValue } from "./StateProvider";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Payment from "./Payment";


function App() {

  const [{},dispatch]=useStateValue();
  /// ad a listener 
  useEffect(()=>{
    //// will only run once  when the app components loads..
     auth.onAuthStateChanged(authUser=>{
      console.log("the useer is >>>",authUser);
      if(authUser){
        //the user logged in 
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        ////the user is logged out 
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
     });
  },[])
  return (


    <Router>
     <div className="App">
      <Routes>
        <Route path='/'element={[<Header />, <Home />]} />
        <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
        <Route path="/login" element={[<Header />,<Login/> ]}/>
        <Route path="/payment" element={[<Header />,
        
          <Payment/>
       ]}/>
      </Routes>
    </div>
    </Router>
    
  );
  

}

export default App;
