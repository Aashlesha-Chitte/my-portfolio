import React from 'react';
import { Container, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const MyTimeline = () => {
  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Timeline...
      </h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ py: '12px', px: 2 }}
            align="right"
            variant="body2"
            color="white"
          >
            Education (Aug 2017 - Aug 2021)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <HistoryEduIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span"
              sx={{
                background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}>
              BACHELOR OF TECHNOLOGY
            </Typography>
            <br />
            <Typography variant="h9" color="white">
              COMPUTER SCIENCE AND ENGINEERING
            </Typography>
            <Typography color="white">
              R. C. Patel Institute of Technology.
            </Typography>
            <Typography
              sx={{
                background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}>Grad. 2021 CGPA: 8.5</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0'}}
            align="right"
            variant="body2"
            color="white"
          >
            (2021 - 2024)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <WorkOutlineIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" sx={{
              background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}>
             Software Associate Engineer
            </Typography>
            <br />
            <Typography variant="h9" color="white">
              MERN Stack Developer
            </Typography>
            <Typography color="white">
              SUCCESSIVE DIGITAL PVT. LTD. PUNE, INDIA
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0'}}
            align="right"
            variant="body2"
            color="white"
          >
            (2024 - present)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <WorkOutlineIcon fontSize="large" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" sx={{
              background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}>
             Senior Associate Engineer
            </Typography>
            <br />
            <Typography variant="h9" color="white">
              MERN Stack Developer
            </Typography>
            <Typography color="white">
              SUCCESSIVE DIGITAL PVT. LTD. PUNE, INDIA
            </Typography>
            <Typography sx={{
              background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}>Problem Solver</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default MyTimeline;
