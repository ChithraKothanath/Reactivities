import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props={
    activity:Activity
    selectActivity:(id:string) =>void
    deleteActivity:(id:string)=>void
}
export default function ActivityCard({activity,selectActivity,deleteActivity}:Props) {
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
            <Button size="medium" variant="contained" color="error" onClick={()=>deleteActivity(activity.id)}>Delete</Button>
            <Button size="medium" variant="contained" onClick={()=>selectActivity(activity.id)}>View</Button>
            </Box>
        </CardActions>
    </Card>
  )
}
