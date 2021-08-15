export default function Answer({ operation, answer }) {
  return (
    <div
      className={
        `answer row d-flex container text-center text-white ` + operation
      }
    >
      <h1>{answer}</h1>
    </div>
  );
}
