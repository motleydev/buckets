import React from "react";

type Props = {};

export default function ItemInput({}: Props) {
  const [newItem, setNewItem] = React.useState("");

  const handleInsert = async () => {
    await fetch("/api/createItem", {
      method: "POST",
      body: JSON.stringify({
        text: newItem,
      }),
    });
    setNewItem("");
  };

  return (
    <div className="flex gap-2 h-10 self-end">
      <input
        className="p-2 rounded-lg focus:outline-purple-400 focus:bg-white bg-transparent outline-2 outline-dashed outline-purple-200"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => {
          e.preventDefault();
          setNewItem(e.target.value);
        }}
      />
      {newItem.length > 0 && (
        <button
          onClick={handleInsert}
          className="rounded-lg bg-purple-600 p-2 text-white"
        >
          Add Item
        </button>
      )}
    </div>
  );
}
