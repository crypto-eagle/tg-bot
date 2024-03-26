import "./App.css";
import {TonConnectButton} from "@tonconnect/ui-react";
import styled from "styled-components";
import {Button, FlexBoxCol, FlexBoxRow} from "./components/styled";
import {useTonConnect} from "./hooks/useTonConnect";
import {CHAIN} from "@tonconnect/protocol";
import "@twa-dev/sdk";
import {SmartContract} from "./components/SmartContract";

const StyledApp = styled.div`
    background-color: #e8e8e8;
    color: black;

    @media (prefers-color-scheme: dark) {
        background-color: #222;
        color: white;
    }
    min-height: 100vh;
    padding: 20px 20px;
`;

const AppContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

function App() {
    const {network} = useTonConnect();

    return (
        <StyledApp>
            <AppContainer>
                <FlexBoxCol>
                    <FlexBoxRow>
                        <TonConnectButton/>
                        <Button>
                            {network
                                ? network === CHAIN.MAINNET
                                    ? "mainnet"
                                    : "testnet"
                                : "N/A"}
                        </Button>
                    </FlexBoxRow>
                    <SmartContract/>
                </FlexBoxCol>
            </AppContainer>
        </StyledApp>
    );
}

export default App;
