import { useState, useEffect } from "react";
import Articles from "./components/Articles";

const apiUrl = import.meta.env.VITE_ARTICLES_API_URL;

const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((articleData) => setDatas(articleData));
  }, []);

  console.log("datas", datas);

  return (
    <div className="p-7 xl:p-20">
      <Articles {...(datas as any)} />
    </div>
  );
};

export default App;
