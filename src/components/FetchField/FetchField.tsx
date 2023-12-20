import { useState, useEffect } from "react";

type Location = {
  type: string;
  id: string;
  latitude: number;
  longitude: number;
};

type Prod = {
  suburban: boolean;
  subway: boolean;
  tram: boolean;
  bus: boolean;
  ferry: boolean;
  express: boolean;
  regional: boolean;
};

type Dataset = {
  type: string;
  id: string;
  name: string;
  location: Location;
  products: Prod;
  distance: number;
};

const FetchField = () => {
  const [apiData, setApiData] = useState<Dataset[]>([]);
  useEffect(() => {
    const fetchData = () => {
      const coordinates = { longitude: 13.32308, latitude: 52.51811 };
      const fetchUrl = `https://vbb-rest.vercel.app/locations/nearby?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&results=5&language=en`;
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  });
  return (
    <div style={{ width: "80%", margin: "2rem auto" }}>
      <h4>Nearest stops to Salzufer</h4>
      {apiData &&
        apiData.length &&
        apiData.map((dataset) => (
          <div
            key={dataset.id}
            style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ flex: "1 0 15rem" }}>{dataset.name}</div>
            <div style={{ flex: "0 0 8rem" }}>{dataset.distance} m</div>
          </div>
        ))}
    </div>
  );
};

export default FetchField;
