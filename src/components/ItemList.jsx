import EmptyView from "./EmptyView";

export default function ItemList() {
  return (
    <>
      <ul className="item-list">
        <EmptyView />
      </ul>
    </>
  );
}
