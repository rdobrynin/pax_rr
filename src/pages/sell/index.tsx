import * as React from 'react';
import Page from '../../components/layout/Page';
import Container from '../../components/layout/Container';
import { TopNavigation } from '../../components/layout/top_navigation/TopNavigation';
import { linksTopNavigation } from '../../data/linksTopNavigation';
import { actionsNavigation } from '../../data/actionsNavigation';
import { ActionNavigation } from '../../components/layout/action_navigation/ActionNavigation';

export default function SellPage() {
  return (
    <Page>
      <TopNavigation title={'Paxful'} links={linksTopNavigation} logoImage={'./project-logo.png'} imageSize={'137px'}/>
      <ActionNavigation items={actionsNavigation} />
      <Container>
        <div className={'trade-wrapper'}>
          <div className={'row'}>
            <div className={'column col-left'}>
              Some Text in Column One
            </div>
            <div className={'column col-center'}>
              Some Text in Column Two
              {/*component sendMessageInput*/}
              <div className={'column row-bottom'}>
                <input type="text"/>
              </div>
            </div>
            <div className={'column col-right'}>
              Some Text in Column Four
            </div>
          </div>
        </div>
      </Container>
    </Page>
  );
}
