/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.insertFragment(editor, <fragment>fragment</fragment>)
}

export const input = (
  <editor>
    <block>
      <cursor />
      <inline>word</inline>
      <text />
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      fragment
      <cursor />
      <inline>word</inline>
      <text />
    </block>
  </editor>
)
