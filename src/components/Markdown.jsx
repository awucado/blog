export const Caption = (props) => {
  const { children } = props;
  return (
    <figcaption className="text-center mb-6 italic opacity-50 text-base">
      {children}
    </figcaption>
  );
};
