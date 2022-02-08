import './css/App.css'
import { CaretDownOutlined } from '@ant-design/icons'
import gsap from 'gsap';

import { useEffect,useState } from 'react';

function App() {

  useEffect(() => {
    const page = document.querySelector('.App');
    // let n1_2 = page.offsetWidth / 400 ;
    let n1_2 = page.offsetWidth / 675 ;
    let n3 = page.offsetWidth / 293 ;
    let n4 = page.offsetWidth / 360 ;

    page.addEventListener('mousemove' , e=> {
      // gsap.to('.cls-1-empty' , {strokeDashoffset:e.offsetX / n1_2 - 170 })
      gsap.to('.cls-1-empty' , {strokeDashoffset:e.offsetX / n1_2 +915 })
      gsap.to('.cls-1-empty3' , {strokeDashoffset:e.offsetX / n3 + 782 })
      gsap.to('.greyLine' , {rotationZ:e.offsetX / n4 , transformOrigin:'center'   })
      // gsap.to('.greyLine' , {`transform:rotateZ(2 deg)`,})
    })
  }, [])
  return (
    <div className="App">

      <div className='CenterPage'>

        <div className="svgs">
          
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 201.56">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect id="_5" data-name="5" className="cls-1" x="5" y="5" width="125.62" height="195.06" rx="62.81"/>
                <path id="_5-2" data-name="5" className="cls-2" d="M130.62,137.26V67.81A62.81,62.81,0,0,0,67.81,5h0A62.81,62.81,0,0,0,5,67.81v69.45"/>
              </g>
            </g>
          </svg>

          <svg className='svgbold' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 205.06">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect style={{strokeDashoffset:  1255, strokeDasharray: 338}} id="_5" data-name="5" className="cls-1-empty" x="5" y="5" width="125.62" height="195.06" rx="62.81"/>
              </g>
            </g>
          </svg>


          <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 201.56">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect id="_5" data-name="5" className="cls-1" x="5" y="1.5" width="125.62" height="195.06" rx="62.81"/>
                <path id="_5-2" data-name="5" className="cls-2" d="M5,64.31v69.45a62.81,62.81,0,0,0,62.81,62.8h0a62.81,62.81,0,0,0,62.81-62.8V64.31"/>
              </g>
            </g>
          </svg>
          <svg className='svgbold2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 205.06">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect style={{strokeDashoffset:  1255, strokeDasharray: 338}} id="_5" data-name="5" className="cls-1-empty" x="5" y="5" width="125.62" height="195.06" rx="62.81"/>
                {/* <rect style={{strokeDashoffset:  30, strokeDasharray: 198}} id="_5" data-name="5" className="cls-1-empty" x="5" y="5" width="125.62" height="195.06" rx="62.81"/> */}
              </g>
            </g>
          </svg>

          <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.12 205.06">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect  id="_5" data-name="5" className="cls-1 rectL" x="5" y="5" width="125.62" height="195.06" rx="62.81"/>
                <path id="_5-2" data-name="5" className="cls-2 rectL" d="M67.81,5h0A62.81,62.81,0,0,0,5,67.81v69.45a62.81,62.81,0,0,0,62.81,62.8h0"/>
              </g>
            </g>
          </svg>

          <svg className='svgbold3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 205.06">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect style={{strokeDashoffset: 927, strokeDasharray: 298}} id="_5" data-name="5" className="cls-1-empty3" x="5" y="5" width="125.62" height="195.06" rx="62.81"/>
              </g>
            </g>
          </svg>

          <svg className='svg svgO' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 205.06">

            <svg className='svgbold4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135.62 205.06">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <line className="cls-1" x1="26.81" y1="184.84" x2="109.35" y2="20.7" className="greyLine"/>
                </g>
              </g>
            </svg>

            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <line className="cls-1o" x1="26.81" y1="184.84" x2="109.35" y2="20.7"/>
                <rect id="_5" data-name="5" className="cls-2o" x="5" y="5" width="125.62" height="195.06" rx="62.81"/>
              </g>
            </g>
          </svg>



        </div>

        <div className='btns'>
          <a target="_blank" href='mailto:hi@nulo.agency'><div className='empty'>Email</div></a>
          <a target="_blank" href='https://t.me/nuloagency'><div className='empty'>Telegram</div></a>
          <a target="_blank" href='https://instagram.com/nulo.agency'><div className='empty'>Instagram</div></a>
          <a target="_blank" href='https://www.behance.net/nuloagency'><div className='fullbtn'>Behance</div></a>
        </div>
        <p className='premium'>premium design at <span className='half'>half the price</span></p>
        <div className='antIcon'>
          <div className='antIcon2'>
            <CaretDownOutlined/>
          </div>
        </div>
        
      </div>

      <div className='intro'>
        <p className='here'>here is<span className='why'> Why?</span></p>
        <p className='here'>US dollar conversion rate to currencies we live with <span className='why'>is high</span>, so we can charge you <span className='blackback'>half the price </span>
        and still pay our bills ! :) <br/>That a totally <span style={{fontFamily:'Urwg_HEAVY', fontWeight:900}}>win-win</span> strategy we chose to <span style={{fontWeight:600}}>keep the quality high</span> and charge you at the <span className='why'>lowest </span>
        possible <span className='why'>price</span>.</p>

      </div>

      <div className='CenterPage'>


        <p className='premium' style={{marginBottom:10, marginTop:110}}>let's talk :)</p>
        <div className='btns' style={{marginBottom:80 }} >
          <a target="_blank" href='mailto:hi@nulo.agency'><div className='empty'>Email</div></a>
          <a target="_blank" href='https://t.me/nuloagency'><div className='empty'>Telegram</div></a>
          <a target="_blank" href='https://instagram.com/nulo.agency'><div className='empty'>Instagram</div></a>
          <a target="_blank" href='https://www.behance.net/nuloagency'><div className='fullbtn'>Behance</div></a>
        </div>

      </div>

    </div>
  );
}

export default App;
