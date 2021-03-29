import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Grid } from "@material-ui/core";

const fetchedJobValues = [
  {
    companyName: "Google",
    datePosted: "April 2, 2021",
    jobImage: "https://someimage.com/image.png",
    jobIntroduction: "Simple Job Introduction",
    jobDescription: "Some Detailed Job Description",
  },
  {
    companyName: "Yahoo",
    datePosted: "May 2, 2022",
    jobImage: "https://someimage.com/image.png",
    jobIntroduction: "Simple Job Introduction",
    jobDescription: "Some Detailed Job Description",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function SearchJobsContent() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Grid container spacing={3}>
        {fetchedJobValues.map((jobUnit, index) => (
          <div key={index}>
            <Grid item xs={12}>
              <Card className={classes.root} variant="outlined">
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={jobUnit.companyName}
                  subheader={jobUnit.datePosted}
                />
                <CardMedia
                  className={classes.media}
                  image="../../static/image.png"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {jobUnit.jobIntroduction}
                  </Typography>
                </CardContent>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={ handleExpandClick}
                    startIcon={<ExpandMoreIcon />}
                    key = {jobUnit}
                  >
                    More Information
                  </Button>
                </Box>
                <br></br>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography paragraph>
                      {jobUnit.jobDescription}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </div>)
        )}
      </Grid>
    </div>
  );
}

export default SearchJobsContent;
