import React from "react";
import { IntlProvider, intlShape } from "react-intl";
import { mount, shallow } from "enzyme";

const messages = require("../locales/messages/en");

const intlProvider = new IntlProvider({ locale: "en", messages }, {});
const { intl } = intlProvider.getChildContext();

const nodeWithIntlProp = node => {
  return React.cloneElement(node, { intl });
};

const shallowWithIntl = node => {
  return shallow(nodeWithIntlProp(node), {
    context: { intl }
  });
};

const mountWithIntl = node => {
  return mount(nodeWithIntlProp(node), {
    context: { intl },
    childContextTypes: { intl: intlShape }
  });
};

export { nodeWithIntlProp, shallowWithIntl, mountWithIntl };
