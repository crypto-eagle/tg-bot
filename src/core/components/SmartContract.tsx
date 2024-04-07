import {TonConnectButton} from "@tonconnect/ui-react";

import {
    Card,
    FlexBoxCol,
    FlexBoxRow,
    Ellipsis,
    Button,
} from "./styled";
import {useTonConnect} from "@hooks/useTonConnect";
import {useMainContract} from "@hooks/useMainContract";

export function SmartContract() {
    const {connected} = useTonConnect();
    const {address, minDeposit} = useMainContract();

    return (
        <div className="Container">
            <TonConnectButton/>

            <Card>
                <FlexBoxCol>
                    <h3>Counter</h3>
                    <FlexBoxRow>
                        <b>Address</b>
                        <Ellipsis>{address}</Ellipsis>
                    </FlexBoxRow>
                    <FlexBoxRow>
                        <b>Value</b>
                        <div>{minDeposit ?? "Loading..."}</div>
                    </FlexBoxRow>
                    <Button
                        disabled={!connected}
                        className={`Button ${connected ? "Active" : "Disabled"}`}
                        // onClick={() => {
                        //     sendIncrement();
                        // }}
                    >
                        Increment
                    </Button>
                </FlexBoxCol>
            </Card>
        </div>
    );
}
