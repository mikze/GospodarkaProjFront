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
            <form method="POST" enctype="multipart/form-data" onSubmit={this.onFormSubmit}>
               
                <input placeholder="" type="file" name="file" accept='.zip' onChange={this.onChange}/>
                <input type="submit" />
            </form>
        )
    }
}

export default FileUpload;