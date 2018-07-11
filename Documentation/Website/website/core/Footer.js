/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="100"
                height="30"
              />
            )}
          </a>
          <div>
            <h5>Specific Github links</h5>
            <a href="https://github.com/ALSETLab/S3DK-STRONGgrid">
              S3DK-STRONGgrid
            </a>
            <a href="https://github.com/ALSETLab/S3DK">
              S3DK
            </a>
          </div>
          <div>
            <h5>Links to stuff</h5>
            <a href="https://google.com">
              Literally Google
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Phasor_measurement_unit"
              target="_blank"
              rel="noreferrer noopener">
              Basic Info for PMU
            </a>
            <a href="https://www.rpi.edu/">Rensselaer Polytechnic Institute</a>
            <a
              href="https://alsetlab.github.io/"
              target="_blank"
              rel="noreferrer noopener">
              Alset Lab
            </a>
          </div>
          <div>
            <h5>Docusaurus Resources</h5>
            <a href="https://docusaurus.io/en/">Docusarus website</a>
            <a href="https://github.com/facebook/docusaurus">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/fb.jpg'}
            alt="Facebook Open Source"
            width="50"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
