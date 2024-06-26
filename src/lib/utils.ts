// all the basic functions for the app

export const isValidEmail = (email: string | undefined | null): boolean => {
    const regex = new RegExp(
        /^(([*<>()\[\]\\.,;:\s@"]+(\.[*<>()\[\]\\.,;:\s@"]+)*)|(".+"))@ ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]) | (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return email ? regex.test(email) : false;
};