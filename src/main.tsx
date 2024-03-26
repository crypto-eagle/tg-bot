import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

import App from './App'
import './index.css'

const manifestUrl = 'tonconnect-manifest.json';
const queryClient = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus: false}},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </TonConnectUIProvider>
    </React.StrictMode>,
)
