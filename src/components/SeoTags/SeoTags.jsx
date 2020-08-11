import React from 'react'
import Head from 'next/head'

export const SeoTags = ({
  title = '',
  description = '',
  keywords = '',
  tw = '',
  image = '',
  uri = ''
}) =>
  <Head>
    <title>{title}</title>

    <link rel='canonical' href={uri} />

    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />

    <meta name='google' content='notranslate' />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content={tw} />
    <meta name='twitter:creator' content={tw} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />

    <meta name='og:title' content={title} />
    <meta name='og:description' content={description} />
    <meta name='og:url' content={uri} />
    <meta name='og:image' content={image} />
    <meta name='og:type' content='website' />
  </Head>
