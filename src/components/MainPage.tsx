import { useEffect, useState } from "react";
import { Character } from "../type";
import { Card } from "./Card";

export const MainPage = () => {
  const [data, setData] = useState<Array<Character>>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fechData = async () => {
      const response = await fetch("https://breakingbadapi.com/api/characters");
      const json = (await response.json()) as Array<Character>;
      setData(json);
    };
    fechData();
  }, []);

  const filter = (searchBy: string) => {
    setSearch(searchBy);
    console.log(search);
  };

  return (
    <div className="">
      <input
        onChange={(e) => filter(e.target.value)}
        type="text"
        placeholder="Walter White"
        className="form-control"
      />
      <div className="row">
        {data.map((item, index) => {
          if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return (
              <div className="col-md-4 col-xs-12" key={index}>
                <Card personaje={item}></Card>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
