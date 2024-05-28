export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p className="counter" data-test="counter">
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
