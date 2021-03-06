/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>one</block>
  </editor>
)

export const run = editor => {
  return Editor.ancestor(editor, { path: [0, 0], offset: 1 })
}

export const output = [<block>one</block>, [0]]
