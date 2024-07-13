const express = require("express");
const app = express();
const port = 3040;
const path = require("path");
const fs = require("fs");
app.get("/", function (request, response) {
  console.log("Home page visited!");
  console.log(request?.originalUrl);
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(
      /\$OG_TITLE/g,
      "Leading Digital Business Transformation"
    );
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Digital Business Transformation is less about technology and more about aligning digital strategy with business strategy to create a competitive advantage."
    );
    data = data.replace(
      /\$OG_IMAGE/g,
      "https://transformtech.ai/assets/AI-BBRsfoX5.jpg"
    );
      data = data.replace(
      /\$OG_FAV/g,
      "https://transformtech.ai/Fav/favicon-transfrom-tech.ico"
    );
    result = data.replace(
      /\$OG_URL/g,
      "https://transformtech.ai/digital-marketing-strategies"
    );
   
    response.send(result);
  });
});
app.get("/ciitamilnadu", function (request, response) {
  console.log("Home page visited!");
  console.log(request?.originalUrl);
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(
      /\$OG_TITLE/g,
      "Digital Marketing Strategies by CII - Tamil Nadu"
    );
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Six master classes over a period of six days will help you master modern marketing strategies that can be readily applied to your organisation."
    );
    data = data.replace(
      /\$OG_IMAGE/g,
      "https://transformtech.ai/assets/AI-BBRsfoX5.jpg"
    );
        data = data.replace(
      /\$OG_FAV/g,
      "https://transformtech.ai/Fav/favicon-transfrom-tech.ico"
    );
    result = data.replace(
      /\$OG_URL/g,
      "https://transformtech.ai/digital-marketing-strategies"
    );
    response.send(result);
  });
});
app.get("/ciicoimbatore", function (request, response) {
  console.log("Home page visited!");
  console.log(request?.originalUrl);
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(
      /\$OG_TITLE/g,
      "Digital Marketing Strategies by CII - Coimbatore"
    );
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Six master classes over a period of six days will help you master modern marketing strategies that can be readily applied to your organisation."
    );
    data = data.replace(
      /\$OG_IMAGE/g,
      "https://transformtech.ai/assets/AI-BBRsfoX5.jpg"
    );
    
        data = data.replace(
      /\$OG_FAV/g,
      "https://transformtech.ai/Fav/favicon-transfrom-tech.ico"
    );
    result = data.replace(
      /\$OG_URL/g,
      "https://transformtech.ai/digital-marketing-strategies"
    );
    response.send(result);
  });
});
app.get("/msccloud", function (request, response) {
  console.log("Home page visited!");
  console.log(request?.originalUrl);
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "M.Sc. Cloud and Network Computing");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "UK Masters Degree starts at RVS, Coimbatore...."
    );
    data = data.replace(/\$OG_IMAGE/g, "https://rvscas.ac.in/logo192.png");
        data = data.replace(
      /\$OG_FAV/g,
      "https://transformtech.ai/Fav/favicon-rvs.ico"
    );
    result = data.replace(/\$OG_URL/g, "https://transformtech.ai/msccloud");
    response.send(result);
  });
});
app.get("/mscbusinesscomputing", function (request, response) {
  console.log("Home page visited!");
  console.log(request?.originalUrl);
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, "M.Sc. Business Computing");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "UK Masters Degree starts at RVS, Coimbatore...."
    );
    data = data.replace(/\$OG_IMAGE/g, "https://rvscas.ac.in/logo192.png");
        data = data.replace(
      /\$OG_FAV/g,
      "https://transformtech.ai/Fav/favicon-rvs.ico"
    );
    result = data.replace(/\$OG_URL/g, "https://transformtech.ai/mscbusinesscomputing");
    response.send(result);
  });
});
app.use(express.static(path.join(__dirname, "dist")));
app.get("*", function (request, response) {
  console.log("Hello");
  const filePath = path.resolve(__dirname, "./dist", "index.html");
  // const filePath = path.resolve(__dirname, './build', 'index.html')
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(
      /\$OG_TITLE/g,
      "Leading Digital Business Transformation"
    );
        data = data.replace(
      /\$OG_FAV/g,
      "https://transformtech.ai/Fav/favicon-transfrom-tech.ico"
    );
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "Digital Business Transformation is less about technology and more about aligning digital strategy with business strategy to create a competitive advantage."
    );
    result = data.replace(/\$OG_IMAGE/g, "https://rvscas.ac.in/logo192.png");
    response.send(result);
  });
  // response.sendFile(filePath);
});
app.listen(port, () => console.log(`http://localhost:${port}`));
