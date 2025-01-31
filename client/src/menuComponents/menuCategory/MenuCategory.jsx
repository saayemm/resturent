
import MenuIItemCard from '../../components/shared/menuItemCard/MenuIItemCard'

const MenuCategory = ({items}) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-12 mt-20 mx-auto">
         {
                items.map(item=><MenuIItemCard
                key={item._id}
                item={item}>
                </MenuIItemCard>)
            }
    </div>
  )
}

export default MenuCategory