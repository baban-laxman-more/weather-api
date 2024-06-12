const Hero = ({ message }) => {
  return (
    <div className='bg-dark px-4 py-5 text-center rounded'>
      <div className='py-5'>
        <h1 className='display-6 fw-bold text-info'>
          {message.length > 0 ? message : 'Weather API'}
        </h1>
      </div>
    </div>
  )
}

export default Hero
