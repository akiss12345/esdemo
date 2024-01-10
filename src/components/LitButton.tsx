import { LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createComponent } from '@lit/react';

interface Fields {
  link: LinkField;
}

type LitButtonProps = {
  params: { [key: string]: string };

  fields: Fields;
};

@customElement('my-lit-button')
class MyLitButton extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

const MyLitButtonWrapper = createComponent({
  tagName: 'my-lit-button',
  elementClass: MyLitButton,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});

export const Default = (props: LitButtonProps): JSX.Element => {

  return (
    <div className={`component litbutton ${props.params.styles}`}>
      <div className="component-content">
        {props.fields?.link ? 
            <MyLitButtonWrapper>
                <Link field={props.fields?.link} />
            </MyLitButtonWrapper> :
            <div>Please fill datasource</div>
        }
      </div>
    </div>
  );
};
