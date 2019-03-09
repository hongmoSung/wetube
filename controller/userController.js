import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" })
};
export const postJoin = (req, res) => {
    console.log(req.body);
    const {
        body: {name, email, password, password2}
    } = req;
    if(password != password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" })
    } else {
        // to Do: Register User
        // to Do: Log user in
        res.redirect(routes.home);
    }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    res.redirect(routes.home);
};

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detailt" });
export const editDetail = (req, res) => res.render("editDetail", { pageTitle: "Edit Detailt" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });