import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false,
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleChangeEmail(event){
        this.setState({email: event.target.value}, this.toggleSubmitButton);
    }

    handleChangePassword(event){
        this.setState({password: event.target.value}, this.toggleSubmitButton)
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.setState({ isLoggedIn: true});
    }

    toggleSubmitButton(){
        const { email, password } = this.state;
        this.setState({ enableSubmit: email !== '' && password !== ''});
    }

render() {
    return (
        <div className={css(styles.AppBody)}>
            <p>
                Login to access the full dashboard
            </p>
            <form className={css(styles.AppBodyForm)}>
                <div>
                    <label htmlFor="email" className={css(styles.AppBodyLabel)} onSubmit={this.handleLoginSubmit}>
                        Email
                    </label>
                    <input type="email" name="email" className={css(styles.AppBodyInput)} value={this.state.email} onChange={this.handleChangeEmail}/>
                </div>
                <div>
                    <label htmlFor="password" className={css(styles.AppBodyLabel)}>
                        Password
                    </label>
                    <input type="password" name="password" className={css(styles.AppBodyInput)} value={this.state.password} onChange={this.handleChangePassword}/>
                </div>
                {/* <button type="submit" className={css(styles.AppBodyButton)}>OK</button> */}
                <input type="submit" value="Login" disabled={!this.state.enableSubmit} />
            </form>
        </div>
    )
}
}

const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px'
    },
    AppBodyInput: {
        padding: '0 16px 0 8px',
        border: '1px solid #D3D3D3',
        borderRadius: '3px'
    },
    AppBodyLabel: {
        marginRight: '5px'
    },
    AppBodyForm: {
        display: 'flex',
        gap: '1rem'
    },
    AppBodyButton: {
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        background: 'transparent',
        width: 50
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
        }
    }
});

export default Login;
