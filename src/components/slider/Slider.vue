<script lang="ts">
import { CreateElement } from 'vue';
import { Component, Vue } from 'vue-property-decorator';

import SliderBullet from './SliderBullet.vue';
import SliderFrame from './SliderFrame.vue';

@Component({
  render: function(createElement: CreateElement) {
    const slideFrames: any[] = this.$slots.default ? this.$slots.default : [];
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
        'div',
        {
          class: {
            'slider-bullets': true
          }
        },
        [
          slideFrames.map(
            (_, index) => createElement(
              SliderBullet,
              {
                nativeOn: {
                  click: (<any>this).goToSlide(index)
                },
                class: {
                  'bullet': true
                },
                props: {
                  isActive: (<any>this).currentSlideIndex === index
                }
              }
            )
          )
        ]
      ),
    ]);
  },
  methods: {
    goToSlide(slideIndex: number): () => void {
      return () => {
        const self = this as any;
        self.slides[self.currentSlideIndex].deactive();
        self.slides[slideIndex].activate();
        self.currentSlideIndex = slideIndex;
      };
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
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }

  .slider-bullets {
    text-align: center;
  }

  .bullet {
    margin-right: 10px;
  }
}
</style>