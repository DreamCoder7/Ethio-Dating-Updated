import React, { Component } from "react";
import SectionTestiImg from "../../Components/SectionTestiImg/SectionTestiImg";
import SectionTestiContent from "../../Components/SectionTestiContent/SectionTestiContent";
import classes from "./SectionTesti.module.css";
import Slide from "../../Components/UI/Slide/Slide";
import customer1Img from "../../assets/Images/customer-1.jpg";
import customer2Img from "../../assets/Images/customer-2.jpg";
import customer3Img from "../../assets/Images/customer-3.jpg";

class SectionTestimonial extends Component {
  state = {
    rightArrow: null,
    leftArrow: null,
  };

  rightArrowHundler = () => {
    console.log("Left Arrow was Clicked!!");
  };

  leftArrowHundler = () => {
    console.log("Right Arrow was Clicked!!");
  };

  render() {
    return (
      <section className={classes.SectionTesti}>
        <Slide
          Rightclicked={this.rightArrowHundler}
          Leftclicked={this.leftArrowHundler}
        />
        <figure className={classes.TestiFigure}>
          <SectionTestiImg src={customer1Img} alt="Man and Women Dating" />
          <SectionTestiContent
            users="Emma & Sam"
            text="I wasn't looking for anything serious &dash; i'd just gotten out
      of a relationship &dash; so joined Ethio-Dating. After about a
      month and a half (and couple of dates) we matched."
          />
        </figure>
        <figure className={classes.TestiFigure}>
          <SectionTestiImg src={customer2Img} alt="Man and Women Dating" />
          <SectionTestiContent
            users="Sarah & James"
            text="I went on Ethio-dating after a friend told me it would be good
        for me to get out there,So after A couple of days into using the
        app, I started talking to John."
          />
        </figure>
        <figure className={classes.TestiFigure}>
          <SectionTestiImg src={customer3Img} alt="Man and Women Dating" />
          <SectionTestiContent
            users="Sophie & Nathan"
            text="I was on plenty of fish for about two month before i meet Nathan
        &dash; he was the first and only person i meet online."
          />
        </figure>
      </section>
    );
  }
}

export default SectionTestimonial;
