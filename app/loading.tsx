const Loading = () => {
  return (
    <div className="h-full min-h-[600px] w-screen flex flex-col items-center justify-center">
      <div className="h-10 w-10 bg-gray-600 relative rounded-full after:absolute isolate z-10 after:w-full after:h-full after:bg-white after:top-0 after:left-0 after:rounded-full after:border-b-2 after:border-iyellow after:animate-spin" />
      <p className="py-4 text-gray-500 font-light">AIIJ is loading...</p>
    </div>
  );
};

export default Loading;
