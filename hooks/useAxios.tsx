import React, { useState } from "react";
import { Method } from "axios";
import axios from "axios";

interface UseAxiosProps {
  url: string;
  method: Method;
  result: object;
  token?: string;
}

export const UseAxios = async ({
  url,
  method,
  result,
  token,
}: UseAxiosProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const getData = async () => {};

  try {
    setIsLoading(true);
    let header = { "Content-Type": "application/json" };
    if (token) header["Authorization"] = token;

    let response = await axios({
      url: url,
      method: method,
      data: data,
      headers: header,
    });

    setIsLoading(false);

    console.log(response);
  } catch (err) {
    throw new Error(err);
  }

  return { getData, data, isLoading, error };
};
