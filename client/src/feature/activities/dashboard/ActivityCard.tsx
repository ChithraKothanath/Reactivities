import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities"
import { Link } from "react-router"

type Props={
    activity:Activity
  
}
export default function ActivityCard({activity}:Props) {
  const {deleteActivity}=useActivities()
  return (
    <Card sx={{borderRadius:3}}>
        <CardContent>
            <Typography variant="h4" >{activity.title}</Typography>
            <Typography sx={{color:'text.secondary', mb:1}} >{activity.date}</Typography>
            <Typography variant="body2" >{activity.description}</Typography>
            <Typography variant="subtitle1" >{activity.city} / {activity.venue}</Typography>
        </CardContent>
        <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
            <Chip label={activity.category} variant="outlined"></Chip>
            <Box display='flex' gap={3}>
            <Button size="medium" variant="contained" disabled={deleteActivity.isPending} color="error" onClick={()=>deleteActivity.mutate(activity.id)}>Delete</Button>
            <Button size="medium" variant="contained" component={Link} to={`/activities/${activity.id}`}  >View</Button>
            </Box>
        </CardActions>
    </Card>
  )
}
