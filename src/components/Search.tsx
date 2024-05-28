import React, { FC, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { SearchIcon } from "lucide-react";

interface Props {
  items: ItemProps[] | null;
}

interface Props {
  items: ItemProps[] | null;
}

const Search: FC<Props> = ({ items }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<ItemProps[] | null>(items);

  const searchByName = async (name: string) => {
    if (!items) return null;
    return items.filter((beer) =>
      beer.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  useEffect(() => {
    const performSearch = async () => {
      const result = await searchByName(query);
      setFilteredItems(result);
    };

    performSearch();
  }, [query, items]);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl flex items-center gap-2 py-4">
        <SearchIcon width={20} /> Search Items
      </p>
      <input
        type="text"
        placeholder="search by name"
        value={query}
        className="p-4 border rounded bg-secondary"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ItemList items={filteredItems} isLoading={!items} />
    </div>
  );
};

export default Search;
