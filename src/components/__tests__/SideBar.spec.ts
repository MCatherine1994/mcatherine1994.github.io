import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import PrimeVue from 'primevue/config';
import Avatar from 'primevue/avatar';
import Tooltip from 'primevue/tooltip';
import ScorpioIcon from '@/components/icons/ScorpioIcon.vue';
import SideBar from '@/components/SideBar.vue'

describe('SideBar.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(SideBar, {
      global: {
        plugins: [PrimeVue],
        components: { Avatar, ScorpioIcon },
        directives: { Tooltip }
      }
    });
  });

  it('renders properly', () => {
    const wrapper = mount(SideBar)
    expect(wrapper.text()).toContain('Hi')
  })

  it('renders the profile avatar image', () => {
    const avatar = wrapper.find('img');
    expect(avatar.exists()).toBe(true);
    expect(avatar.attributes('src')).toBe('/self.png');
  });

  it('renders name and icon', () => {
    expect(wrapper.text()).toContain("Hi, I'm Catherine Meng");
    expect(wrapper.findComponent(ScorpioIcon).exists()).toBe(true);
  });

  it('displays location details', () => {
    expect(wrapper.text()).toContain('From Tianjin, China to');
    expect(wrapper.text()).toContain('Vancouver, Canada');
  });

  it('displays professional titles', () => {
    const roles = ['Full Stack Developer', 'Software Developer', 'Data Scientist', 'Machine Learning Engineer'];
    for (const role of roles) {
      expect(wrapper.text()).toContain(role);
    }
  });

  it('renders inspirational quotes', () => {
    expect(wrapper.text()).toContain('Desire without fear. Action without hesitation.');
  });

  it('renders all sidebar links', () => {
    const links = wrapper.findAll('a');
    expect(links).toHaveLength(2);
    expect(links[0].attributes('href')).toContain('github.com');
    expect(links[1].attributes('href')).toContain('linkedin.com');
  });
});