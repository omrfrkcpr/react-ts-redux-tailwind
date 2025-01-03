import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxStore";
import { fetchData } from "../redux/slices/dataSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Posts</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <ul>
          {items.map((item: any) => (
            <li key={item.id} className="border p-2 mb-2 rounded shadow">
              <h2 className="font-semibold">{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
