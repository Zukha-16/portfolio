import "./Skeleton.scss";

function Skeleton({
  title,
  subtitle,
  titleProsition = "center",
  minHeight,
  children,
}) {
  return (
    <div className="content__layout">
      <div className={`content__container ${minHeight ? "minHeight" : null}`}>
        <div className={`skeleton ${titleProsition}`}>
          <p>{subtitle}</p>
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
