import React, { useState, useEffect, useContext, useMemo } from "react";
import { QueryClient } from "react-query";
const queryClient = new QueryClient();
export const getTodos = async () => {
  const res = await fetch("http://localhost:4000/posts", {
    // 캐시를 무시하고 항상 새로운 데이터를 가져오도록 설정
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
};

export const postTodos = async (data) => {
  const res = await fetch("http://localhost:4000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to post todo");
  }

  return res.json();
};

// export const deleteTodos = async (data) => {
//   const res = await fetch("http://localhost:4000/posts", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ ...data }),
//   });

//   if (!res.ok) {
//     throw new Error("삭제 에러");
//   }
//   return res.json();
// };
