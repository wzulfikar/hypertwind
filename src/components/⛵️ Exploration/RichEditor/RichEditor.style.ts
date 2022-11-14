type Args = {
  minHeight: string
}

export default ({ minHeight }: Args) => ({
  ".ProseMirror": {
    minHeight: minHeight,
    outline: "none",
    "> * + *": {
      marginTop: "0.75em",
    },
    "ul, ol": {
      padding: "0 1rem",
    },
    "h1, h2, h3, h4, h5, h6": {
      lineHeight: 1.1,
    },
    code: {
      backgroundColor: "rgba(#616161, 0.1)",
      color: "#616161",
    },
    pre: {
      background: "#0d0d0d",
      color: "#fff",
      fontFamily: "JetBrainsMono, monospace",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem",
      "& > code": {
        color: "inherit",
        padding: "0",
        background: "none",
        fontSize: "0.8rem",
      },
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
    blockquote: {
      paddingLeft: "1rem",
      borderLeft: "2px solid rgba(#0d0d0d, 0.1)",
    },
    hr: {
      border: "none",
      borderTop: "2px solid rgba(#0d0d0d, 0.1)",
      margin: "2rem 0",
    },
  },
})
