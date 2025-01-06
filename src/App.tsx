import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary";
// import { Suspense, useState } from "react";
import AppRouter from "./routes/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  // const [user, setState] = useState<User | null>(null);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          {/* <Suspense
            fallback={
              <div className="text-center text-blue-500">Loading...</div>
            }
          > */}
          <AppRouter />
          {/* </Suspense> */}
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
