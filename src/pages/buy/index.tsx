import * as React from 'react';
import Page from '../../components/layout/Page';
import Container from '../../components/layout/Container';
import { linksTopNavigation } from '../../data/linksTopNavigation';
import { TopNavigation } from '../../components/layout/top_navigation/TopNavigation';

export default function BuyPage() {
  return (
    <Page>
      <TopNavigation title={'Paxful'} links={linksTopNavigation} logoImage={'./project-logo.png'} imageSize={'137px'}/>
      <Container>
        <h1>Buy BTC</h1>
      </Container>
    </Page>
  );
}
