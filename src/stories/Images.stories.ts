import type { StoryObj, Meta } from '@storybook/html'
import './image-grid.css'
import './reset.css'
import { initZoomableImages } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Zoomable Image',
  render: () => {
    return `
  <section class="wrapper">
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/moon.webp"
      alt=""
    />
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/drop-low.webp"
      data-zoomable-hd="src/stories/assets/drop-hd.jpg"
      alt=""
    />
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/bug.webp"
      alt=""
    />
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/sunset.webp"
      alt=""
    />
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/road-cropped.webp"
      alt=""
    />
    <img
      data-zoomable-image
      class="image"
      src="src/stories/assets/nature.webp"
      alt=""
    />
  </section>
`
  },
  argTypes: {},
} satisfies Meta

export default meta
type Story = StoryObj

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  play: async () => {
    initZoomableImages({ scrollOffset: 150 })
  },
}
