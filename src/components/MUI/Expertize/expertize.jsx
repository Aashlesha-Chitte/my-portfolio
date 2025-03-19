import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import './style.css';
import mongoDB from "../../../assets/mongoDB.png";
import express from "../../../assets/express.png";
import react from "../../../assets/react.png";
import node from "../../../assets/nodejs.png";
// import nest from "../../../assets/nestjs.png";
// import next from "../../../assets/nextjs.png";
import graphql from "../../../assets/graphql.png";
import javascript from "../../../assets/js.png";
import typescript from "../../../assets/typescript.png";
// import java from "../../../assets/java.png";
import jest from "../../../assets/jest.png";
import { RevealOnScroll } from '../../RevealOnScroll';
import { styles } from '../../sections/utils/styles';
// import mysql from "../../../assets/mysql.png";

const Expertize = () => {
  const expertizeData = [
    {
      title: 'MongoDB',
      image: mongoDB,
    },
    {
      title: 'ExpressJS',
      image: express,
    },
    {
      title: 'ReactJS',
      image: react,
    },
    {
      title: 'NodeJS',
      image: node,
    },
    // {
    //   title: 'NestJS',
    //   image: nest,
    // },
    // {
    //   title: 'NextJS',
    //   image: next,
    // },
    {
      title: 'GraphQL',
      image: graphql,
    },
    {
      title: 'JavaScript',
      image: javascript,
    },
    {
      title: 'Typescript',
      image: typescript,
    },
    // {
    //   title: 'Java',
    //   image: java,
    // },
    {
      title: 'Jest',
      image: jest,
    },
    // {
    //   title: 'MySQL',
    //   image: mysql,
    // },
  ];

  return (
    
    <section
      id="expertize"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className={`max-w-7xl mx-auto px-4 ${styles.padding}`}>
          <Typography
            sx={{ pb: 6, mt: 12 }}
            className="myExpertize"
            fontSize={40}
            fontWeight={900}
          >
            Expertize In...
          </Typography>
          <Grid container spacing={4}>
            {expertizeData.map((element, index) => (
              <Grid item key={`element${index + 1}`} xs={12} sm={6} md={4} style={{ alignContent: 'space-between', justifyItems: 'center' }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    backgroundColor: '#0d0c0d',
                    maxWidth: 'fit-content',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                    '&:hover': {
                      '& .card-content': {
                        color: 'white',
                        zIndex: 1,
                      },
                      '& .gradient-text': {
                        color: 'white',
                        backgroundClip: 'border-box',
                        WebkitBackgroundClip: 'border-box',
                        background: 'transparent',
                      }
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardMedia
                    component="div"
                    style={{
                      padding: '50px 10px 0px 5px',
                      objectFit: 'cover',
                      height: 120,
                      minWidth: 300,
                      position: 'relative',
                      zIndex: 1
                    }}
                    image={element.image}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      position: 'relative',
                      zIndex: 1
                    }}
                    style={{ minWidth: 300 }}
                    className="card-content"
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className="gradient-text"
                      sx={{
                        background: 'linear-gradient(to right, #3b82f6, #22d3ee)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        // marginBottom: '2rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {element.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Expertize;
