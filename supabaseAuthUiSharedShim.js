function value(e, a) {
    let t;
    if (e && a && "object" == typeof e && "object" == typeof a) {
        if (Array.isArray(a))
            for (t = 0; t < a.length; t++)
                e[t] = value(e[t], a[t]);
        else
            for (t in a)
                e[t] = value(e[t], a[t]);
        return e
    }
    return a
}

window.__supabase_auth_ui_shared = {
    VIEWS: {
        SIGN_IN: "sign_in",
        SIGN_UP: "sign_up",
        FORGOTTEN_PASSWORD: "forgotten_password",
        MAGIC_LINK: "magic_link",
        UPDATE_PASSWORD: "update_password",
        VERIFY_OTP: "verify_otp"
    },
    en_default: {
        sign_up: {
            email_label: "Email address",
            password_label: "Create a Password",
            email_input_placeholder: "Your email address",
            password_input_placeholder: "Your password",
            button_label: "Sign up",
            loading_button_label: "Signing up ...",
            social_provider_text: "Sign in with {{provider}}",
            link_text: "Don't have an account? Sign up",
            confirmation_text: "Check your email for the confirmation link"
        },
        sign_in: {
            email_label: "Email address",
            password_label: "Your Password",
            email_input_placeholder: "Your email address",
            password_input_placeholder: "Your password",
            button_label: "Sign in",
            loading_button_label: "Signing in ...",
            social_provider_text: "Sign in with {{provider}}",
            link_text: "Already have an account? Sign in"
        },
        magic_link: {
            email_input_label: "Email address",
            email_input_placeholder: "Your email address",
            button_label: "Send Magic Link",
            loading_button_label: "Sending Magic Link ...",
            link_text: "Send a magic link email",
            confirmation_text: "Check your email for the magic link"
        },
        forgotten_password: {
            email_label: "Email address",
            password_label: "Your Password",
            email_input_placeholder: "Your email address",
            button_label: "Send reset password instructions",
            loading_button_label: "Sending reset instructions ...",
            link_text: "Forgot your password?",
            confirmation_text: "Check your email for the password reset link"
        },
        update_password: {
            password_label: "New password",
            password_input_placeholder: "Your new password",
            button_label: "Update password",
            loading_button_label: "Updating password ...",
            confirmation_text: "Your password has been updated"
        },
        verify_otp: {
            email_input_label: "Email address",
            email_input_placeholder: "Your email address",
            phone_input_label: "Phone number",
            phone_input_placeholder: "Your phone number",
            token_input_label: "Token",
            token_input_placeholder: "Your Otp token",
            button_label: "Verify token",
            loading_button_label: "Signing in ..."
        }
    },
    merge(e, ...a) {
        let t = a.length;
        for (let r = 0; r < t; r++)
            e = value(e, a[r]);
        return e
    },
    template(str, data) {
        return str.replace(/{{(\w+)}}/g, ((e,t)=>data.hasOwnProperty(t) ? data[t] : e))
    },
    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    }
}