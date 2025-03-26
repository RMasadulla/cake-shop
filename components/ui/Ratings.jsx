import { FaRegStar, FaStar } from "react-icons/fa";

export default function Ratings({ rating }) {
  return (
    <div className="flex  gap-[2px]">
      {[...Array(5)].map((_, i) =>
        i < Math.floor(rating || 0) ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-400" />
        )
      )}
    </div>
  );
}
