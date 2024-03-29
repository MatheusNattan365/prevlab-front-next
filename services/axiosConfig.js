import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3333/api";
axios.defaults.baseURL =
    process.env.NEXT_PUBLIC_PREVLAB_HEROKU_URL ||
    process.env.NEXT_PUBLIC_PREVLAB_ONRENDER_URL ||
    "http://localhost:3333/api";

export { axios };
