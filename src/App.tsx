import { useState, useEffect } from "react";
import Articles from "./components/Articles";

const apiUrl =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-09-30&sortBy=publishedAt&apiKey=9507234ef8664cf0aced8b2b7de9bd5c";

const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((articleData) => setDatas(articleData));
  }, []);

  console.log("datas", datas);

  return (
    <div className="px-7 xl:px-20">
      <Articles {...(datas as any)} />
    </div>
  );
};

export default App;
