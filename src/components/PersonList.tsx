type PersonListPros ={
    names: {
        fname: string,
        lname: string
    }[]
}

export const PersonList = (props : PersonListPros) => {
  return (
    <div>
       {props.names.map((name) =>{
        return(
              <h2>{name.fname} {name.lname} </h2>
            )
       })}
    </div>
  );
};
