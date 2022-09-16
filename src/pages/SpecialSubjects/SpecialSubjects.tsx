import React, { useEffect, useState } from "react";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getData } from "../../loadData";
import "./SpecialSubjects.scss";

interface IData {
  [key: string]: any;
}

export default function SpecialSubjects() {
  const [programs, setPrograms] = useState<IData[]>([]);
  const [loading, setLoading] = useState<string>("");
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading("Загрузка...");
    getData()
      .then((res) => {
        setPrograms(res);
        setLoading("");
      })  
      .catch((err) => {
        setError(err.message)
        setLoading("");
      });
  }, []);

  const allPrograms = programs?.slice(0, 5);

  return (
    <div className="s">
      <div className="s-wrapper">
        <Header />
        {error && <h1>{error}</h1>}
        {loading && <h1>{loading}</h1>}
        {allPrograms &&
          allPrograms.map((program) => (
            <Content
            title={program.title} specializedSubjects={program.specializedSubjects}   />
          ))}
        <Footer />
      </div>
    </div>
  );
}
