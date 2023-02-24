export const Caption = (props) => {
  const { children } = props;
  return (
    <figcaption className="text-center mb-6 italic text-gray-500 text-base">
      {children}
    </figcaption>
  );
};
