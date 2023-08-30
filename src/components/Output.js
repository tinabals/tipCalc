export default function Output({ bill, tip }) {
  return (
    <div>
      <strong>
        {" "}
        You pay ${bill + tip} (${bill} + ${tip} tip){" "}
      </strong>
    </div>
  );
}
