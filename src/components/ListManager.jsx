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

        var headingStyle = {}

        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }

        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-default">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handlesubmit}>
                            <div className="col-sm-8">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-default">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    },
    onChange: function (e) {
        this.setState({ newItemText: e.target.value });
    }
});

module.exports = ListManager;
