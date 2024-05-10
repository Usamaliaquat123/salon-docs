import React from 'react';
import '../../static/css/components.css';
import Highlight, { defaultProps } from 'prism-react-renderer';
import CodeBlock from '@theme/CodeBlock';

const exampleCode = `
@umar-epacken:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=NPM_TOKEN

# This is how to login in the cli to publish a pacakge via github
# npm login --scope=@umar-epacken  --registry=https://npm.pkg.github.com

`;

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--5 text--center">
              <h6 className="hero__title gradient clip-text">
                How to get started?
              </h6>
            </div>
            <div className="col col--7 ">
              <p>
                <b>1. Before Installing make sure your you had a npmrc private token</b>
                <p className="margin-vert--md margin-horiz--md">
                  <CodeBlock language="tsx">{exampleCode}</CodeBlock>
                </p>
                <b>2. Install the @umar-epacken/salon-data package from the NPM and YARN</b>
                <p className="margin-vert--md margin-horiz--md">
                  <CodeBlock language="bash">
                    npm install @umar-epacken/salon-data
                  </CodeBlock>
                </p>


              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
