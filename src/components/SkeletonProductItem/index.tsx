import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonProductItem = () => {
  return (
    <SkeletonTheme
      baseColor="#dddddd"
      highlightColor="#eeeeee"
      borderRadius={5}
    >
      <div className="mb-5">
        <Skeleton height={180} width={240} className="mb-3" />
        <Skeleton height={20} width={240} />
        <Skeleton height={20} width={180} />
        <Skeleton height={80} width={240} className="mb-2" />
        <Skeleton height={20} width={100} />
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonProductItem;
