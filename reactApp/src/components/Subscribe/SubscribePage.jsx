import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as subscribeActions from '../../actions/subscribeActions';
import SubscribeForm from './SubscribeForm';
import ThankYou from './ThankYou';

class SubscribePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userForm: {
                "firstName": '',
                "lastName":  '' ,
                "email":  '' ,
                "mobilePhone":  '' 
            },
        };
        this.handleUserFormSubmitClick = this.handleUserFormSubmitClick.bind(this);
    }
    componentDidMount() {
    }
    handleUserFormSubmitClick(payload, setErrors, setSubmitting) {

        const userForm = Object.assign({}, this.state.userForm, {
            "email": payload.email,
            "firstName": payload.firstName,
            "lastName": payload.lastName,
            "mobilePhone": payload.mobilePhone
        });
        this.setState({ userForm: userForm },
            () => this.props.actions.SubmitSubscribeForm(payload).then(() => {
                setSubmitting(false);
                if (this.props.status === 'success') {
                    this.setState({submitted: true});
                } else {
                    setErrors(this.props.errors);
                }
            }, (error) => { setSubmitting(false);}));
    }

    render() {
        return (
            <div className="container">                
                {!this.state.submitted?<SubscribeForm errors={this.props.errors} userForm={this.state.userForm} submitted={this.state.submitted} handleUserFormSubmitClick={this.handleUserFormSubmitClick} />:<ThankYou />}
            </div>
        );
    }
}

SubscribePage.propTypes = {
    userForm: PropTypes.objectOf(PropTypes.any),
    actions: PropTypes.objectOf(PropTypes.any).isRequired
};

//Pull in the React Router context so router is available on this.context.router.
SubscribePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.subscribe.data,
        errors: state.subscribe.errors,
        status: state.subscribe.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(subscribeActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubscribePage));
