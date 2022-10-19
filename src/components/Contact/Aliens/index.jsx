import alien from '../../../assets/images/aliens2.png'
import './index.scss'

const Aliens = () => {
  return (
    <>
      <div class="contenedor">
        <div class="box-goku">
          <img class="aliensitos1" src={alien} alt="" />
         
         
        </div>
      </div>
      <div class="contenedor2">
        <div class="box-goku">
         
          <img class="aliensitos2" src={alien} alt="" />
         
        </div>
      </div>
      <div class="contenedor3">
        <div class="box-goku">
         
          <img class="aliensitos3" src={alien} alt="" />
        </div>
      </div>
    </>
  )
}

export default Aliens
