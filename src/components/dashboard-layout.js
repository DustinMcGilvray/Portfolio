import React, { Component } from 'react'
import Layout from '../components/layout'
import DateTime from '../components/date-time'
import DashBoardMainMenu from '../components/dashboard-menu-main'
import WeatherDayWidget from '../components/weather-day-widget'
import WakaTimeWidget from '../components/wakatime-widget'
import WakaTimeCommitsWidget from '../components/wakatime-commits-widget'
import YouTubeWidget from '../components/youtube-widget'
import NewsTicker from '../components/news-ticker'
import PodcastWidget from './podcast-widget'
import BigWeb from '../components/myPodcasts/big-web-show-podcast'
import ChangeLog from '../components/myPodcasts/changelog-podcast'
import CNTRLClick from '../components/myPodcasts/cntrl-click-podcast'
import CodeNewbie from '../components/myPodcasts/code-newbie-podcast'
import CodePen from '../components/myPodcasts/code-pen-podcast'
import DeveloperTea from '../components/myPodcasts/developer-tea-podcast'
import FrontEnd from '../components/myPodcasts/front-end-podcast'
import FullStack from '../components/myPodcasts/full-stack-podcast'
import HanselMinutes from '../components/myPodcasts/hansel-minutes-podcast'
import JavaScriptJabber from '../components/myPodcasts/javascript-jabber-podcast'
import MakeMistakes from '../components/myPodcasts/make-mistakes-podcast'
import ResponsiveWeb from '../components/myPodcasts/responsive-web-podcast'
import ShopTalk from '../components/myPodcasts/shop-talk-podcast'
import StartHere from '../components/myPodcasts/start-here-podcast'
import StyleGuide from '../components/myPodcasts/style-guide-podcast'
import NonBreakingSpace from '../components/myPodcasts/non-breaking-space-podcast'
import CalendarWidget from '../components/calendar-widget'
import './dashboard-layout.css'

class Dashboard extends Component {
  state = {
    isPodcastWidgetShowing: true,
    isBigWebShowShowing: false,
    isChangelogShowing: false,
    isCNTRLClickShowing: false,
    isCodeNewbieShowing: false,
    isCodePenShowing: false,
    isDeveloperTeaShowing: false,
    isFrontEndShowing: false,
    isFullStack: false,
    isHanselMinutesShowing: false,
    isJavascriptJabberShowing: false,
    isMakeMistakesShowing: false,
    isResponsiveWebShowing: false,
    isShopTalkShowing: false,
    isStartHereShowing: false,
    isStyleGuideShowing: false,
    isNonBreakingSpaceShowing: false,
  }

  playPodcast = id => {
    switch (id) {
      case '0':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isBigWebShowShowing: true,
          })
        }
        break
      case '1':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isChangelogShowing: true,
          })
        }
        break
      case '2':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isCNTRLClickShowing: true,
          })
        }
        break
      case '3':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isCodeNewbieShowing: true,
          })
        }
        break
      case '4':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isCodePenShowing: true,
          })
        }
        break
      case '5':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isDeveloperTeaShowing: true,
          })
        }
        break
      case '6':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isFrontEndShowing: true,
          })
        }
        break
      case '7':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isFullStackShowing: true,
          })
        }
        break
      case '8':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isHanselMinutesShowing: true,
          })
        }
        break
      case '9':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isJavaScriptJabberShowing: true,
          })
        }
        break
        case '10':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isMakeMistakesShowing: true,
          })
        }
        break
        case '11':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isResponsiveWebShowing: true,
          })
        }
        break
        case '12':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isShopTalkShowing: true,
          })
        }
        break
        case '13':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isStartHereShowing: true,
          })
        }
        break
        case '14':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isStyleGuideShowing: true,
          })
        }
        break
        case '15':
        {
          this.setState({
            isPodcastWidgetShowing: false,
            isNonBreakingSpaceShowing: true,
          })
        }
        break
    }
  }

  closePlayer = id => {
    {
      this.setState({
        isPodcastWidgetShowing: true,
        isBigWebShowShowing: false,
        isChangelogShowing: false,
        isCNTRLClickShowing: false,
        isCodeNewbieShowing: false,
        isCodePenShowing: false,
        isDeveloperTeaShowing: false,
        isFrontEndShowing: false,
        isFullStackShowing: false,
        isHanselMinutesShowing: false,
        isJavascriptJabberShowing: false,
        isMakeMistakesShowing: false,
        isResponsiveWebShowing: false,
        isShopTalkShowing: false,
        isStartHereShowing: false,
        isStyleGuideShowing: false,
        isNonBreakingSpaceShowing: false,
      })
    }
  }

  render() {
    return (
      <Layout>
        <div id="dashboard-main-card" className="card">
          <div className="columns">
            {/*Side Nav Column */}
            <div className="column is-narrow is-narrow-mobile is-hidden-mobile">
              <DashBoardMainMenu />
            </div>

            <div id="information-side" className="column is-9">
              {/*WakaTime Top Column */}
              <div className="columns">
                <div className="column">
                  <WakaTimeWidget />
                </div>
              </div>

              <div id="commits-main-card" className="columns card is-gapless">
                <div className="column">
                  <div className="has-text-white">
                    <WakaTimeCommitsWidget />
                  </div>
                </div>
              </div>

              {/*YouTube & Podcast Column */}
              <div className="columns">
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <YouTubeWidget />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      {this.state.isPodcastWidgetShowing && (
                        <PodcastWidget playPodcast={this.playPodcast} />
                      )}
                      {this.state.isBigWebShowShowing && (
                        <BigWeb closePlayer={this.closePlayer} />
                      )}
                      {this.state.isChangelogShowing && (
                        <ChangeLog closePlayer={this.closePlayer} />
                      )}
                      {this.state.isCNTRLClickShowing && (
                        <CNTRLClick closePlayer={this.closePlayer} />
                      )}
                      {this.state.isCodeNewbieShowing && (
                        <CodeNewbie closePlayer={this.closePlayer} />
                      )}
                      {this.state.isCodePenShowing && (
                        <CodePen closePlayer={this.closePlayer} />
                      )}{' '}
                      {this.state.isDeveloperTeaShowing && (
                        <DeveloperTea closePlayer={this.closePlayer} />
                      )}
                      {this.state.isFrontEndShowing && (
                        <FrontEnd closePlayer={this.closePlayer} />
                      )}
                      {this.state.isFullStackShowing && (
                        <FullStack closePlayer={this.closePlayer} />
                      )}
                      {this.state.isHanselMinutesShowing && (
                        <HanselMinutes closePlayer={this.closePlayer} />
                      )}
                      {this.state.isJavaScriptJabberShowing && (
                        <JavaScriptJabber closePlayer={this.closePlayer} />
                      )}
                      {this.state.isMakeMistakesShowing && (
                        <MakeMistakes closePlayer={this.closePlayer} />
                      )}
                      {this.state.isResponsiveWebShowing && (
                        <ResponsiveWeb closePlayer={this.closePlayer} />
                      )}
                      {this.state.isShopTalkShowing && (
                        <ShopTalk closePlayer={this.closePlayer} />
                      )}
                      {this.state.isStartHereShowing && (
                        <StartHere closePlayer={this.closePlayer} />
                      )}
                      {this.state.isStyleGuideShowing && (
                        <StyleGuide closePlayer={this.closePlayer} />
                      )}
                      {this.state.isNonBreakingSpaceShowing && (
                        <NonBreakingSpace closePlayer={this.closePlayer} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Calendar Column */}
                <div id="calendar-column" className="column">
                  <div id="calendar-card">
                    <CalendarWidget />
                  </div>
                </div>
              </div>
            </div>

            {/*Far Right Column */}
            <div id="far-right-column" className="column">
              <div className="columns">
                <div className="column">
                  <DateTime />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <WeatherDayWidget />
                </div>
              </div>
            </div>
          </div>

          {/*News Ticker Column */}
          <div className="columns">
            <div className="column">
              <NewsTicker />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Dashboard
