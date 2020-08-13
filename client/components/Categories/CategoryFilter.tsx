import { FC } from 'react'
import { Form } from 'react-bootstrap'
import _ from 'underscore'

type PropTypes = {
  value: string;
  onChange: (value: string) => void;
}

export const CategoryFilter: FC<PropTypes> = ({ value, onChange }: PropTypes) => {

  const withHandler = _.debounce(onChange, 300);

  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Control
        type="text"
        defaultValue={value}
        onChange={e => withHandler(e.target.value)}
        placeholder="Enter category name"
      />
    </Form.Group>
  )
}