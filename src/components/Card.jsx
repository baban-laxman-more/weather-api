import { BsClouds } from 'react-icons/bs'
import { WiCloudyWindy } from 'react-icons/wi'
const Card = ({ cardData }) => {
  return (
    <>
      {Object.keys(cardData).length != 0 && (
        <div className='weather-card d-flex justify-content-center mt-5'>
          <div className='card' style={{ width: '20rem' }}>
            <div style={{ backgroundColor: '#000' }}>
              <img
                src='https://w7.pngwing.com/pngs/546/46/png-transparent-weather-forecasting-severe-weather-storm-weather-free-text-heart-logo.png'
                className='card-img-top bg-dark'
                alt=''
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title d-flex justify-content-between'>
                <span>{cardData.current.condition.text} </span>
                <span>{cardData.current.temp_f}&deg;F</span>
              </h5>
              <p className='card-text'>
                {cardData.location.name}, {cardData.location.region}
              </p>
            </div>
            <hr />
            <div className='card-body'>
              <h5 className='card-title d-flex justify-content-between'>
                <span>
                  <BsClouds size={50} /> Cloud
                </span>
                <div>
                  <span className='mt-2'>{cardData.current.cloud}&deg;F</span>
                  <h6>{cardData.current.humidity}% humidity</h6>
                </div>
              </h5>
            </div>
            <hr />
            <div className='card-body'>
              <h5 className='card-title d-flex justify-content-between'>
                <span>
                  <WiCloudyWindy size={50} /> Wind
                </span>
                <div>
                  <span className='mt-2'>
                    {cardData.current.windchill_f}&deg;F
                  </span>
                  <h6>Direction {cardData.current.wind_dir}</h6>
                </div>
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
