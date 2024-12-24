import React, { useState, useEffect, useContext, useMemo } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { getTodos, postTodos, deleteTodos } from "./data/todos";

const queryClient = new QueryClient();

export const Todos = () => {
  const { data } = useQuery("todos", getTodos);
  const mutation = useMutation(postTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const mutationDelete = useMutation(deleteTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const addTodo = () => {
    mutation.mutate({
      title: "tit",
      body: "desc",
    });
  };

  const remove = (id) => {
    mutationDelete.mutate(id);
  };
  return (
    <div>
      <h1>test</h1>

      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
          </li>
        ))}
      </ul>

      <button onClick={addTodo} disabled={mutation.isLoading}>
        {mutation.isLoading ? "기달" : "항목 추가zz"}
      </button>
    </div>
  );
};
