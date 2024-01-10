import React from 'react';

import { Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  heroHeading: Field<string>;
  heroBody: Field<string>;
}

type SXAHeroProps = {
  params: { [key: string]: string };

  fields: Fields;
};

const Default = (props: SXAHeroProps): JSX.Element => {
  return (
    <div className={`component sxahero ${props.params.styles}`}>
      <div className="component-content">
        <div>
          <Text field={props.fields?.heroHeading} />
          <RichText field={props.fields?.heroBody} />
        </div>
      </div>
    </div>
  );
};

export const Reversed = (props: SXAHeroProps): JSX.Element => {
  return (
    <div className={`component sxahero ${props.params.styles}`}>
      <div className="component-content">
        <div>
          <RichText field={props.fields?.heroBody} />
          <Text field={props.fields?.heroHeading} />
        </div>
      </div>
    </div>
  );
};

export default Default;
