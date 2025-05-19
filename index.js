import app from "./app.js";
import ConnectToDB from "./db.js";
try {
  await ConnectToDB();
  app.listen(process.env.PORT || 6500, () => {
    console.log(`Server Listening on port ${process.env.PORT || 6500}`);
  });
} catch (err) {
  console.log(err);
}
