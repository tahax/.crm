import React, {Component} from 'react';
import "../../styles/panel-styles/widgets-body.css"
import Widget from "./WidgetComponent";
import "../../styles/bootstrap-grid.min.css";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value}) => <li className='tak-li-widget col-12 col-md-6 col-lg-4'>{value}</li>);
const SortableList = SortableContainer(({items}) => {
    return (
        <ul className='tak-inner-widgets-body'>
            {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </ul>
    );
});

class Widgets extends Component {

    state = {
        items: [<Widget/>, <Widget/>, <Widget/>, <Widget/>, <Widget/>, <Widget/>, <Widget/>, <Widget/>, <Widget/>],
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    render() {
        // const widgetsul =()=>{
        //     return <SortableList axis={"xy"} items={this.state.items} onSortEnd={this.onSortEnd} />
        // }
        return (
            <div className='tak-widgets-body'>
                <div className="container">
                    <div className="row">

                        <SortableList axis={"xy"} items={this.state.items} onSortEnd={this.onSortEnd} />

                    </div>
                </div>
            </div>
        );
    }
}

export default Widgets;