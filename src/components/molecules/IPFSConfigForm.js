import React, { Component } from 'react'
import glam, { Div, Form } from 'glamorous'

import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'

const Input = glam(TextInput)({ marginRight: 40 })

class IPFSConfigDiv extends Component {
  state = { config: this.props.config }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState(({ config }) => ({
      config: { ...config, [name]: value },
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.updateIPFSConfig(this.state.config)
  }

  render() {
    const {
      config: { ipfshost, ipfsport, ipfsprotocol },
    } = this.state
    console.log({ state: this.state })

    return (
      <Form id="ipfs-config-form" onSubmit={this.handleSubmit}>
        <Div css={{ display: 'flex', marginBottom: 25 }}>
          <Input
            onChange={this.handleChange}
            value={ipfshost}
            label="Host"
            name="ipfshost"
            id="ipfshost"
            placeholder="ipfs.xyo.network"
          />
          <Input
            onChange={this.handleChange}
            value={ipfsport}
            label="Port"
            name="ipfsport"
            id="ipfsport"
            placeholder="5002"
          />
          <Input
            onChange={this.handleChange}
            value={ipfsprotocol}
            label="Protocol"
            name="ipfsprotocol"
            id="ipfsprotocol"
            placeholder="https"
          />
        </Div>
        <Button type="submit">Save</Button>
      </Form>
    )
  }
}

export default IPFSConfigDiv
