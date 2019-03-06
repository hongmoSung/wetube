// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// user
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHAGE_PASSWORD = "/change-password";

// Vedios
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    usersDetails: id => {
        if(id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    }
    ,
    editProfile: EDIT_PROFILE,
    changePassword: CHAGE_PASSWORD,
    videos: id => {
        if(id) {
            return `/videos/${id}`;
        } else {
            return VIDEOS;
        }
    },
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;