import Stack from "react-bootstrap/Stack";

// login md a la derecha
function Login() {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-center p-2"
      gap={3}
    >
      <div className="text-white">LOGIN</div>
      <div className="vr text-white border" />
      <div className="vr text-white border" />
      <div className="text-white">SIGN IN</div>
    </Stack>
  );
}

export default Login;
