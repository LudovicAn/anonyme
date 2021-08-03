import { useReducer } from "react";
import axios from "axios";

import { API } from "./api";

const useFetch = (url, params = {}, type = "get") => {
  const init = {
    data: [],
    loading: false,
    error: false,
    success: false,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...init, loading: true };
      case "FETCHED":
        return { ...init, loading: false, data: action.payload, success: true };
      case "FETCH_ERROR":
        return { ...init, loading: false, error: true };
      case "INIT":
        return { ...init, data: action.payload, success: false };
      default:
        return state;
    }
  }, init);

  let source = axios.CancelToken.source();

  const load = async (data, methode, resType = "json", noty = false) => {
    dispatch({ type: "FETCHING" });

    return await API(url, {
      data: data || params,
      method: methode || type,
      cancelToken: source.token,
      responseType: resType,
    })
      .then((resp) => {
        dispatch({ type: "FETCHED", payload: resp.data });
        return true;
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          if (err?.response?.status === 498) {
          }
          dispatch({ type: "FETCH_ERROR", payload: err?.response?.data });
        }
        return false;
      });
  };

  return [state, load, source];
};

export default useFetch;
