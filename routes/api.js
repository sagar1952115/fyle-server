const express = require("express");
const router = express.Router();
const https = require("https");

router.get("/github/userinfo/:user/repos", async function (req, res) {
  const user = req.params.user;
  const options = {
    hostname: "api.github.com",
    path: "/users/" + user + "/repos",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
    OAUth: "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",
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
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36",
    },
    OAUth: "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",
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
    path,
  };
});

module.exports = router;
