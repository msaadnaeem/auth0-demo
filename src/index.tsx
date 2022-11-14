import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-oh78euad46fj8d45.us.auth0.com"
    clientId="JTx68mP9vK30B7nd1IlV2LIgu4WYwhrT"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);