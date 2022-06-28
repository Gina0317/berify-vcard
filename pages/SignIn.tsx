import { useState } from "react";
import { getProviders, getSession, signIn } from "next-auth/react"

const SignIn = ({ providers }: { providers: any }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (<>
    <>
      <div className="mx-auto" style={{ height: '100vh', width: '100vw', maxWidth: '600px', overflow: 'auto' }}>
        <div className="d-flex flex-column jc-center h-100 mx-auto" style={{ maxWidth: '250px' }}>
          <div className="d-flex mb-2">
            <button className="btn-white" type="button">Login</button>
            <button className="btn-white" type="button">SignUp</button>
          </div>
          <div>
            <input className="input-gray d-flex w-100 h5" type="text" style={{ marginBottom: '20px' }} />
            <input className="input-gray d-flex w-100 h5" type="text" style={{ marginBottom: '20px' }} />
            <button className="h5 btn-white" type="button">Login</button>
          </div>
        </div>
      </div>
    </>
  </>);
}

SignIn.getInitialProps = async (context: any) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/dashboard/myCards",
    });
    res.end()
    return;
  }
  return {
    session: undefined,
    providers: await getProviders()
  }
}

export default SignIn