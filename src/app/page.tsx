import clsx from "clsx";
import * as s from "./page.css";

export default function Home() {
    return (
        <main>
            <div className={clsx(s.form_wrapper)}>
                <form>
                    <h2 className={clsx(s.form_title)}>Sign up with email</h2>
                    <span>
                        <p>Email</p>
                        <input type="email" name="email" />
                    </span>
                    <span>
                        <p>Password</p>
                        <input type="password" name="password" />
                    </span>
                    <button className={clsx(s.form_button)}>submit</button>
                </form>
            </div>
        </main>
    );
}
