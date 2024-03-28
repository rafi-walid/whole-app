import DataTable from './DataTable/DataTable'
import './Page.css';
import { useSelector } from 'react-redux';
const Page = () => {
  const isOpen = useSelector(state => state.toggle);
  return (
    <div className='DataTable_Container' style={{marginLeft: isOpen? '19rem': '8rem'}}>
      <DataTable/>

    </div>
  )
}

export default Page;