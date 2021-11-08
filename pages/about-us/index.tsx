import { styles } from '../../styles/about-us/about-us';
import { OurEnterprise } from '../../components/about-us/our-enterprise';
import { Dialogs } from '../../components/about-us/dialogs';

const aboutUs = () => {

  return (
    <>
      <div className="about-us-container">
        <OurEnterprise />
        <Dialogs side={'right'}/>
        <Dialogs side={'left'}/>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default aboutUs;