const Auth = ({ supabase }) => {
  const signInWithGithub = async () => {
    let { user, error } = await supabase.auth.signIn({
      provider: "github",
    });
  };

  return <button onClick={signInWithGithub}>login with GitHub</button>;
};

export default Auth;
