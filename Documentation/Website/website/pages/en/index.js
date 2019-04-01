/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('RPI_Logo.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('S3DK.html', language)}>S3DK Info.</Button>
            <Button href={docUrl('Stronggrid.html', language)}>Recompiling STRONGgrid DLL</Button>
            <Button href={docUrl('Stronggrid_Method.html', language)}>STRONGgrid DLL Method</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
     /* {
        content: 'S3DK description',
        image: imgUrl('pi.jpg'),
        imageAlign: 'top',
        title: 'Change in index.js, no image can be added',
      },
      {
        content: 'STRONGgrid description',
        image: imgUrl('chipmunk.png'),
        imageAlign: 'top',
        title: 'Change in index.js',
      },*/
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Documentation regrading the different types of Labview VI are linked up top. This includes VIs for Buffering, queues, PRL, TDMS, STRONGgrid DLL and Open PMU.',
        image: imgUrl('Labview_icon.jpg'),
        imageAlign: 'left',
        title: 'VI Information',
      },
    ]}
  </Block>
);

const TryOut = props => (
    <Block background="dark">
    {[
      {
        content: 'Examples include integrated examples that combine mutliple VIs into one project and showcase the effectiveness of using multiple VIS. Unit test are basic examples of each VI that are in the S3DK.',
        image: imgUrl('rpi_mini.png'),
        imageAlign: 'right',
        title: 'Examples',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="light">
    {[
      {
        content: 'For over 10 years, (Luigi Vanfretti) has heard the expression "What can you do with real-time PMU data?", for which many answers can be given. However, any answer that you might provide assummes that you have the technology to actually make it a reality, which is not the case for most researchers. S3DK changes that, and it makes the answer, "as long as you can program (in C++ or LabView...), its up to you what application to come up with!.',
        image: imgUrl('github.png'),
        imageAlign: 'right',
        title: 'OSS',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Development lead by:"}</h2>
      <p>ALSETLab, Prof. Luigi Vanfretti's research team @ RPI (formerly SmarTS Lab @ KTH)</p>
     <div className="logos">{showcase}</div>
      <div className="The Github">
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
