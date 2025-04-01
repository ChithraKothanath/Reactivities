import { Grid2} from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import FormActivity from "../form/FormActivity";

type Props ={
    activities:Activity[];
    selectActivity:(id:string) =>void;
    cancelSelectActivity:() =>void;
    selectedActivity?:Activity;
    editMode:boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;
    submitForm:(activity:Activity)=>void;
    deleteActivity:(id:string)=>void;
}
export default function ActivityDashboard({deleteActivity,submitForm,activities,selectActivity,cancelSelectActivity,selectedActivity,editMode,openForm,closeForm}:Props) {
  return (
    <Grid2 container spacing={3}>
            <Grid2 size={7}>
            <ActivityList 
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
             />
            </Grid2>
            <Grid2 size={5}>
              {selectedActivity && !editMode &&
              <ActivityDetail cancelSelectActivity={cancelSelectActivity}
               activity={selectedActivity}
               openForm={openForm}
               />}
            { editMode && <FormActivity closeForm={closeForm} submitForm={submitForm} activity={selectedActivity}/>}
            </Grid2>
    </Grid2>
  )
}
