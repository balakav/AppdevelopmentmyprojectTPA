import { AppBar, Avatar, IconButton,Box,Tooltip,Menu,TextField, InputBase,Button, MenuList,MenuItem,Divider,ListItemIcon} from '@mui/material'
import './Home.css'
import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import {Logout,Settings,PersonAdd} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <AppBar className='appbar1' sx={{ bgcolor: "#66FFB2" }}>
        <ol>
            <ul>
   
    <HomeIcon sx={{ fontSize: 35,color:"black" }}className='just'></HomeIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <HotelIcon  sx={{ fontSize:  35 ,color:"black"  }} className='just'></HotelIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <CategoryIcon  sx={{ fontSize: 35 ,color:"black" }} className='just'></CategoryIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <LocalOfferIcon sx={{ fontSize: 35,color:"black"  }} className='just'></LocalOfferIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <RecentActorsIcon sx={{ fontSize: 35,color:"black"  }} className='just'></RecentActorsIcon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <div className='jhk'>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <FavoriteIcon>
            <Settings fontSize="small" />
          </FavoriteIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <BookmarkBorderIcon>
            <Settings fontSize="small" />
          </BookmarkBorderIcon>
          &nbsp;&nbsp;&nbsp;Favorites
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </div>
            </ul> 

        </ol>      
   
    </AppBar><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   <div className='sc1'>

   <input type='search' placeholder='Search a...' className='search1'></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Button variant="contained" className='homebutton1' sx={{ fontSize: 22 ,bgcolor: "#66FFB2",color:"black"}}>Search</Button><br></br><br></br>
   </div>
   <div className='homecard1'>
    <Card sx={{ maxWidth: 345 }}>
      <div>
      <CardMedia
        sx={{ height: 170 }}
       image="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?cs=srgb&dl=pexels-chait-goli-1796715.jpg&fm=jpg"
        title=" London"
      /></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         London
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The popularization of the name Landon in the United States may be due to the popularity of Michael London, a famous American TV star from 1959 to 1989. Michael Landon played some of the most well-known characters on television at the time, such as Charles Ingalls on the show “Little House on the Prairie” 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      <a href="https://en.wikipedia.org/wiki/London">  <Button size="small">Learn More</Button></a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg"
        title="Machu Picchu"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Machu Picchu
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href=""></a><Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn.britannica.com/56/122156-050-F5B469C8/overview-complex-Angkor-Wat-Cambodia.jpg"
        title="Angor Wat"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Angkor Wat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Angkor Wat is a temple complex in Cambodia, located on a site measuring 162.6 hectares. The Guinness World Records considers it as the largest religious structure in the world.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://boraboraphotos.com/wp-content/uploads/2012/12/four-seasons-resort-bora-bora-mt-otemanu.jpg"
        title="bore bore"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Bore Bore
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving. It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island's center rises Mt. Otemanu, a 727m dormant volcano.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://w0.peakpx.com/wallpaper/653/454/HD-wallpaper-taj-mahal-india-traveled-the-world-graphy-thumbnail.jpg"
        title="Taj Mahal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Taj Mahal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://grandcanyon.com/wp-content/uploads/2018/08/horseshoe-bend-600x370.jpg"
        title="Grand Canyon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Grand Canyon
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Grand Canyon in Arizona is a natural formation distinguished by layered bands of red rock, revealing millions of years of geological history in cross-section. Vast in scale, the canyon averages 10 miles across and a mile deep along its 277-mile length. Much of the area is a national park, with Colorado River white-water rapids and sweeping vistas.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://assets.editorial.aetnd.com/uploads/2009/11/gettyimages-1081719544.jpg"
        title="Colosseum"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Colosseum
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/78/c3/88/caption.jpg?w=1200&h=700&s=1&cx=2736&cy=1824&chk=v1_fa65978ad26491920728"
        title=" Eiffel Tower"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Eiffel Tower
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Locally nicknamed "La dame de fer", it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://greatbarrierreef.org/wp-content/uploads/2022/06/Lady-Musgrave-Island-Great-Barrier-Reef.jpg"
        title=" Great Barrier"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Great Barrier
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://cdn.britannica.com/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg"
        title="Petra"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Petra
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the "Rose City."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://files.adventure-life.com/18/32/39/loic-mermilliod-H4ThqacLxgg-unsplash/1300x820.webp"
        title="Salar de Uyuni"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Salar de Uyuni
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Salar de Uyuni, amid the Andes in southwest Bolivia, is the world’s largest salt flat. It’s the legacy of a prehistoric lake that went dry, leaving behind a desertlike, nearly 11,000-sq.-km. landscape of bright-white salt, rock formations and cacti-studded islands.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://archello.s3.eu-central-1.amazonaws.com/images/2021/02/03/fxcollaborative-the-statue-of-liberty-museum-museums-archello.1612343352.0235.jpg"
        title="Statue of Liberty"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Statue of Liberty
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi and its metal framework was built by Gustave Eiffel.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/01/31130741/Great-Wall-Of-China-Length.jpg"
        title="The Great Wall of China"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       The Great Wall of China
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://airpano.ru/files/360video/video-victoria-falls-1/images/image1.jpg"
        title="Victoria Falls"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Victoria Falls
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Victoria Falls is a waterfall on the Zambezi River in southern Africa, which provides habitat for several unique species of plants and animals. It is located on the border between Zambia and Zimbabwe and is one of the world's largest waterfalls, with a width of 1,708 m
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://images.squarespace-cdn.com/content/v1/5f1ab4309bd4b45e29ec3e4b/a3e6eec8-3731-426f-8f43-043650ca1780/Namib+Desert%2C+Sossusvlei%2C+sossusvlei-dunes.jpg"
        title="Sossusvlei"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Sossusvlei
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sossusvlei is a salt and clay pan surrounded by high red dunes, located in the southern part of the Namib Desert, in the Namib-Naukluft National Park of Namibia. The name "Sossusvlei" is often used in an extended meaning to refer to the surrounding area, which is one of the major visitor attractions of Namibia.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="https://cloudforestmonteverde.com/wp-content/uploads/2021/07/Captura-de-Pantalla-2021-07-23-a-las-12.33.31-p.-m.-1024x679.png"
        title="Monteverde Cloud Forest Reserve"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Monteverde Cloud Forest Reserve
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The Monteverde Cloud Forest Reserve is a Costa Rican reserve located along the Cordillera de Tilarán within the Puntarenas and Alajuela provinces. Named after the nearby town of Monteverde and founded in 1972, the Reserve consists of over 10,500 hectares of cloud forest. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   </div>

    </>
  )
}

export default Home