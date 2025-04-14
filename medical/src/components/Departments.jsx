import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import imge1 from "../assets/kenny-eliason-MEbT27ZrtdE-unsplash.jpg"
import imge2 from "../assets/gyne.jpg";
import imge3 from '../assets/andrea-de-santis-CzcpgRjLK5o-unsplash.jpg';
import imge4 from '../assets/general.jpg';
import imge5 from '../assets/filip-rankovic-grobgaard-joILn6p_oeM-unsplash.jpg';
import imge6 from '../assets/pediatric.jpg';

export default function Departments() {
  return (
    <Box style={{backgroundColor: "#54473F"}} className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
      {/* Headline */}
      <motion.h2
        className="text-center text-3xl font-bold mb-8"
        style={{color: "#E9EED9"}}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }} 
      >
        Our Departments
      </motion.h2>

      {/* Image List */}
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, index) => (
          <motion.div
            key={item.img}
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            <ImageListItem>
              {/* Link to department detail page */}
              <Link to={`/${item.title}`}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={`${item.title}`}
                  loading="lazy"
                  className="w-full"
                  style={{ cursor: 'pointer' }} 
                />
              </Link>
              <motion.div
                initial={{ opacity: 0, y: -50 }} 
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
              >
                <ImageListItemBar
                  position="below"
                  className='text-center my-2'
                  style={{color: "#E9EED9"}}
                  title={item.author} // Display the title here
                  // subtitle={<span>by: {item.author}</span>} // Display author below title, if needed
                  sx={{
                    '& .MuiImageListItemBar-title': {
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                    },
                  }}
                />
              </motion.div>
            </ImageListItem>
          </motion.div>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: imge1,
    title: 'HeartDiseasesPage',
    author: 'Cardiologist',
  },
  {
    img: imge4,
    title: 'Heart2',
    author: 'GeneralPhysician',
  },
  {
    img: imge2,
    title: 'Heart3',
    author: 'Gynaecologist',
  },
  {
    img: imge5,
    title: 'Heart4',
    author: 'Dentist',
  },
  {
    img: imge3,
    title: 'Heart5',
    author: 'Orthologist',
  },
  {
    img: imge6,
    title: 'Heart6',
    author: 'Pediatrics',
  },
];
