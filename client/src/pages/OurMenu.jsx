import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import image from '../assets/banner.jpg'
import UseMenu from '../hooks/useMenu/Usemenu';
import SectionTitle from '../components/shared/sectionTitle/SectionTitle';
import MenuCategory from '../menuComponents/menuCategory/MenuCategory';

const OurMenu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter(item=>item.category==='dessert')
  const pizza = menu.filter(item=>item.category==='pizza')
  const salad = menu.filter(item=>item.category==='salad')
  const soup = menu.filter(item=>item.category==='soup')
  const offered = menu.filter(item=>item.category==='offered')
  return (
    <div>
       <Helmet>
        <title>Urban Flavors | Menu</title>
      </Helmet>
      <Cover img={image} 
      title={"OUR MENU"} 
      subTitle={"Would you like to try a dish?"}>
      </Cover>

      <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}>
      </SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <Cover img={image} 
      title={"DESSERTS"} 
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
      <MenuCategory items={dessert}></MenuCategory>

      <Cover img={image} 
      title={"pizza"} 
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
      <MenuCategory items={pizza}></MenuCategory>

      <Cover img={image} 
      title={"salad"} 
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
      <MenuCategory items={salad}></MenuCategory>

      <Cover img={image} 
      title={"soup"} 
      subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
      </Cover>
      <MenuCategory items={soup}></MenuCategory>

    </div>
  )
}

export default OurMenu