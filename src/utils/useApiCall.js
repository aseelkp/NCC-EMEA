import axios from "axios";
import { useState, useEffect } from "react";
import apiEndpoints from "../apiEndpoints";

const useApiCall = (apiType) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const resData = await axios.get(apiEndpoints[apiType]);
      setData(resData.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const resData = await axios.get(apiEndpoints[apiType]);
        setData(resData.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, [apiType]);

  return [data, getData];
};

export default useApiCall;
