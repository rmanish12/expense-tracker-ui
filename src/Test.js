import React from "react";
import { useIntl } from "react-intl";
import { Routes, Route } from "react-router-dom";

const Base = () => {
  return <>Base Page</>;
};

const Home = () => {
  return <>Home Page</>;
};

const Test = () => {
  const intl = useIntl();
  return (
    <div>
      {intl.formatMessage({ id: "hello" })}
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Test;
