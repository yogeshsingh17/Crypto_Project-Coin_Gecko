import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom';
import Routing from './components/Routing/Routing.jsx';

const queryClient = new QueryClient();                // QueryClient is a object which is passed to client prop.

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>        
                                                      {/*The client QueryClientProvider component makes sure 
                                                      that react-queries are enables in our whole "app" 
                                                      component. This component takes a client prop which 
                                                      takes a QueryClient object.*/}
      <Routing />
    </QueryClientProvider>
  </BrowserRouter>
)
