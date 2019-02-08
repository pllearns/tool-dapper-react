import React, { Component } from 'react'
import { Div, Form, H2 } from 'glamorous'
import { withRouter } from 'react-router-dom'
import glam from 'glamorous'

import Button from '../atoms/Button'
import TextInput from '../atoms/TextInput'

const Row = glam.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0',
  borderBottom: 'solid 1px #fff',
  '&:first-child': {
    color: '#ac6efd',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 0,
  },
  '&:last-child': {
    paddingBottom: 0,
    border: 'none',
  },
  // the "Value" column
  '& > *:last-child': {
    fontWeight: 'bold',
  },
})

class ContractSimulator extends Component {
  state = {}

  render() {
    return (
      <Div css={{ paddingBottom: 50 }}>
        <Form
          onSubmit={e => {
            e.preventDefault()
            console.log('submit!', e.target)
          }}
        >
          <H2>Deploy DataVault</H2>
          <TextInput label="Name" id="name" placeholder="string" />
          <TextInput label="Parameters" id="params" placeholder="string" />
          <Button css={{ marginTop: 40 }} type="submit">
            Deploy Contract
          </Button>
        </Form>
        <Div
          css={{
            marginTop: 50,
            borderRadius: 2,
            boxShadow: '0 4px 4px 0 rgba(99,99,99,0.19)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: 20,
            fontSize: 14,
          }}
        >
          <Row>
            <Div>Transaction info</Div>
            <Div>Values</Div>
          </Row>
          <Row>
            <Div>Contract Address Tx#</Div>
            <Div>
              0xd57af62feb9133980769d2b89a3541a5da2fd0ea3eff7560d8aef983285daf9b
            </Div>
          </Row>
          <Row>
            <Div>Block #</Div>
            <Div>5</Div>
          </Row>
          <Row>
            <Div>Gas Used</Div>
            <Div>183338</Div>
          </Row>
          <Row>
            <Div>Gas Price</Div>
            <Div>44</Div>
          </Row>
        </Div>
      </Div>
    )
  }
}

export default withRouter(ContractSimulator)
