const ColorList = () => {
  const colors: string[] = ["orange", "blue", "red", "green", "purple"];

  return (
    <div>
      {colors.map((color: string, index: number) => (
        <li key={index}>{color}</li>
      ))}
    </div>
  );
};

export default ColorList;
