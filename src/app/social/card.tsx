function Card({ name = '' }) {
  return (
    <div className="w-full border-4 border-foreground rounded-full p-4 flex items-center justify-center bg-secondary text-lg font-bold">
      {name}
    </div>
  );
}

export default Card;
