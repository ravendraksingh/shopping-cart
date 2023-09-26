import { Fragment, useEffect, useState } from "react";
import TopNav from "./components/menu/TopNav";
import BottomNav from "./components/menu/BottomNav";
import AppRoutes from "./components/AppRoutes";
import UserContext from "./context/UserContext";

import "./App.css";
import { getDocHeight } from "./utils/ScreenUtil";
import NewTopNav from "./components/menu/NewTopNav";
function App() {
  const [user, setUser] = useState();
  var winheight, docheight, trackLength, throttlescroll;

  const UA = navigator.userAgent;
  const locale = navigator.language;
  console.log("User Agent:", UA);
  //   console.log("maxTouchPoints", maxTouchPoints);
  //   console.log("locale:", locale);

  function mobileDeviceDetection() {
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      const mQ = matchMedia?.("(pointer:coarse)");
      if (mQ?.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }

    if (hasTouchScreen) {
      //   document.getElementById("exampleButton").style.padding = "1em";
      console.log("It's a mobile device");
    } else {
      console.log("NOT a mobile device");
    }
  }

  mobileDeviceDetection();

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
    <Fragment>
      <UserContext.Provider value={{ user, setUser }}>
        <TopNav />
        {/* <NewTopNav /> */}
        <AppRoutes />
        {/* <BottomNav /> */}
      </UserContext.Provider>
    </Fragment>
  );
}

export default App;
