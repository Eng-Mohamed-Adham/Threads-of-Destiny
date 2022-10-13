import './AboutUs.css'
import { useState } from 'react';


const AboutUs = () => {


const [mainTab,setMainTab] = useState(1);

    return (
        <div className="aboutmain">
            <div className="description">
                <h1>A<span>b</span>o<span>u</span>t<span>U</span>s</h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className='type-img'>
                <div className='img-main'>
                    <img className={mainTab === 1 ? 'tab-img' : 'info-tab'} src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt='' />

                    <img className={mainTab === 2 ? 'tab-img' : 'info-tab'} src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' alt='' />

                    <img className={mainTab === 3 ? 'tab-img' : 'info-tab'} src='https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg' alt='' />
                </div>
                <div className='img-desc'>
                        <button onClick={()=>setMainTab(1)} >
                        <img className='' src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt='' />
                        </button>
                        <button onClick={()=>setMainTab(2)} >
                        <img className='' src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg' alt='' />
                        </button>
                        <button onClick={()=>setMainTab(3)} >
                        <img className='' src='https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg' alt='' />
                        </button>
                </div>

            </div>
        </div>

    );
}
 
export default AboutUs;