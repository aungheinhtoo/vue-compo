import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./assets/main.css";

const app = createApp(App);
library.add(faArrowRight, faArrowLeft);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
