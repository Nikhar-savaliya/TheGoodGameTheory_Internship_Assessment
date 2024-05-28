import { Loader2 } from "lucide-react";
import { FC } from "react";
import NoImageFound from "@/assets/NoImageFound.jpg";

type Props = {
  items: ItemProps[] | null;
  isLoading: boolean;
};

const ItemList: FC<Props> = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-6 w-6  animate-spin" />
      </div>
    );
  }

  if (!items) {
    return <p>OOPS! No Items Found</p>;
  }

  return (
    <div className="grid grid-cols-3 mx-auto w-fit gap-4">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-2 p-2 items-start justify-normal border rounded max-w-xl"
          >
            <img
              src={item.image}
              onError={(e: any) => (e.target.src = NoImageFound)}
              className="max-w-36 h-full object-cover"
            />
            <div>
              <h1 className="my-3 text-lg font-bold">{item.name}</h1>
              <p className="font-bold text-emerald-900">{item.price}</p>
              <p className="my-2">
                Avarage Rating: {item.rating.average.toPrecision(3)}
              </p>
              <p className="my-2">Reviews: {item.rating.reviews}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
