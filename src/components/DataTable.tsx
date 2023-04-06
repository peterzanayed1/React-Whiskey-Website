import React, { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';



const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'brand', headerName: 'brand', flex: 1 },
    { field: 'type', headerName: 'type', flex: 1},
    { field: 'price', headerName: 'price', flex: 1},
    { field: 'rating', headerName: 'rating', flex: 2}
  ]

function DataTable() {
    let [open, setOpen] = useState(false);
    const {contactData, getData} = useGetData();
    const [ selectionModel, setSelectionModel] =useState<any>([])
    
    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
      }

  return (
    <>
        <Modal
        id = {selectionModel}
            open = {open}
            onClose={handleClose}
        />
        <div className ='flex flex-row'> 
             <div>
                <button
                    className = 'p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white' 
                    onClick={() => handleOpen()}
              
                    >
                    Create New Contact
                </button>
            
            </div> 
            <button onClick ={handleOpen}
                    className = 'p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'  
                    >
                    Update Contact
                </button>
                <button onClick={deleteData}
                    className = 'p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'  
                    >
                    Delete Contact
                </button>
        </div>
        <div className = {open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{height:400 , width:'100%'}}
            >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Contacts</h2>
            <DataGrid rows={contactData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable