const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-4 w-full mx-auto max-w-[1200px]">{children}</div>;
};

export default Wrapper;
