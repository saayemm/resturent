

const MenuIItemCard = ({item}) => {

    const {image,name, recipe, price} = item

  return (
    <div className="flex gap-4 border-2 border-amber-500 p-8 rounded-2xl">
        <img src={image} alt="" />
        <div>
            <h3 className="text-2xl">{name}---------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-2xl text-[#BB8506]">${price}</p>
       
    </div>
  )
}

export default MenuIItemCard