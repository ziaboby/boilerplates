module.exports = (type, isError, ...props) => {
    if (isError) props.unshift('Error')
    props.unshift(type)
    console.log(...props)
}