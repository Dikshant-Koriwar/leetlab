import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";


dotenv.config({
    path: "backend\.env",
}); 
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World! This is the backend server of the project LeetLab.");
});

//auth routes
app.use("/api/v1/auth", authRoutes);


app.listen(port, () => {
  console.log(`Server running on 😁-> http://localhost:${port}`);
});
