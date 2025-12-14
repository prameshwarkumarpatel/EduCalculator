type DisplayProps = {
  value: string;
};

export default function Display(props: DisplayProps) {
  const { value } = props;

  return (
    <input
      type="text"
      value={value}
      placeholder="0"
      readOnly
      className="w-55 h-10 text-lg text-right mb-2.5"
    />
  );
}
