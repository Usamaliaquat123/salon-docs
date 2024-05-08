import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import { SiFigma } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { } from 'react-icons/md';

export const FigmaKit: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl" id="community">
        <div className="container">
          <SectionHeader
            color="#F24E1E"
            header="Figma Kit"
            subheader="We love developers and designers"
            icon={SiFigma}
          />
          <div className="text--center">
            <p>Coming Soon</p>
            {/* <Link className="button disabled button--secondary button--sm">
              Coming Soon
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export const VScodeExt: React.FunctionComponent<{}> = () => {
  return (
    <>

    </>
  );
};
