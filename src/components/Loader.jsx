import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <TailSpin
        visible={true}
        height='80'
        width='80'
        color='#0275d8'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  )
}

export default Loader
