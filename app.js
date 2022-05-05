const express = require("express");

const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
