import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type HeroProps = {
  fields: {
    heroHeading: Field<string>;
    heroBody: Field<string>;
  };
};

const Default = (props: HeroProps): JSX.Element => {
  console.log('Hero', props);
  return (
    <div>
      <Text field={props.fields.heroHeading} />
      <RichText field={props.fields.heroBody} />
    </div>
  );
};

export const Reversed = (props: HeroProps): JSX.Element => {
  console.log('Reversed', props);
  return (
    <div>
      <RichText field={props.fields.heroBody} />
      <Text field={props.fields.heroHeading} />
    </div>
  );
};

export default Default;
