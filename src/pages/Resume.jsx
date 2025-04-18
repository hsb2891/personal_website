import React, { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid2,
  Box,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, ListItemText } from '@mui/material';
import Info from './info/resumeInfo';
import axios from 'axios';

function Resume() {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [leadershipExperiences, setLeadershipExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchExperiences = async () => {
    const response = await axios.get('http://localhost:3001/experiences');
    let work = [];
    let leadership = [];
    let project = [];
    let skill = [];

    response.data.map((exp) => {
      switch (exp.exp_type) {
        case 'work':
          work.push(exp);
          break;
        case 'leadership':
          leadership.push(exp);
          break;
        case 'project':
          project.push(exp);
          break;
        case 'skill':
          skill.push(exp);
          break;
        default:
          break
      }
    });

    setWorkExperiences(work);
    setLeadershipExperiences(leadership);
    setProjects(project);
    setSkills(skill);
  }

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" align="center">
          Resume
        </Typography>
      </Box>

      {/* Personal Information Section */}
      <Box my={4} align="center">
        <Typography variant="h4">{Info.PERSONAL_INFO.name}</Typography>
        <Typography variant="h6">{Info.PERSONAL_INFO.title}</Typography>
        <Typography variant="h6">{Info.PERSONAL_INFO.contact}</Typography>
      </Box>

      {/* Work Experience Section */}
      <Box my={4} align="center">
        <Typography variant="h4">Work Experience</Typography>
      </Box>
      {workExperiences.map((exp) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid2 container spacing={2}>
              <Typography variant="h6">{exp.name} | {exp.role} | {exp.period}</Typography>
            </Grid2>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {exp.description.map((line) => (
                <ListItem>
                  <ListItemText primary={line} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Leadership Experience Section */}
      <Box my={4}>
        <Typography variant="h4" align="center">
          Leadership Experience
        </Typography>
      </Box>
      {leadershipExperiences.map((exp) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid2 container spacing={2}>
              <Typography variant="h6">{exp.name} | {exp.role} | {exp.period}</Typography>
            </Grid2>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {exp.description.map((line) => (
                <ListItem>
                  <ListItemText primary={line} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Projects Section */}
      <Box my={4}>
        <Typography variant="h4" align="center">
          Projects
        </Typography>
      </Box>
      {projects.map((proj) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid2 container spacing={2}>
              <Typography variant="h6">{proj.name} | {proj.period}</Typography>
            </Grid2>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {proj.description.map((line) => (
                <ListItem>
                  <ListItemText primary={line} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Skills Section */}
      <Box my={4}>
        <Typography variant="h4" align="center">
          Skills
        </Typography>
      </Box>
      <Accordion>
        <AccordionSummary>
          <Grid2 container spacing={2}>
            {skills.map((skill, index) => (
              <Grid2 item xs={12} key={index}>
                <Chip label={skill.name} />
              </Grid2>
            ))}
          </Grid2>
        </AccordionSummary>
      </Accordion>

      {/* Education Section */}
      <Box my={4}>
        <Typography variant="h4" align="center">
          Education
        </Typography>
      </Box>
      <Accordion>
        <AccordionSummary>
          <Grid2 container spacing={2}>
            {Info.EDUCATION.map((edu, index) => (
              <Grid2 item xs={12} key={index}>
                <Typography variant="h5">{edu.school}, {edu.degree}</Typography>
              </Grid2>
            ))}
          </Grid2>
        </AccordionSummary>
      </Accordion>
    </Container>
  );
}

export default Resume;
