import { useEffect, useState } from "react"
import SectionTitle from "../shared/sectionTitle/SectionTitle"
import MenuIItemCard from "../shared/menuItemCard/MenuIItemCard";
import UseMenu from "../../hooks/useMenu/Usemenu";


const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter(item=>item.category === 'popular');

  return (
    <div>
        <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}>
        </SectionTitle>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {
                popular.map(item=><MenuIItemCard 
                key={item._id}
                item={item}>
                </MenuIItemCard>)
            }
        </div>
        <div className="flex items-center justify-center">
            <button className="bg-amber-400 px-8 py-2 rounded-2xl cursor-pointer mb-20">View Full Menu</button>
        </div>
    </div>
  )
}

export default PopularMenu