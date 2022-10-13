import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [imgTabone,setImgTabOne] = useState(1);
  const [imgTabTow,setImgTabTow] = useState(1);
  const [imgTabThree,setImgTabThree] = useState(1);


  const toggleTab = (index) => {
    setToggleState(index);
  };
  const toggleImgTabOne = (index) => {
    setImgTabOne(index);
  };

  const toggleImgTabTow = (index) => {
    setImgTabTow(index);
  };
  const toggleImgTabThree = (index) => {
    setImgTabThree(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Clothes
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          jewelry
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Electronics
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

              <div className={imgTabone === 1 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'  alt=""/>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

              <div className={imgTabone === 2 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt='.' />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>


              <div className={imgTabone === 3 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

             

            <div className="toggle-img">  

            <button onClick={() => toggleImgTabOne(1)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
              </button >

              <button onClick={() => toggleImgTabOne(2)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              </button >

              <button onClick={() => toggleImgTabOne(3)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
              </button >

            </div>
            

          

        
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
          <div className={imgTabTow === 1 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'  alt=""/>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

              <div className={imgTabTow === 2 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt='.' />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>


              <div className={imgTabTow === 3 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

             

            <div className="toggle-img">  

            <button onClick={() => toggleImgTabTow(1)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="" />
              </button >

              <button onClick={() => toggleImgTabTow(2)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="" />
              </button >

              <button onClick={() => toggleImgTabTow(3)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" />
              </button >

            </div>

        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          


          <div className={imgTabThree === 1 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src='https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'  alt=""/>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

              <div className={imgTabThree === 2 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt='.' />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>


              <div className={imgTabThree === 3 ? "tab-info" :'img-hide'}>
                <div className="img-card">
                  <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg   " alt="" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>

            

            <div className="toggle-img">  

            <button onClick={() => toggleImgTabThree(1)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" alt="" />
              </button >

              <button onClick={() => toggleImgTabThree(2)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="" />
              </button >

              <button onClick={() => toggleImgTabThree(3)} >
                <img className="img-menu" src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />
              </button >

            </div>


        </div>
      </div>
    </div>
  );
}

export default Tabs;