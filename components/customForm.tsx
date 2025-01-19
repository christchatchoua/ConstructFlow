/**
 * CustomFormProps interface defines the props for the CustomForm component.
 * 
 * @property {Array<{ name: string; placeholder: string }>} inputs - An array of input field configurations, each containing a name and a placeholder.
 * @property {string} buttonName - The text to display on the submit button.
 * @property {(event: React.FormEvent<HTMLFormElement>) => void} onSubmit - The function to call when the form is submitted.
 */
interface CustomFormProps {
    inputs: { name: string; placeholder: string }[];
    buttonName: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * CustomForm is a functional React component that renders a customizable form.
 * 
 * @param {CustomFormProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered form component.
 * 
 * The form includes:
 * - A dynamic number of text input fields based on the `inputs` prop.
 * - A submit button with text defined by the `buttonName` prop.
 * - Inline styles for form layout and responsiveness.
 */
const CustomForm: React.FC<CustomFormProps> = ({ inputs, buttonName, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} style={styles.form}>
            {inputs.map((input, index) => (
                <input
                    key={index}
                    type="text"
                    name={input.name}
                    placeholder={input.placeholder}
                    style={styles.input}
                    required
                />
            ))}
            <button type="submit" style={styles.button}>
                {buttonName}
            </button>
        </form>
    );
};

/**
 * styles is an object containing inline styles for the form and its elements.
 * 
 * @property {React.CSSProperties} form - Styles for the form container.
 * @property {React.CSSProperties} input - Styles for the input fields.
 * @property {React.CSSProperties} button - Styles for the submit button.
 */
const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        margin: '0 auto',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default CustomForm;