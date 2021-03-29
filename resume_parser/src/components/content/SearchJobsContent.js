import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const fetchedJobValues = [
  {
    companyName: "Google",
    datePosted: "April 2, 2021",
    jobImage: "https://www.finsmes.com/wp-content/uploads/2016/09/google.jpg",
    jobIntroduction: "Simple Job Introduction",
    jobDescription: "Some Detailed Job Description",
    jobID: "1111",
  },
  {
    companyName: "Yahoo",
    datePosted: "May 2, 2022",
    jobImage: "https://www.searchenginewatch.com/wp-content/uploads/sites/25/cnt-import/sew/IMG/300/267300/yahoo-logo-change-1.jpg",
    jobIntroduction: "Simple Job Introduction",
    jobDescription: "Some Detailed Job Description",
    jobID: "1234",
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

  const handleApplyJob = (e1) => {
      
    console.log(e1);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {fetchedJobValues.map((jobUnit, index) => (
          <div key={index}>
            <Box m={2} pt={3}>
              <Grid item xs={12}>
                <Card className={classes.root} variant="outlined">
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {index + 1}
                      </Avatar>
                    }
                    action={<IconButton aria-label="settings"></IconButton>}
                    title={jobUnit.companyName}
                    subheader={jobUnit.datePosted}
                  />
                  <CardMedia
                    className={classes.media}
                    image={jobUnit.jobImage}
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
                  <CardContent>
                    <Box textAlign="center">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<TouchAppIcon />}
                        key={jobUnit.jobID}
                        onClick={() => { handleApplyJob(jobUnit.jobID) }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </CardContent>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.hea}>
                        More Details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{jobUnit.jobDescription}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Grid>
            </Box>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default SearchJobsContent;
