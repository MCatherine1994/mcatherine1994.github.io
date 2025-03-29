import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SideBar from '@/components/SideBar.vue'

describe('SideBar', () => {
  it('renders properly', () => {
    const wrapper = mount(SideBar)
    expect(wrapper.text()).toContain('Catherine')
  })
})
