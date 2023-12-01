import {useState} from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { products } from '../../datas';
import {Link} from 'react-router-dom'; 
import DeleteIcon from '@mui/icons-material/Delete';


import './Products.css'

export default function UserList() {
  const [productsData,setProductsData] = useState(products)

  const productDelete = productID => {
    setProductsData(productsData.filter(product=> product.id != productID))
  }


  const columns = [
    {
      field :'id',
      hedearName :'ID',
      width:90
    },
    {
      field :'title',
      hedearName :'Name',
      width:200,
      renderCell :(params) => {
        return(
            <Link to={`/product/${params.row.id}`}  className="link">
              <div className="userListUser">
                <img src={params.row.avatar} className="userListImg" />
                {params.row.title}

              </div>
            </Link>

        )

      }

    },
    {
      field : 'price',
      hedearName : 'Price',
      width : 120
    },
    {
      field : 'action',
      hedearName : 'Action',
      width :150,
      renderCell :(params) =>{
        return(
          <>
            <Link to={`/product/${params.row.id}`} className="link" >
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteIcon
             className="userListDelete"
            onClick={()=> productDelete(params.row.id)}
            
            />
            
          
          </>
        )
      }
    }
  ]

  return (

    <div className='userList'>
      <DataGrid 
      rows={productsData}
      columns={columns}
      disableSelectionOnClick
      pageSize = {3}
      checkboxSelection
      />
    </div>
  )
}