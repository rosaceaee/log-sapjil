import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, postTodos, deleteTodos } from "./data/todos";
export const Todos = () => {
  const queryClient = useQueryClient();
  const { data, refetch } = useQuery("todos", getTodos);

  const mutation = useMutation(postTodos, {
    onSuccess: async () => {
      // 쿼리 무효화 후 즉시 새로운 데이터 fetch
      await queryClient.invalidateQueries("todos");
      await refetch();
    },
  });

  const addTodo = async () => {
    const existingIds = new Set(data?.map((todo) => todo.id) || []);
    let newId = 1;

    while (existingIds.has(newId)) {
      newId++;
    }

    try {
      await mutation.mutateAsync({
        id: newId,
        title: `title ${newId}`,
        body: `desc ${newId}번째 `,
      });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
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
        {mutation.isLoading ? "기달" : "항목 추가"}
      </button>
    </div>
  );
};
