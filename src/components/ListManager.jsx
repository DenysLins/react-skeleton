var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function () {
        return { items: [], newItemText: '' }
    },
    handlesubmit: function (e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({ items: currentItems, newItemText: '' });
    },
    render: function () {

        var divStyle = {
            marginTop: 10
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handlesubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-default">Add</button>
                            </div>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    },
    onChange: function (e) {
        this.setState({ newItemText: e.target.value });
    }
});

module.exports = ListManager;
