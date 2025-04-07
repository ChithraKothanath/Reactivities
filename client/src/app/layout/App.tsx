import { Box, Container, CssBaseline, Typography } from "@mui/material";

import {  useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";



function App() {

 const [selectedActivity,setselectedActivity]=useState<Activity | undefined>(undefined)
 const [editMode,setEditMode]=useState(false)
 const {activities,isPending}=useActivities();

const handleSelectActivity=(id:string)=>{
 setselectedActivity(activities?.find(x=>x.id===id));
}

const handleCancelSelectActivity=()=>{
  setselectedActivity(undefined)
}
const handleOpenForm =(id?:string)=>{
  if(id) handleSelectActivity(id)
    else handleCancelSelectActivity()
  setEditMode(true)
}
const handleCloseForm =()=>{
  setEditMode(false)
}



  return (
    <Box sx={{bgcolor:'#eeeeee',minHeight:'100vh'}}>
    <CssBaseline/>
  <NavBar openForm={handleOpenForm}/>
  <Container maxWidth='xl' sx={{mt:3}}>
    {(!activities || isPending)?(<Typography variant="h5">Loading..</Typography>):
     <ActivityDashboard 
     activities={activities}
     selectActivity={handleSelectActivity}
     cancelSelectActivity={handleCancelSelectActivity}
     selectedActivity={selectedActivity}
     editMode={editMode}
     openForm={handleOpenForm}
     closeForm={handleCloseForm}

     />
  }
   
 
  </Container>
  
   </Box>
  )
}

export default App
