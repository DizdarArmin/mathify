export default function Operations({ handler, operation }) {
  return (
    <div className="container text-white  operations">
      <div className="center row">
        <div
          className="col text-center addition "
          onClick={() => handler("addition")}
        >
          <i className="fas fa-plus fa-2x"></i>
        </div>

        <div
          className="col text-center subtraction "
          onClick={() => handler("subtraction")}
        >
          <i className="fas fa-minus fa-2x"></i>
        </div>
        <div
          className="col text-center division"
          onClick={() => handler("division")}
        >
          <i className="fas fa-divide fa-2x"></i>
        </div>
        <div
          className="col text-center multiplication"
          onClick={() => handler("multiplication")}
        >
          <i className="fas fa-times fa-2x"></i>
        </div>
      </div>
    </div>
  );
}
