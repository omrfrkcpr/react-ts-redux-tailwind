import { Provider } from "react-redux";
import { store } from "./redux/store";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense, useState } from "react";
import AppRouter from "./routes/AppRouter";

function App() {
  // const [user, setState] = useState<User | null>(null);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Suspense
          fallback={<div className="text-center text-blue-500">Loading...</div>}
        >
          <AppRouter />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
