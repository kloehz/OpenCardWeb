import { styles } from '../../styles/about-us/about-us';
import { OurEnterprise } from '../../components/about-us/OurEnterprise';
import { Dialogs } from '../../components/about-us/BubbleDialog';
import { BoyAndChecks } from '../../components/about-us/BoyAndChecks';
import { Avatar } from '../../components/about-us/Avatar';

const aboutUs = () => {

  return (
    <>
      <div className="about-us-container">
        <OurEnterprise />
        <Dialogs side={'right'}/>
        <Dialogs side={'left'}/>
        <BoyAndChecks />
        <Avatar />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default aboutUs;