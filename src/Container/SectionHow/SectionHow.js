import React from "react";
import classes from "./SectionHow.module.css";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SectionSubTitle from "../../Components/SectionSubTitle/SectionSubTitle";
import SectionHowContent from "../../Components/SectionHowContent/SectionHowContent";
import SectionHowImg from "../../Components/SectionHowImg/SectionHowImg";
import datingImg from "../../assets/Images/dating.svg";
import loveImg from "../../assets/Images/love.svg";

const sectionHow = (props) => (
  <section className={classes.SectionHow}>
    <SectionTitle title="How it works" />
    <SectionSubTitle subTitle="Your dreams became real by 2 simple step:" />

    <div className={classes.SectionHowContainer}>
      <div className={classes.SectionHowText}>
        <SectionHowImg src={datingImg} alt="Dating illustration image" />
        <SectionHowContent
          title="Create Account"
          text="First create a simple profile with a handfull of photo and a few
        sentences about your self, then throw yourself at the internet
        mercy. "
        />
      </div>
      <div className={classes.SectionHowText}>
        <SectionHowImg src={loveImg} alt="love illustration image" />
        <SectionHowContent
          title="Find Your Match:"
          text="The app displays singles in your area. if you like one, swipe
        the photo to the right. other wise, swipe to the left. once you
        find a match, you're ready to chat. "
        />
      </div>
    </div>
  </section>
);

export default sectionHow;
