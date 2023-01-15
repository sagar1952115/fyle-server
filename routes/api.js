const express = require("express");
const router = express.Router();
const https = require("https");

router.get("/github/userinfo/:user/repos", async function (req, res) {
  const user = req.params.user;
  const options = {
    hostname: "api.github.com",
    path: "/users/" + user + "/repos",

    headers: {
      Authorization:
        "Bearer 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",

      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
  };
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("Something wnent wrong!");
    });
});

router.get("/github/userinfo/:user", async function (req, res) {
  const user = req.params.user;
  const reponame = req.params.reponame;
  const options = {
    hostname: "api.github.com",
    path: "/users/" + user,
    headers: {
      Authorization: "Bearer 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",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
  };
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("Something wnent wrong!");
    });
});

router.get("/github/repoinfo/:user/:reponame", async function (req, res) {
  const user = req.params.user;
  const reponame = req.params.reponame;
  const options = {
    hostname: "api.github.com",
    path: "/repos/" + user + "/" + reponame + "/languages",
    headers: {
      Authorization: "Bearer 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",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
  };
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("Something wnent wrong!");
    });
});

router.get("/github/rate_limit", async function (req, res) {
  const options = {
    hostname: "api.github.com",
    path: "/rate_limit",
    headers: {
      Authorization: "Bearer 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",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
  };
  https
    .get(options, function (apiResponse) {
      apiResponse.pipe(res);
    })
    .on("error", (e) => {
      console.log(e);
      res.status(500).send("Something wnent wrong!");
    });
});

module.exports = router;
