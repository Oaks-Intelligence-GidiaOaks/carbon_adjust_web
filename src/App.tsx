import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import Router from "./router/router";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router} />
      <Toaster
        toastOptions={{ duration: 7000, className: "z-[10000000000]" }}
      />
    </QueryClientProvider>
  );
}

export default App;
