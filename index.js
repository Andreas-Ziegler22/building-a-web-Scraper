const PORT = 8000;
//bringing the 3 dependencies to work
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
