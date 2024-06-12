import { TiLocation } from 'react-icons/ti'
import { FaTemperatureLow } from 'react-icons/fa'
import { WiHumidity, WiDayWindy } from 'react-icons/wi'
import { MdDescription, MdDateRange } from 'react-icons/md'
import { FaStroopwafel } from "react-icons/fa";
const TableData = ({ tableData }) => {
  return (
    <>
      {tableData.length != 0 && (
        <table className='table table-dark'>
          <thead>
            <tr>
              <th scope='col'>
                Date <MdDateRange />
              </th>
              <th scope='col'>
                Location <TiLocation />
              </th>
              <th scope='col'>
                Temperature <FaTemperatureLow />
              </th>
              <th scope='col'>
                Humidity <WiHumidity />
              </th>
              <th scope='col'>
                Wind Speed <WiDayWindy />
              </th>
              <th scope='col'>
                Astro <FaStroopwafel />
              </th>
              <th scope='col'>
                Weather Description <MdDescription />
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData[0].map((item, index) => (
              <tr>
                <td>{item.date}</td>
                <td>
                  {tableData[1].name}, <br />
                  {tableData[1].region}
                </td>
                <td>
                  {item.day.maxtemp_c} C
                  <br />
                  {item.day.maxtemp_f} F
                </td>

                <td>{item.day.avghumidity}%</td>
                <td>
                  {item.day.maxwind_kph} kph <br />
                  {item.day.maxwind_mph} mph
                </td>
                <td>
                  Sunrise - {item.astro.sunrise} <br />
                  Sunset - {item.astro.sunset} <br />
                  Moonrise - {item.astro.moonrise} <br />
                  Moonset - {item.astro.moonset}
                </td>

                <td>
                  {item.day.condition.text} <br />
                  UV-{item.day.uv} <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default TableData
