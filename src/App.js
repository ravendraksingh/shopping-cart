import { useEffect, useState } from "react";
import TopNav from "./components/menu/TopNav";
import BottomNav from "./components/menu/BottomNav";
import AppRoutes from "./components/AppRoutes";
import UserContext from "./context/UserContext";

import "./App.css";
import { getDocHeight } from "./utils/ScreenUtil";
function App() {
  const [user, setUser] = useState();
  var winheight, docheight, trackLength, throttlescroll;

  const locale = navigator.language;
  console.log("locale", locale);

  useEffect(() => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      setUser(userInStorage);
    }
  }, [user]);

  //   window.onbeforeunload = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //     return (e.returnValue = "Are you sure you want to exit?");
  //   };

  //   function getDocHeight() {
  //     var D = document;
  //     return Math.max(
  //       D.body.scrollHeight,
  //       D.documentElement.scrollHeight,
  //       D.body.offsetHeight,
  //       D.documentElement.offsetHeight,
  //       D.body.clientHeight,
  //       D.documentElement.clientHeight
  //     );
  //   }

  //   function getmeasurements() {
  //     winheight =
  //       window.innerHeight ||
  //       (document.documentElement || document.body).clientHeight;
  //     docheight = getDocHeight();
  //     trackLength = docheight - winheight;
  //   }

  //   function amountscrolled() {
  //     var scrollTop =
  //       window.pageYOffset ||
  //       (document.documentElement || document.body.parentNode || document.body)
  //         .scrollTop;
  //     var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  //     console.log("trackLength", trackLength);
  //     console.log(pctScrolled + "% scrolled");
  //   }

  //   getmeasurements();

  //   window.addEventListener(
  //     "resize",
  //     function () {
  //       getmeasurements();
  //     },
  //     false
  //   );

  //   window.addEventListener(
  //     "scroll",
  //     function () {
  //       this.clearTimeout(throttlescroll);
  //       throttlescroll = setTimeout(function () {
  //         amountscrolled();
  //       }, 1000);
  //     },
  //     false
  //   );

  window.onbeforeunload = (e) => {
    e.preventDefault();
    console.log("beforeunload event triggered");

    const entries = window.performance.getEntriesByType("navigation");
    let pageReloaded = entries
      .map((PerformanceNavigationTiming) => PerformanceNavigationTiming.type)
      .includes("reload");
    console.log("pageReloaded", pageReloaded);
  };

  return (
    <div className="App container px-0">
      <UserContext.Provider value={{ user, setUser }}>
        <TopNav />
        <section id="maincontent" className="px-2 px-sm-0">
          <AppRoutes />
        </section>
        <BottomNav />
      </UserContext.Provider>
    </div>
  );
}

export default App;
