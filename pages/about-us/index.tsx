import { styles } from '../../styles/about-us/about-us';
import { OurEnterprise } from '../../components/about-us/OurEnterprise';
import { BoyAndChecks } from '../../components/about-us/BoyAndChecks';
import { Avatar } from '../../components/about-us/Avatar';

const aboutUs = () => {

  return (
    <>
      <div className="about-us-container">
        <OurEnterprise />
        <BoyAndChecks />
        <Avatar />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default aboutUs;