import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonTitle = () => {
  return (
    <SkeletonTheme
      baseColor="#dddddd"
      highlightColor="#eeeeee"
      borderRadius={5}
    >
      <Skeleton height={35} width={330} className="mb-3" />
    </SkeletonTheme>
  );
};

export default SkeletonTitle;
