function ProjectCard({ card }) {
  return (
    <div className="h-full  mb-8  px-16 gap-12 py-16  rounded-3xl flex-col lg:flex-row shadow-xl flex w-full mx-auto bg-gray-50 dark:bg-gray-800">
      <div className="flex-1  content-center ">
        <h1 className=" text-5xl md:text-5xl lg:text-8xl leading-[1] font-medium mt-8 mb-8">
          {card.heading}
        </h1>
        <div className="flex gap-x-4 mb-8">
          {card.tags.map((tag, i) => (
            <div
              key={i}
              className="px-2 py-1 border dark:border-gray-400 border-gray-900 rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        <p>{card.description}</p>
        <button className="text-start mt-8 px-5 py-2 border border-gray-800 dark:border-gray-400 w-[200px] text-xl rounded-full">
          Find out more &rarr;
        </button>
      </div>
      <div className="flex-1  justify-end ">
        <div className={` h-full    rounded-tr-[200px]`}>
          <video
            src={`/assets/${card.asset}`}
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-cover rounded-tr-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
