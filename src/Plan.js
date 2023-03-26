function Plan(props) {
  return (
    <>
      <li className="shadow p-d my-3 col-sm-9">{props.value}</li>
      <button
        className="btn btn-danger my-2 col-sm-2 offset-1"
        onClick={() => {
          props.sendData(props.id);
        }}
      >
        REMOVE
      </button>
      {/* <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."></input> */}
    </>
  );
}

export default Plan;
