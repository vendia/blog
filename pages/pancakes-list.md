---
draft: true
template: page
path: /pancakes-list
components:
  - type: Hero
    contentAlignment: Center
    title: Hero Pancake
    text: Content is aligned to the center by default
    callToActions:
      - label: Get started
        url: "#"
      - label: Contact sales
        url: "#"
  - type: Hero
    title: Hero pancake
    text: Content aligned to the left with an image
    callToActions:
      - label: Get started
        url: "#"
      - label: Contact sales
        url: "#"
    contentAlignment: Left
    image:
      image: https://www.vendia.com/images/illustrations/Vendia_HPIcon.svg
  - type: Logos
    logos:
      - BMW
      - Unfi
      - Resolution Life
      - Atos
      - Purina
      - Aerotrax Technologies
    intro:
      title: Logos pancake
      text: This text is optional
  - type: Columns
    intro:
      title: Columns pancake
      text: Three columns
    columns:
      - text: >-
          ![](https://www.vendia.com/images/illustrations/resource-3.svg)


          ## Feature 1

          ---


          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue in diam ut convallis. Maecenas eu diam eget tortor iaculis maximus in at odio.


          <Button label="Call to action" href="https://www.vendia.com" kind="vendorGhost" />
      - text: >-
          ![](https://www.vendia.com/images/illustrations/resource-1.svg)


          ## Feature 2


          Vestibulum laoreet ligula ut diam tincidunt, at placerat purus maximus. Mauris ex felis, auctor sit amet nisi eu, ornare sollicitudin tellus. Pellentesque molestie auctor volutpat.
      - text: >-
          ![](https://www.vendia.com/images/illustrations/resource-2.svg)


          ## Feature 3


          Mauris libero mi, viverra eu ante sit amet, gravida dictum tortor. Suspendisse dictum non lorem sit amet vestibulum.
  - type: Columns
    intro:
      title: Columns pancake
      text: Two columns
    columns:
      - text: >-
          ## Feature 1


          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue in diam ut convallis. Maecenas eu diam eget tortor iaculis maximus in at odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue in diam ut convallis. Maecenas eu diam eget tortor iaculis maximus in at odio.
      - text: >-
          ## Feature 2


          Vestibulum laoreet ligula ut diam tincidunt, at placerat purus maximus. Mauris ex felis, auctor sit amet nisi eu, ornare sollicitudin tellus. Pellentesque molestie auctor volutpat.Vestibulum laoreet ligula ut diam tincidunt, at placerat purus maximus. Mauris ex felis, auctor sit amet nisi eu, ornare sollicitudin tellus. Pellentesque molestie auctor volutpat.
  - type: MediaWithText
    text: >-
      ## Media with text


      **Using image and position left**


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non malesuada tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    mediaPosition: left
    image:
      image: https://www.vendia.com/images/illustrations/home-one.svg
  - type: MediaWithText
    text: >-
      ## Media with text


      **Using image and position right**


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non malesuada tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    mediaPosition: right
    image:
      image: https://www.vendia.com/images/illustrations/home-two.svg
  - type: MediaWithText
    text: >-
      ## Media with text


      **Using video and position left**


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non malesuada tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    mediaPosition: left
    videoURL: https://player.vimeo.com/video/708017988
  - type: MediaWithText
    text: >-
      ## **Media with text**


      **Using video and position right**


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non malesuada tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    mediaPosition: right
    videoURL: https://player.vimeo.com/video/708017694
  - type: HubspotForm
    text: >-
      ## A single source of truth


      Connect dispersed data in real-time.


      Gain a single source of truth across applications, datastores, and even partner systems of record.


      Whether sharing data across applications, clouds, geographies, or companies, Vendia is designed to make it easy to share real-time data across those boundaries.
    formID: "123"
    formId: 251d8bda-8635-45c9-808d-a0aebde799e6
  - type: MediaFullScreen
    intro:
      title: Media full screen
      text: with image
    image:
      image: https://staging-preview-244--vendia-site.netlify.app/images/full-screen-image.png
      caption: Optional caption here
  - type: MediaFullScreen
    intro:
      title: Media full screen
      text: with video
    image:
      caption: ""
    videoURL: https://player.vimeo.com/video/708017694
    text: >-
      ## **Media with text**


      **Using video and position left**


      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non malesuada tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
  - type: Contact
    text: >-
      ## Contact pancake


       Nulla nisl risus, pellentesque quis elit vel, feugiat efficitur sem. Duis nec elit ligula.
    person: Ben Steward
  - type: Quote
    text: "**Fusce porttitor**, lacus vel aliquam cursus, lorem ex mattis tellus,
      sed commodo elit felis quis tortor."
    author: Caroll Casbeer
  - type: Pricing
    version: short
    intro:
      title: Pricing pancake
      text: Short version
  - type: Pricing
    version: long
    intro:
      title: Pricing pancake
      text: Long version
  - type: Text
    text: >-
      ## Text pancake


      Maecenas egestas enim eget varius tempor. **Proin at hendrerit est**. Quisque magna enim, lobortis vel auctor ut, luctus ac est. Sed scelerisque tristique lorem, [sed vehicula arcu rhoncus](https://www.vendia.com) eu. Cras sodales, ante sit amet vehicula tempus, enim purus imperdiet enim.


      In venenatis justo ipsum interdum turpis. Pellentesque vitae nulla quis arcu euismod ultrices. Quisque sed lorem sed est fermentum interdum.

      <Button label="Call to action" href="https://www.vendia.com" kind="primary" />
  - type: Resources
    intro:
      title: ""
      text: ""
    resourcesType: White papers
    resources:
      - text: How to build toil-less applications quickly for real customer value with
          Vendia Share
        title: The Lean app movement
        button:
          label: Download
          url: "#"
      - text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
          maximus sapien id posuere.
        title: 2nd card
        button:
          label: Learn more
          url: "#"
      - text: ""
        title: "3rd card Lorem "
        button:
          label: Download
          url: "#"
seo:
  title: Title
  description: Description
updatedBy: Hugues Tennier
updatedAt: 2022-11-28T15:58:16.392Z
---

Body is required to show pancakes