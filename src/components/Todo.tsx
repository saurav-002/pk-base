const Todo = ({
    title,
    description,
    isDone,
  }: {
    title: string;
    description: string;
    isDone: boolean;
  }) => {
    return (
      <div className="group z-[2] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-2xl font-semibold capitalize`}>
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
        {isDone ? (
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Done</p>
        ) : (
          <p className="m-0 max-w-[30ch] text-sm opacity-50 text-red-300">
            Not Done
          </p>
        )}
      </div>
    );
  };
  
  export default Todo;
  