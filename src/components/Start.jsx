export default function Start({ toggler }) {
  return (
    <div className="container-fluid start-parent">
      <div onClick={() => toggler()} className="start row">
        <h1 className="col-1">S</h1>
        <h1 className="col-1">t</h1>
        <h1 className="col-1">a</h1>
        <h1 className="col-1">r</h1>
        <h1 className="col-1">t</h1>
      </div>
    </div>
  );
}
