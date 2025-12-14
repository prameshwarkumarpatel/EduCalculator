export default function Button({
  label,
  onClick,
}: {
  label: string;
  onClick: (val: string) => void;
}) {
  return <button onClick={() => onClick(label)}>{label}</button>;
}
