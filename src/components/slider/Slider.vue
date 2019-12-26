<script lang="ts">
import { CreateElement } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

import SliderFrame from './SliderFrame.vue';

@Component({
  render: function(createElement: CreateElement) {
    const slideFrames = this.$slots.default ? this.$slots.default : [];
    return createElement('div', {
      class: {
        slider: true
      }
    }, [
      createElement(
        'ul',
        slideFrames.map(frame => createElement('li', [ frame ]))
      ),
      createElement(
        'button',
        {
          on: {
            click: (this as any).nextSlide
          }
        },
        [ 'Next' ]
      ),
      createElement(
        'button',
        {
          on: {
            click: (this as any).previousSlide
          }
        },
        [ 'Previous' ]
      )
    ]);
  },
  methods: {
    nextSlide: function() {
      const self = this as any;
      if (self.currentSlideIndex < self.slides.length - 1) {
        self.slides[self.currentSlideIndex].deactive();
        self.slides[++self.currentSlideIndex].activate();
      }
    },
    previousSlide: function() {
      const self = this as any;
      if (self.currentSlideIndex > 0) {
        self.slides[self.currentSlideIndex].deactive();
        self.slides[--self.currentSlideIndex].activate();
      }
    }
  },
  computed: {
    slides: function(): SliderFrame[] {
      return (this.$slots.default || [])
        .map(node => node.componentInstance)
        .filter(frame => typeof frame !== 'undefined')
        .map(frame => frame as SliderFrame);
    }
  },
  mounted: function() {
    const self = this as any;
    self.slides[self.currentSlideIndex].activate();
  },
  data: function() {
    return {
      currentSlideIndex: 0,
    }
  }
})
export default class extends Vue {}
</script>

<style lang="scss">
.slider {
  background-color: red;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }
}
</style>