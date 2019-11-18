import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

      /*   const {item,handleChange,handleSubmit,editItem} = this.props; */

        return (
            <div className="">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book">
                                </i>
                            </div> 

                            <input 
                            type="text" 
                            className="form-control text-capitalize " 
                            placeholder="add todo" 
                            value={this.props.item}
                            onChange={this.props.handleChange}                         
                            />

                        </div>
                        <button type="submit"
                    className="btn btn-block btn-primary mt-3">
                        ADD ITEM</button>
                    </div>
                   
                    
                
                </form>
                
            </div>
        )
    }
}
