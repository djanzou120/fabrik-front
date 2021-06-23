import React, { useState } from "react";
import { Method } from "axios";
import axios from "axios";

interface UseAxiosProps {
  url: string;
  method?: Method;
  input?: object;
  token?: string;
}

export const useAxios = ({
  url,
  method = "GET",
  input,
  token,
}: UseAxiosProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  let header = { "Content-Type": "application/json" };
  if (token) header["Authorization"] = token;

  const getData = () => {
    setIsLoading(true);
    axios({
      url: url,
      method: method,
      data: input,
      headers: header,
    })
      .then((response) => {
        setIsLoading(false);
        setData(response);
      })
      .then((error: any) => {
        setError(error.message);
      });
  };

  return { getData, data, isLoading, error };
};
