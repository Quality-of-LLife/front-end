import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import NotFound from "./pages/NotFound.js";
import SearchMap from "./pages/SearchMap.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/login", view: Login },
    { path: "/register", view: Register },
    { path: "/searchhospital", view: SearchMap },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: location.pathname,
      isMatch: true,
    };
    const page = new NotFound();
    document.querySelector("#app").innerHTML = await page.getHtml();
  } else {
    const page = new match.route.view();
    document.querySelector("#app").innerHTML = await page.getHtml();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
