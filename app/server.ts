import App from "./app";
import { DocsController } from "./modules/documentation/docs.controller";
import { MembershipController } from "./modules/membership/membership.controller";

const app = new App([new DocsController(), new MembershipController()]);
app.listen();
