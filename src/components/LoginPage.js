import {useState } from 'react';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry, setAllEntry] = useState([]);

    const handleSubmit =  (e) => {
        e.preventDefault();

        const newEntry = {email: email, password: password};

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)

    }

    return (
        <>
            <div className="Log-page">
     {/* <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section> */}
           
           <section className='Login_page'>
                    <h1 className='Sign_Heading'>Sign <span className='' style={{marginLeft:"-40px"}}>In</span></h1>
                    <form action="" onSubmit={handleSubmit} className="LogForm">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                           className='Log_Common'
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="password" >Password:</label>
                        <input
                            type="password"
                            id="password"
                            className='mb-5 Log_Common'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <button className='Log_Common'>Sign In</button>
                    </form>
                    <p className='text-dark'>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/UserRegistration" className='SU'>Sign Up</a>
                        </span>
                    </p>
                    <div className="back" style={{textAlign:'right'}}>
                        <a href='/'> <h6>Back to Home page</h6></a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default LoginPage