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
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section  style={{ display: 'none' }} className="sitemap">
          <div>
            <h5>Blog</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Getting Started (or other categories)
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Documentation</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Understand python multi threads</a>
            <a href="https://github.com/">Playing around with Github</a>
          </div>
          <div>
            <h5>Sitemap</h5>
            <a href="/docs/doc1">Docs</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
        </section>

        <a href={this.props.config.baseUrl} className="nav-home fbOpenSource" style={{ textAlign: 'center'}}>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
            </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
