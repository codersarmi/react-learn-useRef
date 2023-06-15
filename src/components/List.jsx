import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.userInfos.length > 0 ? (
        <>
          {props.userInfos.map((info) => (
            <Card css={"card-mt"} key={info.email}>
              <div className="list">
                <p>Name : {info.name}</p>
                <p>Live : {info.live}</p>
                <p>email : {info.email}</p>
              </div>
            </Card>
          ))}
        </>
      ) : (
        <Card css={"card-mt"}>
          <div className="list">
            <p>Add a New User !</p>
          </div>
        </Card>
      )}
    </>
  );
};

export default List;
