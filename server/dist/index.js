import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
// app.use(cors());
app.listen(process.env.PORT, () => {
    console.log(`SERVsd ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map