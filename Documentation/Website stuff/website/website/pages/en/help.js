/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}
function pageUrl(page, language) {
    return (language ? language  : '') + page;
}

class Help extends React.Component {
  render() {
    let language = this.props.language || '';
    const supportLinks = [
      {
        content: `Most of the software is developed for Labview. Labview is a National Instruments [software developed for system engineering](${(
          'http://www.ni.com/en-us/shop/labview.html'
        )})`,
        title: 'Labview',
      },
      {
        content: 'Question regarding the information can be directed to the Professor',
        title: 'Questions?',
      },
      {
          content: `Find out whats new with this project and other projects by [ALSETlabs](${(
          'https://github.com/ALSETLab'
        )})`,
          title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by students and associates of Professor Vanfretti.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
