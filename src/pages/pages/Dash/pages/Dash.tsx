import './Dash.scss';
import {useApi} from "@hooks/useApi";

export const Dash = () => {
    const api = useApi();
    // console.log('smartContract.minDeposit', smartContract.minDeposit)

    return (
        <div>
            DASH
            {/*<div> minDeposit: {api.minDeposit.isLoading ? 'Loading' : api.minDeposit.state} </div>*/}
            {/*<div> minDeposit: {smartContract.maxDeposit.isLoading ? 'Loading' : smartContract.maxDeposit.data} </div>*/}
        </div>
    );
};
