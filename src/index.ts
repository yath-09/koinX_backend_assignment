import express,{Express} from "express";
import { closeDb, connectToDb } from "./db/config";
import router  from "./router/routes";


const app:Express = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello, TypeScript!");
});



const startServer = async () => {
  try {
    await connectToDb();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error: any) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
};

// Gracefully handle application shutdown
process.on("SIGINT", async () => {
  console.log("SIGINT signal received. Closing MongoDB connection...");
  await closeDb();
  process.exit(0);
});

startServer();
