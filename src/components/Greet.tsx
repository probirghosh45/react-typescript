type GreetingProps = {
  name: string;
  dayCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetingProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `I'm ${props.name}, Start Learning TypeScript ! ${props.dayCount} Days Passed!
    `
          : "Please Login !"}
      </h2>
    </div>
  );
};
