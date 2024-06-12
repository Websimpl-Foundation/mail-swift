import { useState } from "react";
import { Box } from "lucide-react";
import PropTypes from "prop-types";

function Card({ title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-64 h-70 bg-white rounded-lg p-4 mt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ filter: isHovered ? "brightness(0.8)" : "brightness(1)" }}
    >
      <div className="flex items-center justify-between">
        <div>{title}</div>
        {isHovered && (
          <a href="#" className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg pointer-events-none"
            style={{ zIndex: 1 }}>View</a>
        )}
      </div>
      <div className="mt-2">
        <img src={description} alt={title} width={560} height={742} />
      </div>
      <div
        className="absolute top-0 right-0 p-1 bg-white rounded-full cursor-pointer"
        onClick={() => console.log("Edit clicked")} // Add your edit logic here
      >
        <Box size={20} />
      </div>
    </div>
    // <div className="relative w-64 h-70 bg-white rounded-lg p-4 mt-8">
    //     <div className="flex items-center justify-between">
    //         <div>{title}</div>
    //         <div
    //             className="absolute top-0 right-0 p-1 bg-white rounded-full cursor-pointer"
    //             onClick={() => setIsHovered(true)}
    //             onDoubleClick={() => setIsHovered(false)}
    //         >
    //             <Box size={20} />
    //         </div>
    //     </div>
    //     <div className="mt-2"><img src={description} alt={title} width={560} height={742} /></div>
    //     {isHovered && (
    //         <div className="absolute bottom-0 right-0">
    //             <Button variant="primary" className="mr-2">Show</Button>
    //             <Button variant="primary">Edit</Button>
    //         </div>
    //     )}
    // </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
