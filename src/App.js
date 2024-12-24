import React, { useState, useEffect, useContext, useMemo } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { getTodos, postTodos, deleteTodos } from "./data/todos";
import { posts } from "./testdata.json";
import logo from "./logo.svg";
import "./App.css";
import "./style/index.scss";

import { Numbers } from "./compo/Numbers";
import AnimateExample from "./compo/AnimateExample";
import { Todos } from "./Todos";
const queryClient = new QueryClient();

function App() {
  // function Computed() {
  //   useMemo(() => {
  //     console.log("computed val" + num * 2);
  //     return num * 2;
  //   }, [num]);
  // }

  // Computed();

  // const computedValue = useMemo(() => {
  //   console.log("computed val" + num * 2);
  //   return num * 2;
  // }, [num]);

  // const ell = { num, setNum, computedValue };

  return (
    <div className="App">
      {/* <Main {...ell} /> */}

      {/* <a
        href="https://kauth.kakao.com/oauth/authorize?client_id=16e76d0eaf0b9e41ee3a1894255e077d&redirect_uri=https://localhost&response_type=code&scope=talk_message"
        target="_blank"
      >
        btn
      </a> */}

      {/* <Numbers /> */}

      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </div>
  );
}

export default App;
