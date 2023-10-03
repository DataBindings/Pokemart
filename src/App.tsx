import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      </>
    </QueryClientProvider>
  )
}

export default App
