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
            <input type='button' name='ok' value='OK' />
        </form>
    )
}