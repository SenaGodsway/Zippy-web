import '../css/history.css'
import DataTable from 'react-data-table-component'

export default function History() {
  const columns =[
    {
      name: 'Tracking Number',
      selector:row => row.number
    }, 
    {
      name:"Routes",
      selector:row => row.from
    },
    {
      name:"" ,
      selector:row => row.to
    },
    {
      name:"Status",
      selector:row => row.status
    },
    {
      name:"",
      selector:row => row.more
    }

  ];
  const data =[
    {
      id:1,
      number:"ZIP2024001",
      from:"Madina",
      to:"Tema",
      status:"Delivered",
      more:""
    },
    {
      id:2,
      number:"ZIP2024002",
      from:"Madina",
      to:"Tema",
      status:"Delivered",
      more:""
    }
  ]
  return (
    <div className='container mt-1 history'>
      <h2>History</h2>
        <DataTable 
          columns={columns}
          data={data}

        ></DataTable>
    </div>
  )
}
