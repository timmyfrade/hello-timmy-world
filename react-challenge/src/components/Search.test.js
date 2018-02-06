import React from 'react'
import { shallow } from 'enzyme'
import expect, { createSpy } from 'expect'

import Search from './Search'

/* Testing structure */
it('should render an input with value and onChange handler', () => {
  const searchValue = 'css'
  const spy = createSpy()
  const wrapper = shallow(<Search searchValue={searchValue} onChange={spy} />)

  expect(wrapper.type()).toBe('input')

  const input = wrapper.props()

  expect(input.className).toBe('Search')
  expect(input.value).toBe(searchValue)
  expect(input.onChange).toBe(spy)
})

/* Testing behaviour */
it('should call onChange when the input was changed', () => {
  const searchValue = 'css'
  const spy = createSpy()
  const wrapper = shallow(<Search searchValue={searchValue} onChange={spy} />)

  const event = {event: { target: 'react' }}
  wrapper.simulate('change', event)

  expect(spy).toHaveBeenCalledWith(event)
})
