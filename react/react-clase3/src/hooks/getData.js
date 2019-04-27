import React, { useState, useEffect } from "react";

const useGetData = url => {
  const [dataState, changeDataState] = useState([]);
  //const apiUrl = "http://api.tvmaze.com/schedule";
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        changeDataState(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return dataState;
};

export default useGetData;
