const globalRoute = [{
    path: "/",
    name: "LandingPage",
    component: () => import( /* webpackChunkName: "landingPage" */ "@/views/landingViews/Home")
}]

export default globalRoute;