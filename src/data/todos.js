import React, { useState, useEffect, useContext, useMemo } from "react";
import { QueryClient } from "react-query";
const queryClient = new QueryClient();
export const getTodos = async () => {
  const res = await fetch("http://localhost:4000/posts");

  return res.json();
};

export const postTodos = async (data) => {
  console.log(data);
  const res = await fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });
  console.log(res);
  return res.json();
};

export const deleteTodos = async (data) => {
  const res = await fetch("http://localhost:4000/posts", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });

  if (!res.ok) {
    throw new Error("삭제 에러");
  }
  return res.json();
};
