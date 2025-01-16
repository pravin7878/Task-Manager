require("dotenv").config();
const cors = require("cors")
const express = require("express");
const connectToDB = require("./src/config/db");
const userRouter = require("./src/routes/user.route");
const todoRouter = require("./src/routes/todo.routes");
const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://todo-app-pk.vercel.app", // Production frontend
];

// CORS middleware
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
};

app.use(cors(corsOptions));


app.get("/" , (req,res)=>{
    res.send("wellcome to server")
})
app.use(express.json())
app.use("/users" , userRouter)
app.use("/todos" , todoRouter)

app.listen(port , async()=>{
console.log(`server is runing on http://localhost:${port}`);
try {
    await connectToDB()
    console.log("DB Connected Success");
} catch (error) {
    console.log("DB connection failld",error);
}
})