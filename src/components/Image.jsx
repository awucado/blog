

export const WideMedia = ({ children, caption, ...rest }) => {
  return (
    <ImageWrapper {...rest}>
      <Constrain>
        {children}
        {/* <Caption mt={4}>{caption}</Caption> */}
      </Constrain>
    </ImageWrapper>
  );
};

export const WideMediaImage = ({ src, alt, caption, ...rest }) => {
  return (
    <WideMedia caption={caption} {...rest}>
      <img src={src} alt={alt} />
    </WideMedia>
  );
};

export const ImageWrapper = ({ children, ...rest }, ref) => {
  const sx = {};
  if (!rest.tight) {
    sx.gridColumn = "1 / 4";
  }
  return (
    <figure className="mt-[4px]" style={sx} {...rest}>
      {children}
    </figure>
  );
};

export const Constrain = (props) => {
  return <div className="max-w-5xl mx-auto">{props.children}</div>;
};

function imageStyle(options = {}) {
  return {
    pointerEvents: "none",
    width: "100%",
    position: "absolute",
    objectFit: "cover",
    ...options,
    opacity: options.opacity ?? 0.05,
    objectPosition: isTop ? "center top" : "center bottom",
  };
}

export function BackgroundImage({ image, options, pos }) {
  const isTop = pos === "top";
  return (
    <img
      src={image}
      className={`absolute left-0 right-0 ${
        isTop ? "top-0" : "bottom-0"
      } h-half-vh lg:h-inherit h-half-vh md:h-screen`}
      style={imageStyle(options)}
    />
  );
}
