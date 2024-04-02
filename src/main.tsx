import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

import {ColorModeScript} from "@chakra-ui/react";
import {chakraCustomTheme as theme} from "./core/providers/chakra-ui/chakra.custom-theme";
import {App} from "./pages/App";
import {ChakraUIProvider} from "./core/providers/chakra-ui/chakra.provider";

const manifestUrl = 'tonconnect-manifest.json';
const queryClient = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus: false}},
});


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>

        <ChakraUIProvider>
            <TonConnectUIProvider manifestUrl={manifestUrl}>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </TonConnectUIProvider>
        </ChakraUIProvider>
    </React.StrictMode>,
)
