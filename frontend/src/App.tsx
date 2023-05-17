import Router from './Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css'
import { ExampleProvider, UserProvider } from './context/index'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <UserProvider>
        <ExampleProvider>
          <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ExampleProvider>
      </UserProvider>
    </>
  )
}

export default App
