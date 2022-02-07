import Skeleton from "./skeleton";
import "./skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton__wrapper">
      <Skeleton type="thumbnail" />
      <Skeleton type="text-lg" />
      <Skeleton type="text-md" />
      <Skeleton type="text-sm" />
      <div className="animation__wrapper">
        <div className="animation"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
