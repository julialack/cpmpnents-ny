function Container({ children, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 shadow-xl p-10 rounded-md bg-stone-400">
      <h2 className="font-bold text-2xl">{title}</h2>
      {children}
    </div>
  );
}

export default Container;
