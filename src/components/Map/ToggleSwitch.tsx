import Form from "react-bootstrap/Form";

type ToggleSwitchProp = {
  handleSwitchChange: () => void;
  label: string;
};

const Switch: React.FC<ToggleSwitchProp> = ({ handleSwitchChange, label }) => {
  return (
    <Form>
      <Form.Check className="text-gandalf_gray" type="switch" id="custom-switch" label={label} onChange={handleSwitchChange} />
    </Form>
  );
};

export default Switch;
