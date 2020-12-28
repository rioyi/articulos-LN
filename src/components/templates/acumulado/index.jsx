import React from "react";

// Molecules
import Header from "../../organisms/header";
import Footer from "../../organisms/footer";
import BannerTop from "../../organisms/bannerTop";
import BannerSideBar from "../../organisms/bannerSideBar";
import MainSideBar from "../../organisms/mainSideBar";

function Acumulado() {

  return (
    <>
      <Header />
      <main>
        <BannerTop />
        <div className="lay-sidebar">
          <MainSideBar />
          <BannerSideBar />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Acumulado;
