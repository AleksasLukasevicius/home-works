import axios from "axios";
import { useEffect, useState } from "react";
import { TableContainer } from "./Table.styled";

export const Table = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("https://believed-shore-vanadium.glitch.me/")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeData = (id: any) => {
    const shouldDelete = window.confirm("Are you sure want to delete?");

    if (!shouldDelete) {
      return;
    }
    axios
      .delete(`https://believed-shore-vanadium.glitch.me/${id}`)
      .then((response) => {
        alert(`${response.data.msg}`);
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <TableContainer>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Number of People</th>
              <th>Price, €</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr
                onClick={() => {
                  removeData(order.id);
                }}
                key={order.id}
              >
                <td>{order.id}</td>
                <td>{order.people}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      )}
    </>
  );
};
