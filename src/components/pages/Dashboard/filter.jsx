import React, { Component } from 'react';
import $ from 'jquery/dist/jquery.min.js';



export class Filter extends Component {

    componentDidMount() {
        $('.trigger-filters').click(function () {
            if($(this).hasClass("active")){
                $('.collapse').removeClass("show");
            }
            $(".cases_container").toggleClass("pt-5");
            $(".filters").toggleClass("active")
            $(".filters-container").toggleClass("active")
            $('.trigger-filters').toggleClass("active")
        });
    }


    render() {
        return (
            <div className="filters-container active ml-2 mr-2">
                <h1 className="trigger-filters active"><i className="fa fa-filter" aria-hidden="true"></i> Filter <i className="fa fab fa-angle-down"></i></h1>
                <div className="filters active">
                    <h2 className="collapsed" data-toggle="collapse" href="#multiCollapseAge" role="button" aria-expanded="false" aria-controls="multiCollapseAge">Age</h2>
                    <h2 className="collapsed" data-toggle="collapse" data-target="#multiCollapseLocation" aria-expanded="false" aria-controls="multiCollapseLocation">Location</h2>
                    <h2 className="collapsed" data-toggle="collapse" data-target="#multiCollapseScore" aria-expanded="false" aria-controls="multiCollapseScore">Best Rated</h2>
                    <h2 className="collapsed" data-toggle="collapse" data-target="#multiCollapseTags" aria-expanded="false" aria-controls="multiCollapseTags">Tags</h2>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseAge">
                            <div className="my-card card card-body">
                                <input type="range" min="18" max="100" defaultValue="50" className="slider" id="myRange" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseLocation">
                            <div className="my-card card card-body">
                                <input type="text" placeholder="Where to..." />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseScore">
                            <div className="my-card card card-body">
                                <input type="range" min="18" max="100" defaultValue="50" className="slider" id="myRange" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="collapse multi-collapse" id="multiCollapseTags">
                            <div className="my-card card card-body">
                                <input type="text" placeholder="Tags" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


