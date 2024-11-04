const UserComponent = (props) => {
  return (
    <a href="#" className="list-group-item list-group-item-action" key={props.user.username}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 text-primary">
          {props.user.first_name} {props.user.last_name}
        </h5>
        <small className="text-secondary">3 days ago</small>
      </div>
      <p className="mb-1">{props.user.username}</p>
    </a>
  );
};

export default UserComponent;
