

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="flex items-center justify-center flex-col m-12">
        <p className="text-[#D99904]">{subHeading}</p>
        <h2 className="border-y-2 font-semibold mt-1 text-2xl border-y-gray-300 text-center min-w-[300px] p-2">{heading}</h2>
        
    </div>
  )
}

export default SectionTitle