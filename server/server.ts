import { app } from "./app";
import connectDB from "./utils/db";
require("dotenv").config();
//Create Server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected with PORT ${process.env.POST}`);
  connectDB();
});
