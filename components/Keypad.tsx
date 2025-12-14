type KeypadProps = {
  onClick: (value: string) => void;
};

export default function Keypad({ onClick }: KeypadProps) {
  const keys = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="grid grid-cols-4 gap-1.5">
      {keys.map((key) => (
        <button key={key} onClick={() => onClick(key)} className="p-2 bg-gray-200 hover:bg-gray-300">
          {key}
        </button>
      ))}
    </div>
  );
}
