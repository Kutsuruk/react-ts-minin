interface ErrorMessageProps {
    error: string
}

const ErrorMessage = (props: ErrorMessageProps) => {
    return(
        <div>
            <p className='text-center text-red-600'>{props.error}</p>
        </div>
    )
}

export default ErrorMessage