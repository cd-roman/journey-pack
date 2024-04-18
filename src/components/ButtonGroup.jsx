import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsPacked = useItemsStore((state) => state.markAllAsPacked);
  const markAllAsUnpacked = useItemsStore((state) => state.markAllAsUnpacked);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as packed",
      onClick: markAllAsPacked,
    },
    {
      text: "Mark all as unpacked",
      onClick: markAllAsUnpacked,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          onClick={button.onClick}
          buttonType="secondary"
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
