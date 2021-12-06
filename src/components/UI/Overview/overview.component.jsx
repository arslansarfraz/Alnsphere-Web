import React from "react";
import "./overview.styles.scss";
import CustomButton from "../../Buttons/CustomButton/custombutton.component";
import { IKImage } from "imagekitio-react";
import pdf from "../../../assets/pdf/Attachment_1638359682_compressed.pdf";

import PSDFixedWhiteBackground from "assets/images/PSDFixedWhiteBackground.png";

const Overview = () => {
  return (
    <section className="overview">
      <div className="overview__content">
        <div className="overview__left">
          <div className="dOverview">
            <h2 className="overview__heading">
              WELCOME TO
              <br />
              <span className="overview__heading--accent">ALNSPHERE!</span>
            </h2>
            <p className="overview__desc">
              Since the Alns have been created on planet Spheron, the Spheroxy
              hasn’t been the same. AlnSphere is more than just your average
              Play-to-Earn game, it is a ticket to a seamless entry into
              blockchain gaming, NFTs, and much more!
            </p>
            <p className="overview__desc">
              Our collection of 9,999 NFTs comes with a variety of over 150
              hand-drawn traits. Each Aln has been created with quality in mind
              to ensure uniqueness in art, and is ready to storm the Ethereum
              blockchain.”
            </p>
          </div>
          <div className="overview__buttons">
            <CustomButton
              link="https://discord.com/invite/YgeEwVa6Yn"
              imageIcon={
                "/project-folder/icons/discord_JbBdPByYs.svg?updatedAt=1638249766988"
              }
            >
              Join Discord
            </CustomButton>

            <CustomButton link={pdf} accent>
              WhitePaper
            </CustomButton>
          </div>
        </div>
        <div className="overview__right">
          <img
            className="overview__img"
            src={PSDFixedWhiteBackground}
            alt="aliens"
          />
        </div>
        {/* the following heading and description will show on mobile phone only */}
        <div className="mOverview">
          <h2 className="mOverview__heading">
            WELCOME TO
            <br />
            <span className="mOverview__heading--accent">ALNSPHERE</span>
          </h2>
          <p className="mOverview__desc">
            Since the Alns have been created on planet Spheron, the Spheroxy
            hasn’t been the same. AlnSphere is more than just your average
            Play-to-Earn game, it is a ticket to a seamless entry into
            blockchain gaming, NFTs, and much more!
          </p>
          <p className="mOverview__desc">
            Our collection of 9,999 NFTs comes with a variety of over 150
            hand-drawn traits. Each Aln has been created with quality in mind to
            ensure uniqueness in art, and is ready to storm the Ethereum
            blockchain.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
