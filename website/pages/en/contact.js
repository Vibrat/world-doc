/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Lam Nguyen`,
      name: "Name"
    },
    {
      content: `Lam.nguyen@tuidoc.com`,
      name: "Email"
    },
    {
      content: `(+84) 935.516.658`,
      name: "Phone"
    },
    {
      content: `https://github.com/Vibrat`,
      name: "Github"
    },
    {
      content: `https://stackoverflow.com/users/4659387/lam-nguyen`,
      name: "Stackoverflow"
    },
    {
      content: `https://www.linkedin.com/in/lam-nguyen-account/`,
      name: "LinkedIn"
    },
    {
      content: `Ho Chi Minh City, Vietnam`,
      name: "Location"
    },
  ];

  const contactItemStyle = {
    fontSize: "14px",
    margin: "4px 0"
  };
  const contact = supportLinks.map(link => {
    switch (link.name) {
      case "Github":
      case "LinkedIn":
      case "Stackoverflow":
        return (
          <p style={contactItemStyle}>
            <b>{link.name}</b>: <a href={link.content}>view</a>
          </p>
        );
      default:
        return (
          <p style={contactItemStyle}>
            <b>{link.name}</b>: {link.content}
          </p>
        );
        break;
    }
  });

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Contact Info:</h1>
          </header>
          <p>If you have any query, please let me know via:</p>
          <p class="items">{contact}</p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
