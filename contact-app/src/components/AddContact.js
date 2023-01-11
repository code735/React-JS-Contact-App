import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name == "" || this.state.email == "") {
            alert("All the fields are mandatory");
            return
        }

        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    }
    render() {
        return (
            <div className="pt-5">
                <h2>Add Contact</h2>
                <form className="form" onSubmit={this.add}>
                    <div className="field d-flex flex-column my-2">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field d-flex flex-column my-2">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className="btn btn-primary px-4">Add</button>
                </form>
            </div>
        );
    }
}


export default AddContact;