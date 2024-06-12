import { Button } from 'bootstrap'
import { useRef } from 'react'

const Header = ({ search_api, search_api_5 }) => {
  const ref = useRef(null)
  const call_api = () => {
    var searchParam = ref.current.value
    search_api(searchParam)
  }

  const call_api_5 = () => {
    var searchParam = ref.current.value
    search_api_5(searchParam)
  }

  return (
    <header className='py-2 border-bottom bg-dark'>
      <div className='container-fluid gap-3'>
        <div className='d-flex'>
          <form className='row align-items-center' role='search'>
            <div className='col-auto'>
              <input
                type='search'
                className='form-control text-black'
                placeholder='Enter City Name'
                aria-label='Search'
                ref={ref}
              />
            </div>
            <div className='col-auto'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={call_api}
              >
                Search
              </button>

              <button
                type='button'
                className='btn btn-primary'
                onClick={call_api_5}
                style={{ marginLeft: '1vw' }}
              >
                Get 5 Day Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
