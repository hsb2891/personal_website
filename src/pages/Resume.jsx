// import React from "react";

// function Resume() {
//   return (
//     <div>
//       <h1>Resume</h1>
//       {/* use accordion for each thing here with expanded true by default?  https://mui.com/material-ui/react-accordion/ */}
//       {/* have link to download pdf version of resume */}
//     </div>
//   );
// }

// export default Resume;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid2,
  Box,
  Rating,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Resume() {
  // const [skills, setSkills] = useState({
  //   React: 4,
  //   Ruby: 5,
  //   SQL: 4,
  //   'API Integration': 5,
  //   'EDI Workflows': 5,
  // });

  // const handleSkillChange = (skill, newValue) => {
  //   setSkills({ ...skills, [skill]: newValue });
  // };
  const skills = [
    'React',
    'Angular',
    'Ruby',
    'SQL'
  ]

  const experiences = [
    {
      company: 'WeInfuse',
      role: 'Full Stack Software Engineer',
      period: 'September 2021 - Present',
      description:
        'Developed and maintained a large-scale EDI workflow using Stupidedi gem. Worked on the claims module and handled Change Healthcare integrations.',
    },
    {
      company: 'Tech Startup',
      role: 'Frontend Developer',
      period: '2018 - 2020',
      description:
        'Migrated frontend from Angular to React using Angular2React library. Contributed to several Ruby gems and resolved production bugs.',
    },
  ];

  const personalInfo = {
    name: 'Hiranmayee',
    title: 'Full Stack Developer',
    contact: 'hiranmayee@utexas.edu',
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{personalInfo.name}</Typography>
          <Typography variant="subtitle1" style={{ marginLeft: 'auto' }}>
            {personalInfo.title} | {personalInfo.contact}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box my={4}>
        <Typography variant="h4" align="center">
          Resume
        </Typography>
      </Box>

      {/* Experience Section */}
      <Typography variant="h5">Work Experience</Typography>
      {experiences.map((exp, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{exp.role} at {exp.company} ({exp.period})</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{exp.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Skills Section */}
      {/* <Box my={4}>
        <Typography variant="h5">Skills</Typography>
        <Grid2 container spacing={2}>
          {Object.entries(skills).map(([skill, rating]) => (
            <Grid2 xs={6} sm={4} key={skill}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{skill}</Typography>
                  <Rating
                    name={skill}
                    value={rating}
                    onChange={(event, newValue) => handleSkillChange(skill, newValue)}
                  />
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box> */}

      {/* Education Section */}
      <Box my={4}>
        <Typography variant="h5">Education</Typography>
        <Card>
          <CardContent>
            <Typography variant="h6">Bachelor of Science in Mathematics</Typography>
            <Typography variant="subtitle1">University of Texas at Austin</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Resume;
