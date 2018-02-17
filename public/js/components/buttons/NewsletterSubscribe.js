import React, {Component} from 'react';
import axios from 'axios';
import { setTimeout } from 'timers';
import {CentralModal} from '../additional/CentralModal';

class NewsletterSubscribe extends Component{

    constructor(){
        super();
        this.state = {
            subscribed: false,
            subscribing: false,
            error: false,
            message: ""
        }
        this.subscribe = this.subscribe.bind(this);
    }

    subscribe(){
        if(!this.state.subscribed){
            this.setState({subscribing: true});
            axios.post('/subscribe', {
                email: this.props.email
            }).then((response) => {
                if(response.data.error){
                    this.setState({
                        error: response.data.error, 
                        subscribing: false
                    });
                }
                if(response.data.message){
                    this.setState({
                        error: false,
                        subscribed: true, 
                        subscribing: false,
                        message: response.data.message
                    });
                }
            }).catch((error) => {
                this.setState({error: "Unknown error"})
            });
        }
    }

    render(){

        if(this.state.subscribing){
            return(<div>
                    <button type="button" className="nsubscribe">Subscribing...</button>
                </div>
            );
        }

        if(this.state.error){
            return(<div>
                <button onClick={this.subscribe} type="button" className="nsubscribe">Subscribe</button>
                <CentralModal cl="error central-modal animated fadeInUp" text={this.state.error} />
            </div>
            );
        }

        if(this.state.subscribed){
            return (<div>
                    <button type="button" className="nsubscribe">Subscribed</button>
                    <CentralModal cl="success central-modal animated fadeInUp" text={this.state.message} />
                </div>
            );
        }

        return(<div>
                <button onClick={this.subscribe} type="button" className="nsubscribe">Subscribe</button>
            </div>
        );
    }

}

export {NewsletterSubscribe}