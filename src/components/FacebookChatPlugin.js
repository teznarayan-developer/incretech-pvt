import React, { useEffect } from "react";

const FacebookChatPlugin = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v16.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      {/* Your Chat Plugin code  */}
      <div
        className="fb-customerchat"
        attribution="install_email"
        attribution_version="biz_inbox"
        page_id="111335004326850"
      ></div>
    </>
  );
};

export default FacebookChatPlugin;
