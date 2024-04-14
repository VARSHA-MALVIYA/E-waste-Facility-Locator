

const GadgetCard = ({cardData}) => {
    const {img,description,title} = cardData;
  return (
    <div class="group shadow-md w-[30%] max-w-sm rounded overflow-hidden  hover:cursor-pointer hover:bg-sky-100">
        <img class="w-full h-[45%] object-cover group-hover:scale-105 delay-100 duration-300 transition-all  " src={img} alt="img" />
        <div class="px-6 py-4 transition-all duration-300 group-hover:bg-sky-900 group-hover:text-white/90">
            <div class="font-bold text-xl mb-2 text-center">{title}</div>
            <p class="text-gray-700 text-sm group-hover:text-white/90">
                {description}
            </p>
        </div>
    </div>
  )
}

export default GadgetCard