import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import communityDescription from '../../logo/communityDescription.svg';
import discord from '../../logo/discord.svg';
import footerAlexandria from '../../logo/footerAlexandria.svg';
import innovationDescription from '../../logo/innovationDescription.svg';
import learningDescripton from '../../logo/learningDescription.svg';
import ourVisionBanner from '../../logo/ourVisionBanner.svg';
import securityDescription from '../../logo/securityDescription.svg';
import telegram from '../../logo/telegram.svg';
import twitter from '../../logo/twitter.svg';
import visitAlexandriaBanner from '../../logo/visitAlexandriaBanner.svg';
import CourseCard from '../common/CourseCard';
import './LandingPage.css';
// type courseCardprops = {
//   icon: string;
//   name: string;
//   progress: string;
//   rating: number;
//   duration: number;
//   publisher: string;
//   tag: string[];
//   description: string;
//   earning: number;
//   totalToken: number;
// };

function LandingPage() {
  const courseCards: JSX.Element[] = [<CourseCard key="1"></CourseCard>];
  return (
    <div className="landingPage">
      <div className="visitAlexandriaBanner">
        <img src={visitAlexandriaBanner} />
        <div className="visitAlexandriabannerHeading">
          <text>Accessible.</text>
          <text>Transparent.</text>
          <text>Decentralized.</text>
        </div>
        <div className="visitAlexandriabannerSubheading">
          <text>
            Alexandria is a decentralized community driven, self-service platform operation on the
            principles of accessibility and transparency
          </text>
        </div>
        <button className="visitAlexandriabannerButton">
          <div className="visitAlexandriaBannerTextInButton">Visit Alexandria</div>
        </button>
      </div>

      <div className="ourVisionBanner">
        <img src={ourVisionBanner} />
      </div>

      <div className="whatIsAlexandriaContainer">
        <div className="whatIsAlexandria">
          What is&nbsp;<span className="AlexandriaIn-whatIsAlexandria"> Alexandria</span>
        </div>
        <div className="shortIntroAlexandria">
          Alexandria is a decentralized community driven, self-service platform operating on the
          principles of accessibility and transparency
        </div>
        <div style={{ marginTop: '49px' }}>
          <FunctionIntroductionBar />
        </div>
      </div>

      <div className="ourCoursesSection">
        <div className="ourCoursesHeading">
          <div className="ourCoursesText">
            Our&nbsp;<span className="courses-in-ourCourses">Courses</span>
          </div>
          <text className="ourCoursesLongText">
            Alexandria is a decentralized community driven, self-service platform operating on the
            principles of accessibility and transparency
          </text>
        </div>
        <div className="courseCard">{courseCards}</div>
      </div>
      <Button className="takeCourse">
        <text className="takeCourseText">Take Course</text>
      </Button>

      <div className="Footer">
        <div className="FooterRight">
          <img src={footerAlexandria} className="FooterAlexandria" />
          <text className="FooterRightsReserved">@ 2023 Alexandria Team. All Rights Reserved</text>
          <div className="FooterSocialMedia">
            <Button className="FooterSocialMediaIcon">
              <img src={twitter} />
            </Button>
            <Button className="FooterSocialMediaIcon">
              <img src={discord} />
            </Button>
            <Button className="FooterSocialMediaIcon">
              <img src={telegram} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FunctionIntroductionBar() {
  enum FunctionIntroductionBarType {
    learning = 'learning',
    community = 'community',
    security = 'security',
    innovation = 'innovation',
  }

  const [selectedSection, setSelectedSection] = useState<FunctionIntroductionBarType>(
    FunctionIntroductionBarType.learning,
  );

  const handleSection = (e, newSection) => {
    console.log('newSection', e, newSection);
    if (newSection !== null) {
      // Only update the selected section if a new section was selected
      setSelectedSection(newSection);
    }
  };

  const learningSection = (
    <div>
      <img src={learningDescripton} />
    </div>
  );

  const communitySection = (
    <div>
      <img src={communityDescription} />
    </div>
  );

  const securitySection = (
    <div>
      <img src={securityDescription} />
    </div>
  );

  const innovationSection = (
    <div>
      <img src={innovationDescription} />
    </div>
  );

  const renderSection = () => {
    const sections = {
      [FunctionIntroductionBarType.learning]: learningSection,
      [FunctionIntroductionBarType.community]: communitySection,
      [FunctionIntroductionBarType.security]: securitySection,
      [FunctionIntroductionBarType.innovation]: innovationSection,
    };

    return <div className="active">{sections[selectedSection]}</div>;
  };

  return (
    <div>
      <ToggleButtonGroup
        value={selectedSection}
        exclusive
        onChange={handleSection}
        className="selectSection"
      >
        <ToggleButton
          value={FunctionIntroductionBarType.learning}
          className={
            selectedSection === FunctionIntroductionBarType.learning
              ? 'selectedSectionButton'
              : 'SectionButton'
          }
        >
          <div
            className={
              selectedSection === FunctionIntroductionBarType.learning
                ? 'selectedSectionButtonText'
                : 'SectionButtonText'
            }
          >
            Learning
          </div>{' '}
        </ToggleButton>
        <ToggleButton
          value={FunctionIntroductionBarType.community}
          className={
            selectedSection === FunctionIntroductionBarType.community
              ? 'selectedSectionButton'
              : 'SectionButton'
          }
        >
          <div
            className={
              selectedSection === FunctionIntroductionBarType.community
                ? 'selectedSectionButtonText'
                : 'SectionButtonText'
            }
          >
            Community
          </div>{' '}
        </ToggleButton>
        <ToggleButton
          value={FunctionIntroductionBarType.security}
          className={
            selectedSection === FunctionIntroductionBarType.security
              ? 'selectedSectionButton'
              : 'SectionButton'
          }
        >
          <div
            className={
              selectedSection === FunctionIntroductionBarType.security
                ? 'selectedSectionButtonText'
                : 'SectionButtonText'
            }
          >
            Security
          </div>{' '}
        </ToggleButton>
        <ToggleButton
          value={FunctionIntroductionBarType.innovation}
          className={
            selectedSection === FunctionIntroductionBarType.innovation
              ? 'selectedSectionButton'
              : 'SectionButton'
          }
        >
          <div
            className={
              selectedSection === FunctionIntroductionBarType.innovation
                ? 'selectedSectionButtonText'
                : 'SectionButtonText'
            }
          >
            Innovation
          </div>{' '}
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="introductionContent">{renderSection()}</div>
    </div>
  );
}
export default LandingPage;
