import React, { Component } from 'react'

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.onFileUpload(this.state.file)
    }

    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input  placeholder="" type="file" accept='.zip' onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default FileUpload;