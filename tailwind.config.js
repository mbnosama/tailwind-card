module.exports = {
    mode: "jit",
    purge: ["./*html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                "back-body":
                    "url('https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                avatar: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
