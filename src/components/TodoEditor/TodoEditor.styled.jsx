import styled from 'styled-components'

export const TodoEditorForm = styled.form`
     width: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
`

export const TodoEditorTextarea = styled.textarea`
      $line-height: 16px;

  height: $line-height * 3 + 24px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: $line-height;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`