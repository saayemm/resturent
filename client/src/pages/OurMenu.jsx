import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import image from '../assets/banner.jpg'

const OurMenu = () => {
  return (
    <div>
       <Helmet>
        <title>Urban Flavors | Menu</title>
      </Helmet>
      <Cover img={image} title={"OUR MENU"} subTitle={"Would you like to try a dish?"}></Cover>
    </div>
  )
}

export default OurMenu