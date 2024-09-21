interface ProductDetailsProps {
  title: string;
  placeholder: string | undefined;
}
const ProductDetailsComponent = ({
  title,
  placeholder,
}: ProductDetailsProps) => {
  return (
    <div className="text-sm placeholder:font-medium disabled:opacity-100 placeholder:text-black border border-primary-dark_grey py-3 rounded-xl px-3">
      <p className="text-xs">{title}</p>
      <p className="text-lg font-semibold">
        {placeholder ? placeholder : "Place holder"}
      </p>
    </div>
  );
};

export default ProductDetailsComponent;
