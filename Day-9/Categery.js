import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip } from 'swiper/modules';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);


  return (
    <>
    <div className='bodyc'>

    <h1>Covai One day Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Onedaytripplan"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    <h1>Madurai One day Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.auchitya.com/wp-content/uploads/2020/02/Azhagar.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Azhagar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/meenakshi-amman-temple-1656170467_cfebe78d69f069f881aa.webp"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       meenakshi Amman Temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Maduraionedaytrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    












    <h1>Kanniyakumai One day Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Kanniyakumarione"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    











    <h1>Chennai One day Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Chennaiondaytrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    











    <h1> Education Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Educationtrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>

      </Swiper>
    <br></br><br></br>
    











    <h1>Family Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Familytrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>
      </Swiper>
    <br></br><br></br>











    <h1>Children Trip Planing ₹10,000</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/one-day-trip-from-coimbatore.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Isha Yoga Maiyam
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹300  with food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://miro.medium.com/v2/resize:fit:1358/1*CtEuSSaXX1eqwhHQovdq4A.jpeg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ukkadam lake
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500+ with boating</b>
        </Typography>
      </CardContent>
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b7/55/15/near-water-falling-location.jpg?w=1200&h=-1&s=1"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        kodiveri falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://2.bp.blogspot.com/-M_R3DPfmNUU/VgY13Mr8oPI/AAAAAAAAI5U/CgiU_VBrRXc/s1600/3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Bhavaisagar dam 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹500 + fish food</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://1.bp.blogspot.com/-wqSPTQFrrs0/V5ROwtlymNI/AAAAAAAAArk/JJMQLnR1eycsQQvJLIYdaJxUHBJ7OaHGACLcB/s640/Azhiyar%2BDam.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aazhiyar
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://static.sadhguru.org/d/46272/1626099393-velliangiri-mountains-3.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        velingigiri hills
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1365643d1430302211-gedee-car-museum-coimbatore-gedeecarmuseum.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Gedee car musium
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
     
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://ramanan50.files.wordpress.com/2018/07/perur_patteeswarar1.jpg?w=800"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Perur temple
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://www.sterlingholidays.com/resorts/galleryslider/anaikatti-bythesiruvani/sterling-anaikatti-new-rdest1.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Anaikatti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      
    </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }} className="homecard">
      <CardMedia
        sx={{ height: 170 }}
        image="https://i.pinimg.com/originals/16/25/03/16250375cda9120cd6cab3e1b38cf01d.jpg"
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        valparai
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One day trip <br></br><b>₹200</b>
        </Typography>
      </CardContent>
      <CardActions>
       <Link to="/Childrentrip"><Button size="large" variant="contained">Book Now</Button></Link> 
      </CardActions>
    </Card>
        </SwiperSlide>
      </Swiper>
    <br></br><br></br>
    </div>
     
    </>
  );
}