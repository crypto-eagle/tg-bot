import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {TonConnectUIProvider} from "@tonconnect/ui-react";

import {ColorModeScript} from "@chakra-ui/react";
import {chakraCustomTheme as theme} from "./core/providers/chakra-ui/chakra.custom-theme";
import {App} from "./pages/App";
import {ChakraUIProvider} from "@core/providers/chakra-ui/chakra.provider";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const manifestUrl = window.location.origin + '/tonconnect-manifest.json';
// const manifestUrl =
//     "https://alefmanvladimir.github.io/my-twa/tonconnect-manifest.json";
const queryClient = new QueryClient({
    defaultOptions: {queries: {refetchOnWindowFocus: false}},
});

console.debug('import.meta.env.SMART_CONTRACT', import.meta.env);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>

        <ChakraUIProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}>
                <TonConnectUIProvider manifestUrl={manifestUrl}>
                    <QueryClientProvider client={queryClient}>
                        <App/>
                    </QueryClientProvider>
                </TonConnectUIProvider>
            </DevSupport>
        </ChakraUIProvider>
    </>,
)
