import * as React from 'react';
import Page from '../../components/layout/Page';
import Container from '../../components/layout/Container';
import { TopNavigation } from '../../components/layout/top_navigation/TopNavigation';
import { linksTopNavigation } from '../../data/linksTopNavigation';

export default function WalletPage() {
  return (
    <Page>
      <TopNavigation title={'Paxful'} links={linksTopNavigation} logoImage={'./project-logo.png'} imageSize={'137px'}/>
      <Container>
        <h1>Wallet</h1>
      </Container>
    </Page>
  );
}
