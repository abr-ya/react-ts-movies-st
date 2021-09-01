const fs = require("fs");
fs.writeFileSync("./.env", `API_KEY=${process.env.API_KEY}\n`);
fs.writeFileSync("./_redirects", "/* /index.html 200\n");
