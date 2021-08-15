import Logo from "../components/Logo";
import Start from "../components/Start";
export default function Welcome({ toggler }) {
  return (
    <div className="welcome text-center">
      <Logo />
      <Start toggler={toggler} />
    </div>
  );
}
