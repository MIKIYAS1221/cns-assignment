const { Router } = require("express");
const passport = require("passport");

const router = Router();

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "User has successfully authenticated",
            user: req.user,
            cookies: req.cookies
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "User has not been authenticated"
        });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "User failed to authenticate."
    });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.client_url);
}
);

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.client_url,
    failureRedirect: "/auth/login/failed"
}));

module.exports = router;