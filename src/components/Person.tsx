type PersonPros = {
  name: {
    fname: string;
    lname: string;
  };
};
export const Person = (props: PersonPros) => {
  return (
    <div>
      <p>
        {props.name.fname} {props.name.lname} works in Programming Hero!
      </p>
    </div>
  );
};
