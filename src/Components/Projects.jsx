import React from "react";
import Nft from "../Assets/nftwebapp.png";
import Pusheat from "../Assets/pusheat-chef-app.png";
import "../globalStyle.css";

const Projects = () => {
  return (
    <div>
      <section className="mb-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <span className="text-white projects-head">
                      Selected projects
                    </span>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 text-center col-12">
                    <div>
                      <img width="70%" src={Nft} alt="nft application" />
                    </div>
                    <div className="text-left">
                      <span className="text-white nft">Capiton NFT webapp</span>{" "}
                      <br />
                      <span className="text-white sub-txt">
                        Live NFT.  bill.  Payments.  All on Web/Mobile
                      </span>{" "}
                      <br />
                      <span className="text-muted extra">
                        UX Case Study - DEFI • Capiton lion
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 text-center mt-5 col-12">
                    <div>
                      <img width="70%" src={Pusheat} alt="nft application" />
                    </div>
                    <div className="text-left">
                      <span className="text-white nft">Rolex webpage</span>{" "}
                      <br />
                      <span className="text-white sub-txt">
                        Agency.  Revenue.  Tracking .  All on Web
                      </span>{" "}
                      <br />
                      <span className="text-muted extra">
                        UX Case Study - Revenue • Rolex
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6 text-center col-12">
                    <div>
                      <img width="70%" src={Nft} alt="nft application" />
                    </div>
                    <div className="text-left">
                      <span className="text-white nft">Invest mobile app </span>{" "}
                      <br />
                      <span className="text-white sub-txt">
                        Live stock.  Education.  Payments.  All on Mobile
                      </span>{" "}
                      <br />
                      <span className="text-muted extra">
                        UX Case Study - Enterprise • Invest
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 text-center mt-5 col-12">
                    <div>
                      <img width="70%" src={Pusheat} alt="nft application" />
                    </div>
                    <div className="text-left">
                      <span className="text-white uxcasestudy">
                      Pusheat chef app
                      </span>{" "}
                      <br />
                      <span className="text-white sub-txt">
                        LiveDeals.  Receipts.  Payments.  All on Mobile
                      </span>{" "}
                      <br />
                      <span className="text-muted extra">
                        UX Case Study - Enterprise • Pusheat
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
