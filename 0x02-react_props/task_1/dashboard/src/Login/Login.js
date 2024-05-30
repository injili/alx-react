export default function Login() {
    return (
        <form>
            <label>
                Email:
                <input type='email' name='email' />
            </label>
            <label>
                Password:
                <input type='text' name='password' />
            </label>
            <button>OK</button>
        </form>
    )
}