export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <p>
        {" "}
        How much was the bill ?{" "}
        <span>
          {" "}
          <input
            type="text"
            value={bill}
            onChange={(e) => onSetBill(+e.target.value)}
          />{" "}
        </span>{" "}
      </p>
    </div>
  );
}
