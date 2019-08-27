import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './bio.css'

class MyBio extends Component {
  render() {
    return (
      <Layout>
        <div id="bio-card" className="card">
          <header className="card-header is-shadowless">
            <p class="card-header-title is-centered is-size-3 has-text-white custom-header">
              BIOGRAPHY
            </p>
            <div className="card-header-icon">
              <Link to="/about">
                <span className="icon">
                  <FontAwesomeIcon icon={'chevron-circle-left'} color="white" />
                </span>
              </Link>
            </div>
          </header>
          <div className="card-content">
            <p className="content has-text-center has-text-white has-text-weight-bold">
              My earliest memories are of me playing with numerous Lego sets on
              my grandfather’s hearth; little did I realize this would lay the
              foundation for creative pursuits. I began my educational pursuits
              at Baylor University where through a set of happenstance
              circumstances I found my passion for creative outlets in the form
              of Ceramics. My passion for the arts is further demonstrated by my
              pursuit and attainment of an advanced degree before serving as a
              Co-Founder and Managing Partner of DB McGilvray Ceramics; a
              boutique ceramic manufacturing company specializing in small
              production runs, customer orders, mold making and clay making. I
              pioneered the ground-up development of the company and
              successfully drafted, negotiated and finalized an exclusivity
              agreement that solidified a production sharing partnership with
              Mudshark Studios.
            </p>
            <p className="content has-text-center has-text-white has-text-weight-bold">
              I have had a unique set of career and leadership experiences
              following my rich educational background. My operations and
              management proficiency have allowed me to achieve business goals
              and motivate team members. I have often been entrusted to lead
              during times of critical transition and proven my capabilities to
              remain intently focused under pressure. I was recognized for
              driving the turnaround of the financial position of TechShop
              Austin-Round Rock from negative to positive and influenced a
              similar progressive transformation of company culture and employee
              engagement. I also lead the planning and construction of a $500K
              large-scale construction project to turn an old car dealership
              into a service department and after-market parts store, once again
              showcasing my drive for creative pursuits.
            </p>
            <p className="content has-text-center has-text-white has-text-weight-bold">
              While pursuing my passion for Ceramics, I have also been on the
              constant search for a career path that would still allow me to
              create while advancing in a professional field; this brought me to
              the world of coding. Web development appealed to me for its
              structure, its imaginative avenues, technological applications,
              and the career opportunities it affords.
            </p>
            <p className="content has-text-center has-text-white has-text-weight-bold">
              With this goal in mind, I enrolled in and successfully completed a
              Coding Bootcamp through Southern Methodist University. I am now a
              trained full stack web developer that is passionate about front
              end design and user interfaces. My built-in knack for innovation
              and creativity, allows me to “see around corners” and devise quick
              solutions in a variety of business and management scenarios.
            </p>
            <p className="content has-text-center has-text-white has-text-weight-bold">
              I currently live in Tyler, TX with my wife and daughter, and an
              ever-expanding Lego collection.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MyBio
