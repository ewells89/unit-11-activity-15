// 1. Require express
const express = require("express");
​
// 2. Create instance of express
const app = express();
​
// 3. Set the PORT
const PORT = process.env.PORT || 3000;
​
// 5. Add Middleware (this is minimum)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
app.get("/api/config", (req, rest) => {
    rest.json({
      success: true,
    });
  });
​
// 4. Listen on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});