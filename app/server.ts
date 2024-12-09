import App from "./app";
import docs from "./modules/documentation/docs.controller";
import membership from "./modules/membership/membership.controller";

const app = new App([membership, docs]);
app.listen();
