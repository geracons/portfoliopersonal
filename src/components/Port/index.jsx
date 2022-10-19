import aliens from '../../assets/images/aliens.png'
import './index.scss'
const Port = () => {
  return (
    <>
      <h1 class="header-section">
        Scroll down to see a photo gallery being revealed
      </h1>

      <div class="grid-container">
        <div class="grid">
          <div class="gridLayer">
          <img src={aliens} alt="" />
            <div class="gridBlock">
             
            </div>
          </div>
          <div class="gridLayer">
          <img src={aliens} alt="" />
            <div class="gridBlock">
            
            </div>
          </div>
          <div class="gridLayer">
          <img src={aliens} alt="" />
            <div class="gridBlock">
          
            </div>
          </div>
          <div class="gridLayer centerPiece">
          <img src={aliens} alt="" />
            <div class="gridBlock centerBlock">
            
            </div>
          </div>
          <div class="gridLayer">
            <div class="gridBlock">
              <a href="https://greensock.com" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
          <div class="gridLayer">
            <div class="gridBlock">
                <img src={aliens} alt="" />
            </div>
          </div>
          <div class="gridLayer">
            <div class="gridBlock">
            <img src={aliens} alt="" />
            </div>
          </div>
          <div class="gridLayer">
            <div class="gridBlock">
            <img src={aliens} alt="" />
            </div>
          </div>
          <div class="gridLayer">
          <img src={aliens} alt="" />
            <div class="gridBlock">
            <img src={aliens} alt="" />
            </div>
          </div>
        </div>
      </div>

      <h1 class="header-section">Some additional content</h1>

      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
            alt=""
          />
        </a>
      </header>
    </>
  )
}

export default Port
