import * as React from "react";
import "./App.css";

//#region Type declaration
export interface AppProps { }
export interface AppState {
    client: WorkItemTrackingHttpClient4_1
}
//#endregion

export class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    /**Get rest client for current tfs session */
    getRestClient() {
        return new Promise((fill, error) => {
            VSS.require(["TFS/WorkItemTracking/RestClient"], function (RestClient) {
                const client = RestClient.getClient();
                fill({ client: client });
            });
        });
    }

    render() {
        return <div>Your components</div>
    }
}

export default App;