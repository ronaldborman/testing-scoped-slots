import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'

import PersonProvider from '@/components/PersonProvider'
import Greeter from '@/components/Greeter'

describe('PersonProvider', () => {
  it('should provide data to scoped slot', () => {
    const localVue = createLocalVue()
    localVue.component('greeter', Greeter) 

    const wrapper = mount(PersonProvider, {
      localVue: localVue,
      scopedSlots: {
        default: 
        `<div slot-scope="{fullName}">
          <greeter :fullName="fullName"></greeter>
        </div>`
      }
    })

    expect(wrapper.text()).toEqual('Hi John Doe')
  })
})