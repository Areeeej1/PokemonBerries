import React,{useState,useEffect} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress"
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export const getMuiTheme = () => createTheme({
 
  components: {
    MUIDataTableHeadCell: {
      styleOverrides:{
        root: {
            textAlign:"center",
          
        }
      }
    },
    MUIDataTableBodyCell:{
      styleOverrides:{
        root: {
            textAlign:"center",
          
        }
      }
    }
  }
})
const BerryFirmnesses = () => {
  const [error,setError]=useState();
  const[loading,setLoading]=useState("true");
    const[data,setData]=useState([]);
     const getData=()=>{
        axios.get("https://pokeapi.co/api/v2/berry-firmness")
        .then(res=>{
            
           
            setData(res.data.results)
            setLoading(false);
        })
        .catch((error)=>{
          
            setLoading(false);
            setError(error.code);
     }
        )}
    useEffect(()=>{
        getData();
        },[])
        const columns = [{name:"name",
        label: "Name",
        options: {
          filter: false,
          sort: false,
          
         }}, 

        {name:"url",
        label: "Link",
        options: {
          filter: false,
          sort: false,
          
         }
       } 
       
      ];
        const options = {
          selectableRowsHideCheckboxes:true,
          download: false,
          print: false,
          filter: false,
          viewColumns:false,
          searchPlaceholder:"Search By User Name & Link",
        
            };
  return (
    <>
    { loading ?  <Box sx={{ width: '100%' }}><CircularProgress style={{color:"rgb(97, 231, 137)",fontSize:"100%"}}/></Box> : 
    <>
    { error ? <p style={{color:"red",fontSize:"100%",paddingLeft: "40%"}}>{error} </p>: 
   <ThemeProvider theme={getMuiTheme()}>
    <MUIDataTable
    title={"Berry Firmness"}
    data={data}
    columns={columns}
    options={options}>
    </MUIDataTable>
    </ThemeProvider>
     }
     </>
     }
    </>
  )
};

export default BerryFirmnesses;
