import React from 'react'
import styled from 'styled-components'

import { Box } from 'grommet'
import { Specs } from './Specs'
import { Page } from '..'

export default { title: 'Specs' }

const Body = styled.div`
  font-family: 'Nunito Sans';
  background: black;
  height: 100vh;
`

const specs = [
  {
    icon: 'Gaming',
    title: 'Games',
    src: 'https://elixir.app/assets/img/landing/games.png',
    tips: [{
      top: '8%',
      left: '30%',
      color: 'dark-1',
      title: 'Daily Featured Games',
      content: 'The best daily game chosen by the community based on score & reviews.',
      placement: 'right'
    }, {
      top: '15%',
      left: '69%',
      color: 'dark-1',
      title: 'Platform Preview',
      content: 'Instantly know what games are available for your OS without having to read additional data. Minimalistic design.',
      placement: 'bottom'
    }, {
      top: '0.5%',
      left: '70%',
      color: 'light-4',
      title: 'Profile & Store Shortcuts',
      content: 'Access from the navbar to the full store to perform a more specific search or acess your profile settings instantly.',
      placement: 'bottom'
    }, {
      top: '82%',
      left: '40%',
      color: 'dark-1',
      title: 'View All',
      content: 'View the full list of a specific row of games by licking to the button next to the title.',
      placement: 'top'
    }]
  }, {
    icon: 'Ln',
    title: 'Dashboard',
    src: 'https://elixir.app/assets/img/landing/games-admin.png',
    tips: [{
      top: '25%',
      left: '10%',
      color: 'light-1',
      title: 'Simple & Powerful',
      content: 'A rich board of settings categorised in a taxonomy to enhance a full inmersive user experience to customise their gaming experience.',
      placement: 'right'
    }, {
      top: '33%',
      left: '35%',
      color: 'light-1',
      title: 'Game Management',
      content: 'Keep your games management organised and clean at any time. Update your game easily without friction.',
      placement: 'bottom'
    }, {
      top: '41%',
      left: '55%',
      color: 'light-1',
      title: 'Add New Games',
      content: 'Add new games with just one simple click to access an interactive wizard form with validated inputs.',
      placement: 'bottom'
    }]
  }, {
    icon: 'Cart2',
    title: 'Marketplace',
    src: 'https://elixir.app/assets/img/landing/shop.png',
    tips: [{
      top: '45%',
      left: '20%',
      color: 'brand',
      title: 'Asset Preview',
      content: 'Overview the in-game assets and features within the same game page. Avoid confussion by knowing what you are buying from visually to conceptually.',
      placement: 'right'
    }, {
      top: '16%',
      left: '65%',
      color: 'brand',
      title: 'Tabs',
      content: 'Move along the game features and assets intuitively from the store tabs.',
      placement: 'bottom'
    }, {
      top: '82%',
      left: '48%',
      color: 'brand',
      title: '1-Click Purchase',
      content: 'Buying in-game assets is lightning fast using bitcoin lightning network or normal payments. It does not take longer than 1 click to have your purchased items in your account.',
      placement: 'top'
    }]
  }, {
    icon: 'BTC',
    title: 'Payments',
    src: 'https://elixir.app/assets/img/landing/payments.png',
    tips: [{
      top: '15%',
      left: '40%',
      color: 'light-1',
      title: 'Bitcoin Payments',
      content: 'Get started with bitcoin payments seamlessly. Sell/Buy your games using bitcoin.',
      placement: 'bottom'
    }, {
      top: '15%',
      left: '70%',
      color: 'light-1',
      title: 'Normal Payments',
      content: 'Pay like in any other platform using your card. Powered by Stripe.',
      placement: 'bottom'
    }, {
      top: '3%',
      left: '54.5%',
      color: 'light-1',
      title: 'Extremely Easy',
      content: 'Add a new additional payment method in seconds using our quick set up assistant',
      placement: 'left'
    }]
  }, {
    icon: 'Box',
    title: 'Distribution',
    src: 'https://elixir.app/assets/img/landing/add-game.png',
    tips: [{
      top: '18%',
      left: '50%',
      color: 'light-1',
      title: 'Easy Wizard',
      content: 'Preview your game submissiondetails with the option to roll back and update information at any time.',
      placement: 'left'
    }, {
      top: '48%',
      left: '50%',
      color: 'light-1',
      title: 'Validated Forms',
      content: 'Fill up the game submission details with the aid of interactive validators to ensurer the datais always correct.',
      placement: 'bottom'
    }, {
      top: '62%',
      left: '78%',
      color: 'light-1',
      title: 'Intuitive design',
      content: '4 Simple steps to onboard new games to Elixir following an intuitive & interactive form',
      placement: 'left'
    }]
  }
]

export const Default = () =>
  <Page>
    <Body>
      <Box width='xlarge' background='light-1' pad='medium'>
        <Specs specs={specs} />
      </Box>
    </Body>
  </Page>
