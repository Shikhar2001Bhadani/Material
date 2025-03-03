import { Button, Typography } from '@mui/material';
import React from 'react';
import Header from './components/header';
import './App.css';
import CourseCard from './components/coursecard';

const courselist = [
  {
      image:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
      heading:"Image 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque eligendi nemo exercitationem, qui dolor doloribus debitis itaque tempore maiores iste explicabo dolorem omnis doloremque officia obcaecati suscipit ad dicta optio. Cumque consectetur quisquam atque animi sequi nihil exercitationem architecto."
  },
  {
    image:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    heading:"Image 2",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque eligendi nemo exercitationem, qui dolor doloribus debitis itaque tempore maiores iste explicabo dolorem omnis doloremque officia obcaecati suscipit ad dicta optio. Cumque consectetur quisquam atque animi sequi nihil exercitationem architecto."
  },
  {
    image:"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    heading:"Image 3",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque eligendi nemo exercitationem, qui dolor doloribus debitis itaque tempore maiores iste explicabo dolorem omnis doloremque officia obcaecati suscipit ad dicta optio. Cumque consectetur quisquam atque animi sequi nihil exercitationem architecto."
  },
]


const App = () => {
  return (
    <div>  
      <Header />

      <div style={{ marginTop: '30px' }}>
        <Typography variant='h3' align='center'>
          Welcome to Acciojob
        </Typography>
        <Typography variant='body2' align='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque eligendi nemo exercitationem, qui dolor doloribus debitis itaque tempore maiores iste explicabo dolorem omnis doloremque officia obcaecati suscipit ad dicta optio. Cumque consectetur quisquam atque animi sequi nihil exercitationem architecto.
        </Typography>
      </div>

      <Typography variant='h4' marginTop='30px' align='center'>
         Our best Images
      </Typography>

      <div style={{
          display:'flex',
          alignItems:'center',
          marginTop:'30px',
          flexWrap:'wrap',
          paddingBottom:'100px'
        }}>
        {courselist.map((course, index)=> <CourseCard key ={index} image={course.image} description={course.description} heading={course.heading}></CourseCard>)}
      </div>
      
      <footer>
        <Typography align='center' marginTop='0px'>
          Made by React 
        </Typography>
      </footer>

      
    </div>
  );
}

export default App;
